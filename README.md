# PostgreSQL Image Upload Project

This project is a simple Node.js application that allows users to upload images to a PostgreSQL database and retrieve them later. The application features a frontend built with HTML and JavaScript, using the Fetch API for communication with the backend.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Database Setup](#database-setup)
- [Usage](#usage)

## Technologies Used

- **Node.js**: JavaScript runtime for building the server
- **Express**: Web framework for Node.js
- **Multer**: Middleware for handling file uploads
- **pg**: PostgreSQL client for Node.js
- **CORS**: Middleware for enabling CORS
- **HTML/CSS**: For frontend

## Features

- Upload images to the server
- Retrieve and preview uploaded images using their ID
- Simple user interface for interaction

## Setup Instructions

1. **Clone the Repository**:
   
   git clone https://github.com/YashBari/postgreaSQL_image_project.git
   cd postgreaSQL_image_project

2. **Install Dependencies**:

   npm install

## Database Setup

3. **Configure PostgreSQL**:

   Make sure you have PostgreSQL installed and running. Create a database named myapp and configure the connection settings in server.js if necessary.

4. **Create the Database Table**:

   Run the following SQL command to create the required table:

   CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    image BYTEA,
    filename TEXT
);

5. **Start the Server**:

   node server.js

6. **Open Your Browser**:

    Navigate to http://localhost:5000 to access the application.

## Usage

   - Use the Upload Image section to select and upload an image.
   - Note the ID provided after a successful upload.
   - Enter the ID in the Retrieve Image section and click the button to view the image.

