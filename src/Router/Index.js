import { Link, Outlet } from "react-router-dom";

function Index() {
  return (
    <>
      <nav>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5ccM2OaHBdFLxqr_7sQPxWA8f2nARYig9A&usqp=CAU"
            alt="logo"
            width="180px"
            height="40px"
          />
        </li>
        <li>
          <Link to="/">React Router Summary</Link>
        </li>
        <li>
          <Link to="/about">Router</Link>
        </li>
        <li>
          <Link to="/header">Routes</Link>
        </li>
        <li>
          <Link to="/contact">Route </Link>
        </li>
        <li>
          <Link to="/link">Link</Link>
        </li>

        <li>
          <Link to="/outlet">Outlet </Link>
        </li>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}
export default Index;
