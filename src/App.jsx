import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <nav className="w-full bg-gray-800 p-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-blue-500">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
