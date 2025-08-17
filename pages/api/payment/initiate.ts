import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// ZenoPay Configuration - Keep sensitive data on backend
const ZENOPAY_CONFIG = {
  API_KEY: process.env.ZENOPAY_API_KEY || 'ArtYqYpjmi8UjbWqxhCe7SLqpSCbws-_7vjudTuGR91PT6pmWX85lapiuq7xpXsJ2BkPZ9gkxDEDotPgtjdV6g',
  BASE_URL: 'https://zenoapi.com',
  ENDPOINT: '/api/payments/mobile_money_tanzania'
};

interface PaymentRequest {
  amount: number;
  currency: string;
  buyerEmail: string;
  buyerName: string;
  buyerPhone: string;
  orderId: string;
}

interface PaymentResponse {
  success: boolean;
  paymentId?: string;
  paymentUrl?: string;
  message: string;
  error?: string;
  data?: any;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

           try {
           const { amount, currency, buyerEmail, buyerName, buyerPhone, orderId }: PaymentRequest = req.body;

    // Validate required fields
    if (!amount || !buyerEmail || !buyerName || !buyerPhone || !orderId) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        error: 'All fields are required'
      });
    }

               // Validate amount
           if (amount <= 0 || amount > 1000000) { // Max 1M TZS
             return res.status(400).json({
               success: false,
               message: 'Invalid amount',
               error: 'Amount must be between 1 and 1,000,000 TZS'
             });
           }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(buyerEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format',
        error: 'Please provide a valid email address'
      });
    }

    // Validate phone format (Tanzania format)
    const phoneRegex = /^07\d{8}$/;
    if (!phoneRegex.test(buyerPhone)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid phone format',
        error: 'Please provide a valid Tanzania phone number (07XXXXXXXX)'
      });
    }

    // Prepare payload for ZenoPay
    const payload = {
      order_id: orderId,
      buyer_email: buyerEmail,
      buyer_name: buyerName,
      buyer_phone: buyerPhone,
      amount: amount
    };

    console.log('Initiating payment with payload:', payload);

    // Make request to ZenoPay
    const response = await axios.post(
      `${ZENOPAY_CONFIG.BASE_URL}${ZENOPAY_CONFIG.ENDPOINT}`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ZENOPAY_CONFIG.API_KEY,
        },
        timeout: 30000, // 30 second timeout
      }
    );

    console.log('ZenoPay response:', response.data);

    // Process ZenoPay response
    if (response.data.success || response.data.status === 'success') {
      const paymentResponse: PaymentResponse = {
        success: true,
        paymentId: response.data.order_id || response.data.payment_id,
        paymentUrl: response.data.payment_url || response.data.redirect_url,
        message: 'Payment initiated successfully',
        data: response.data
      };

      // Check if this is a test phone number for simulation
      const isTestPhone = buyerPhone === '0754546567';
      
      if (isTestPhone) {
        console.log('🧪 Test phone detected - simulating successful payment');
        
        // Simulate successful payment after 3 seconds
        setTimeout(async () => {
          try {
            // Update payment status to completed
            const updateResponse = await fetch(`${req.headers.host ? `http://${req.headers.host}` : 'http://localhost:3000'}/api/payment/history`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 
                orderId, 
                status: 'completed',
                zenoPayResponse: {
                  ...response.data,
                  simulated: true,
                  simulatedAt: new Date().toISOString()
                }
              }),
            });
            
            if (updateResponse.ok) {
              console.log('✅ Test payment simulation completed successfully');
            }
          } catch (error) {
            console.error('❌ Error simulating test payment:', error);
          }
        }, 3000);
      }

      // Log successful payment initiation
      console.log('Payment initiated successfully:', {
        orderId,
        amount,
        currency,
        buyerEmail,
        isTestPhone,
        timestamp: new Date().toISOString()
      });

      return res.status(200).json(paymentResponse);
    } else {
      return res.status(400).json({
        success: false,
        message: response.data.message || 'Payment initiation failed',
        error: response.data.error || 'Unknown error from ZenoPay',
        data: response.data
      });
    }

  } catch (error: any) {
    console.error('Payment initiation error:', error);

    // Handle different types of errors
    if (error.response) {
      // ZenoPay API error
      console.error('ZenoPay API error:', error.response.data);
      return res.status(error.response.status).json({
        success: false,
        message: 'Payment service error',
        error: error.response.data?.message || 'Payment service unavailable',
        data: error.response.data
      });
    } else if (error.request) {
      // Network error
      console.error('Network error:', error.request);
      return res.status(503).json({
        success: false,
        message: 'Payment service unavailable',
        error: 'Unable to connect to payment service'
      });
    } else {
      // Other error
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: 'An unexpected error occurred'
      });
    }
  }
} 