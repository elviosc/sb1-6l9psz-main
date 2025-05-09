import { useEffect, useRef } from "react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}

export function HeroSection({
  title = "Dermatologia Especializada",
  subtitle = "Dra. Luciana Maluf",
  description = "Mais de 20 anos de experiência em dermatologia clínica e estética, oferecendo tratamentos personalizados e resultados excepcionais.",
  children
}: HeroSectionProps) {
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
              transform: 'translate(-50%, -50%) scale(1.5)',
              border: 'none',
              pointerEvents: 'none',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-screen h-screen bg-gradient-to-r from-[#6f0d44]/80 to-[#6f0d44]/60" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-32 bg-white/30" />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-tight">
                {subtitle && <span className="block mb-2 text-2xl md:text-3xl text-white/80">{subtitle}</span>}
                {title.split('<br/>').map((part, i) => (
                  <span key={i} className={i > 0 ? "font-semibold block" : "block"}>{part}</span>
                ))}
              </h1>
            </div>

            <p className="text-lg md:text-2xl mb-8 text-white/90 font-light leading-relaxed">
              {description}
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

            {children}

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
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
