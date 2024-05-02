import Container from "@/components/Container";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Portifólio | Contato'
}

export default function Contato() {
    return (
        <section>
            <Container>
                <div className="">

                    <h2 className=" text-center text-2xl mb-10">Entre em Contato</h2>

                    <form action="" className="w-96 mx-auto flex flex-col gap-4 ">

                        <input type="text" id="name" placeholder="Nome" required className="rounded-lg p-2 bg-stone-200 dark:bg-midnightBlue border-darkSlate border-2" />
                        <input type="email" id="name" placeholder="email" required className="rounded-lg p-2 bg-stone-200 dark:bg-midnightBlue border-darkSlate border-2" />
                        <textarea name="" id="" required placeholder="Mensagem" className="rounded-lg p-2 bg-stone-200 dark:bg-midnightBlue border-darkSlate border-2"></textarea>
                        <button type="submit" className="rounded-lg p-1 text-lightSalmon font-bold bg-stone-200 dark:bg-midnightBlue border-darkSlate border-2">Enviar</button>

                    </form>
                </div>
            </Container>
        </section>
    )
}