type ListAnimationOptions = { delay?: number; interval?: number, direction?: "vertical" | "horizontal" };

export const createStagger = ({ delay = 0, interval = 0.1, direction = "vertical" }: ListAnimationOptions = {}) => (
  [{
    visible: {
      opacity: 1,
      transition: {
        delay,
        when: "beforeChildren",
        staggerChildren: interval
      }
    },
    hidden: {
      opacity: 1,
      transition: {
        when: "afterChildren"
      }
    }
  },
  {
    visible: {
      opacity: 1,
      y: 0,
      x: 0
    },
    hidden: {
      opacity: 0,
      y: direction === "vertical" ? 50 : 0,
      x: direction === "vertical" ? 0 : 50
    }
  }
]);
