import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { allFunds, queryCharity } from './database.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.get("/api/charity", async (req, res) => {
  try {
    const funds = await allFunds();
    console.log('All funds:', funds);
    res.json(funds);  // Send the funds as a response
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/charity/:fund_id', async (req, res) => {
  try {
    const fundid = req.params.fund_id;
    console.log('Received fund ID:', fundid);

    const charity = await queryCharity(fundid);
    console.log('Charity data:', charity);

    if (!charity) {
      console.error('Charity not found');
      return res.status(404).json({ error: 'Charity not found' });
    }
    res.json(charity);

  } catch (error) {
    console.error('Error fetching charity:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server and log success or errors
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err);
});
