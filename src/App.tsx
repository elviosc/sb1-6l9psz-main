import { Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { DockMenu } from "@/components/dock-menu";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { MarketingScripts } from "@/components/MarketingScripts";
import { Layout } from "./components/layout";
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
import { BrazilianSkinFotoenvelhecimentoPage } from "./pages/brazilian-skin/fotoenvelhecimento";
import { BrazilianSkinMorenaPage } from "./pages/brazilian-skin/morena";
import { BrazilianSkinMiscigenadaPage } from "./pages/brazilian-skin/miscigenada";
import { BrazilianSkinManchasSolaresPage } from "./pages/brazilian-skin/manchas-solares";
import { AppointmentPage } from "./pages/contact/appointment";
import { LocationPage } from "./pages/contact/location";
import { CareersPage } from "./pages/careers";
import { Header } from "@/components/header";

function App() {
  return (
    <HelmetProvider>
      <BookmarkProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="clinic" element={<ClinicPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="ethnic-skin" element={<EthnicSkinPage />} />
            <Route path="brazilian-skin">
              <Route index element={<BrazilianSkinPage />} />
              <Route path="fotoenvelhecimento" element={<BrazilianSkinFotoenvelhecimentoPage />} />
              <Route path="morena" element={<BrazilianSkinMorenaPage />} />
              <Route path="miscigenada" element={<BrazilianSkinMiscigenadaPage />} />
              <Route path="manchas-solares" element={<BrazilianSkinManchasSolaresPage />} />
            </Route>
            <Route path="treatments">
              <Route index element={<TreatmentsPage />} />
              <Route path="toxina-botulinica" element={<ToxinaBotulinicaPage />} />
              <Route path="fios-pdo" element={<FiosPDOPage />} />
              <Route path="harmonizacao-facial" element={<HarmonizacaoFacialPage />} />
              <Route path="peeling" element={<PeelingPage />} />
            </Route>
            <Route path="press" element={<PressPage />} />
            <Route path="articles">
              <Route path="blog">
                <Route index element={<Navigate to="/articles/blog/all" replace />} />
                <Route path="all" element={<BlogListPage />} />
                <Route path=":slug" element={<BlogPostPage />} />
              </Route>
              <Route path="videos" element={<VideosPage />} />
            </Route>
            <Route path="careers" element={<CareersPage />} />
            <Route path="contact">
              <Route path="appointment" element={<AppointmentPage />} />
              <Route path="location" element={<LocationPage />} />
            </Route>
          </Route>
        </Routes>
        <Toaster />
        <DockMenu />
        <WhatsAppButton />
        <MarketingScripts />
      </BookmarkProvider>
    </HelmetProvider>
  );
}

export default App;