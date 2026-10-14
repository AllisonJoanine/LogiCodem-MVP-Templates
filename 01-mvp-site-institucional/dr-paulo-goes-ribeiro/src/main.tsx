import React, { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { content, mapsUrl, bookingUrl, mapEmbedUrl } from './content';
import './styles.css';

function Icon({ kind = 'arrow', size = 24 }: { kind?: string; size?: number }) {
 const paths: Record<string, React.ReactNode> = {
 health: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/><path d="M8 12h8M12 8v8"/></>,
 close: <path d="m6 6 12 12M18 6 6 18"/>,
 arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
 pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
 leaf: <><path d="M20 3C9 2 3 8 5 15c6 5 15 0 15-12Z M4 21 15 9"/></>,
 care: <><path d="M6 3v7a6 6 0 0 0 12 0V3M4 3h4M16 3h4M12 16v2a3 3 0 0 0 6 0v-2"/><circle cx="18" cy="13" r="3"/></>,
 circle: <><circle cx="12" cy="12" r="9"/><path d="M3 12h5l3-5 3 10 2-5h5"/></>,
 whatsapp: <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-4.8a8.5 8.5 0 1 1 15.9-4.2Z"/><path d="m8 7 2 3-1 1c1 2 2 3 4 3l1-1 3 2c-1 3-4 2-7 0S6 9 8 7Z"/></>,
 copy: <><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M15 8V3H3v13h5"/></>
 };
 return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind] || paths.arrow}</svg>;
}
function MapGuide() {
 return <span className="map-guide" aria-hidden="true"><svg viewBox="0 0 64 84" fill="none"><ellipse cx="32" cy="79" rx="15" ry="3" fill="#183c4e" opacity=".12"/><circle cx="32" cy="15" r="9" fill="#eed4b9"/><path d="M24 13c1-11 17-11 17 1-5-5-11-6-17-1Z" fill="#183c4e"/><path d="M22 32c0-9 20-9 20 0v25H22Z" fill="#fff" stroke="#c6dbd1"/><path d="m32 27-4 11 4 18 4-18-4-11Z" fill="#6d9990"/><path d="m22 34-8 17M42 34l7 10 8-7" stroke="#eed4b9" strokeWidth="6" strokeLinecap="round"/><path d="M27 58v16M37 58v16" stroke="#315d5a" strokeWidth="6" strokeLinecap="round"/><path d="M23 76h7M34 76h8" stroke="#183c4e" strokeWidth="4" strokeLinecap="round"/><path d="M25 31v11c0 5 10 5 10 0v-4" stroke="#567f7b" strokeWidth="2"/><circle cx="35" cy="37" r="2.5" fill="#567f7b"/></svg></span>;
}
function OfficeMap() {
 const viewport = useRef<HTMLDivElement>(null);
 const [requested, setRequested] = useState(false);
 const [status, setStatus] = useState<'loading' | 'ready' | 'slow'>('loading');
 useEffect(() => {
  if (!('IntersectionObserver' in window)) { setRequested(true); return; }
  const observer = new IntersectionObserver(entries => {
   if (entries.some(entry => entry.isIntersecting)) { setRequested(true); observer.disconnect(); }
  }, { rootMargin: '600px' });
  if (viewport.current) observer.observe(viewport.current);
  return () => observer.disconnect();
 }, []);
 useEffect(() => {
  if (!requested || status !== 'loading') return;
  const timer = window.setTimeout(() => setStatus('slow'), 12000);
  return () => window.clearTimeout(timer);
 }, [requested, status]);
 return <><div className="map-intro"><MapGuide/><div><span className="eyebrow">SEU CAMINHO ATÉ AQUI</span><strong>Vamos ao consultório?</strong><span>Torre White · Sala 32</span></div><span className="map-pin-badge"><Icon kind="pin" size={22}/></span></div><div ref={viewport} className="map-viewport">
  {status !== 'ready' && <div className="map-placeholder"><Icon kind="pin" size={30}/><strong>Torre White</strong><p>Avenida Washington Luiz, 310<br/>Sala 32 · Sorocaba/SP</p><span role="status">{status === 'slow' ? 'Abra a localização no Google Maps.' : 'Carregando localização…'}</span><a className="text-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">Abrir no Google Maps <Icon size={16}/></a></div>}
  {requested && <iframe className={status === 'ready' ? 'map-frame ready' : 'map-frame'} src={mapEmbedUrl} title="Mapa — Torre White, Avenida Washington Luiz, 310, Sorocaba" width="560" height="380" referrerPolicy="no-referrer-when-downgrade" allowFullScreen onLoad={() => setStatus('ready')} onError={() => setStatus('slow')}/> }
 </div></>;
}
const careerMilestones = [
 { date: '2005 — 2007', category: 'GESTÃO PÚBLICA', title: 'Secretaria da Saúde de Sorocaba', description: 'Atuou como Supervisor de Área de Saúde, entre maio de 2005 e junho de 2007.', icon: 'health', source: 'https://www.sorocaba.sp.gov.br/anexos/SECOM/Jornal-do-Municipio/2007/1.266%20-%2006%20de%20julho%20de%202007.pdf', sourceLabel: 'Registro municipal' },
 { date: '2021', category: 'GESTÃO HOSPITALAR', title: 'Hospital Dr. Miguel Soeiro', description: 'O relatório institucional da Unimed Sorocaba de 2021 registra sua atuação como gerente médico do hospital.', icon: 'care', source: content.sources.hospital, sourceLabel: 'Relatório institucional' },
 { date: '2023', category: 'CIÊNCIA E ATUALIZAÇÃO', title: 'Participação científica na BRASPEN', description: 'Coautor de trabalho sobre o monitoramento da administração de dieta enteral em pacientes hospitalizados, aprovado no congresso de 2023.', icon: 'leaf', source: content.sources.science, sourceLabel: 'Consultar publicação' }
];
function CareerTimeline() {
 const timeline = useRef<HTMLDivElement>(null);
 const [active, setActive] = useState(0);
 const [visible, setVisible] = useState(false);
 const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
 useEffect(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  function update() { setReducedMotion(preference.matches); }
  preference.addEventListener('change', update);
  if (!('IntersectionObserver' in window)) { setVisible(true); return () => preference.removeEventListener('change', update); }
  const observer = new IntersectionObserver(entries => setVisible(entries.some(entry => entry.isIntersecting)), { threshold: .15 });
  if (timeline.current) observer.observe(timeline.current);
  return () => { observer.disconnect(); preference.removeEventListener('change', update); };
 }, []);
 useEffect(() => {
  if (!visible || reducedMotion) return;
  const timer = window.setInterval(() => { if (!document.hidden) setActive(index => (index + 1) % careerMilestones.length); }, 4500);
  return () => window.clearInterval(timer);
 }, [visible, reducedMotion, active]);
 return <section id="trajetoria" className="section career-section"><div className="container trajectory-grid"><div className="career-intro"><span className="eyebrow">EXPERIÊNCIA E TRAJETÓRIA</span><h2>Do cuidado clínico<br/>à gestão médica.</h2><p>Vivências que contribuem para uma compreensão ampla da assistência à saúde.</p><div className="career-gallery" aria-hidden="true"><span className="career-orbit orbit-one"><img src="./images/atencao.jpg" alt="" width="150" height="150" loading="lazy"/><span><Icon kind="care" size={20}/></span></span><span className="career-orbit orbit-two"><img src="./images/escuta.jpg" alt="" width="150" height="150" loading="lazy"/><span><Icon kind="health" size={20}/></span></span><span className="career-orbit orbit-three"><img src="./images/acolhimento.jpg" alt="" width="150" height="150" loading="lazy"/><span><Icon kind="leaf" size={20}/></span></span><span className="career-gallery-line"/></div></div><div ref={timeline} className="career-timeline" style={{'--career-progress': `${[8, 50, 100][active]}%`} as React.CSSProperties}><div className="career-navigation" role="group" aria-label="Percorrer a trajetória">{careerMilestones.map((milestone,index)=><button key={milestone.date} onClick={()=>setActive(index)} aria-pressed={index===active}>{milestone.date}</button>)}</div><div className="career-track"><span className="career-track-fill" aria-hidden="true"/>{careerMilestones.map((milestone,index)=><article key={milestone.date} className={active===index ? 'career-milestone current' : 'career-milestone'} aria-current={active===index ? 'step' : undefined}><span className="career-node" aria-hidden="true"><Icon kind={milestone.icon} size={20}/></span><div className="career-content"><span className="career-date">{milestone.date}</span><span className="eyebrow">{milestone.category}</span><h3>{milestone.title}</h3><p>{milestone.description}</p>{index===2 ? <details><summary>Conheça o trabalho <span>+</span></summary><p>“Atuação da EMTN na evolução do monitoramento na administração de dieta enteral”. Autores: Patrícia Queiroz Gonçalves dos Santos, Francisco Coutinho de Oliveira e Paulo Goes Ribeiro.</p><a className="source-link" href={milestone.source} target="_blank" rel="noopener noreferrer">{milestone.sourceLabel} <span>↗</span></a></details> : <a className="source-link" href={milestone.source} target="_blank" rel="noopener noreferrer">{milestone.sourceLabel} <span>↗</span></a>}</div></article>)}</div></div></div></section>;
}
const heroMessages = [
 { lines: ['Um olhar atento', 'à sua saúde e'], emphasis: 'qualidade de vida.', text: 'O cuidado começa ao olhar para você por inteiro. Conheça o Dr. Paulo Góes Ribeiro e sua atuação em nutrologia e gerenciamento da saúde.' },
 { lines: ['Sua saúde merece', 'escuta, cuidado e'], emphasis: 'atenção de perto.', text: 'Cada pessoa tem uma história. Um atendimento que considera sua rotina, suas necessidades e o que importa para o seu bem-estar.' },
 { lines: ['Cuidar de você', 'começa com uma'], emphasis: 'visão integrada.', text: 'Nutrologia, Clínica Médica e gerenciamento da saúde: perspectivas que se complementam para olhar para você por inteiro.' }
];
function App() {
 const [heroIndex, setHeroIndex] = useState(0);
 useEffect(() => {
  const timer = window.setInterval(() => {
   if (!document.hidden) setHeroIndex(index => (index + 1) % heroMessages.length);
  }, 4000);
  return () => window.clearInterval(timer);
 }, [heroIndex]);
 const [menu, setMenu] = useState(false);
 const menuButton = useRef<HTMLButtonElement>(null);
 useEffect(() => {
  if (!menu) return;
  function onOutside(event: PointerEvent) { if (event.target instanceof Element && !event.target.closest('.header')) setMenu(false); }
  function onEscape(event: KeyboardEvent) { if (event.key === 'Escape') { setMenu(false); menuButton.current?.focus(); } }
  document.addEventListener('pointerdown', onOutside);
  document.addEventListener('keydown', onEscape);
  return () => { document.removeEventListener('pointerdown', onOutside); document.removeEventListener('keydown', onEscape); };
 }, [menu]);
 const [copied, setCopied] = useState('');
 const [privacy, setPrivacy] = useState(false);
 const [chatOpen, setChatOpen] = useState(false);
 const [chatChoice, setChatChoice] = useState<'booking' | 'information' | null>(null);
 const [chatStage, setChatStage] = useState(0);
 const chatBody = useRef<HTMLDivElement>(null);
 const chatClose = useRef<HTMLButtonElement>(null);
 const chatTrigger = useRef<HTMLElement | null>(null);
 useEffect(() => { if (chatOpen) chatClose.current?.focus(); }, [chatOpen]);
 function openChat(event: React.MouseEvent<HTMLElement>) { chatTrigger.current = event.currentTarget; setChatOpen(true); setChatChoice(null); setChatStage(0); }
 function closeChat() { setChatOpen(false); chatTrigger.current?.focus(); }
 const chatMessage = chatChoice === 'booking'
  ? 'Olá! Gostaria de agendar uma consulta com o Dr. Paulo Góes Ribeiro. Poderiam me informar os horários disponíveis?'
  : 'Olá! Gostaria de conhecer melhor o Dr. Paulo Góes Ribeiro e saber mais sobre sua atuação e o atendimento no consultório.';
 const chatUrl = `https://wa.me/${content.contact.whatsapp?.replace(/\D/g, '')}?text=${encodeURIComponent(chatMessage)}`;
 useEffect(() => {
  if (!chatOpen || !chatChoice) return;
  const acknowledge = window.setTimeout(() => setChatStage(1), 500);
  const transfer = window.setTimeout(() => setChatStage(2), 1100);
  return () => { window.clearTimeout(acknowledge); window.clearTimeout(transfer); };
 }, [chatOpen, chatChoice]);
 useEffect(() => {
  if (!chatOpen || chatStage !== 2) return;
  const redirect = window.setTimeout(() => window.location.assign(chatUrl), 1500);
  return () => window.clearTimeout(redirect);
 }, [chatOpen, chatStage, chatUrl]);
 useEffect(() => {
  if (chatBody.current) chatBody.current.scrollTop = chatBody.current.scrollHeight;
 }, [chatChoice, chatStage]);
 useEffect(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const groups: [string, string][] = [
   ['.about-grid > div:first-child, .trajectory-grid > div:first-child, .address-card', 'left'],
   ['.about-copy, .about-overlay, .map-panel', 'right'],
   // Os marcos têm classes controladas pelo React; revelar o contêiner preserva
   // a visibilidade quando o destaque da linha do tempo muda.
   ['.section-heading, .career-timeline, .contact-inner, .contact-background, .about-photo', 'fade'],
   ['.area-card', 'up']
  ];
  const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
   });
  }, { threshold: 0.12 });
  const elements: Element[] = [];
  groups.forEach(([selector, effect]) => {
   document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
    element.dataset.reveal = effect;
    element.style.setProperty('--reveal-delay', `${selector === '.area-card' ? index * 100 : 0}ms`);
    elements.push(element); observer.observe(element);
   });
  });
  return () => { observer.disconnect(); elements.forEach(element => { element.removeAttribute('data-reveal'); element.classList.remove('is-visible'); }); };
 }, []);
 useEffect(() => {
  const section = document.getElementById('contato');
  const image = section?.querySelector<HTMLElement>('.contact-background');
  if (!section || !image) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  function updateImage() {
   frame = 0;
   if (!section || !image) return;
   if (reducedMotion.matches) { image.style.removeProperty('--contact-image-position'); return; }
   const sectionTop = section.getBoundingClientRect().top + window.scrollY;
   const end = Math.min(sectionTop, document.documentElement.scrollHeight - window.innerHeight);
   const start = Math.max(0, Math.min(sectionTop - window.innerHeight * 0.45, end - 120));
   const progress = Math.min(1, Math.max(0, (window.scrollY - start) / Math.max(1, end - start)));
   image.style.setProperty('--contact-image-position', `${progress * 60}%`);
  }
  function scheduleUpdate() { if (!frame) frame = window.requestAnimationFrame(updateImage); }
  updateImage();
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  reducedMotion.addEventListener('change', scheduleUpdate);
  return () => {
   window.cancelAnimationFrame(frame);
   window.removeEventListener('scroll', scheduleUpdate);
   window.removeEventListener('resize', scheduleUpdate);
   reducedMotion.removeEventListener('change', scheduleUpdate);
   image.style.removeProperty('--contact-image-position');
  };
 }, []);
 const nav = [['Início','inicio'],['Sobre','sobre'],['Áreas de atuação','areas'],['Consultório','consultorio'],['Contato','contato']];
 async function copyAddress() { try { await navigator.clipboard.writeText(content.address); setCopied('Endereço copiado.'); } catch { setCopied('Selecione e copie o endereço acima.'); } }
 return <>
 <svg width="0" height="0" aria-hidden="true" focusable="false" style={{position:'absolute'}}><defs><clipPath id="about-s-curve" clipPathUnits="objectBoundingBox"><path d="M 0 0 H .92 C .82 .17 .82 .33 .92 .5 C 1 .67 1 .83 .92 1 H 0 Z"/></clipPath><clipPath id="about-mobile-waves" clipPathUnits="objectBoundingBox"><path d="M 0 .06 C .17 0 .33 0 .5 .06 S .83 .12 1 .06 V .94 C .83 1 .67 1 .5 .94 S .17 .88 0 .94 Z"/></clipPath></defs></svg>
 <a className="skip" href="#main">Ir para o conteúdo</a>
 <header className="header"><div className="container header-inner"><a href="#inicio" className="brand" aria-label="Dr. Paulo Góes Ribeiro — início"><span className="brand-name">Dr. Paulo Góes Ribeiro<span className="brand-dot">.</span></span><span className="brand-sub">NUTROLOGIA E GERENCIAMENTO DA SAÚDE</span></a><button ref={menuButton} className="menu-toggle" aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu} aria-controls="navigation" onClick={()=>setMenu(!menu)}><Icon kind={menu ? "close" : "health"} size={25}/><span>{menu ? "Fechar" : "Menu"}</span></button><nav id="navigation" className={menu ? 'navigation open' : 'navigation'} aria-label="Principal">{nav.map(([label,id], index)=><a style={{'--bubble-delay': `${index * 65}ms`} as React.CSSProperties} key={id} href={`#${id}`} onClick={()=>setMenu(false)}><span className="nav-bubble-icon"><Icon kind={["health","care","leaf","pin","whatsapp"][index]} size={20}/></span>{label}</a>)}</nav></div></header>
 <main id="main">
 <section id="inicio" className="hero"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow"><span className="small-line"/> MEDICINA COM ATENÇÃO À PESSOA</span><div className="hero-rotating" aria-live="off"><h1 className="hero-heading">{heroMessages.map((message, index) => <span key={message.emphasis} className={index === heroIndex ? 'hero-slide active' : 'hero-slide'} aria-hidden={index !== heroIndex}>{message.lines[0]}<br/>{message.lines[1]}<br/><em>{message.emphasis}</em></span>)}</h1><p className="hero-description">{heroMessages.map((message, index) => <span key={message.emphasis} className={index === heroIndex ? 'hero-slide active' : 'hero-slide'} aria-hidden={index !== heroIndex}>{message.text}</span>)}</p></div><div className="hero-slide-controls" role="group" aria-label="Textos de apresentação">{heroMessages.map((message, index) => <button key={message.emphasis} className="hero-slide-dot" aria-label={`Mostrar texto ${index + 1}`} aria-pressed={index === heroIndex} onClick={() => setHeroIndex(index)}/>)}</div><div className="actions">{bookingUrl ? <button className="button primary" onClick={openChat} aria-controls="contact-chat" aria-expanded={chatOpen}>Agendar consulta<Icon kind="whatsapp" size={19}/></button> : <a className="button primary" href="#contato">Entre em contato<Icon kind="whatsapp" size={19}/></a>}<a className="text-link" href="#sobre">Conheça o Dr. Paulo <span>↗</span></a></div><div className="hero-location"><Icon kind="pin" size={17}/>{content.city}{content.professional && <span>{content.professional}</span>}</div></div><div className="hero-visual">{content.portrait ? <img className="portrait" src={content.portrait} alt={content.portraitAlt} width="640" height="760" fetchPriority="high"/> : <div className="editorial-art" aria-hidden="true"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="art-ring ring-three"/><span className="art-caption">ATENÇÃO • EQUILÍBRIO • CUIDADO</span><div className="art-signature">Paulo Góes<br/><i>Ribeiro</i><span>UM OLHAR INTEGRAL À SAÚDE</span></div><div className="art-line"/></div>}<div className="visual-label"><span className="label-dot"/><span>Cuidado com uma visão integral<small>Nutrologia e gerenciamento da saúde</small></span></div></div></div><div className="container hero-bottom"><span>ATENÇÃO CLÍNICA</span><span>EXPERIÊNCIA HOSPITALAR</span><span>VISÃO INTEGRADA DA SAÚDE</span><a href="#sobre" aria-label="Conhecer mais sobre o Dr. Paulo">↓</a></div></section>
 <section id="sobre" className="section about-section"><div className="container"><div className="about-grid"><div><span className="eyebrow">SOBRE O DR. PAULO</span><h2>Conhecimento, experiência<br/>e atenção a você.</h2></div><div className="about-copy"><p className="lead">Dr. Paulo Góes Ribeiro</p><p>Com atuação em Nutrologia e Clínica Médica em Sorocaba, sua trajetória reúne cuidado clínico, experiência hospitalar e gestão da saúde.</p>{content.education && <p>{content.education}</p>}</div></div><div className="about-editorial"><figure className="about-photo"><img src="./images/escuta.jpg" alt="Cena ilustrativa de escuta em uma consulta médica" width="1254" height="940" loading="lazy"/></figure><div className="about-overlay"><span className="eyebrow">UMA TRAJETÓRIA EM DIFERENTES FRENTES</span><h3>Clínica, gestão e ciência.</h3><div className="bio-facts"><div><Icon kind="care"/><span><strong>Experiência hospitalar</strong><small>Gerência médica do Hospital Dr. Miguel Soeiro, registrada em 2021.</small></span></div><div><Icon kind="circle"/><span><strong>Gestão pública em saúde</strong><small>Supervisor de Área de Saúde na Secretaria da Saúde de Sorocaba, de 2005 a 2007.</small></span></div><div><Icon kind="leaf"/><span><strong>Participação científica</strong><small>Coautoria de trabalho em terapia nutricional no congresso BRASPEN 2023.</small></span></div></div><a className="text-link" href="#trajetoria">Explore a trajetória <span>↓</span></a></div></div></div></section>
 <section id="areas" className="section areas-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">ÁREAS DE ATUAÇÃO</span><h2>Saúde vista por inteiro.</h2></div><p>Perspectivas que se complementam<br/>para uma atenção médica integrada.</p></div><div className="areas-grid">{content.areas.map((area,index)=><article className="area-card" key={area.title}><div className="card-top"><span className="icon-box"><Icon kind={area.icon} size={29}/></span><span className="card-number">0{index+1}</span></div><h3>{area.title}</h3><p>{area.text}</p><div className="card-rule"/></article>)}</div></div></section>
 <CareerTimeline/>
 <section id="consultorio" className="section office-section"><div className="container office-grid"><div className="address-card"><span className="eyebrow">CONSULTÓRIO EM SOROCABA</span><h2>Um endereço para<br/>cuidar da sua saúde.</h2><address><strong>Avenida Washington Luiz, 310</strong><br/>Jardim Emília<br/>Torre White · Sala 32<br/>Sorocaba — SP</address><div className="actions"><a className="button primary" href={mapsUrl} target="_blank" rel="noopener noreferrer">Como chegar <Icon kind="pin" size={19}/></a><button className="copy-button" onClick={copyAddress}><Icon kind="copy" size={17}/> Copiar endereço</button></div><span className="copy-status" role="status">{copied}</span></div><div className="map-panel"><OfficeMap/><div className="map-caption"><span><strong>Torre White</strong><small>Avenida Washington Luiz, 310 · Sala 32</small></span><a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir localização no Google Maps"><span>Abrir mapa</span><Icon size={17}/></a></div></div></div></section>
 <section id="contato" className="contact-section"><div className="container contact-layout"><img className="contact-background" src="./images/acolhimento.jpg" alt="" width="1254" height="940" loading="lazy"/><div className="contact-inner"><span className="eyebrow">O PRÓXIMO PASSO É CUIDAR DE VOCÊ</span><h2>Um espaço na sua rotina.<br/><em>Uma atenção à sua saúde.</em></h2><p>Agende sua consulta com o Dr. Paulo.<br/>Fale pelo WhatsApp para informações e agendamento.</p>{bookingUrl ? <button className="button light" onClick={openChat} aria-controls="contact-chat" aria-expanded={chatOpen}>Agendar pelo WhatsApp <Icon kind="whatsapp" size={19}/></button> : <a className="button light" href={mapsUrl} target="_blank" rel="noopener noreferrer">Localização do consultório <Icon kind="pin" size={19}/></a>}{content.contact.confirmed && content.contact.telephone && <a className="telephone" href={`tel:${content.contact.telephone.replace(/\D/g,'')}`}>{content.contact.telephone}</a>}</div></div></section>
 </main>{bookingUrl && <button className="floating-whatsapp" onClick={chatOpen ? closeChat : openChat} aria-controls="contact-chat" aria-expanded={chatOpen} aria-label={chatOpen ? "Fechar atendimento" : "Agendar consulta pelo WhatsApp"}><Icon kind="whatsapp" size={24}/><span>{chatOpen ? "Fechar atendimento" : "Agendar consulta"}</span></button>}<footer><div className="container footer-top"><a className="brand footer-brand" href="#inicio" aria-label="Dr. Paulo Góes Ribeiro — voltar ao início"><img className="footer-logo" src="./images/logo-completa.png" alt="Dr. Paulo Góes Ribeiro — Nutrologia e gerenciamento da saúde" width="310" height="115" loading="lazy"/></a><p>Avenida Washington Luiz, 310 · Jardim Emília<br/>Torre White · Sala 32 · Sorocaba/SP</p></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Dr. Paulo Góes Ribeiro{content.professional && ` · ${content.professional}`}</span><button onClick={()=>setPrivacy(true)}>Privacidade</button><a href="#inicio">Voltar ao início ↑</a></div></footer>
 {bookingUrl && chatOpen && <section id="contact-chat" className="contact-chat" role="dialog" aria-modal="false" aria-labelledby="chat-title" onKeyDown={event => { if (event.key === 'Escape') { event.stopPropagation(); closeChat(); } }}>
  <div className="chat-header"><img className="chat-brand-logo" src="./images/logo-simbolo.png" alt="" width="44" height="44"/><div><h2 id="chat-title">Como podemos ajudar?</h2><span>Consultório Dr. Paulo Góes Ribeiro</span></div><button ref={chatClose} className="chat-close" onClick={closeChat} aria-label="Fechar chat">×</button></div>
  <div className="chat-body" ref={chatBody}><p className="chat-bubble">Olá! Você gostaria de agendar uma consulta ou conhecer um pouco mais sobre o Dr. Paulo e o consultório?</p>
   {!chatChoice && <div className="chat-options"><button onClick={() => setChatChoice('booking')}>Agendar uma consulta</button><button onClick={() => setChatChoice('information')}>Conhecer um pouco mais</button></div>}
   <div className="chat-conversation" role="log" aria-live="polite" aria-relevant="additions">
    {chatChoice && <p className="chat-bubble chat-user"><span className="chat-speaker">Você</span>{chatChoice === 'booking' ? 'Gostaria de agendar uma consulta.' : 'Gostaria de conhecer um pouco mais sobre o Dr. Paulo e o consultório.'}</p>}
    {chatStage >= 1 && <p className="chat-bubble chat-bot">Certo!</p>}
    {chatStage >= 2 && <div className="chat-transfer"><div className="chat-preview"><span>Mensagem para o WhatsApp</span><p>{chatMessage}</p></div><p className="chat-bubble chat-bot">Vou transferir você para o WhatsApp.</p></div>}
   </div>
  </div>
 </section>}
 {privacy && <div className="modal-backdrop" onClick={()=>setPrivacy(false)}><dialog ref={node=>{if(node && !node.open) node.showModal();}} onCancel={()=>setPrivacy(false)} aria-labelledby="privacy-title" onClick={e=>e.stopPropagation()} onKeyDown={e=>{if(e.key==='Escape')setPrivacy(false)}}><h2 id="privacy-title">Privacidade</h2><p>Este site apresenta informações institucionais e não possui formulário, cadastro, ferramentas de publicidade ou análise de visitantes. Não utiliza cookies próprios.</p><p>O mapa incorporado é fornecido pelo Google Maps, que recebe dados técnicos de conexão e pode utilizar cookies de acordo com sua política. Ao acessar um link externo, como WhatsApp, Google Maps ou uma publicação, você passa a utilizar um serviço com política de privacidade própria. O servidor de hospedagem pode registrar informações técnicas de acesso para operação e segurança. As fontes são fornecidas pelo Google Fonts, que recebe dados técnicos da conexão.</p><button className="button primary" autoFocus onClick={()=>setPrivacy(false)}>Fechar</button></dialog></div>}
 </>;
}
function PageEntrance() {
 const [ready, setReady] = useState(false);
 useEffect(() => {
  const loader = document.getElementById('page-loader');
  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  let cancelled = false;
  let revealed = false;
  let revealTimer = 0;
  let cleanupTimer = 0;
  const startedAt = performance.now();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function reveal() {
   if (cancelled || revealed) return;
   revealed = true;
   window.clearTimeout(deadline);
   setReady(true);
   document.body.style.overflow = previousOverflow;
   loader?.classList.add('is-finished');
   cleanupTimer = window.setTimeout(() => loader?.remove(), reducedMotion ? 0 : 1800);
  }
  const deadline = window.setTimeout(reveal, 4500);
  const images = [document.querySelector<HTMLImageElement>('.portrait'), loader?.querySelector<HTMLImageElement>('img')];
  const assets = images.filter((image): image is HTMLImageElement => !!image).map(image => image.decode());
  if (document.fonts) assets.push(document.fonts.ready.then(() => undefined));
  Promise.allSettled(assets).then(() => {
   if (cancelled || revealed) return;
   revealTimer = window.setTimeout(reveal, Math.max(0, (reducedMotion ? 300 : 1000) - (performance.now() - startedAt)));
  });
  return () => {
   cancelled = true;
   window.clearTimeout(deadline);
   window.clearTimeout(revealTimer);
   window.clearTimeout(cleanupTimer);
   document.body.style.overflow = previousOverflow;
  };
 }, []);
 return <div className={ready ? 'page-shell is-ready' : 'page-shell'} inert={!ready} aria-busy={!ready}><App/></div>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><PageEntrance/></React.StrictMode>);
