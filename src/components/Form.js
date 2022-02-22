import Card from './Card';
import Button from './Button';
import Input from './Input';
import styles from './Form.module.css';

const Form = () => {
  return (
    <Card>
      <form>
        <div className={`${styles['form__input-box']} ${styles['form__input-box--no-margin']}`}>
          <label className={styles['form__label']}>Username</label>
          <Input type='text' />
        </div>
        <div className={styles['form__input-box']}>
          <label className={styles['form__label']}>Age (years)</label>
          <Input type='number' />
        </div>
        <div className={`${styles['form__input-box']} ${styles['form__input-box--buttons']}`}>
          <Button type="submit" className={styles['form__btn--submit']}>Add user</Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
