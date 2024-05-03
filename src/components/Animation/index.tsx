'use client'

import { Player, Controls } from '@lottiefiles/react-lottie-player'
import * as animationData from '../../../public/animation.json'

export default function Animation() {
    return (
        <div className="illustration w-[400px] h-[400px]">
            <Player
                autoplay
                loop
                src={animationData}
                style={{ width: '100%', height: '100%' }}

            >
                <Controls visible={false} />

            </Player>


        </div>
    )
}



