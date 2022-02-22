import { useState } from 'react';
import Main from './components/Main';
import Row from './components/Row';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [users, setUsers] = useState([
    { name: 'Max', age: '25', id: Math.random().toString() },
    { name: 'Peter', age: '31', id: Math.random().toString() },
  ]);

  const onSubmit = (user) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { ...user, id: Math.random().toString() },
    ]);
  };

  return (
    <Main>
      <Row>
        <Form onSubmit={onSubmit} />
        <List users={users} />
      </Row>
    </Main>
  );
}

export default App;
