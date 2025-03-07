import React from 'react';

export function VideoHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-60"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6f0d44]/70 to-[#6f0d44]/50" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-tight">
              Dermatologia<br />
              <span className="font-semibold">Especializada</span>
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-white/90 font-light leading-relaxed">
              Cuidados personalizados para sua pele com tecnologia avançada e resultados comprovados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
