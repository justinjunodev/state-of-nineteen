export const FooterContent = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 40,
      delay: 1.5,
      duration: 0.5,
    },
  },
}
