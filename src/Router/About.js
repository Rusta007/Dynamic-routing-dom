import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <h1>Router</h1>
      <p>
        The <b>Router</b> component is the root component of React Router. It
        provides the routing context for your application and enables navigation
        between different views or components based on the current URL.
      </p>
      <p>
        Think of the router as a map for your website. It helps you decide what
        to show when someone goes to different parts of your website.
      </p>
      <nav>
        <li>
          <Link to="team">Team</Link>
        </li>
        <li>
          <Link to="history">History</Link>
        </li>
      </nav>
      <Outlet />
    </>
  );
}
const Team = () => {
  return (
    <>
      <h1>Team </h1>
    </>
  );
};
const History = () => {
  return (
    <>
      <h1>History </h1>
    </>
  );
};
export default About;
export { Team, History };
