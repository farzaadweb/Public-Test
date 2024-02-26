// Import required modules
const express = require("express");
const path = require("path");

// Create an Express application
const app = express();

// Set up middleware to serve static files (like CSS)
app.use(express.static(path.join(__dirname, "public")));

// Define a route to handle requests for the homepage
app.get("/", (req, res) => {
  // Send the HTML response with basic styles
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Express App</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div class="container">
                <h1>Welcome to my Simple Express App</h1>
                <p>This is a simple Express.js application returning HTML with basic styles.</p>
            </div>
        </body>
        </html>
    `);
});

// Start the server
const PORT = 4545;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
