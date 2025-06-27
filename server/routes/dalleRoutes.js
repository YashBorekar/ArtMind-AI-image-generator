/* eslint-disable quotes */
import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import { HfInference } from "@huggingface/inference";


dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const client = new HfInference(process.env.HF_TOKEN);



const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ 
    message: 'AI Image Generation API is running',
    status: 'healthy',
    endpoints: {
      generate: 'POST /',
      health: 'GET /'
    }
  });
});

router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;

    // Validation
    if (!prompt) {
      return res.status(400).json({ 
        success: false,
        error: 'Prompt is required' 
      });
    }

    if (prompt.length > 1000) {
      return res.status(400).json({ 
        success: false,
        error: 'Prompt must be less than 1000 characters' 
      });
    }

    console.log('🎨 Generating image for prompt:', prompt.substring(0, 50) + '...');

    // Generate image using Hugging Face
    const aiResponse = await client.textToImage({
      model: 'stabilityai/stable-diffusion-3.5-large',
      inputs: prompt.trim(),
      parameters: { 
        num_inference_steps: 50,
        guidance_scale: 7.5
      },
      provider: 'hf-inference',
    });

    console.log('✅ Image generated successfully');

    const arrayBuffer = await aiResponse.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString('base64');

    res.status(200).json({
      success: true,
      message: 'Image generated successfully',
      image: `data:image/jpeg;base64,${base64Image}`,
    });
  } catch (error) {
    console.error('❌ Image generation failed:', error.message);
    
    // Handle specific errors
    if (error.message.includes('rate limit')) {
      return res.status(429).json({ 
        success: false,
        error: 'Rate limit exceeded. Please try again later.' 
      });
    }

    if (error.message.includes('inappropriate')) {
      return res.status(400).json({ 
        success: false,
        error: 'Prompt contains inappropriate content.' 
      });
    }

    res.status(500).json({ 
      success: false,
      error: 'Image generation failed. Please try again.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});


export default router;
