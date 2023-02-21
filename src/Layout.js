import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/dc">DC</Link>
      </button>
      <button>
        <Link to="/avengers">Avengers</Link>
      </button>
      <button>
        <Link to="/naruto">Naruto</Link>
      </button>
      <button>
        <Link to="/dragonball">Dragon Ball</Link>
      </button>
      <button>
        <Link to="/powerrangers">Power Rangers</Link>
      </button>
      <button>
        <Link to="/onepiece">One Piece</Link>
      </button>
      <button>
        <Link to="/bleach">Bleach</Link>
      </button>
      <Outlet />
    </>
  );
}
