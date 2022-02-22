import Card from './Card';
import styles from './List.module.css';

const List = ({ users }) => {
  return (
    <Card className={styles.list__card}>
      <ul className={styles.list}>
        {!users.length && <p>No users found.</p>}
        {!!users.length &&
          users.map(({ name, age }) => {
            const phrase = age === 1 ? 'year' : 'years';
            return <li>{`${name} (${age} ${phrase} old)`}</li>;
          })}
      </ul>
    </Card>
  );
};

export default List;
