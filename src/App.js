import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Views
import Home from "./views/Home/Home";
import Courses from "./views/Courses/Courses";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        {showMenu && (
          <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        )}

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/courses">
            <Courses />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

const MenuButton = ({ showMenu, setShowMenu }) => {
  return (
    <div className="block lg:hidden">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex focus:outline-none items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  );
};

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Aaron Tagadtad
        </span>
      </div>
      <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />

      <div className="hidden lg:block w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className=" lg:block text-sm lg:flex-grow">
          <li className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
            <Link to="/courses">Courses</Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

const MobileMenu = ({ showMenu, setShowMenu }) => {
  return (
    <nav className="absolute p-6 h-screen pb-32 w-full bg-gray-700">
      <div className="flex justify-end">
        <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <ul className="h-full flex justify-center items-center">
        <div className="">
          <li
            onClick={() => setShowMenu(false)}
            className="text-center text-2xl font-semibold"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="text-center text-2xl font-semibold"
          >
            <Link to="/courses">Courses</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
