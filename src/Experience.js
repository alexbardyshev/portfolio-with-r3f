import {OrbitControls, useGLTF} from '@react-three/drei';

export default function Experience() {
  const computer = new useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
  console.log(computer)

  return <>
    <color args={ [ '#695b5b' ] } attach="background" />

    <OrbitControls makeDefault />

    <mesh>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>

    <primitive object={ computer.scene } />

    </>
}
