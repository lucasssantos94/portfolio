import Carrousel from "@/components/Carrousel";
import Container from "@/components/Container";

import SimpleSlider from "@/components/Carrousel";


import { ProjectProps } from "@/utils/types/project";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Portifólio | Projetos'
}

async function getData() {
    const response = await fetch('http://api.github.com/users/lucasssantos94/repos')
    return response.json()
}

export default async function Projetos() {
    const data: ProjectProps[] = await getData()

    const projects = data.filter((project) => project.homepage)

    return (
        <section>
            <Container>
                <h2 className="text-center text-2xl">Meus Projetos</h2>

            </Container>

            <SimpleSlider data={projects} />
        </section>
    )
}