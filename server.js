// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 5173;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle success and fail routes
app.get('/success', (req, res) => {
    res.send("Google login successful! You can now access protected resources.");
});

app.get('/fail', (req, res) => {
    res.send("Google login failed. Please try again.");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
