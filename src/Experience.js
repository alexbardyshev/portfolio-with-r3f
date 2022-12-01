import {ContactShadows, Environment, Float, Html, PresentationControls, useGLTF} from '@react-three/drei';

export default function Experience() {
  const computer = new useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
  console.log(computer)

  return <>
    <Environment preset="city" background />
    <color args={ [ '#695b5b' ] } attach="background" />
    <PresentationControls
      global
      rotation={ [ 0.13, 0.1, 0 ] }
      polar={ [ -0.4, 0.2] }
      azimuth={ [ -1, 0.75 ] }
      config={ { mass: 2, tension: 400 } }
      snap={ { mass: 4, tension: 400 } }
    >
      <Float rotationIntensity={ 0.4 }>
        <primitive
          object={ computer.scene }
          position-y={ -1.2 }
        >
          <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={ 1.17 }
            position={[ 0, 1.56, -1.4 ]}
            rotation-x={ -0.256 }
          >
            <iframe src="http://oleksii.dev" />
          </Html>
        </primitive>
      </Float>
    </PresentationControls>

    <ContactShadows
      position-y={ - 1.4 }
      opacity={ 0.4 }
      scale={ 5 }
      blur={ 2.4 }
    />
  </>
}
