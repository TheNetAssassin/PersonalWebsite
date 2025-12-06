import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Showcase from "./components/Showcase.jsx";
import Socialmedia from "./components/socialmedia.jsx";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Profile />
      <Education />
      <Skills />
      <Showcase />
      <Socialmedia />
    </div>
  );
}
