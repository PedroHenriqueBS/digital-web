'use client';

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header/Header";
import Icon from "./components/Svgs/Icons";

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
          if (classToShow) {
            target.classList.remove(classToShow);
          } else {
            target.style.opacity = "0";
            target.style.transform = "translateX(100px)";
          }
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
          animateNumber(setNum1, 45, 800);
          animateNumber(setNum2, 99, 800);
          animateNumber(setNum3, 97.4, 800);
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

  return (
    <main>
      <Header />

      {/* TITLE */}
      <section className="w-full m-auto mt-24 mb-80">
        <div className="relative flex max-w-5xl m-auto z-40 flex-col">
          <h1 className="text-8xl font-bold relative">
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
          <div className="w-full flex justify-center items-center flex-col h-[500px] relative z-20 hideText">
            <p className="text-6xl font-bold ">Aumente seu público em até </p>
            <p className="text-6xl font-bold"><span className="text-primary">60%</span> com um site impactante!</p>
          </div>
          <Icon name="line"/>
      </section>

      {/* BOX */}
      <section className="max-w-5xl m-auto bg-white my-20 rounded-2xl flex text-black p-10 justify-between gap-20">
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
      <section className="max-w-5xl m-auto">

      </section>

    </main>
  );
}
