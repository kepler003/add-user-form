import { useState } from 'react';
import Card from './Card';
import Button from './Button';
import Input from './Input';
import styles from './Form.module.css';

const Form = () => {
  const [data, setData] = useState({
    name: '',
    age: '',
  });

  const onChangeHandler = (e) => {
    const prop = e.target.getAttribute('name');
    setData((prevData) => ({ ...prevData, [prop]: e.target.value }));
  };

  const resetData = () => setData({ name: '', age: '' });

  return (
    <Card>
      <form>
        <div
          className={`${styles['form__input-box']} ${styles['form__input-box--no-margin']}`}
        >
          <label className={styles['form__label']}>Username</label>
          <Input
            onChange={onChangeHandler}
            type='text'
            name='name'
            value={data.name}
          />
        </div>
        <div className={styles['form__input-box']}>
          <label className={styles['form__label']}>Age (years)</label>
          <Input
            onChange={onChangeHandler}
            type='number'
            name='age'
            value={data.age}
          />
        </div>
        <div
          className={`${styles['form__input-box']} ${styles['form__input-box--buttons']}`}
        >
          <Button type='submit' className={styles['form__btn--submit']}>
            Add user
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
