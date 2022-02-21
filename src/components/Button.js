import styles from './Button.module.css';

const Button = ({ children, ...props }) => {
  props.className = props.className + ' ' + styles.btn;
  return <button {...props}>{children}</button>;
};

export default Button;
