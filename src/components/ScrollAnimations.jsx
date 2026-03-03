import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollReveal — Wrapper que anima elementos quando entram no viewport.
 * Ao sair do viewport, reseta a animação (para funcionar ao subir também).
 */
export const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  distance = 40,
  once = false,
  ...props
}) => {
  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerContainer — Pai que orquestra stagger nos filhos.
 */
export const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = 0.1,
  once = false,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15, margin: '-30px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerItem — Filho animado dentro de um StaggerContainer.
 */
export const StaggerItem = ({
  children,
  className = '',
  direction = 'up',
  distance = 30,
  ...props
}) => {
  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScaleReveal — Aparece com scale de dentro para fora.
 */
export const ScaleReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  once = false,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * ParallaxLayer — Cria efeito parallax baseado no scroll.
 */
export { motion };
