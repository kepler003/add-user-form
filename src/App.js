import Main from './components/Main';

function App() {
  return (
    <Main>
      <form>
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
      </form>
      <ul>
        <li>John (25 years old)</li>
        <li>Jane (24 years old)</li>
      </ul>
    </Main>
  );
}

export default App;
