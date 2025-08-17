import { NextApiRequest, NextApiResponse } from 'next';
import { paymentService } from '../../../lib/database';

interface PaymentHistoryResponse {
  success: boolean;
  payments?: any[];
  message: string;
  error?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      // Get payment history from Supabase
      const payments = await paymentService.getAll();
      
      const historyResponse: PaymentHistoryResponse = {
        success: true,
        payments: payments,
        message: 'Payment history retrieved successfully'
      };

      return res.status(200).json(historyResponse);

    } else if (req.method === 'POST') {
      // Add new payment record to Supabase
      const { orderId, amount, currency, buyerEmail, buyerName, buyerPhone, zenoPayResponse } = req.body;

      if (!orderId || !amount || !currency || !buyerEmail || !buyerName || !buyerPhone) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields',
          error: 'All fields are required'
        });
      }

      const newPayment = await paymentService.create({
        orderId,
        amount,
        currency,
        buyerEmail,
        buyerName,
        buyerPhone,
        zenoPayResponse
      });

      console.log('Payment record created in Supabase:', newPayment);

      return res.status(201).json({
        success: true,
        message: 'Payment record created successfully',
        data: newPayment
      });

    } else if (req.method === 'PUT') {
      // Update payment status in Supabase
      const { orderId, status, zenoPayResponse } = req.body;

      if (!orderId || !status) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields',
          error: 'Order ID and status are required'
        });
      }

      const updatedPayment = await paymentService.updateStatus(orderId, status, zenoPayResponse);

      console.log('Payment status updated in Supabase:', updatedPayment);

      return res.status(200).json({
        success: true,
        message: 'Payment status updated successfully',
        data: updatedPayment
      });

    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }

  } catch (error: any) {
    console.error('Payment history error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: 'An unexpected error occurred while processing payment history'
    });
  }
} 