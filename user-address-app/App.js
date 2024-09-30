const express = require('express');
const bodyParser = require('body-parser');
const { User, Address } = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to register user and address
app.post('/register', async (req, res) => {
  try {
    const { name, address } = req.body;

    // Create a user
    const user = await User.create({ name });

    // Create address associated with user
    await Address.create({ address, userId: user.id });

    res.status(201).json({ message: 'User and Address stored successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
