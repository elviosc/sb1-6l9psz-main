import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const setupYouTubePlayer = () => {
      // @ts-ignore
      if (!window.YT) {
        setTimeout(setupYouTubePlayer, 100);
        return;
      }

      // @ts-ignore
      new window.YT.Player(iframeRef.current, {
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            event.target.mute();
          },
          onStateChange: (event: any) => {
            if (event.data === 0) {
              event.target.playVideo();
            }
          }
        }
      });
    };

    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // @ts-ignore
    window.onYouTubeIframeAPIReady = setupYouTubePlayer;

    return () => {
      // @ts-ignore
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-screen h-screen bg-[#6f0d44]">
        <div className="relative w-full h-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            ref={iframeRef}
            src="https://www.youtube-nocookie.com/embed/m4coMkLV6kU?controls=0&rel=0&playsinline=1&cc_load_policy=0&enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=m4coMkLV6kU"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '100vh',
              transform: 'translate(-50%, -50%) scale(1.5)', // Aumenta o tamanho do vídeo para cobrir toda a tela
              border: 'none',
              pointerEvents: 'none',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* Gradient Overlay mais escuro para melhorar a legibilidade */}
      <div className="absolute inset-0 w-screen h-screen bg-gradient-to-r from-[#6f0d44]/80 to-[#6f0d44]/60" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-32 bg-white/30" />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-tight">
                Dermatologia<br />
                <span className="font-semibold">Especializada</span>
              </h1>
            </div>

            <p className="text-lg md:text-2xl mb-8 text-white/90 font-light leading-relaxed">
              Cuidados personalizados para sua pele com tecnologia avançada e resultados comprovados
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 md:hidden">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                <div className="text-3xl font-light text-white mb-2">20+</div>
                <div className="text-white/80 text-sm">Anos de Experiência</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                <div className="text-3xl font-light text-white mb-2">7k+</div>
                <div className="text-white/80 text-sm">Pacientes Atendidos</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact/appointment"
                className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-10 rounded-md bg-white text-[#6f0d44] hover:bg-white/90 hover:text-[#6f0d44] text-base md:text-lg px-6 md:px-8 transition-all duration-300 group w-full sm:w-auto"
              >
                Agende sua Consulta
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              <Link
                to="/treatments"
                className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:text-accent-foreground h-10 rounded-md bg-[#6f0d44] text-white hover:bg-[#8b1155] border-none text-base md:text-lg px-6 md:px-8 transition-all duration-300 w-full sm:w-auto"
              >
                Conheça os Tratamentos
              </Link>
            </div>
          </div>

          <div className="hidden md:flex absolute bottom-8 md:bottom-32 right-4 lg:right-32 flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg border border-white/20 w-48">
              <div className="text-3xl md:text-4xl font-light text-white mb-2">20+</div>
              <div className="text-white/80 text-sm">Anos de Experiência</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg border border-white/20 w-48">
              <div className="text-3xl md:text-4xl font-light text-white mb-2">7k+</div>
              <div className="text-white/80 text-sm">Pacientes Atendidos</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
