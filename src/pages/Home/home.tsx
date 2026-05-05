
import { Contato } from "./Components/Contato/Contato";
import { Footer } from "./Components/Footer/Footer";
import { Hero } from "./Components/Hero/Hero";
import { Projetos } from "./Components/Projetos/Projetos";
import { Sobre } from "./Components/Sobre/Sobre";


export function Home() {
      return (
        <>
        <Hero />
        <Sobre />
        <Projetos />
        <Contato />
        <Footer />
        </>
  )
}
