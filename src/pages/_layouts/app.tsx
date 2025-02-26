import { Outlet } from "react-router-dom";
import Header from "../../components/header";

export function AppLayout() {
  return (
    <main className=" bg-gray-00 h-dvh  w-ful antialiased ">
      <Header />
      <main className="max-w-5xl flex px-2 md:block md:px-4 h-dvh mx-auto  justify-center md:justify-normal ">
        <Outlet />
      </main>
    </main>
  );
}
//max-w-5xl flex md:block h-dvh mx-auto  md:justify-center
