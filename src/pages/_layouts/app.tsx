import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <main className=" antialiased">
      <main className="">
        <Outlet />
      </main>
    </main>
  );
}
