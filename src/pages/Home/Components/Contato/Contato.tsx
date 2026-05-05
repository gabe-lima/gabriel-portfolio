import './Contato.css'

function GitHubIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
    )
}

function LinkedInIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}

function WhatsAppIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
    )
}

function EmailIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    )
}

interface ContatoItem {
    label: string
    valor: string
    href: string
    icon: string
}

const contatos: ContatoItem[] = [
    {
        label: 'GitHub',
        valor: 'github.com/gabe-lima',
        href: 'https://github.com/gabe-lima',
        icon: 'github',
    },
    {
        label: 'LinkedIn',
        valor: 'linkedin.com/in/gabriel-lima-ab6bb62a7',
        href: 'https://www.linkedin.com/in/gabriel-lima-ab6bb62a7/',
        icon: 'linkedin',
    },
    {
        label: 'WhatsApp',
        valor: '(21) 98372-1927',
        href: 'https://wa.me/5521983721927',
        icon: 'whatsapp',
    },
    {
        label: 'E-mail',
        valor: 'derlima3@gmail.com',
        href: 'mailto:derlima3@gmail.com',
        icon: 'email',
    },
]

function renderIcon(icon: string) {
    if (icon === 'github') return <GitHubIcon />
    if (icon === 'linkedin') return <LinkedInIcon />
    if (icon === 'whatsapp') return <WhatsAppIcon />
    if (icon === 'email') return <EmailIcon />
    return null
}

export function Contato() {
    return (
        <section id="contato" className="contato">
            <div className="contato-container">
                <h2 className="contato-titulo">Contato</h2>
                <p className="contato-subtitulo">
                    Fique à vontade para entrar em contato comigo por qualquer um dos canais abaixo.
                </p>

                <div className="contato-cards">
                    {contatos.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="contato-card"
                        >
                            <div className="contato-card-icon">
                                {renderIcon(item.icon)}
                            </div>
                            <div className="contato-card-info">
                                <span className="contato-card-label">{item.label}</span>
                                <span className="contato-card-valor">{item.valor}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}