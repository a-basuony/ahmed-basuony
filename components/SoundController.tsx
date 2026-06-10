"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SOUND_STORAGE_KEY = "portfolio-sound-enabled";
const AMBIENT_VOLUME = 0.2;

export default function SoundController() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wasPreviouslyEnabled, setWasPreviouslyEnabled] = useState(false);

  useEffect(() => {
    const audio = new Audio("/sounds/ambient-loop.mp3");
    const savedPreference =
      window.localStorage.getItem(SOUND_STORAGE_KEY) !== "false";

    audio.loop = true;
    audio.volume = AMBIENT_VOLUME;
    audio.preload = "auto";
    audioRef.current = audio;

    // Put the music file here: public/sounds/ambient-loop.mp3
    // Recommended music type: calm ambient loop / soft futuristic ambient / minimal electronic ambient
    // Recommended volume: 0.18 to 0.24
    setWasPreviouslyEnabled(savedPreference);

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const playAmbient = async () => {
      try {
        audio.volume = AMBIENT_VOLUME;
        await audio.play();
        setWasPreviouslyEnabled(true);
        window.localStorage.setItem(SOUND_STORAGE_KEY, "true");
      } catch {
        setIsPlaying(false);
      }
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    void playAmbient();

    const retryAfterInteraction = () => {
      if (!audio.paused) return;
      void playAmbient();
    };

    window.addEventListener("pointerdown", retryAfterInteraction, {
      once: true,
    });
    window.addEventListener("keydown", retryAfterInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", retryAfterInteraction);
      window.removeEventListener("keydown", retryAfterInteraction);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const toggleSound = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setWasPreviouslyEnabled(false);
      window.localStorage.setItem(SOUND_STORAGE_KEY, "false");
      return;
    }

    try {
      audio.volume = AMBIENT_VOLUME;
      await audio.play();
      setWasPreviouslyEnabled(true);
      window.localStorage.setItem(SOUND_STORAGE_KEY, "true");
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <button
      type="button"
      aria-label={isPlaying ? "Turn sound off" : "Turn sound on"}
      aria-pressed={isPlaying}
      onClick={toggleSound}
      className={`fixed right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border bg-background/70 text-primary shadow-lg backdrop-blur-md transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:right-8 md:top-8 ${
        wasPreviouslyEnabled && !isPlaying
          ? "border-primary/50"
          : "border-primary/30"
      }`}
    >
      {isPlaying ? (
        <Volume2 className="h-5 w-5" aria-hidden="true" />
      ) : (
        <VolumeX className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
