import { useEffect, useRef } from 'react'
import './Hero.css'

const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('hero-visible')
                    }
                })
            },
            { threshold: 0.15 }
        )

        const elements = contentRef.current?.querySelectorAll('.hero-animate')
        elements?.forEach((el: Element) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <section id="hero" className="hero">
            <div className="hero-content" ref={contentRef}>
                <p className="hero-subtitle hero-animate delay-1">Olá, eu sou o Gabriel!</p>
                <h1 className="hero-title hero-animate delay-2">
                    Desenvolvedor <span className="hero-highlight">Front-end</span> criando
                    landing pages modernas com <span className="hero-highlight">React</span>
                </h1>
                <p className="hero-description hero-animate delay-3">
                    Transformo ideias em interfaces bonitas, rápidas e responsivas.
                </p>
                <div className="hero-buttons hero-animate delay-4">
                    <button onClick={() => scrollTo('projetos')} className="hero-btn-primary">
                        Ver projetos
                    </button>
                    <a href="https://wa.me/5521983721927" target="_blank" rel="noreferrer" className="hero-btn-secondary">
                        Entrar em contato
                    </a>
                </div>
            </div>
        </section>
    )
}