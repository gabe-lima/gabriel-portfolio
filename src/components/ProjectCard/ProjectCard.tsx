import { useState } from 'react'
import './ProjectCard.css'

type ProjectCardProps = {
    nome: string
    descricao: string
    imagem: string
    tecnologias: string[]
    linkVercel: string | null
    linkGithub: string | null
}

function ExternalLinkIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    )
}

function GitHubIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
    )
}

function CloseIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    )
}

export function ProjectCard({ nome, descricao, imagem, tecnologias, linkVercel, linkGithub }: ProjectCardProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false)

    return (
        <>
            <div className="projeto-card">
                <div className="projeto-imagem" onClick={() => setLightboxOpen(true)}>
                    <img src={imagem} alt={nome} />
                    <div className="projeto-imagem-overlay">
                        <span>Ver imagem</span>
                    </div>
                </div>

                <div className="projeto-info">
                    <h3 className="projeto-nome">{nome}</h3>
                    <p className="projeto-descricao">{descricao}</p>

                    <div className="projeto-tecnologias">
                        {tecnologias.map((tech) => (
                            <span key={tech} className="projeto-tech">{tech}</span>
                        ))}
                    </div>

                    <div className="projeto-botoes">
                        {linkVercel ? (
                            <a href={linkVercel} target="_blank" rel="noreferrer" className="projeto-btn-primary">
                                <ExternalLinkIcon /> Ver projeto
                            </a>
                        ) : (
                            <span className="projeto-btn-disabled">
                                <ExternalLinkIcon /> Em breve
                            </span>
                        )}

                        {linkGithub ? (
                            <a href={linkGithub} target="_blank" rel="noreferrer" className="projeto-btn-secondary">
                                <GitHubIcon /> Ver código
                            </a>
                        ) : (
                            <span className="projeto-btn-disabled">
                                <GitHubIcon /> Em breve
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className="lightbox" onClick={() => setLightboxOpen(false)}>
                    <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>
                        <CloseIcon />
                    </button>
                    <img
                        src={imagem}
                        alt={nome}
                        className="lightbox-imagem"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    )
}