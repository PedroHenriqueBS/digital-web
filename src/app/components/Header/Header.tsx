import Image from "next/image";
import Link from "next/link";

import blur from '/public/white.webp';


export default function Header(){
  return(
    <header className="flex justify-between items-center py-10 px-24">
      <div>
        <Link href={'#'} className="relative z-10">
          <h1 className="text-4xl font-bold z-20 bg-gradient-to-b from-white to-primary bg-clip-text text-transparent hover:scale-105 duration-300">Bapps</h1>
        </Link>
        <Image src={blur} alt="blur" className="blur-3xl absolute -top-96 -left-56 z-0 opacity-70" width={900}/>
      </div>

      <nav>
        <ul className="relative flex font-medium z-20 gap-5">
          <Link href={''} className="hover:-translate-y-1 p-2 hover:text-primary duration-300">Quem Somos?</Link>
          <Link href={''} className="hover:-translate-y-1 p-2 hover:text-primary duration-300">Nossos Servios</Link>
          <Link href={''} className="hover:-translate-y-1 p-2 hover:text-primary duration-300">Projetos Entregues</Link>
          <Link href={''} className="hover:-translate-y-1 p-2 hover:text-primary duration-300">Ver Avaliação</Link>
        </ul>
      </nav>

      <button className="bg-primary rounded-xl py-2 px-8 font-semibold hover:bg-white duration-300 hover:text-black hover:scale-105">
        Fazer Orçamento
      </button>
    </header>
  );
}