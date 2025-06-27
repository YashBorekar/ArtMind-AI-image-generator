import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET all posts
router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 }); // Newest first
    res.status(200).json({ 
      success: true, 
      count: posts.length,
      data: posts 
    });
  } catch (err) {
    console.error('Error fetching posts:', err);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch posts',
      error: process.env.NODE_ENV === 'development' ? err.message : 'Server error'
    });
  }
});

// CREATE new post
router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    // Validation
    if (!name || !prompt || !photo) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, prompt, and photo are required' 
      });
    }

    // Upload to Cloudinary
    const photoUrl = await cloudinary.uploader.upload(photo, {
      folder: 'artmind',
      resource_type: 'image'
    });

    // Create post
    const newPost = await Post.create({
      name: name.trim(),
      prompt: prompt.trim(),
      photo: photoUrl.secure_url,
    });

    res.status(201).json({ 
      success: true, 
      message: 'Post created successfully',
      data: newPost 
    });
  } catch (err) {
    console.error('Error creating post:', err);
    
    // Handle validation errors
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed',
        errors 
      });
    }

    res.status(500).json({ 
      success: false, 
      message: 'Failed to create post',
      error: process.env.NODE_ENV === 'development' ? err.message : 'Server error'
    });
  }
});

export default router;
