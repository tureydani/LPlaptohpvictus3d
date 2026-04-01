"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Color, LoopOnce, MathUtils } from "three";

function ProductModel({ modelPath }) {
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, group);
  const rgbMaterials = useMemo(() => {
    const materials = [];
    scene.traverse((child) => {
      if (!child.isMesh) {
        return;
      }
      const meshMaterials = Array.isArray(child.material)
        ? child.material
        : [child.material];
      meshMaterials.forEach((material) => {
        if (!material) {
          return;
        }
        const name = material.name ? material.name.toLowerCase() : "";
        if (name === "rgb1" || name.includes("rgb1")) {
          materials.push(material);
        }
      });
    });
    return materials;
  }, [scene]);

  useEffect(() => {
    if (!actions) {
      return;
    }
    Object.values(actions).forEach((action) => {
      if (!action) {
        return;
      }
      action.reset();
      action.setLoop(LoopOnce, 1);
      action.clampWhenFinished = true;
      action.fadeIn(0.6).play();
    });
  }, [actions]);

  useEffect(() => {
    if (rgbMaterials.length === 0) {
      return;
    }
    rgbMaterials.forEach((material) => {
      if (!material.emissive) {
        return;
      }
      material.emissive = new Color(0xff0000);
      material.emissiveIntensity = 1.2;
      material.needsUpdate = true;
    });
  }, [rgbMaterials]);

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }
    const pointerX = hovered ? state.pointer.x : 0;
    const pointerY = hovered ? state.pointer.y : 0;

    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      pointerX * 0.6,
      4,
      delta
    );
    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      -pointerY * 0.4,
      4,
      delta
    );
    group.current.rotation.y += delta * 0.15;

    if (rgbMaterials.length > 0) {
      const time = state.clock.elapsedTime;
      const r = 0.5 + Math.sin(time * 2.2) * 0.5;
      const g = 0.5 + Math.sin(time * 2.2 + Math.PI * 0.6) * 0.5;
      const b = 0.5 + Math.sin(time * 2.2 + Math.PI * 1.2) * 0.5;
      rgbMaterials.forEach((material) => {
        if (!material.emissive) {
          return;
        }
        material.emissive.setRGB(r, g, b);
      });
    }
  });

  return (
    <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.25}>
      <group
        ref={group}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        dispose={null}
      >
        <primitive object={scene} />
      </group>
    </Float>
  );
}

export default function Scene({
  modelPath = "/models/laptop_hp_victus.glb",
  modelOffsetX = 0,
  modelOffsetY = -0.25,
  modelScale = 1,
}) {
  const cameraSettings = useMemo(
    () => ({ position: [0, 0.3, 3.2], fov: 40 }),
    []
  );

  return (
    <Canvas
      className="h-full w-full"
      camera={cameraSettings}
      dpr={[1, 2]}
      shadows
    >
      <color attach="background" args={["#0a0a0a"]} />
      <ambientLight intensity={0.7} />
      <directionalLight
        castShadow
        intensity={1.1}
        position={[2.4, 4, 2.2]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight intensity={0.5} position={[-3, 2, -2]} />

      <Suspense fallback={null}>
        <Environment preset="studio" />
        <group position={[modelOffsetX, modelOffsetY, 0]} scale={modelScale}>
          <ProductModel modelPath={modelPath} />
        </group>
        <ContactShadows
          position={[modelOffsetX, modelOffsetY - 0.85, 0]}
          opacity={0.45}
          scale={6}
          blur={2.2}
          far={3.5}
        />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.6}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 1.9}
      />
    </Canvas>
  );
}

useGLTF.preload("/models/laptop_hp_victus.glb");
useGLTF.preload("/models/impresora_hp_tank.glb");
useGLTF.preload("/models/mouse_hp_m160.glb");
