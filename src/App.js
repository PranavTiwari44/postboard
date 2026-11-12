import logo from './logo.svg';
import posts from './components/posts';
import './App.css';
import Posts from './components/posts';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__inner">
          <div className="brand">
            <span className="brand__mark" aria-hidden="true">P</span>
            <div>
              <h1 className="brand__title">Postboard</h1>
              <p className="brand__tagline">Create, edit and manage posts</p>
            </div>
          </div>
        </div>
      </header>

      <main className="app-main">
        <Posts />
      </main>

      <footer className="app-footer">
        Data from{' '}
        <a href="https://jsonplaceholder.typicode.com" target="_blank" rel="noreferrer">
          JSONPlaceholder
        </a>{' '}
        — changes are not persisted on the server.
      </footer>
    </div>
  );
}

export default App;
