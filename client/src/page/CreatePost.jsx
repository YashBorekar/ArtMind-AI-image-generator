import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL || 'http://localhost:8080'}/api/v1/dalle`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        var data = await response.json();
        setForm({ ...form, photo: data.image });
      } catch (err) {
        alert(err);
        console.log(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL || 'http://localhost:8080'}/api/v1/post`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        alert('🎉 Your masterpiece has been shared with the world!');
        navigate('/');
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please generate an image with proper details');
    }
  };

  return (
    <section className="max-w-6xl mx-auto relative">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="relative glass-dark p-12 rounded-3xl">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative text-6xl">🎨</div>
            </div>
          </div>
          
          <h1 className="font-['Orbitron'] font-black text-5xl md:text-6xl text-gradient mb-6 neon-text">
            CREATE MAGIC
          </h1>
          
          <p className="text-xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
            🚀 Unleash Your Creativity with AI • Transform Words into <span className="text-gradient font-semibold">Visual Masterpieces</span>
          </p>
        </div>
      </div>

      {/* Main Creation Form */}
      <div className="glass-dark p-8 rounded-3xl">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form Fields */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">👤</span>
                  <h3 className="text-xl font-semibold text-white">Artist Details</h3>
                </div>
                
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-25"></div>
                  <div className="relative glass p-6 rounded-xl">
                    <FormField
                      labelName="Your Name"
                      type="text"
                      name="name"
                      placeholder="Enter your artist name..."
                      value={form.name}
                      handleChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">💭</span>
                  <h3 className="text-xl font-semibold text-white">Creative Prompt</h3>
                </div>
                
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-25"></div>
                  <div className="relative glass p-6 rounded-xl">
                    <FormField
                      labelName="Describe Your Vision"
                      type="text"
                      name="prompt"
                      placeholder="A futuristic cyberpunk cityscape with neon lights and flying cars..."
                      value={form.prompt}
                      handleChange={handleChange}
                      isSurpriseMe
                      handleSurpriseMe={handleSurpriseMe}
                    />
                  </div>
                </div>
              </div>

              {/* Generation Button */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={generateImage}
                  disabled={generatingImg}
                  className="btn-animated neon-glow w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg tracking-wide hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed pulse-glow"
                >
                  <span className="flex items-center justify-center gap-3">
                    {generatingImg ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        Generating Magic<span className="loading-dots"></span>
                      </>
                    ) : (
                      <>
                        ⚡ Generate AI Art
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column - Image Preview */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🖼️</span>
                <h3 className="text-xl font-semibold text-white">Preview</h3>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30"></div>
                <div className="relative glass p-4 rounded-3xl">
                  <div className="relative w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                    {form.photo ? (
                      <img
                        src={form.photo}
                        alt={form.prompt}
                        className="w-full h-full object-cover rounded-2xl card-hover"
                      />
                    ) : (
                      <div className="text-center">
                        <img
                          src={preview}
                          alt="preview"
                          className="w-40 h-40 object-contain opacity-40 mb-4"
                        />
                        <p className="text-white/60 text-sm">
                          Your AI masterpiece will appear here
                        </p>
                      </div>
                    )}

                    {generatingImg && (
                      <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center rounded-2xl backdrop-blur-sm">
                        <div className="relative">
                          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-50 animate-pulse"></div>
                          <Loader />
                        </div>
                        <p className="text-white mt-6 text-lg font-light">
                          Creating magic<span className="loading-dots"></span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Share Button */}
              {form.photo && (
                <div className="mt-8 w-full max-w-sm">
                  <div className="glass-dark p-6 rounded-2xl text-center mb-6">
                    <div className="text-3xl mb-2">🌟</div>
                    <p className="text-white/80 text-sm">
                      Amazing! Your creation is ready to inspire the world
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-animated neon-glow w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg tracking-wide hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed sparkle"
                  >
                    <span className="flex items-center justify-center gap-3">
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                          Sharing<span className="loading-dots"></span>
                        </>
                      ) : (
                        <>
                          🚀 Share with Universe
                        </>
                      )}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Tips Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="glass-dark p-6 rounded-2xl text-center">
          <div className="text-3xl mb-3">💡</div>
          <h4 className="text-lg font-semibold text-white mb-2">Pro Tip</h4>
          <p className="text-white/70 text-sm">
            Be specific and descriptive in your prompts for better results
          </p>
        </div>
        
        <div className="glass-dark p-6 rounded-2xl text-center">
          <div className="text-3xl mb-3">🎯</div>
          <h4 className="text-lg font-semibold text-white mb-2">Style Guide</h4>
          <p className="text-white/70 text-sm">
            Add style keywords like "photorealistic", "digital art", "oil painting"
          </p>
        </div>
        
        <div className="glass-dark p-6 rounded-2xl text-center">
          <div className="text-3xl mb-3">✨</div>
          <h4 className="text-lg font-semibold text-white mb-2">Inspiration</h4>
          <p className="text-white/70 text-sm">
            Use the "Surprise Me" button for creative prompt suggestions
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
