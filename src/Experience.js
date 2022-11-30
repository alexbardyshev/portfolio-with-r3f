import { OrbitControls } from '@react-three/drei'

export default function Experience()
{
    return <>
        <color args={ [ '#695b5b' ] } attach="background" />

        <OrbitControls makeDefault />

        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>

    </>
}
