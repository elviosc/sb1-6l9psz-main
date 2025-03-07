import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  videoUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({
  title,
  subtitle,
  description,
  image = "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg",
  imageAlt = "Dra. Luciana Maluf em sua clínica",
  videoUrl,
  className,
  children,
}: PageHeroProps) {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Function to handle video resizing
    const handleResize = () => {
      if (videoRef.current) {
        const container = videoRef.current.parentElement;
        if (container) {
          const { width, height } = container.getBoundingClientRect();
          const aspectRatio = 16 / 9;
          let videoWidth = width;
          let videoHeight = width / aspectRatio;

          if (videoHeight < height) {
            videoHeight = height;
            videoWidth = height * aspectRatio;
          }

          videoRef.current.style.width = `${videoWidth}px`;
          videoRef.current.style.height = `${videoHeight}px`;
          videoRef.current.style.left = `${(width - videoWidth) / 2}px`;
          videoRef.current.style.top = `${(height - videoHeight) / 2}px`;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={cn("relative min-h-[85vh] overflow-hidden", className)}>
      {/* Background Image and Video */}
      <div className="absolute inset-0">
        <div className="relative h-full">
          <img
            src={image}
            alt={imageAlt}
            className="absolute w-full h-full object-cover"
          />
          {videoUrl && (
            <div className="absolute inset-0 pointer-events-none">
              <iframe
                ref={videoRef}
                className="absolute"
                src={`${videoUrl}?controls=0&autoplay=1&mute=1&loop=1&playlist=${videoUrl.split('/').pop()}&playsinline=1&rel=0&enablejsapi=1&origin=${window.location.origin}&widgetid=1`}
                title="Background video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                style={{
                  position: 'absolute',
                  pointerEvents: 'none',
                }}
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6f0d44]/95 via-[#6f0d44]/80 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative container h-full">
        <div className="flex flex-col justify-center h-full min-h-[85vh] max-w-3xl pl-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 w-1 h-32 bg-white/30" />
            {subtitle && (
              <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 text-white mb-6">
                <span className="text-sm">{subtitle}</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            )}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-tight">
              {title}
            </h1>
          </motion.div>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl mb-8 text-white/90 font-light leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
