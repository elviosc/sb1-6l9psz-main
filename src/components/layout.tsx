import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { DockMenu } from "./dock-menu";
import { MobileMenu } from "./mobile-menu";
import { useEffect } from "react";

export function Layout() {
  // Handle viewport height for mobile browsers
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
