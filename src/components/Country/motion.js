export const CountryContent = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 40,
      delay: 1,
      delayChildren: 1.5,
      staggerChildren: 0.25,
    },
  },
}

export const CountryItem = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}
