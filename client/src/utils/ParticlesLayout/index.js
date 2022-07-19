import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesLayout = ({ children, ...rest }) => {
  const particlesInit = async (main) => {
    //console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    //console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{ position: "fixed", zIndex: 1 }}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        fullScreen: { enable: false },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "bubble",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 170,
              lineLinked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 170,
              size: 40,
              opacity: 1,
              duration: 2,
              mix: true,              
            }
          },
        },
        particles: {
          color: {
            value: "#fff",
          },
          links: {
            color: "#fff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 70,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    >
      {children}
    </Particles>
  );
};

export default ParticlesLayout;
