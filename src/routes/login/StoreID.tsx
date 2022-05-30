import { Dispatch } from 'react';
import { Checkbox } from './Checkbox';
import styles from './login.module.scss';

interface IProps {
  checkValue: boolean;
  setCheckValue: Dispatch<React.SetStateAction<boolean>>;
}

const StoreID = ({ checkValue, setCheckValue }: IProps) => {
  const handleCheckbox = () => {
    setCheckValue((pre) => !pre);
  };

  return (
    <fieldset className={styles.checkWrapper}>
      <Checkbox checkValue={checkValue} setCheckValue={setCheckValue} />
      <label htmlFor='rememberInfo'>아이디 저장하기</label>
      <input type='checkbox' id='rememberInfo' onChange={handleCheckbox} checked={checkValue} />
    </fieldset>
  );
};

export default StoreID;
