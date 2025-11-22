import { IProject } from "./types";

export const projects = <IProject[]>[
  {
    id: "1",
    title: "ReactFlix",
    description:
      "Uma aplicação moderna de catálogo de filmes e séries desenvolvida em React com TypeScript, oferecendo uma experiência cinematográfica completa e intuitiva.",
    image:
      "https://github.com/lucasssantos94/ReactFlix/blob/main/public/reactflix.png?raw=true",
    link: "https://react-flix-indol.vercel.app/",
    stack: ["React", "TypeScript", "ShadCn"],
  },
  {
    id: "2",
    title: "VNW - Livros",
    description:
      "Este projeto foi desenvolvido como parte do desafio final do bootcamp FullStack oferecido pelo programa Vai Na Web.",
    image:
      "https://github.com/lucasssantos94/vnw-livros/blob/main/public/screenshots/vnw-livros.png?raw=true",
    link: "https://vnw-livros.vercel.app/",
    stack: ["flask", "React"],
  },
  {
    id: "3",
    title: "Pokédex",
    description:
      "Uma aplicação web interativa que simula uma Pokédex digital, permitindo aos usuários explorar e pesquisar informações sobre diferentes espécies de Pokémon.",
    image:
      "https://github.com/lucasssantos94/pokedex/blob/main/public/pokedex.png?raw=true",
    link: "https://pokedex-zeta-ebon.vercel.app/",
    stack: ["React", "Sass", "Framer-Motion"],
  },
];
