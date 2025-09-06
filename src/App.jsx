import './App.css'
import OurRecentBlogs from './components/OurRecentBlogs'
import OurClientReviews from './components/OurClientReviews'
import ContactSection from './components/ContactSection'
import HeaderHero from './components/HeaderHero'  // ✅ Make sure component name matches
import Footer from './components/Footer'
import ProjectsSlider from './components/OurProjects'
import OurProjects from './components/OurProjects'

function App() {
  return (
    <div className="w-full min-h-screen"> 
      <HeaderHero />
      <OurProjects />
      <OurClientReviews />
      <OurRecentBlogs />
      <ContactSection />
      <Footer />
    </div>
  )
}


export default App