import Header from "./components/Header/Header";
import Icon from "./components/Svgs/Icons";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="w-full m-auto mt-24">
        <div className="relative flex max-w-5xl m-auto z-40 flex-col">
          <h1 className="text-8xl font-bold">Explore o <span className="text-primary block">Digital.</span></h1>
          <div className="flex gap-10 mt-8">
            <Icon name="discord" />
            <Icon name="whatsapp" />
            <Icon name="projects" />
            <Icon name="contact" />
          </div>
        </div>
        <p className="flex justify-center w-full absolute text-[300px] font-bold bg-gradient-to-t from-primary to-black bg-clip-text text-transparent bottom-36 opacity-70">BOOSTING</p>
      </section>
    </main>
  );
}
