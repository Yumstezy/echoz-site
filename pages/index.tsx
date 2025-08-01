// echoz Full Website Page (Hero + Music + Collections + Footer)

import { useEffect, useState, useRef } from 'react';
import { Button } from "../components/ui/button";

export default function HomePage() {
  const [songTitle, setSongTitle] = useState("Echoz Anthem - Brill Trance");
  const audioRef = useRef(null);

  const songs = [
    { title: "Echoz Anthem - Brill Trance", file: "/audio/aint-over-brill-trance.wav" }
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const playSong = () => {
    if (audioRef.current) audioRef.current.play();
  };

  const nextSong = () => {
    const nextIndex = (currentTrackIndex + 1) % songs.length;
    setCurrentTrackIndex(nextIndex);
    setSongTitle(songs[nextIndex].title);
  };

  const prevSong = () => {
    const prevIndex = (currentTrackIndex - 1 + songs.length) % songs.length;
    setCurrentTrackIndex(prevIndex);
    setSongTitle(songs[prevIndex].title);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songs[currentTrackIndex].file;
      audioRef.current.play();
    }
  }, [currentTrackIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white overflow-x-hidden relative">

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/10 shadow-md text-sm sticky top-0 z-50">
        <div className="flex space-x-6">
          <a href="#collections" className="hover:underline">Collections</a>
          <a href="#music" className="hover:underline">Music</a>
          <a href="#about" className="hover:underline">About</a>
        </div>
        <div className="flex space-x-4">
          <Button className="bg-pink-200 text-black font-bold">Road Map</Button>
          <Button className="bg-white text-pink-600 font-bold">Buy $ECHOZ</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col justify-center items-center text-center mt-20 px-6">
        <h1 className="text-7xl font-bold mb-4 tracking-wide drop-shadow-lg">echoz</h1>
        <p className="text-lg italic text-pink-100 mb-6">A sound you can see.</p>
      </header>

      {/* Music Player */}
      <section id="music" className="mt-20 px-6 max-w-md mx-auto text-center">
        <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between shadow-lg backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <img src="/cover-art.png" alt="cover" className="w-12 h-12 rounded-lg" />
            <div className="text-left">
              <p className="text-sm font-bold">{songTitle}</p>
              <p className="text-xs text-pink-100">Now Playing</p>
            </div>
          </div>
          <div className="flex space-x-3 text-xl">
            <button onClick={prevSong}>⏮</button>
            <button onClick={playSong}>▶️</button>
            <button onClick={nextSong}>⏭</button>
          </div>
          <audio ref={audioRef} hidden />
        </div>
      </section>

      {/* Collections Gallery */}
      <section id="collections" className="mt-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Echoz Collections</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white/10 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
              <img
                src={`/collections/collection-${item}.jpg`}
                alt={`Collection ${item}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Collection {item}</h3>
                <p className="text-sm text-pink-100">Event highlights, photos, and behind-the-scenes content.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="mt-32 px-6 py-12 bg-white/10 backdrop-blur-md text-center text-sm text-pink-100">
        <p>© 2025 Echoz. All rights reserved.</p>
        <p className="mt-2">Made with 💖 in NYC • Music. Crypto. Culture.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Discord</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>

    </div>
  );
}

