import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, pageHeight }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Calcula la escala en función de la altura de la página
  const scaleFactor = pageHeight < 700 ? 0.5 : 0.75;

  return (
    <mesh>
            <ambientLight intensity={0.5} /> {/* Luz ambiental para iluminar toda la escena */}
      <hemisphereLight intensity={0.5} groundColor={0xffffff} /> {/* Luz hemisférica para iluminar desde arriba */}
      <pointLight intensity={0.8} position={[10, 10, 10]} /> {/* Luz puntual desde un punto */}
      <spotLight
        intensity={1}
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        distance={200}
        decay={2}
        castShadow
      />
      <primitive
        object={computer.scene}
        scale={[scaleFactor, scaleFactor, scaleFactor]} // Usa la escala calculada
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Actualiza la altura de la página cuando cambie el tamaño de la ventana
    const handleResize = () => {
      setPageHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} pageHeight={pageHeight} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
