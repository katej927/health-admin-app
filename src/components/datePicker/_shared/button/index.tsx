import styles from './Button.module.scss';

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button className={styles.btn} type='button'>
      {text}
    </button>
  );
};

export default Button;
