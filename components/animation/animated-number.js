"use client";

import { motion, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export function AnimatedNumber({ value, startFrom = 0, springOptions }) {
  const [hasStarted, setHasStarted] = useState(false);
  const spring = useSpring(startFrom, { bounce: 0, duration: 2000, ...springOptions });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (!hasStarted) {
      setHasStarted(true);
    }
    spring.set(value);
  }, [spring, value, hasStarted]);

  return <motion.span>{display}</motion.span>;
}
