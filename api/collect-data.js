
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Extract user data from request body
    const userData = req.body;
    
    // Log data for debugging (remove in production)
    console.log('User data collected:', userData);
    
    // In production, you'd store this in a database
    // For now, just return success
    return res.status(200).json({ 
      success: true, 
      message: 'User data collected successfully' 
    });
  } else {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }
}
