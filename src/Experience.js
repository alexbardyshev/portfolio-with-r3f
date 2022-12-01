import {Environment, Float, PresentationControls, useGLTF} from '@react-three/drei';

export default function Experience() {
  const computer = new useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
  console.log(computer)

  return <>
    <Environment preset="city" background />
    <color args={ [ '#695b5b' ] } attach="background" />
    <PresentationControls
      global
    >
      <Float rotationIntensity={ 0.4 }>
        <primitive
          object={ computer.scene }
          position-y={ -1.2 }
        />
      </Float>
    </PresentationControls>
    </>
}
