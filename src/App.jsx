import './App.css'
import OurRecentBlogs from './components/OurRecentBlogs'
import OurClientReviews from './components/OurClientReviews'
import ContactSection from './components/ContactSection'
import HeaderHero from './components/HeaderHero'  // ✅ Make sure component name matches
import Footer from './components/Footer'
import OurProjects from './components/OurProjects'
import WhyChoose from './components/WhyChoose'
import Header from './components/Header'

function App() {
  return (
    <div className="w-full min-h-screen"> 
      <Header/>
      <HeaderHero />
      <WhyChoose />
      <OurProjects />
      <OurClientReviews />
      <OurRecentBlogs />
      <ContactSection />
      <Footer />
    </div>
  )
}


export default App