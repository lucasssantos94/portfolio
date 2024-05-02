import Container from "@/components/Container";
import { Metadata } from "next";

import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

import { FaSass } from "react-icons/fa6";

export const metadata: Metadata = {
    title: 'Portifólio | Sobre Mim'
}

export default function Sobre() {
    return (

        <Container>
            <section>

                <h2 className=" text-center text-2xl">Sobre Mim</h2>

                <div className="flex items-center justify-between my-10">

                    <div className="image">

                    </div>

                    <div className=" text-lg flex flex-col gap-5">
                        <p>
                            Tenho 29 anos e resido em Carapicuíba-SP. Sou casado e pai de três filhos. Desde muito jovem, desenvolvi uma paixão por informática. Aos 13 anos, iniciei um curso de montagem e manutenção de computadores e, aos 17 dei início à minha carreira na área como analista de suporte.
                        </p>

                        <p>
                            Embora não esteja mais atuando na área de tecnologia, minha paixão pelo setor continua forte. Atualmente, dedico-me intensamente ao estudo do desenvolvimento front-end, buscando constantemente expandir meus conhecimentos e desenvolver soluções e aplicações cada vez mais aprimoradas. Estou também em busca de oportunidades para ingressar na área de desenvolvimento, onde espero aplicar e ampliar ainda mais minhas habilidades.
                        </p>
                    </div>

                </div>

            </section>

            <section>
                <h2 className=" text-center text-2xl">Habilidades</h2>

                <div className="flex gap-8 justify-center my-10">
                    <div className="boxskill relative">
                        <FaHtml5 size={70} />
                        <span className="opacity-0 hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2">HTML5</span>
                    </div>

                    <div className="boxskill relative">
                        <FaCss3Alt size={70} />
                        <span className="opacity-0 hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2">CSS3</span>
                    </div>

                    <div className="boxskill relative">
                        <IoLogoJavascript size={70} />
                        <span className="opacity-0 hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2">Javascript</span>
                    </div>

                    <div className="boxskill relative">
                        <FaReact size={70} />
                        <span className="opacity-0 hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2">React</span>
                    </div>

                    <div className="boxskill relative">
                        <TbBrandNextjs size={70} />
                        <span className="opacity-0 hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2">Next</span>
                    </div>

                    <div className="boxskill relative">
                        <SiReactrouter size={70} />
                        <span className=" opacity-0 hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2">React-Router</span>
                    </div>

                    <div className="boxskill relative">
                        <SiTailwindcss size={70} />
                        <span className="opacity-0 hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2">TailwindCss</span>

                    </div>

                    <div className="boxskill relative">
                        <FaSass size={70} />
                        <span className="opacity-0 hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 text-center">SASS</span>
                    </div>
                </div>
            </section>
        </Container>

    )
}