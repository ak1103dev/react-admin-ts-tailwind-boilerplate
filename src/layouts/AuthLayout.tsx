import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="container flex mx-auto my-0">
      <Outlet />
    </div>
  )
}
