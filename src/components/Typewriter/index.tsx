"use client"

import { Typewriter } from "react-simple-typewriter"

export default function Type() {
    return (
        <Typewriter
            words={['Front-end Developer', 'HTML & CSS', 'Javascript', 'React']}
            loop
            cursor
            typeSpeed={130}

        />
    )
}