import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  prompt: { 
    type: String, 
    required: [true, 'Prompt is required'],
    trim: true,
    maxlength: [1000, 'Prompt cannot exceed 1000 characters']
  },
  photo: { 
    type: String, 
    required: [true, 'Photo URL is required']
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
