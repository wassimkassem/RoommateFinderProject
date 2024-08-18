const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = []; // In-memory array to store user data

router.post('/register', async (req, res) => {
    const { name, email, password, budget, goals, demographics } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { name, email, password: hashedPassword, budget, goals, demographics };
        users.push(user);

        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET || 'secretkey');
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = users.find(u => u.email === email);
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET || 'secretkey');
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
