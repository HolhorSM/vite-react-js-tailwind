import {} from "react";
import Navbar from "./components/navbar";
import SplitTextTitle from "./components/SplitText/index";
import VideoBackground from "./components/videoBackground";
import videoSrc from "./assets/pacifico37.mp4";
import "./index.css";

function App() {
  return (
    <div div class="@container">
      <Navbar />
      <VideoBackground videoSrc={videoSrc}>
        <SplitTextTitle
          text="Tu nueva casa te espera!"
          className="text-2xl font-semibold text-center m-2"
          delay={60}
          duration={2}
          ease="bounce.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </VideoBackground>
    </div>
  );
}

export default App;
