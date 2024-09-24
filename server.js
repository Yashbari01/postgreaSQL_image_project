const express = require('express');
const multer = require('multer');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public'))); // Serve files in 'public'

// PostgreSQL connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'root',
    port: 5432,
});

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to upload an image
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const imageBuffer = req.file.buffer;
        const filename = req.file.originalname;
        console.log('filename', filename);

        const result = await pool.query(
            'INSERT INTO images (image, filename) VALUES ($1, $2) RETURNING id',
            [imageBuffer, filename]
        );

        res.json({ id: result.rows[0].id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error uploading image');
    }
});

// Route to retrieve an image
app.get('/image/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query('SELECT image, filename FROM images WHERE id = $1', [id]);

        if (result.rows.length > 0) {
            res.set('Content-Type', 'image/jpeg');
            res.send(result.rows[0].image);
        } else {
            res.status(404).send('Image not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving image');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
