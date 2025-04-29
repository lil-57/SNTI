import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout"
import HomePage from "./pages/home"
import ServicesPage from "./pages/services"
import AboutPage from "./pages/about"
import ProjectsPage from "./pages/projects"
import ContactPage from "./pages/contact"
import ProjectDetailPage from "./pages/project-detail" 
import { ScrollToTop } from "./components/utils/ScrollToTop"

import MentionsLegalesPage from "./pages/mentions-legales"
import PolitiqueConfidentialitePage from "./pages/politique-confidentialite"
import CgvPage from "./pages/cgv"

import { ToastProvider } from "./components/ui/toast-provider"


function App() {
  return (
    <ToastProvider>
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} /> {/* ✅ dynamique */}        
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal/mentions-legales" element={<MentionsLegalesPage />} />
        <Route path="/legal/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
        <Route path="/legal/cgv" element={<CgvPage />} />
      </Routes>
    </Layout>
    </ToastProvider>
  )
}

export default App
