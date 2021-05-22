// import logo from './logo.svg';
import './App.css';
import Task from './components/Task'

const defaultTeskArgs = {
  task: {
    id: '1',
    // id: 1000,
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
}

function App() {
  return (
    <div className="App">
      <Task { ...defaultTeskArgs } />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
