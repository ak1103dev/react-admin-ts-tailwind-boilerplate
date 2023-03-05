import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Fragment>
      <div>Login</div>
      <Link to="/dashboard">Log in</Link>
    </Fragment>
  );
}
