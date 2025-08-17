import { NextApiRequest, NextApiResponse } from 'next';
import { paymentService } from '../../../lib/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { payment_id, reference, amount, status, signature } = req.body;

    // Verify the callback signature (implement proper verification)
    // This is a simplified version - in production, you should verify the signature
    
    console.log('Payment callback received:', {
      payment_id,
      reference,
      amount,
      status,
      timestamp: new Date().toISOString()
    });

    // Update payment record in Supabase with callback data
    if (payment_id && status === 'success') {
      try {
        // Find payment by order_id (reference)
        const payment = await paymentService.getByOrderId(reference);
        
        if (payment) {
          // Update payment status and callback data
          await paymentService.updateWithCallback(reference, {
            payment_id,
            reference,
            amount,
            status,
            signature,
            callback_received_at: new Date().toISOString()
          });

          console.log('Payment callback processed successfully:', reference);
          
          return res.status(200).json({ 
            success: true, 
            message: 'Payment callback processed successfully' 
          });
        } else {
          console.error('Payment not found for order:', reference);
          return res.status(404).json({ 
            success: false, 
            message: 'Payment not found' 
          });
        }
      } catch (dbError) {
        console.error('Database error processing callback:', dbError);
        return res.status(500).json({ 
          success: false, 
          message: 'Database error processing callback' 
        });
      }
    } else {
      console.log('Payment not successful or missing payment_id');
      return res.status(200).json({ 
        success: true, 
        message: 'Callback received but payment not successful' 
      });
    }
  } catch (error) {
    console.error('Payment callback error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
} 