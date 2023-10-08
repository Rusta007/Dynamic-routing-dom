import NestedLink from "./NestedLink";

function Home() {
  return (
    <>
      <h1>About React Router Concepts</h1>
      <p>
        React Router is a library for handling client-side routing in React
        applications. It allows you to define how different URLs should map to
        different components and provides navigation elements like <b>Link</b>{" "}
        to enable easy movement between these components. The <b>Routes</b>{" "}
        component serves as a container for defining your routing configuration,
        and the <b>Route</b> components define individual routes with associated
        components. The <b>Outlet</b> component is used within layouts to render
        child routes. Together, these components help you create a navigational
        structure for your application.
      </p>
      <p>
        So, in simple terms, a router helps you decide what to show on your
        website when someone clicks on links or types in different web
        addresses. Routes are like directions, links help users move around, and
        outlets are spaces on your webpage where the content for different
        places can appear.
      </p>
    </>
  );
}
export default Home;
