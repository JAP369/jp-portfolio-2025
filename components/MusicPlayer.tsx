"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Music, Play, Pause, Volume2, VolumeX, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true); // Start with true for autoplay
  const [isMuted, setIsMuted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.3); // Lower default volume
  const audioRef = useRef<HTMLAudioElement>(null);

  // The XX - Intro (You may need to replace with your own hosted file)
  const musicUrl =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  const songTitle = "Intro";
  const artistName = "The XX";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      setCurrentTime(0);
    });

    // Autoplay when component mounts
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay prevented by browser:", error);
        setIsPlaying(false);
      }
    };

    playAudio();

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.muted = false;
      setIsMuted(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} loop />

      {/* Floating Music Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className='fixed bottom-8 right-8 z-50'
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className='absolute bottom-20 right-0 w-80 p-6 rounded-3xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl'
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className='absolute top-4 right-4 text-gray-400 hover:text-white transition-colors'
              >
                <X className='w-5 h-5' />
              </button>

              {/* Title */}
              <div className='mb-6'>
                <h3 className='text-lg font-bold text-white mb-1'>
                  {songTitle}
                </h3>
                <p className='text-sm text-gray-400'>{artistName}</p>
              </div>

              {/* Progress Bar */}
              <div className='mb-4'>
                <input
                  type='range'
                  min='0'
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className='w-full h-2 bg-white/10 rounded-full outline-none appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-gradient-to-r
                    [&::-webkit-slider-thumb]:from-cyan-500
                    [&::-webkit-slider-thumb]:to-blue-600
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-webkit-slider-thumb]:shadow-cyan-500/50'
                />
                <div className='flex justify-between text-xs text-gray-500 mt-2'>
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className='flex items-center gap-4 mb-4'>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all'
                >
                  {isPlaying ? (
                    <Pause className='w-5 h-5 text-white' fill='white' />
                  ) : (
                    <Play className='w-5 h-5 text-white ml-0.5' fill='white' />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMute}
                  className='w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors'
                >
                  {isMuted ? (
                    <VolumeX className='w-5 h-5 text-gray-400' />
                  ) : (
                    <Volume2 className='w-5 h-5 text-gray-300' />
                  )}
                </motion.button>

                <input
                  type='range'
                  min='0'
                  max='1'
                  step='0.01'
                  value={volume}
                  onChange={handleVolumeChange}
                  className='flex-1 h-2 bg-white/10 rounded-full outline-none appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-3
                    [&::-webkit-slider-thumb]:h-3
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-white
                    [&::-webkit-slider-thumb]:cursor-pointer'
                />
              </div>

              {/* Equalizer Animation */}
              {isPlaying && (
                <div className='flex items-center justify-center gap-1 h-12'>
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className='w-1 bg-gradient-to-t from-cyan-500 to-blue-600 rounded-full'
                      animate={{
                        height: ["20%", "100%", "20%"],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.05,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className='w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50 relative overflow-hidden'
        >
          <motion.div
            animate={isPlaying ? { rotate: 360 } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
          />
          <Music className='w-7 h-7 text-white relative z-10' />

          {/* Playing Indicator */}
          {isPlaying && (
            <motion.div
              className='absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full'
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.button>
      </motion.div>
    </>
  );
}
