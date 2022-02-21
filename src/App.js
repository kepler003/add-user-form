import Main from './components/Main';
import Card from './components/Card';

function App() {
  return (
    <Main>
      <Card tag='form'>
        <div>
          <label>Username</label>
          <input type="text" />
        </div>
        <div>
          <label>Age (years)</label>
          <input type="number" />
        </div>
        <div>
          <button>Add user</button>
        </div>
      </Card>
      <Card tag='ul'>
        <li>John (25 years old)</li>
        <li>Jane (24 years old)</li>
      </Card>
    </Main>
  );
}

export default App;
