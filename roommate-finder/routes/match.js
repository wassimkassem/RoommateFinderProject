const express = require('express');
const router = express.Router();

const users = []; // This is shared with the auth routes for simplicity

router.get('/matches', (req, res) => {
    const { budget, goals, demographics } = req.query;

    const matches = users.filter(user => {
        return (
            user.budget <= budget &&
            user.goals === goals &&
            user.demographics.gender === demographics.gender
        );
    });

    res.json(matches);
});

module.exports = router;
