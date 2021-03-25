import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { createStagger } from "./stagger";

export const withMotion = function<P extends object>(WrappedComponent, { delay = 0.1, interval = 0.1, threshold = 0.15 }) {
  return function<P>(props) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold });
    const [listAnim, itemAnim] = createStagger({ delay, interval });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div ref={ref} initial="hidden" animate={controls} variants={listAnim}>
        <WrappedComponent motionVariants={itemAnim} {...props} />
      </motion.div>
    )
  }
}

export default withMotion;
