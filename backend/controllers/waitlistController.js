import Waitlist from '../schemas/waitlist.js';

export const joinWaitlist = async (req, res) => {
  console.log('Received request to join waitlist:', req.body);
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const existingUser = await Waitlist.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const waitlistEntry = new Waitlist({ email });
    await waitlistEntry.save();

    res.status(201).json({ message: 'Successfully joined the waitlist!' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};