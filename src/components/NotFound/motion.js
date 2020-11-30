export const NotFoundContent = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 40,
      delay: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.25,
    },
  },
}

export const NotFoundItem = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}
