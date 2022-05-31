### Toast Message 
- Framer Motion 라이브러리를 이용해서 animation 기능을 완성하였습니다.

- 기능이 필요한 곳에서 state 값으로 open setOpen값을 넘겨주어 필요한 시기에 사용할 수 있도록 만들었습니다.

- message value와 알맞는 status value을 넘겨주어 상황에 맞는 메시지상태를 보여줄 수 있도록 하였습니다.

- option 기능으로 나오는 위치 속도와 나오는 시간은 기본값으로 주어졌지만 custom 할 수 있게 설정하였습니다.

```ts
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { CircleCheckIcon, CircleExclamtionIcon, CircleInfoIcon } from 'assets/svgs';

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
  status: 'success' | 'error' | 'info';
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
    error: <CircleExclamtionIcon />,
    info: <CircleInfoIcon />,
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
            [styles.info]: status === 'info',
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
```
