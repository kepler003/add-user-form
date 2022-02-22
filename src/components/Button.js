import styles from './Button.module.css';

const Button = ({ children, ...props }) => {
  props = {
    ...props,
    className: `${styles.btn} ${props.className ?? ''}`
  }
  return <button {...props}>{children}</button>;
};

export default Button;
