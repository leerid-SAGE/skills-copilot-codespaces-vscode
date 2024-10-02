// Create web server
// Run web server
// Create a new comment
// List all comments
// Delete a comment
// Update a comment
// Get a comment by id

// Import express
const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { check, validationResult } = require('express-validator');
const { readData, writeData } = require('./data');

// Create an express app
const app = express();

// Parse JSON data
app.use(express.json());

// Create a new comment
app.post(
  '/comments',
  [
    check('username').isLength({ min: