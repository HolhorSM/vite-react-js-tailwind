import {} from "react";
import Navbar from "./components/navbar";
import SplitTextTitle from "./components/SplitText/index";
import VideoBackground from "./components/videoBackground";
import videoSrc from "./assets/pacifico37.mp4";
import Stack from "./components/Stack";
import Footer from "./components/footer";
import SimpleMap from "./components/customMap";
import "./index.css";

function App() {
  return (
    <div className="w-full h-screen">
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
      <div className="flex items-center justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mx-4 w-80 h-80 flex flex-col justify-center text-justify">
            <h1 className="font-vanitasb text-4xl">Lorem ipsum</h1>
            <p className="font-vanitasr text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              quia, modi nostrum dignissimos labore sapiente placeat animi magni
            </p>
          </div>
          <div className="flex justify-center mx-4 w-80 h-80">
            <Stack />
          </div>
        </div>
      </div>
      {/* widget */}
      <div className="justify-center mt-15">
        <div className="text-center">
          <h1 className="font-vanitasb text-4xl ">
            Lo que nuestros clientes dicen
          </h1>
        </div>
        <div
          className="elfsight-app-ee27dbe6-4b22-48b6-a31b-0626ff660eb9"
          data-elfsight-app-lazy
        ></div>
      </div>

      <div className=" justify-center mt-15">
        <div className="m-5">
          <h1 className="font-vanitasb text-4xl m-3">Contactanos</h1>
          <div>
            <div className="m-2 relative max-w-xs">
              <svg
                className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                xmlns=""
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="text"
                placeholder="correo@mail.com"
                className="w-full pl-12 pr-3 py-2  bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
            </div>

            <div className=" m-2 relative max-w-xs">
              <svg
                className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                xmlns=""
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <input
                type="text"
                placeholder="Nombre"
                className="w-full pl-12 pr-3 py-2  bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-black rounded-lg duration-150 hover:bg-white hover:text-black">
              Enviar
            </button>
          </div>
        </div>
        <SimpleMap />
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
