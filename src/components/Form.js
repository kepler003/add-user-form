import { useState, ReactDOM } from 'react';
import Card from './Card';
import Button from './Button';
import Input from './Input';
import Modal from './Modal';
import styles from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [data, setData] = useState({ name: '', age: '' });
  const [error, setError] = useState();

  const setInputError = (text) => {
    setError({ summary: 'Invalid input', info: text });
  }

  const onChangeHandler = (e) => {
    const prop = e.target.getAttribute('name');
    setData((prevData) => ({
      ...prevData,
      [prop]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!data.name.trim().length) {
      setInputError('Please provide a valid username');
      return;
    }
    
    if (!data.age.trim().length) {
      setInputError('Please provide a valid age');
      return;
    }
    
    if (+data.age < 0) {
      setInputError('Age cannot be lower than 0');
      return;
    }
    
    onSubmit(data);
    setData({ name: '', age: '' });
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
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
      <Modal
        isActive={!!error}
        heading={error?.summary}
        text={error?.info}
        onClose={() => setError()}
      />
    </Card>
  );
};

export default Form;
