import Card from './Card';
import styles from './List.module.css';

const List = ({ users }) => {
  const LiElems = users.map(({ name, age, id }) => {
    const phrase = age === 1 ? 'year' : 'years';
    const msg = `${name} (${age} ${phrase} old)`;
    return <li key={id}>{msg}</li>;
  });

  return (
    <Card className={styles.list__card}>
      <ul className={styles.list}>
        {!users.length && <p>No users found.</p>}
        {!!users.length && LiElems}
      </ul>
    </Card>
  );
};

export default List;
