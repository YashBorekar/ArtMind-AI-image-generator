import React, { useEffect, useState } from 'react';

import { Card, FormField, Loader } from '../components';

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20">
      <div className="text-8xl mb-4 animate-bounce">🎨</div>
      <h2 className="text-2xl font-bold text-white/80 text-center">{title}</h2>
      <p className="text-white/60 text-center max-w-md mt-2">
        Be the first to create amazing AI art and share it with the community!
      </p>
    </div>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://ai-art-oqkg.onrender.com/api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter((item) => 
          item.name.toLowerCase().includes(searchText.toLowerCase()) || 
          item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500),
    );
  };

  return (
    <section className="max-w-7xl mx-auto relative">
      {/* Hero Section with Animated Elements */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-purple-900/30 to-black/40 rounded-3xl blur-3xl"></div>
        <div className="relative z-10 glass-dark p-12 rounded-3xl border border-white/20" style={{background: 'rgba(0,0,0,0.6)'}}>
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative text-6xl animate-bounce">🎨</div>
            </div>
          </div>
          
          <div className="relative mb-6">
            {/* Background glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 blur-3xl rounded-full w-96 h-32"></div>
            </div>
            
            {/* Multiple text layers for maximum visibility */}
            <h1 className="relative font-['Orbitron'] font-black text-5xl md:text-7xl text-center">
              {/* Subtle shadow layer */}
              <span className="absolute inset-0 text-black/20 blur-sm translate-x-1 translate-y-1">
                AI ART UNIVERSE
              </span>
              
              {/* Glossy main text */}
              <span className="relative text-white font-black"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #e2e8f0 50%, #cbd5e1 75%, #94a3b8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.2)',
                      WebkitTextStroke: '0.5px rgba(255,255,255,0.4)',
                      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
                    }}>
                AI ART UNIVERSE
              </span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8 drop-shadow-lg">
              🚀 Journey Through a <span className="text-yellow-300 font-semibold drop-shadow-md">Cosmic Gallery</span> of AI-Powered Masterpieces
            </p>
            <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
              Where imagination meets artificial intelligence to create breathtaking visual experiences that push the boundaries of digital art.
            </p>
          </div>

          {/* Floating Stats */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="glass p-4 rounded-2xl text-center border border-white/20 bg-black/40">
              <div className="text-2xl font-bold text-yellow-300 drop-shadow-md">∞</div>
              <div className="text-white/80 text-sm font-medium">Possibilities</div>
            </div>
            <div className="glass p-4 rounded-2xl text-center border border-white/20 bg-black/40">
              <div className="text-2xl font-bold text-blue-300 drop-shadow-md">⚡</div>
              <div className="text-white/80 text-sm font-medium">AI Powered</div>
            </div>
            <div className="glass p-4 rounded-2xl text-center border border-white/20 bg-black/40">
              <div className="text-2xl font-bold text-pink-300 drop-shadow-md">🎭</div>
              <div className="text-white/80 text-sm font-medium">Creative</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Search Section */}
      <div className="mb-12">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25"></div>
          <div className="relative glass-dark p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔍</span>
              <h3 className="text-xl font-semibold text-white">Discover Masterpieces</h3>
            </div>
            <FormField
              labelName=""
              type="text"
              name="text"
              placeholder="Search for amazing AI art..."
              value={searchText}
              handleChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative">
        {loading ? (
          <div className="flex flex-col justify-center items-center py-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Loader />
            </div>
            <p className="text-white/80 mt-6 text-lg font-light">
              Fetching magical creations<span className="loading-dots"></span>
            </p>
          </div>
        ) : (
          <>
            {searchText && (
              <div className="glass-dark p-6 rounded-2xl mb-8 text-center">
                <h2 className="text-xl font-medium text-white/90">
                  ✨ Results for <span className="text-gradient font-bold">"{searchText}"</span>
                </h2>
                <p className="text-white/60 mt-2">
                  {searchedResults?.length || 0} amazing creations found
                </p>
              </div>
            )}
            
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No Magical Results Found"
                />
              ) : (
                <RenderCards
                  data={allPosts}
                  title="No Creations Yet"
                />
              )}
            </div>
          </>
        )}
      </div>

      {/* Call to Action */}
      {!loading && (!allPosts || allPosts.length === 0) && (
        <div className="text-center mt-16">
          <div className="glass-dark p-12 rounded-3xl max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🌟</div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Ready to Create Magic?</h3>
            <p className="text-white/70 mb-8">
              Be the first to contribute to our AI art gallery and inspire others with your creativity!
            </p>
            <a 
              href="/create-post" 
              className="btn-animated neon-glow bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg inline-block"
            >
              <span>🎨 Start Creating</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
