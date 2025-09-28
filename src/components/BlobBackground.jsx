// src/components/AestheticBlob.jsx
'use client'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function AestheticBlob() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (/Mobi|Android/i.test(navigator.userAgent)) return

    // 1. Setup Scene with soft background
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf8f0ff)
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    // 2. Create Cute Blob
    const blob = new THREE.Group()
    
    // Main body (soft morphing sphere)
    const bodyGeometry = new THREE.SphereGeometry(1, 64, 64)
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd6e7, // Soft pink
      roughness: 0.2,
      metalness: 0.1,
      transparent: true,
      opacity: 0.95,
      flatShading: true
    })
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
    blob.add(body)

    // Eyes (cute anime-style)
    const eyeGeometry = new THREE.CircleGeometry(0.15, 32)
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const eyeWhiteL = new THREE.Mesh(eyeGeometry, eyeMaterial)
    eyeWhiteL.position.set(0.35, 0.25, 0.95)
    const eyeWhiteR = new THREE.Mesh(eyeGeometry, eyeMaterial)
    eyeWhiteR.position.set(-0.35, 0.25, 0.95)

    // Pupils (slightly glossy)
    const pupilGeometry = new THREE.CircleGeometry(0.07, 32)
    const pupilMaterial = new THREE.MeshStandardMaterial({
      color: 0x5a3d7a, // Soft purple
      metalness: 0.3
    })
    const pupilL = new THREE.Mesh(pupilGeometry, pupilMaterial)
    pupilL.position.set(0.35, 0.25, 0.96)
    const pupilR = new THREE.Mesh(pupilGeometry, pupilMaterial)
    pupilR.position.set(-0.35, 0.25, 0.96)

    // Blush (soft circles)
    const blushGeometry = new THREE.CircleGeometry(0.12, 32)
    const blushMaterial = new THREE.MeshBasicMaterial({
      color: 0xffb6c1,
      transparent: true,
      opacity: 0.4
    })
    const blushL = new THREE.Mesh(blushGeometry, blushMaterial)
    blushL.position.set(0.65, -0.15, 0.9)
    const blushR = new THREE.Mesh(blushGeometry, blushMaterial)
    blushR.position.set(-0.65, -0.15, 0.9)

    // Mouth (cute curve)
    const mouthShape = new THREE.Shape()
    mouthShape.absarc(0, 0, 0.2, 0, Math.PI, false)
    const mouthGeometry = new THREE.ShapeGeometry(mouthShape)
    const mouthMaterial = new THREE.MeshBasicMaterial({ color: 0x5a3d7a })
    const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial)
    mouth.position.set(0, -0.15, 0.96)
    mouth.rotation.x = Math.PI

    blob.add(eyeWhiteL, eyeWhiteR, pupilL, pupilR, blushL, blushR, mouth)
    scene.add(blob)

    // 3. Studio Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xfff0f5, 0.8)
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight1.position.set(1, 1, 1)
    const directionalLight2 = new THREE.DirectionalLight(0xfff0f5, 0.5)
    directionalLight2.position.set(-1, -1, -1)
    scene.add(ambientLight, directionalLight1, directionalLight2)

    // 4. Camera Setup
    camera.position.z = 3
    camera.position.y = 0.3 // Slight top-down angle

    // 5. Delicate Animations
    const clock = new THREE.Clock()
    const animate = () => {
      const time = clock.getElapsedTime()
      
      // Gentle floating
      blob.position.y = Math.sin(time * 0.8) * 0.05
      
      // Subtle rotation
      blob.rotation.y = time * 0.1
      
      // Blinking (occasional)
      if (Math.sin(time * 0.5) > 0.9) {
        eyeWhiteL.scale.y = 0.05
        eyeWhiteR.scale.y = 0.05
      } else {
        eyeWhiteL.scale.y = 1
        eyeWhiteR.scale.y = 1
      }

      // Soft morphing effect
      body.scale.x = 1 + Math.sin(time * 0.7) * 0.03
      body.scale.y = 1 + Math.cos(time * 0.6) * 0.03

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div ref={mountRef} className="fixed inset-0 -z-10 pointer-events-none" 
      style={{ opacity: 0.8, mixBlendMode: 'soft-light' }} />
  )
}