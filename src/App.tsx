import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DockMenu } from "@/components/dock-menu";

// Pages
import { HomePage } from "./pages/home";
import { ProfilePage } from "./pages/profile";
import { ClinicPage } from "./pages/clinic";
import { CoursesPage } from "./pages/courses";
import { ContactPage } from "./pages/contact";

// Articles Pages
import { PressPage } from "./pages/articles/press";
import { VideosPage } from "./pages/articles/videos";
import { BlogPage } from "./pages/articles/blog";
import { BlogPostPage } from "./pages/articles/blog/[slug]";

// Contact Pages
import { CareersPage } from "./pages/contact/careers";
import { AppointmentPage } from "./pages/contact/appointment";
import { LocationPage } from "./pages/contact/location";

// Treatment Pages
import { PDOThreadsPage } from "./pages/treatments/fios-pdo/index";
import { HarmonizacaoFacialPage } from "./pages/treatments/harmonizacao-facial/index";

export function App() {
  return (
    <>
      <Header />
      <DockMenu />
      <main>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/clinic" element={<ClinicPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Press Routes */}
          <Route path="/press" element={<PressPage />} />
          <Route path="/articles/press" element={<PressPage />} />

          {/* Articles Routes */}
          <Route path="/articles">
            <Route path="videos" element={<VideosPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogPostPage />} />
          </Route>

          {/* Treatment Routes */}
          <Route path="/treatments">
            <Route path="fios-pdo" element={<PDOThreadsPage />} />
            <Route path="harmonizacao-facial" element={<HarmonizacaoFacialPage />} />
          </Route>

          {/* Contact Routes */}
          <Route path="/contact">
            <Route path="careers" element={<CareersPage />} />
            <Route path="appointment" element={<AppointmentPage />} />
            <Route path="location" element={<LocationPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}