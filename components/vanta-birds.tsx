"use client";

import { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

export default function VantaBirds() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current && typeof window !== "undefined") {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,

          // Your chosen settings from vantajs.com
          backgroundColor: 0x7192f,   // solid colour (#07192f)
          backgroundAlpha: 1,         // fully opaque (set to 0 for transparent)
          color1: 0xff0000,
          color2: 0xd1ff,
          colorMode: "varianceGradient",
          quantity: 5.0,
          birdSize: 1.0,
          wingSpan: 30.0,
          speedLimit: 5.0,
          separation: 20.0,
          alignment: 20.0,
          cohesion: 20.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 z-0"
      style={{ minHeight: "100%", minWidth: "100%" }}
    />
  );
}