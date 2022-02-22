import Card from './Card';
import styles from './List.module.css';

const List = () => {
  return (
    <Card className={styles.list__card}>
      <ul className={styles.list}>
        <li>John (25 years old)</li>
        <li>Jane (24 years old)</li>
      </ul>
    </Card>
  );
};

export default List;
