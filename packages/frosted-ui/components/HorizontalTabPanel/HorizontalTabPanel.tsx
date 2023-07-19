'use client';

import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useHorizontalTabContext } from '../HorizontalTabGroupContext';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? -1000 : 1000,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
    };
  },
};

export const HorizontalTabPanel = ({ children }: PropsWithChildren) => {
  const { selectedIndex, previousIndex } = useHorizontalTabContext();
  const direction = (previousIndex || 0) > selectedIndex ? 1 : -1;
  return (
    <Tab.Panel
      key={selectedIndex}
      as={motion.div}
      custom={direction}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: 0.15,
      }}
      variants={variants}
    >
      {children}
    </Tab.Panel>
  );
};
