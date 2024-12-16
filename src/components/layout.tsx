import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { DockMenu } from "./dock-menu";
import { MobileMenu } from "./mobile-menu";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <DockMenu />
      <MobileMenu />
    </div>
  );
}
