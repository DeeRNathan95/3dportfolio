import React from 'react'
import Hero from "./components/sections/Hero.jsx";
import ShowcaseSection from "./components/sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import FeatureCards from "./components/sections/FeatureCards.jsx";
import ExperienceSection from "./components/sections/ExperienceSection.jsx";


const App = () => {
    return (
       <>
           <NavBar />
       <Hero />
           <ShowcaseSection />
           <FeatureCards />
           <ExperienceSection />
       </>
    )
}
export default App
