const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());

// Integrating the routes
const authRoutes = require('./routes/auth');
const matchRoutes = require('./routes/match');

app.use('/api/auth', authRoutes);
app.use('/api', matchRoutes);

app.get('/', (req, res) => {
    res.send('Roommate Finder API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
