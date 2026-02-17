"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString());
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return <p>{time}</p>;
}
