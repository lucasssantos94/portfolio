import { ProjectProps } from "@/utils/types/project"
import Image from "next/image"

export default function CardProject({ project }: { project: ProjectProps }) {

    const urlImageRepo = `https://raw.githubusercontent.com/lucasssantos94/${project.name}/${project.default_branch}/repoimage.png`

    return (
        <div className="w-full  h-full text-center px-8">

            <div className="w-full h-96 relative rounded-lg pt-96">
                <Image
                    src={urlImageRepo}
                    alt={`imagem do projeto ${project.name}`}
                    priority={true}
                    quality={100}
                    fill={true}
                    className='max-h-96 object-cover rounded-lg'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 44vw'
                />
            </div>


            <h3>{project.name}</h3>

            <a href={project['html_url']} target="_blank">
                <button className="w-full bg-white text-cyan-800 mb-4">Código</button>
            </a>
            <a href={project.homepage} target="_blank" >
                <button className="w-full text-cyan-800 bg-white">Deploy</button>
            </a>
        </div>
    )
}