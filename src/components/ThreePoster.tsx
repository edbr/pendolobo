"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface ThreePosterProps {
  imageUrl: string;
}

export function ThreePoster({ imageUrl }: ThreePosterProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // 🌌 Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 9.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // ✨ Determine if this is a "tall" poster (like Casbah)
    const isTall = imageUrl.toLowerCase().includes("casba");

    // 🎨 Load texture
    const loader = new THREE.TextureLoader();
    const texture = loader.load(imageUrl, () => setLoading(false));

    // 🪵 Create edge texture
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#5a3a1a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(255,191,0,0.25)";
    for (let y = 0; y < canvas.height; y += 3) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    const deckEdgeTexture = new THREE.CanvasTexture(canvas);

    // 🧱 Dynamic geometry based on aspect
    const geometry = new THREE.BoxGeometry(
      isTall ? 4.2 : 4.6, // narrower for tall images
      isTall ? 8.0 : 6.6, // taller for Casbah
      0.15
    );

    // 🎨 Materials
    const frontMaterial = new THREE.MeshPhongMaterial({
      map: texture,
      shininess: 40,
      specular: new THREE.Color("#ffbf40"),
    });
    const edgeMaterial = new THREE.MeshPhongMaterial({
      map: deckEdgeTexture,
      shininess: 10,
      color: new THREE.Color("#a87a3f"),
    });

    const card = new THREE.Mesh(
      geometry,
      [edgeMaterial, edgeMaterial, edgeMaterial, edgeMaterial, frontMaterial, frontMaterial]
    );
    scene.add(card);

    // 🌟 Add subtle glow plane behind poster
    const glowGeometry = new THREE.PlaneGeometry(isTall ? 5.5 : 6, isTall ? 9.8 : 7.5);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xffbf40),
      transparent: true,
      opacity: 0.08,
    });
    const glowPlane = new THREE.Mesh(glowGeometry, glowMaterial);
    glowPlane.position.z = -0.2;
    scene.add(glowPlane);

    // 🌀 Lights
    const ambient = new THREE.AmbientLight(0xffddaa, 0.6);
    const keyLight = new THREE.PointLight(0xffbf40, 1.2);
    keyLight.position.set(5, 5, 6);
    const rimLight = new THREE.PointLight(0xff6699, 0.4);
    rimLight.position.set(-4, -3, -6);
    scene.add(ambient, keyLight, rimLight);

    // 🎮 Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;

// 🌀 Animate rotation with natural variance
const rotationOffset = Math.random() * Math.PI * 2; // unique starting phase
const rotationSpeed = 0.002 + Math.random() * 0.002; // varied spin speed
const direction = Math.random() > 0.5 ? 1 : -1; // some clockwise, some counter

const animate = (time = 0) => {
  requestAnimationFrame(animate);

  // organic rotation + wobble
  const wobble = Math.sin(time * 0.001 + rotationOffset) * 0.15;

  card.rotation.y += direction * rotationSpeed;
  card.rotation.x = wobble * 0.3;

  glowPlane.rotation.y = card.rotation.y;
  glowPlane.rotation.x = card.rotation.x;

  controls.update();
  renderer.render(scene, camera);
};

animate();


    // 🧹 Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [imageUrl]);

  return (
    <div className="relative aspect-3/4 w-full max-w-[360px] rounded-xl overflow-visible">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10">
          <div className="h-6 w-6 border-2 border-amber-300 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
}
