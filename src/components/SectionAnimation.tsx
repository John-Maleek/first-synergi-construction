import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const SectionAnimation = ({ children, amount, ...props }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: amount || 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });
    }
    if (!isInView) {
      animation.start({ opacity: 0, y: 20 });
    }
  }, [animation, isInView]);

  return (
    <div ref={ref} {...props}>
      <motion.div animate={animation}>{children}</motion.div>
    </div>
  );
};

export default SectionAnimation;
