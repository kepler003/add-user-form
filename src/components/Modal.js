import styles from './Modal.module.css';
import Button from './Button';

const Modal = ({ isActive, heading = 'Heading', text = 'Text', children, onClose }) => {
  if (isActive) {
    return (
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <p>{heading}</p>
          </div>
          <div className={styles.body}>
            {!!text && <p>{text}</p>}
            {children}
          </div>
          <div className={styles.footer}>
            <Button onClick={onClose}>Ok</Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;
