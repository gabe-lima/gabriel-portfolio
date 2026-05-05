import './Sobre.css'
import fotoPerfil from '../../../../assets/fotoPerfil.png.jpeg'

const skills = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
]

export function Sobre() {
    return (
        <section id="sobre" className="sobre">
            <div className="sobre-container">

                <div className="sobre-imagem">
                    <img src={fotoPerfil} alt="Foto de Gabriel Lima" />
                </div>

                <div className="sobre-conteudo">
                    <div className="sobre-texto">
                        <h2 className="sobre-nome">Gabriel Lima</h2>
                        <p className="sobre-info">25 anos — Rio de Janeiro</p>
                        <p className="sobre-info">
                            Cursando <span className="sobre-destaque">Engenharia de Software</span> — 4° período — Uniamérica
                        </p>
                        <p className="sobre-info">
                            Desenvolvedor <span className="sobre-destaque">Front-end</span> com foco em React,
                            além de contato com back-end utilizando <span className="sobre-destaque">Java</span> e{' '}
                            <span className="sobre-destaque">C# com .NET</span>.
                        </p>
                        <p className="sobre-info">
                            Experiência com versionamento usando <span className="sobre-destaque">Git</span> e{' '}
                            <span className="sobre-destaque">GitHub</span>.
                        </p>
                    </div>

                    <div className="sobre-skills">
                        <h3 className="sobre-skills-titulo">Minhas skills</h3>
                        {skills.map((skill) => (
                            <div key={skill.name} className="skill-item">
                                <img src={skill.icon} alt={skill.name} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}