const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Define your POST endpoint
app.post('/api/generate', (req, res) => {
  // You can generate or load a picture here
  // For this example, we'll load a sample image file

  // Read a sample image file
  const imagePath = './public/react.png'; // Replace with the path to your image
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      console.error('Error reading image:', err);
      res.status(500).send('Internal Server Error');
    } else {
      // Set the response content type to indicate it's an image
      res.setHeader('Content-Type', 'image/jpeg');
      // Send the image data as the response
      res.send(data);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
