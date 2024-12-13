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
import { FiosPDO } from "./pages/treatments/fios-pdo/index";
import { HarmonizacaoFacialPage } from "./pages/treatments/harmonizacao-facial/index";
import { BioestimuladoresPage } from "./pages/treatments/bioestimuladores/index";
import { SkinboosterPage } from "./pages/treatments/skinbooster/index";
import { PreenchimentoPage } from "./pages/treatments/preenchimento/index";
import { ToxinaBotulinicaPage } from "./pages/treatments/toxina-botulinica/index";
import { PeelingPage } from "./pages/treatments/peeling/index";
import { EthnicSkinAcnePage } from "./pages/ethnic-skin/acne/index";
import { EthnicSkinMelasmaPage } from "./pages/ethnic-skin/melasma/index";

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
            <Route path="fios-pdo" element={<FiosPDO />} />
            <Route path="harmonizacao-facial" element={<HarmonizacaoFacialPage />} />
            <Route path="bioestimuladores" element={<BioestimuladoresPage />} />
            <Route path="skinbooster" element={<SkinboosterPage />} />
            <Route path="preenchimento" element={<PreenchimentoPage />} />
            <Route path="toxina-botulinica" element={<ToxinaBotulinicaPage />} />
            <Route path="peeling" element={<PeelingPage />} />
          </Route>

          {/* Ethnic Skin Routes */}
          <Route path="/ethnic-skin">
            <Route path="acne" element={<EthnicSkinAcnePage />} />
            <Route path="melasma" element={<EthnicSkinMelasmaPage />} />
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