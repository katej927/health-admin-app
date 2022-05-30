import styles from './whiteSection.module.scss';

interface IProps {
  children: JSX.Element;
}

const WhiteSection = ({ children }: IProps) => {
  return <section className={styles.whiteBoxWrapper}>{children}</section>;
};

export default WhiteSection;
