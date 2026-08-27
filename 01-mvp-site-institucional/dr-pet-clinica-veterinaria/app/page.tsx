import {
  ArrowUpRight,
  CalendarCheck,
  Camera,
  Check,
  ChevronRight,
  Clock3,
  HeartPulse,
  MapPin,
  Microscope,
  PawPrint,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const whatsappUrl =
  "https://wa.me/5515981268938?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20atendimento.";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Dr%20Pet%20Cl%C3%ADnica%20Veterin%C3%A1ria%2C%20Rua%20Borges%20de%20Medeiros%2C%2061%2C%20Sorocaba%20SP";

const services = [
  {
    title: "Consultas",
    description:
      "Avaliação clínica e acompanhamento cuidadoso para entender o que o seu pet precisa.",
    icon: Stethoscope,
    accent: "mint",
  },
  {
    title: "Vacinas",
    description:
      "Orientação sobre o calendário vacinal e proteção em cada fase da vida.",
    icon: Syringe,
    accent: "coral",
  },
  {
    title: "Exames",
    description:
      "Apoio diagnóstico para investigar sintomas e acompanhar a saúde do animal.",
    icon: Microscope,
    accent: "blue",
  },
  {
    title: "Cirurgias",
    description:
      "Procedimentos conduzidos após avaliação, planejamento e orientação da equipe.",
    icon: HeartPulse,
    accent: "sand",
  },
];

export default function Home() {
  return (
    <main>
      <div className="demo-bar">
        <span>Conceito de apresentação</span>
        <span className="demo-dot" aria-hidden="true" />
        <span>Site demonstrativo não oficial</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Dr Pet — início">
          <span className="brand-mark" aria-hidden="true">
            <PawPrint size={22} strokeWidth={2.2} />
          </span>
          <span className="brand-copy">
            <strong>Dr Pet</strong>
            <small>Clínica Veterinária</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#historia">Nossa história</a>
          <a href="#localizacao">Localização</a>
        </nav>

        <a
          className="button button-small button-dark"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Phone size={16} />
          Falar com a equipe
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-ambient hero-ambient-one" aria-hidden="true" />
        <div className="hero-ambient hero-ambient-two" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-icon">
              <Sparkles size={15} />
            </span>
            Há 14 anos cuidando de pets em Sorocaba
          </div>
          <h1>
            Cuidado que acolhe.
            <span>Experiência que tranquiliza.</span>
          </h1>
          <p className="hero-lead">
            Consultas, vacinas, exames e cirurgias com atenção próxima para
            você e para o seu melhor amigo.
          </p>

          <div className="hero-actions">
            <a
              className="button button-coral"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <CalendarCheck size={19} />
              Agendar pelo WhatsApp
              <ChevronRight size={17} />
            </a>
            <a className="text-link" href="#servicos">
              Conhecer os serviços
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hero-proof" aria-label="Indicadores públicos da clínica">
            <div>
              <strong>4,8</strong>
              <span>avaliação no Google</span>
            </div>
            <div className="proof-divider" aria-hidden="true" />
            <div>
              <strong>370+</strong>
              <span>avaliações públicas</span>
            </div>
            <div className="proof-divider" aria-hidden="true" />
            <div>
              <strong>14 anos</strong>
              <span>de trajetória</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame hero-image-frame">
            <Image
              src={`${basePath}/images/hero-pets.png`}
              alt="Cão e gato em ambiente veterinário acolhedor — imagem conceitual"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 46vw"
            />
          </div>
          <div className="floating-card floating-location">
            <span className="floating-icon">
              <MapPin size={18} />
            </span>
            <span>
              <small>Atendimento em</small>
              <strong>Vila Haro, Sorocaba</strong>
            </span>
          </div>
          <div className="floating-card floating-trust">
            <span className="floating-icon floating-icon-coral">
              <ShieldCheck size={18} />
            </span>
            <span>
              <small>Uma história de</small>
              <strong>cuidado e confiança</strong>
            </span>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Compromissos de atendimento">
        <span>
          <Check size={16} /> Atendimento próximo
        </span>
        <span>
          <Check size={16} /> Orientação clara
        </span>
        <span>
          <Check size={16} /> Cuidado em cada etapa
        </span>
      </section>

      <section className="section services-section" id="servicos">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Serviços veterinários</p>
            <h2>O cuidado certo, quando seu pet precisar.</h2>
          </div>
          <p>
            Da prevenção ao acompanhamento clínico, a Dr Pet reúne os cuidados
            essenciais em um atendimento próximo e responsável.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className={`service-icon service-icon-${service.accent}`}>
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <span className="service-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Perguntar sobre ${service.title} pelo WhatsApp`}
                >
                  Tirar uma dúvida <ArrowUpRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section story-section" id="historia">
        <div className="story-visual">
          <div className="image-frame story-image-frame">
            <Image
              src={`${basePath}/images/care-consultation.png`}
              alt="Atendimento cuidadoso de um cão — imagem conceitual"
              fill
              sizes="(max-width: 860px) 100vw, 44vw"
            />
          </div>
          <div className="story-seal" aria-label="14 anos de trajetória">
            <PawPrint size={23} />
            <strong>14</strong>
            <span>anos</span>
          </div>
        </div>

        <div className="story-copy">
          <p className="section-kicker">Nossa história</p>
          <h2>Uma trajetória construída perto de quem confia.</h2>
          <p>
            Há 14 anos, a Dr Pet faz parte da rotina de tutores e animais em
            Sorocaba. Uma história que se fortalece a cada consulta, retorno e
            família que escolhe continuar por perto.
          </p>
          <p>
            A clínica reúne experiência, acompanhamento e uma comunicação
            simples para que você entenda cada etapa do cuidado com o seu pet.
          </p>

          <div className="story-highlights">
            <div>
              <HeartPulse size={20} />
              <span>
                <strong>Cuidado atento</strong>
                <small>Olhar individual para cada paciente</small>
              </span>
            </div>
            <div>
              <ShieldCheck size={20} />
              <span>
                <strong>Experiência local</strong>
                <small>Mais de uma década em Sorocaba</small>
              </span>
            </div>
          </div>

          <a
            className="button button-outline"
            href="https://www.instagram.com/dr_pet.clinicaveterinaria/"
            target="_blank"
            rel="noreferrer"
          >
            <Camera size={18} />
            Acompanhar no Instagram
          </a>
        </div>
      </section>

      <section className="section contact-section" id="localizacao">
        <div className="contact-intro">
          <p className="section-kicker section-kicker-light">Onde estamos</p>
          <h2>Seu pet precisa de cuidado? Vamos conversar.</h2>
          <p>
            Fale com a equipe para consultar horários, tirar dúvidas e organizar
            o atendimento.
          </p>
          <a
            className="button button-coral"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Phone size={18} />
            Chamar no WhatsApp
            <ChevronRight size={17} />
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-row">
            <span className="contact-icon">
              <MapPin size={20} />
            </span>
            <div>
              <small>Endereço</small>
              <strong>Rua Borges de Medeiros, 61</strong>
              <span>Vila Haro · Sorocaba/SP · CEP 18015-270</span>
            </div>
          </div>
          <div className="contact-row">
            <span className="contact-icon">
              <Phone size={20} />
            </span>
            <div>
              <small>WhatsApp</small>
              <strong>(15) 98126-8938</strong>
              <span>Fale diretamente com a equipe</span>
            </div>
          </div>
          <div className="contact-row">
            <span className="contact-icon">
              <Clock3 size={20} />
            </span>
            <div>
              <small>Atendimento</small>
              <strong>Consulte a disponibilidade</strong>
              <span>Confirme o melhor horário pelo WhatsApp</span>
            </div>
          </div>

          <div className="contact-actions">
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              Abrir rota no Google Maps <ArrowUpRight size={16} />
            </a>
            <a
              href="https://www.instagram.com/dr_pet.clinicaveterinaria/"
              target="_blank"
              rel="noreferrer"
            >
              Ver Instagram <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand brand-footer" href="#inicio">
          <span className="brand-mark" aria-hidden="true">
            <PawPrint size={22} strokeWidth={2.2} />
          </span>
          <span className="brand-copy">
            <strong>Dr Pet</strong>
            <small>Clínica Veterinária</small>
          </span>
        </a>
        <p>
          Site demonstrativo criado com informações públicas verificadas em
          agosto de 2026. Imagens meramente ilustrativas.
        </p>
        <a
          className="footer-instagram"
          href="https://www.instagram.com/dr_pet.clinicaveterinaria/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram da Dr Pet"
        >
          <Camera size={18} /> @dr_pet.clinicaveterinaria
        </a>
      </footer>

      <a
        className="mobile-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Dr Pet pelo WhatsApp"
      >
        <Phone size={20} />
        <span>Falar com a equipe</span>
      </a>
    </main>
  );
}
