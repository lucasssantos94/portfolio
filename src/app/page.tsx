import Container from "@/components/Container";
import Type from '@/components/Typewriter'
import SocialLink from "@/components/SocialLink";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Animation from "@/components/Animation";


export default function Home() {

  return (
    <section>
      <Container>
        <div className="flex h-3/4 justify-around items-center">
          <div className="">
            <div>
              <span className="text-xl">Olá, eu sou </span>
              <h1 className="text-6xl font-black">Lucas Santos</h1>

              <span className="text-2xl text-royalBlue">
                {`=> `}
                <Type />
              </span>
            </div>

            <div className="flex gap-12 mt-10">

              <SocialLink url="#">
                <FaInstagram size={32} />
              </SocialLink>

              <SocialLink url="#">

                <FaLinkedin size={32} />
              </SocialLink>

              <SocialLink url="#">
                <FaGithub size={32} />
              </SocialLink>

            </div>

          </div>

          <Animation />


        </div>


      </Container>
    </section>
  );
}
