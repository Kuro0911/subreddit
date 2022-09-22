import "./App.css";
import { About } from "./components/about/About";
import { Banner } from "./components/banner/Banner";
import { Navbar } from "./components/navbar/Navbar";
import { Post } from "./components/post/Post";
import { Sortbar } from "./components/sortbar/Sortbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="wrapper">
        <div className="center">
          <Sortbar />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <About />
      </div>
    </div>
  );
}

export default App;
