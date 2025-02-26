import { Outlet } from "react-router-dom";
import Header from "../../components/header";

export function AppLayout() {
  return (
    <main className=" bg-gray-00 w-ful antialiased ">
      <Header />
      <main className="max-w-5xl h-dvh sm:mx-auto  mx-5">
        <Outlet />
      </main>
    </main>
  );
}
