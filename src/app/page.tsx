'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "./components/Header/Header";
import Icon from "./components/Svgs/Icons";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Home() {
  
  useEffect(() => {
    const elementos = document.querySelectorAll('.hideText, .hideTitle, .hideElemento');
    const animationElements: HTMLElement[] = [];
  
    elementos.forEach((el) => {
      const target = el as HTMLElement;
  
      if (target.classList.contains('hideElemento')) {
        animationElements.push(target);
        target.style.opacity = "0";
        target.style.transform = "translateX(100px)";
      }
    });
  
    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const classToShow = target.classList.contains('hideText') ? 'showText' :
                            target.classList.contains('hideTitle') ? 'showTitle' : '';
  
        if (entry.isIntersecting) {
          if (classToShow) {
            target.classList.add(classToShow); 
          } else {
            const delay = animationElements.indexOf(target) * 300;
            setTimeout(() => {
              target.style.opacity = "1";
              target.style.transform = "translateX(0px)";
              target.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            }, delay);
          }
        } else {
          if (!entry.isIntersecting) return 
        }
      });
    });
  
    elementos.forEach((elemento) => myObserver.observe(elemento));
  
    return () => elementos.forEach((elemento) => myObserver.unobserve(elemento));
  }, []);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateNumber(setNum1, 45, 200);
          animateNumber(setNum2, 99, 200);
          animateNumber(setNum3, 97.4, 200);
          setHasAnimated(false);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  function animateNumber(setter: (value: number) => void, end: number, duration: number) {
    let start = 0;
    const steps = 100; 
    const stepTime = duration / steps; 
    const stepValue = end / steps; 

    const timer = setInterval(() => {
      start += stepValue;
      setter(Number(start.toFixed(1))); 
      if (start >= end) {
        setter(end); 
        clearInterval(timer);
      }
    }, stepTime);
  }

  const boxesData = [
    {
      id: 1,
      title: "Sites",
      description:
        "Criamos sites personalizados e responsivos que refletem a identidade da sua marca e oferecem uma experiência excepcional ao usuário.",
      time: "27 dias",
      client: "Legasse",
      visits: "32.6K+",
    },
    {
      id: 2,
      title: "Sistemas",
      description:
        "Desenvolvemos sistemas robustos e escaláveis para otimizar seus processos de negócio e aumentar a eficiência operacional.",
      time: "34 dias",
      client: "SpaceLabs",
      visits: "46.2K+",
    },
    {
      id: 3,
      title: "Modelos Estáticos",
      description:
        "Oferecemos modelos estáticos elegantes e de alto desempenho, perfeitos para apresentar informações de forma clara e eficaz.",
      time: "16 dias",
      client: "Renato Amaral",
      visits: "25.8K+",
    },
    {
      id: 4,
      title: "Modelos Interativos",
      description:
        "Nossos modelos interativos proporcionam uma experiência envolvente e dinâmica, permitindo que seus usuários interajam de forma intuitiva com seu conteúdo.",
      time: "22 dias",
      client: "Greenleaf",
      visits: "38.9K+",
    },
  ];

  const [openBox, setOpenBox] = useState<number | null>(null);

  return (
    <main>
      <Header />

      {/* TITLE */}
      <section className="w-full m-auto mt-24 mb-80">
        <div className="relative flex max-w-5xl m-auto z-40 flex-col">
          <h1 className="text-8xl font-bold relative hideText">
            Explore o <span className="text-primary block">Digital.</span>
          </h1>

          <div className="flex gap-10 mt-8">
            <Icon name="discord" className="hideElemento"/>
            <Icon name="whatsapp" className="hideElemento"/>
            <Icon name="projects" className="hideElemento"/>
            <Icon name="contact" className="hideElemento"/>
          </div>
        </div>
        <p className="flex justify-center w-full absolute text-[300px] font-bold bg-gradient-to-t from-primary to-black bg-clip-text text-transparent bottom-36 opacity-70 hideTitle">
          BOOSTING
        </p>
      </section>

      {/* LINE */}
      <section className="flex items-center justify-center relative">
          <div className="w-full flex justify-center items-center flex-col h-[500px] relative z-20">
            <p className="text-6xl font-bold hideText">Aumente seu público em até </p>
            <p className="text-6xl font-bold hideText"><span className="text-primary">60%</span> com um site impactante!</p>
          </div>
          <Icon name="line"/>
      </section>

      {/* BOX RESULTADOS*/}
      <section className="max-w-5xl m-auto bg-white mt-28 mb-52 rounded-2xl flex text-black p-10 justify-between gap-20 hideText">
        <div>
          <h1 className="text-5xl font-bold w-72 leading-snug">Experiência Digital com <span className="text-primary ">Resultados.</span></h1>
        </div>
        <div>
          <p className="text-lg text">Na <span className="text-primary font-medium">Bapps</span>, nosso foco é criar sites que combinam tecnologia e design para gerar o <span className="text-primary font-medium">máximo impacto.</span> Da primeira linha de código à última interação do usuário, cada detalhe é pensado para entregar experiências visuais incríveis que <span className="text-primary font-medium">atraem, envolvem e transformam</span> a presença digital dos nossos clientes.</p>
          <div className="flex gap-10 mt-5" ref={elementRef}>
            <div>
              <span className="text-5xl font-bold flex items-center gap-2">{num1}% <Icon name="stars"/></span>
              <p className="text-lg font-bold">aumento em leads</p>
            </div>
            <div>
              <span className="text-5xl font-bold flex items-center gap-2">{num2}% <Icon name="stars"/></span>
              <p className="text-lg font-bold">feedback positivo</p>
            </div>
            <div>
              <span className="text-5xl font-bold flex items-center gap-2">{num3}k <Icon name="stars"/></span>
              <p className="text-lg font-bold">visitas geradas</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOX SOLUÇÕES */}
      <section className="max-w-5xl m-auto text-center flex flex-col mb-44 hideText">
        <div className="flex justify-center gap-10 text-[#CCC] text-sm font-medium">
          <span className="flex gap-2 items-center"><Image src={'/assets/icons/satisfacao.svg'} alt="icon" width={16} height={16}/>98% de satisfação</span>
          <span className="flex gap-2 items-center"><Image src={'/assets/icons/headphones.svg'} alt="icon" width={16} height={16}/>500+ clientes atendidos</span>
        </div>

        <h2 className="text-5xl font-bold mt-5 mb-14">
          Soluções que <span className="text-primary">Elevam</span> suas 
          <br/>
          <span className="text-primary">Visitas</span> em <span className="text-primary">Até 62%.</span>
        </h2>
  
        <div className="flex flex-col gap-16 max-w-xl m-auto w-full"> 

          <div className="flex w-full justify-between">
            <div className="bg-[#131313] py-2 px-3 rounded-lg flex gap-3 items-center justify-center font-semibold cursor-pointer hover:bg-primary duration-300 group">
              <Image 
                src={'/assets/icons/shield.svg'} 
                alt="icon"width={18} height={18} 
                className="duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"/> Segurança
            </div>
            <div className="bg-[#131313] py-2 px-3 rounded-lg flex gap-3 items-center justify-center font-semibold cursor-pointer hover:bg-primary duration-300 group">
              <Image 
                src={'/assets/icons/desempenho.svg'} 
                alt="icon"width={18} height={18}
                className="duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"/> Desempenho rápido
              </div>
            <div className="bg-[#131313] py-2 px-3 rounded-lg flex gap-3 items-center justify-center font-semibold cursor-pointer hover:bg-primary duration-300 group">
              <Image 
                src={'/assets/icons/manutencao.svg'} 
                alt="icon"width={18} height={18}
                className="duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"/> Manutenção
              </div>
          </div> 

          <div className="flex justify-center gap-16">
            <div className="flex flex-col gap-16">
              <div className="bg-[#131313] py-2 px-3 rounded-lg flex gap-3 items-center justify-center font-semibold cursor-pointer hover:bg-primary duration-300 group">
                <Image 
                  src={'/assets/icons/compatibilidade.svg'} 
                  alt="icon" width={18} height={18}
                  className="duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"/> Compatibilidade
                </div>
              <div className="bg-[#131313] py-2 px-3 rounded-lg flex gap-3 items-center justify-center font-semibold cursor-pointer hover:bg-primary duration-300 group">
                <Image 
                  src={'/assets/icons/hospedagem.svg'} 
                  alt="icon" width={18} height={18}
                  className="duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"/> Hospedagem gratuita
                </div>
            </div>
            <div className="flex flex-col gap-16">
              <div className="bg-[#131313] py-2 px-3 rounded-lg flex gap-3 items-center justify-center font-semibold cursor-pointer hover:bg-primary duration-300 group">
                <Image 
                  src={'/assets/icons/interface.svg'} 
                  alt="icon" width={18} height={18}
                  className="duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"/> Interface atraente
                </div>
              <div className="bg-[#131313] py-2 px-3 rounded-lg flex gap-3 items-center justify-center font-semibold cursor-pointer hover:bg-primary duration-300 group">
                <Image 
                  src={'/assets/icons/search.svg'} 
                  alt="icon" width={18} height={18}
                  className="duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"/> Aparecer no Google
                </div>
            </div>
          </div>
        </div>

      </section>

      {/* QUESTIONS */}
      <section className="max-w-5xl m-auto hideText">
        <div className="flex justify-center gap-3 items-center w-full">
          <Image src={'/assets/icons/smile.svg'} alt="icon" width={18} height={18}/>
          <span className="text-[#CCC] text-sm font-medium">4.9 avaliação em média</span>
        </div>
        <h2 className="text-5xl text-center font-bold my-5 leading-normal"> Estratégia, Design <span className="text-primary">&</span> Performance. </h2>
        <p className="text-center max-w-2xl m-auto text-[#ccc] font-medium">Nossos serviços impulsionam seu negócio. Clientes relatam um aumento médio de <span className="text-primary">300% nas taxas de conversão</span> após implementar nossas soluções personalizadas</p>

      {/* BOX QUESTIONS */}
        <div className="w-full p-4 max-w-4xl mx-auto mt-10">
          <div className="grid gap-4">
            {boxesData.map((box, index) => (
              <div
                key={box.id}
                className="bg-[#111111] text-white p-4 rounded-lg cursor-pointer select-none hover:bg-[#d0476c] duration-500 group"
              >
                <div
                  className="flex justify-between w-full"
                  onClick={() => setOpenBox(openBox === index ? null : index)}
                >
                  <div className="flex items-center justify-center">
                    <span className="w-8 h-8 sm:w-12 sm:h-12 rounded-full inline-flex items-center justify-center mr-3 sm:mr-6 bg-[#080808] border border-[#242424] group-hover:bg-[#d66986] duration-500 group-hover:border-[#f9b4c6]">
                      <span className="text-lg font-bold text-primary group-hover:text-white duration-500">{index + 1}</span>
                    </span>
                    <h2 className="text-4xl font-bold">{box.title}</h2>
                  </div>
                  <motion.button
                    animate={{ rotate: openBox === index ? 0 : -90 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-[#242424] text-primary p-3 rounded-lg group-hover:bg-[#d66986] group-hover:text-white duration-500"
                  >
                    <ChevronDown size={32} />
                  </motion.button>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: openBox === index ? "auto" : 0, opacity: openBox === index ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden w-11/12"
                >
                  <div className="my-5 rounded-lg ">
                    <p className="text-sm font-medium text-[#ccc]">{box.description}</p>
                    <div className="flex gap-16 justify-between mt-5">
                      <div className="bg-blue-300 w-full rounded-lg flex items-center justify-center"> Image project </div>
                      <div className="flex flex-col px-5 gap-14">
                        <div className="flex flex-col justify-center items-center gap-1">
                          <Image src={'assets/icons/clock.svg'} alt="tempo" width={20} height={20}/>
                          <span className="font-semibold">{box.time}</span>
                          <span className="text-sm font-medium text-[#ccc]">Tempo</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                         <Image src={'assets/icons/person.svg'} alt="tempo" width={20} height={20}/>
                          <span className="font-semibold">{box.client}</span>
                          <span className="text-sm font-medium text-[#ccc]">Cliente</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                          <Image src={'assets/icons/eye.svg'} alt="tempo" width={20} height={20}/>
                          <span className="font-semibold">{box.visits}</span>
                          <span className="text-sm font-medium text-[#ccc]">Visitas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
