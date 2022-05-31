import { motion, useMotionValue, useTransform } from 'framer-motion';

import { Dispatch } from 'react';

interface IProps {
  checkValue: boolean;
  setCheckValue: Dispatch<React.SetStateAction<boolean>>;
}

const tickVariants = {
  pressed: (isChecked: boolean) => ({ pathLength: isChecked ? 0.85 : 0.1 }),
  checked: { pathLength: 1 },
  unchecked: { pathLength: 0 },
};

const boxVariants = {
  checked: { stroke: '#586cf5', fill: '#586cf5' },
  unchecked: { fill: '#f6f7f8' },
};

export const Checkbox = ({ checkValue, setCheckValue }: IProps) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.svg
      initial={false}
      animate={checkValue ? 'checked' : 'unchecked'}
      width='20'
      height='20'
      viewBox='0 0 440 440'
      onClick={() => setCheckValue((pre) => !pre)}
    >
      <motion.path
        d='M 72 136 C 72 100.654 100.654 72 136 72 L 304 72 C 339.346 72 368 100.654 368 136 L 368 304 C 368 339.346 339.346 368 304 368 L 136 368 C 100.654 368 72 339.346 72 304 Z'
        fill='#ffffff'
        strokeWidth='20'
        stroke='#3a474e'
        variants={boxVariants}
      />
      <motion.path
        d='M 100 138.666 L 128.658 200.373 L 250.808 120'
        transform='translate(54.917 68.947) rotate(-10 170.904 128.687)'
        fill='transparent'
        strokeWidth='40'
        stroke='#ffffff'
        strokeLinecap='round'
        strokeLinejoin='round'
        variants={tickVariants}
        style={{ pathLength, opacity }}
        custom={checkValue}
      />
    </motion.svg>
  );
};

export default Checkbox;
