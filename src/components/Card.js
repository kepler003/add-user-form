import styles from './Card.module.css';

const Card = ({ children, ...props }) => {
  props = {
    ...props,
    children: undefined,
    className: `${styles.card} ${props.className ?? ''}`,
  };

  return <div {...props}>{children}</div>;
};

export default Card;
