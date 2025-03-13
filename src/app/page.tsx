'use client';

import { useEffect } from "react";
import Header from "./components/Header/Header";
import Icon from "./components/Svgs/Icons";

export default function Home() {
  
  useEffect(() => {
    const elementos = document.querySelectorAll('.hideText');

    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showText');
        } else {
          entry.target.classList.remove('showText')
        }
      });
    });

    elementos.forEach((elemento) => {
      myObserver.observe(elemento);
    });

    return () => {
      elementos.forEach((elemento) => {
        myObserver.unobserve(elemento);
      });
    };
  }, []);

  return (
    <main>
      <Header />

      {/* TITLE */}
      <section className="w-full m-auto mt-24">
        <div className="relative flex max-w-5xl m-auto z-40 flex-col">
          <h1 className="text-8xl font-bold relative">
            Explore o <span className="text-primary block">Digital.</span>
          </h1>

          <div className="flex gap-10 mt-8">
            <Icon name="discord" />
            <Icon name="whatsapp" />
            <Icon name="projects" />
            <Icon name="contact" />
          </div>
        </div>
        <p className="flex justify-center w-full absolute text-[300px] font-bold bg-gradient-to-t from-primary to-black bg-clip-text text-transparent bottom-36 opacity-70">
          BOOSTING
        </p>
      </section>

      {/* LINE */}
      <section className="mt-80 flex items-center justify-center relative">
          <div className="w-full flex justify-center items-center flex-col h-[550px] relative z-20 hideText">
            <p className="text-6xl font-bold">Aumente seu público em até </p>
            <p className="text-6xl font-bold"><span className="text-primary">60%</span> com um site impactante!</p>
          </div>
          <Icon name="line"/>
      </section>

    </main>
  );
}
