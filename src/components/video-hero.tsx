import { useEffect, useRef } from "react";

interface VideoHeroProps {
  children?: React.ReactNode;
}

export function VideoHero({ children }: VideoHeroProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const setupYouTubePlayer = () => {
      if (!window.YT) {
        setTimeout(setupYouTubePlayer, 100);
        return;
      }

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

    window.onYouTubeIframeAPIReady = setupYouTubePlayer;

    return () => {
      window.onYouTubeIframeAPIReady = () => {};
      // Clean up by setting to a no-op function instead of undefined
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Fallback */}
      <img
        src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-0"
      />

      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-full">
          <iframe
            ref={iframeRef}
            src="https://www.youtube-nocookie.com/embed/m4coMkLV6kU?controls=0&rel=0&playsinline=1&cc_load_policy=0&enablejsapi=1&autoplay=1&loop=1&mute=1&playlist=m4coMkLV6kU"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute top-1/2 left-1/2 w-[250%] md:w-[150%] h-[250%] md:h-[150%] -translate-x-1/2 -translate-y-1/2 scale-125 md:scale-100"
            style={{ border: 0 }}
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6f0d44]/60 to-[#6f0d44]/40" />

      {/* Content */}
      <div className="relative h-full z-10">
        {children}
      </div>
    </section>
  );
}
