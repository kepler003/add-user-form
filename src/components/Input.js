import styles from './Input.module.css';

const Input = (props) => {
  props = {
    ...props,
    className: props.className + ' ' + styles.input,
  };
  return <input {...props} />;
};

export default Input;
