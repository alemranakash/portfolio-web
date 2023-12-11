import AboutMe from "./Components/AboutMe"
import Banner from "./Components/Banner"
import Contact from "./Components/Contact"
import Experience from "./Components/Experience"
import Footer from "./Components/Footer"

import Introduction from "./Components/Introduction"
import Project from "./Components/Project/Project"
import ResumeDownload from "./Components/ResumeDownload"
import Skills from "./Components/Skills"
import Study from "./Components/Study"


function App() {


  return (
    <>
      <div className="max-w-screen-xl mx-auto">
<Banner></Banner>
<Introduction></Introduction>
<AboutMe></AboutMe>
        <ResumeDownload></ResumeDownload>
        <Skills></Skills>
        <Project></Project>
        <Experience></Experience>
        <Study></Study>
<Contact></Contact>
<Footer></Footer>

      </div>
    </>
  )
}

export default App
