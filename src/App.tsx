import { Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { DockMenu } from "@/components/dock-menu";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { MarketingScripts } from "@/components/MarketingScripts";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { ClinicPage } from "./pages/clinic";
import { ContactPage } from "./pages/contact";
import { EthnicSkinPage } from "./pages/ethnic-skin";
import { BrazilianSkinPage } from "./pages/brazilian-skin";
import TreatmentsPage from "./pages/treatments";
import PressPage from "./pages/press";
import { BlogListPage } from "./pages/articles/blog/all/index";
import { BlogPostPage } from "./pages/articles/blog/[slug]";
import { VideosPage } from "./pages/articles/videos";
import { BookmarkProvider } from "@/contexts/bookmark-context";
import { ToxinaBotulinicaPage } from "./pages/treatments/toxina-botulinica";
import { FiosPDOPage } from "./pages/treatments/fios-pdo";
import { HarmonizacaoFacialPage } from "./pages/treatments/harmonizacao-facial";
import { PeelingPage } from "./pages/treatments/peeling";
import { BioestimuladoresPage } from "./pages/treatments/bioestimuladores";
import { LaserPage } from "./pages/treatments/laser";
import { PreenchimentoPage } from "./pages/treatments/preenchimento";
import { SkinboosterPage } from "./pages/treatments/skinbooster";
import { BrazilianSkinFotoenvelhecimentoPage } from "./pages/brazilian-skin/fotoenvelhecimento";
import { BrazilianSkinMorenaPage } from "./pages/brazilian-skin/morena";
import { BrazilianSkinMiscigenadaPage } from "./pages/brazilian-skin/miscigenada";
import { BrazilianSkinManchasSolaresPage } from "./pages/brazilian-skin/manchas-solares";
import { AppointmentPage } from "./pages/contact/appointment";
import { LocationPage } from "./pages/contact/location";
import { ProfilePage } from "./pages/profile";
import { CoursesPage } from "./pages/courses";
import { MelasmaPage } from "./pages/ethnic-skin/melasma";
import { AcnePage } from "./pages/ethnic-skin/acne";
import { HyperpigmentationPage } from "./pages/ethnic-skin/hyperpigmentation";
import { ScarsPage } from "./pages/ethnic-skin/scars";
import { FacialHarmonizationArticlePage } from "./pages/articles/facial-harmonization";
import { FacialRejuvenationArticlePage } from "./pages/articles/facial-rejuvenation";
import { SkincareGuideArticlePage } from "./pages/articles/skincare-guide";

function App() {
  return (
    <HelmetProvider>
      <BookmarkProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="clinic" element={<ClinicPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="contact/appointment" element={<AppointmentPage />} />
              <Route path="contact/location" element={<LocationPage />} />
              <Route path="ethnic-skin" element={<EthnicSkinPage />} />
              <Route path="ethnic-skin/melasma" element={<MelasmaPage />} />
              <Route path="ethnic-skin/acne" element={<AcnePage />} />
              <Route path="ethnic-skin/hyperpigmentation" element={<HyperpigmentationPage />} />
              <Route path="ethnic-skin/scars" element={<ScarsPage />} />
              <Route path="brazilian-skin" element={<BrazilianSkinPage />} />
              <Route path="brazilian-skin/fotoenvelhecimento" element={<BrazilianSkinFotoenvelhecimentoPage />} />
              <Route path="brazilian-skin/morena" element={<BrazilianSkinMorenaPage />} />
              <Route path="brazilian-skin/miscigenada" element={<BrazilianSkinMiscigenadaPage />} />
              <Route path="brazilian-skin/manchas-solares" element={<BrazilianSkinManchasSolaresPage />} />
              <Route path="treatments" element={<TreatmentsPage />} />
              <Route path="treatments/bioestimuladores" element={<BioestimuladoresPage />} />
              <Route path="treatments/toxina-botulinica" element={<ToxinaBotulinicaPage />} />
              <Route path="treatments/fios-pdo" element={<FiosPDOPage />} />
              <Route path="treatments/harmonizacao-facial" element={<HarmonizacaoFacialPage />} />
              <Route path="treatments/peeling" element={<PeelingPage />} />
              <Route path="treatments/laser" element={<LaserPage />} />
              <Route path="treatments/preenchimento" element={<PreenchimentoPage />} />
              <Route path="treatments/skinbooster" element={<SkinboosterPage />} />
              <Route path="press" element={<PressPage />} />
              <Route path="articles">
                <Route index element={<Navigate to="/articles/blog/all" replace />} />
                <Route path="blog" element={<Navigate to="/articles/blog/all" replace />} />
                <Route path="blog/all" element={<BlogListPage />} />
                <Route path="blog/:slug" element={<BlogPostPage />} />
                <Route path="videos" element={<VideosPage />} />
                <Route path="facial-harmonization" element={<FacialHarmonizationArticlePage />} />
                <Route path="facial-rejuvenation" element={<FacialRejuvenationArticlePage />} />
                <Route path="skincare-guide" element={<SkincareGuideArticlePage />} />
              </Route>
              <Route path="courses" element={<CoursesPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
          <DockMenu />
          <WhatsAppButton />
          <MarketingScripts />
        </div>
      </BookmarkProvider>
    </HelmetProvider>
  );
}

export default App;