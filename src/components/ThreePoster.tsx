"use client"

import * as THREE from "three"
import { useEffect, useRef, useState } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

interface ThreePosterProps {
  imageUrl: string
}

export function ThreePoster({ imageUrl }: ThreePosterProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!mountRef.current) return

    // 🧹 Clear previous renderer on hot reload
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild)
    }

    // 🎬 Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      50,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 9.5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mountRef.current.appendChild(renderer.domElement)

    // 🧠 Tall aspect detection
    const isTall = imageUrl.toLowerCase().includes("casba")

    // 🖼️ Load texture
    const loader = new THREE.TextureLoader()
    const texture = loader.load(imageUrl, () => setLoading(false))

    // 🪵 Edge texture
    const edgeCanvas = document.createElement("canvas")
    edgeCanvas.width = 256
    edgeCanvas.height = 256
    const ctx = edgeCanvas.getContext("2d")!
    ctx.fillStyle = "#5a3a1a"
    ctx.fillRect(0, 0, edgeCanvas.width, edgeCanvas.height)
    ctx.strokeStyle = "rgba(255,191,0,0.25)"
    for (let y = 0; y < edgeCanvas.height; y += 3) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(edgeCanvas.width, y)
      ctx.stroke()
    }
    const edgeTexture = new THREE.CanvasTexture(edgeCanvas)

    // 🧱 Geometry
    const geometry = new THREE.BoxGeometry(
      isTall ? 4.2 : 4.6,
      isTall ? 8.0 : 6.6,
      0.15
    )

    const frontMaterial = new THREE.MeshPhongMaterial({
      map: texture,
      shininess: 60,
      specular: new THREE.Color("#ffbf40"),
    })
    const edgeMaterial = new THREE.MeshPhongMaterial({
      map: edgeTexture,
      color: new THREE.Color("#a87a3f"),
    })

    const card = new THREE.Mesh(
      geometry,
      [edgeMaterial, edgeMaterial, edgeMaterial, edgeMaterial, frontMaterial, frontMaterial]
    )
    scene.add(card)

    // 🌟 Glow plane
    const glowGeometry = new THREE.PlaneGeometry(
      isTall ? 5.8 : 6.2,
      isTall ? 9.8 : 7.5
    )
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xffbf40),
      transparent: true,
      opacity: 0.08,
    })
    const glowPlane = new THREE.Mesh(glowGeometry, glowMaterial)
    glowPlane.position.z = -0.3
    scene.add(glowPlane)

    // 💡 Lights
    scene.add(new THREE.AmbientLight(0xffddaa, 0.7))
    const key = new THREE.PointLight(0xffbf40, 1.2)
    key.position.set(5, 5, 6)
    const rim = new THREE.PointLight(0xff6699, 0.4)
    rim.position.set(-4, -3, -6)
    scene.add(key, rim)

    // 🎮 Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.enableDamping = true

    // 🔁 Animate
    const animate = () => {
      requestAnimationFrame(animate)
      card.rotation.y += 0.003
      glowPlane.rotation.y += 0.003
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // 🧹 Cleanup
    return () => {
      renderer.dispose()
      scene.clear()
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [imageUrl])

  return (
    <div className="relative aspect-3/4 w-full max-w-[360px] rounded-xl overflow-visible">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10">
          <div className="h-6 w-6 border-2 border-amber-300 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <div ref={mountRef} className="w-full h-full" />
    </div>
  )
}
