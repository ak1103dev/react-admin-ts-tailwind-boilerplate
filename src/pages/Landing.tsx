import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="flex flex-col justify-center items-center container">
      <h1>Landing Page</h1>
      <div className="flex justify-between w-60">
        <Link className="bg-blue-700 text-white" to="/login">Log in</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}
