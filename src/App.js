
import styles from "./App.module.css"; 
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Skills from "./Components/Skills";
import Background from "./Components/Background";
import Experience from "./Components/Experience";
import Project from "./Components/Project";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

function App() {
  return (

<div className={styles.App} style={{ display: 'grid', gap: 0 }}>
<Background/>
<Navbar/>
<Content/> 
<Skills/>
<Experience/>
<Project/>
<Education/>
<Contact/>
</div>

  );
}

export default App;
