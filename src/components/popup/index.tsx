import { AnimatePresence, Variants, motion } from 'framer-motion';
import { CircleCheckIcon, CircleInfoIcon } from 'assets/svgs';

import { cx } from 'styles';
import styles from './popup.module.scss';
import { useEffect } from 'react';

interface IProps {
  message: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  subMessage?: string;
  speed?: number;
  remainTime?: number;
  position?: 'top right' | 'top left' | 'bottom right' | 'bottom left';
  status: 'success' | 'error';
}

const variants: Variants = {
  initial: (right) => ({
    opacity: 0,
    x: right ? 200 : -200,
  }),
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: (right) => ({
    opacity: 0,
    x: right ? 200 : -200,
  }),
};

const Popup = ({
  message,
  open,
  setOpen,
  subMessage,
  speed = 0.5,
  remainTime = 2000,
  position = 'top right',
  status,
}: IProps) => {
  const symbolIcon = {
    success: <CircleCheckIcon />,
    error: <CircleInfoIcon />,
  }[status];

  const xPosition = position.split(' ')[1];

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, remainTime);
    }
  }, [open, remainTime, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={variants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{
            type: 'tween',
            duration: speed,
          }}
          custom={xPosition === 'right'}
          className={cx(styles.wrapper, {
            [styles.topRight]: position === 'top right',
            [styles.topLeft]: position === 'top left',
            [styles.bottomRight]: position === 'bottom right',
            [styles.bottomLeft]: position === 'bottom left',
            [styles.success]: status === 'success',
            [styles.error]: status === 'error',
          })}
        >
          <div className={styles.tagContainer} />
          {symbolIcon}
          <div className={styles.messageContainer}>
            <span>{message}</span>
            {subMessage && <span className={styles.subMessage}>{subMessage}</span>}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
