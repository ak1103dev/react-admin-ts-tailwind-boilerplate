import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to="/login">Log in</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}
