const VideoBackground = ({ videoSrc, children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Contenido centrado */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
