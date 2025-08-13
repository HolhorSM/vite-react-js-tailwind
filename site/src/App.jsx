import {} from "react";
import Navbar from "./components/navbar";
import SplitTextTitle from "./components/SplitText/index";
import VideoBackground from "./components/videoBackground";
import videoSrc from "./assets/pacifico37.mp4";
import Stack from "./components/Stack";
import "./index.css";

function App() {
  return (
    <div div class="@container">
      <Navbar />
      <VideoBackground videoSrc={videoSrc}>
        <div className="flex flex-col items-center gap-4">
          <SplitTextTitle
            text="Pacifico 37"
            className="text-2xl font-semibold text-center m-2"
            delay={10}
            duration={2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <p className="font-vanitasr text-2xl">Tu Lugar en la tranquilidad</p>

          <button className="flex items-center gap-2 px-4 py-2 text-white bg-black rounded-lg duration-150 hover:bg-white hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                clipRule="evenodd"
              />
            </svg>
            Contactar
          </button>
        </div>
      </VideoBackground>
      <div className="grid grid-cols-2 gap-1 justify-center mt-6">
        <div>
          <h1>hola</h1>
        </div>
        <div>
          <Stack />
        </div>
      </div>
    </div>
  );
}

export default App;
