"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroBlobs() {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
        <svg className="absolute -top-20 -right-16 blur-2xl opacity-30" width="520" height="520" viewBox="0 0 520 520">
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
          <path d="M423 120c40 68-12 117-36 176-23 57-20 126-76 142-57 16-120-36-168-84-50-50-92-105-69-166s111-118 192-122c79-4 118 33 157 54z" fill="url(#g1)" />
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      <svg className="absolute -top-24 -right-16 blur-2xl opacity-40" width="560" height="560" viewBox="0 0 560 560">
        <defs>
          <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <motion.path
          initial={{ d: BLobs[0] }}
          animate={{ d: BLobs[1] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          fill="url(#g2)"
        />
      </svg>
      <svg className="absolute -bottom-24 -left-10 blur-3xl opacity-30" width="640" height="640" viewBox="0 0 640 640">
        <defs>
          <linearGradient id="g3" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <motion.path
          initial={{ d: BLobs[1] }}
          animate={{ d: BLobs[2] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.5 }}
          fill="url(#g3)"
        />
      </svg>
    </div>
  );
}

const BLobs = [
  "M423 120c40 68-12 117-36 176-23 57-20 126-76 142-57 16-120-36-168-84-50-50-92-105-69-166s111-118 192-122c79-4 118 33 157 54z",
  "M480 260c0 85-38 142-94 181-52 36-132 48-196 17-61-29-83-103-98-172-14-66-18-137 34-180 54-45 141-60 210-38 74 24 144 95 144 192z",
  "M420 110c44 52 58 113 44 180-14 65-61 133-125 151-64 19-140-4-192-56-49-50-76-127-52-186 24-58 99-97 164-109 64-11 118-7 161 20z",
];
