import { ArrowUpRight, ArrowRight, Check, Globe2, LayoutTemplate, BookOpen, Code2, RefreshCw, UserRound, ShieldCheck, Clock3, Search, Users, MapPin, MessageCircle, SlidersHorizontal, Instagram, Minus, Camera, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { faqs, whatsapp, instagram } from '@/lib/portfolio';

export function ContactButton({ children = 'Vamos conversar', className = '' }: { children?: React.ReactNode; className?: string }) {
  return <Button asChild size="lg" className={`contact-button ${className}`}><a href={whatsapp} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight /></a></Button>;
}
export function SectionLabel({ children, number }: { children: React.ReactNode; number: string }) {
  return <p className="section-label"><span>{number}</span><span className="label-line" />{children}</p>;
}
const services = [
  [Globe2, 'Sites Institucionais', 'Apresente sua empresa e seus diferenciais com clareza para transmitir confiança.'],
  [LayoutTemplate, 'Landing Pages', 'Direcione campanhas para uma página focada em apresentar sua oferta e captar contatos.'],
  [BookOpen, 'Catálogos Digitais', 'Organize produtos e serviços para que clientes encontrem o que procuram com facilidade.'],
  [Code2, 'Sistemas Web Personalizados', 'Simplifique tarefas do negócio com ferramentas digitais pensadas para suas necessidades.'],
  [RefreshCw, 'Redesign de Sites', 'Atualize o visual e a navegação para oferecer uma experiência mais agradável.'],
  [UserRound, 'Sites para Profissionais Autônomos', 'Valorize seu trabalho com uma apresentação profissional e acessível online.'],
] as const;
const benefits = [
  [ShieldCheck, 'Credibilidade', 'Apresente seu negócio com profissionalismo e reforce a confiança.'],
  [Clock3, 'Presença digital', 'Mantenha informações importantes disponíveis a qualquer hora.'],
  [Search, 'Alcance', 'Boas práticas de SEO ajudam pessoas a encontrar seu site nas buscas.'],
  [Users, 'Novos clientes', 'Abra caminhos para que novas pessoas conheçam o que você oferece.'],
  [MapPin, 'Autonomia', 'Tenha um espaço próprio para organizar sua história e seus serviços.'],
  [MessageCircle, 'Contato fácil', 'Facilite pedidos de orçamento, agendamentos e conversas.'],
] as const;

export function PortfolioSections() {
  return <>
    <section id="servicos" className="section-band surface-band"><div className="page-container">
      <SectionLabel number="02">O QUE POSSO CRIAR PARA VOCÊ</SectionLabel>
      <div className="section-heading"><h2>Soluções digitais para<br />tirar suas ideias <span className="text-muted-foreground">do papel.</span></h2><p>Design com propósito. Tecnologia na medida.<br />Uma presença digital com a sua identidade.</p></div>
      <div className="services-grid">{services.map(([Icon, title, description], index) => <article className="service-item reveal" key={title}><div className="service-top"><span className="service-icon"><Icon /></span><span>0{index + 1}</span></div><h3>{title}</h3><p>{description}</p></article>)}</div>
      <p className="section-note">Cada solução é planejada a partir das necessidades e possibilidades do seu projeto.</p>
    </div></section>
    <section id="por-que" className="section-band"><div className="page-container">
      <SectionLabel number="03">MUITO ALÉM DE UMA PÁGINA BONITA</SectionLabel>
      <div className="benefits-heading"><h2>Enquanto você não está na internet,<br /><span className="text-cyan">alguém está procurando</span><br />pelo que você oferece.</h2><p>Um site profissional é um espaço próprio para apresentar seu negócio, gerar confiança e facilitar novas oportunidades.</p></div>
      <div className="benefits-grid">{benefits.map(([Icon, title, description]) => <article key={title} className="benefit-item reveal"><Icon /><h3>{title}</h3><p>{description}</p></article>)}</div>
    </div></section>
    <section className="section-band contrast-band"><div className="page-container opportunity-layout">
      <div><span className="eyebrow">PRESENÇA DIGITAL É OPORTUNIDADE</span><h2>Seu próximo cliente<br />pode estar procurando<br /><span className="text-cyan">por você agora.</span></h2><ContactButton>Quero fortalecer minha presença digital</ContactButton></div>
      <div><ul className="lost-list">{['Menor presença em pesquisas online', 'Dependência exclusiva das redes sociais', 'Informações importantes espalhadas', 'Menos oportunidades de transmitir credibilidade', 'Dificuldade de atender interessados fora do expediente'].map(text => <li key={text}><Minus />{text}</li>)}</ul><p className="opportunity-note">Não ter um site não impede seu negócio de crescer. Mas ter uma presença digital profissional pode abrir portas que hoje você ainda não está explorando.</p></div>
    </div></section>
    <section className="section-band"><div className="page-container social-section">
      <SectionLabel number="04">MELHORES JUNTOS</SectionLabel><h2>Instagram atrai atenção.<br />Seu site transforma interesse<br /><span className="text-muted-foreground">em oportunidade.</span></h2>
      <div className="social-grid"><article className="social-card"><Instagram /><h3>Instagram</h3><p>O início da conexão.</p><ul>{['Relacionamento e comunidade', 'Publicações e novidades', 'Conteúdo de alcance social'].map(x => <li key={x}><Check />{x}</li>)}</ul></article><span className="social-plus" aria-hidden="true">+</span><article className="social-card site-card"><Globe2 /><h3>Seu site</h3><p>O espaço da sua marca.</p><ul>{['Apresentação completa dos serviços', 'Portfólio e informações organizadas', 'Possibilidade de aparecer no Google', 'Orçamentos, contatos e agendamentos'].map(x => <li key={x}><Check />{x}</li>)}</ul></article></div>
      <p className="social-note">Você não precisa escolher entre um e outro. Quando trabalham juntos, sua presença digital fica mais completa.</p>
    </div></section>
    <section id="sobre" className="section-band surface-band"><div className="page-container about-layout">
      <div><SectionLabel number="05">DESIGN COM IDENTIDADE</SectionLabel><h2>Prazer,<br />eu sou <span className="text-cyan">Felipe Cal.</span></h2><div className="experience-mark"><span>5</span><p>anos criando<br />experiências digitais<span className="text-cyan">.</span></p></div></div>
      <div className="about-copy"><div className="portrait-placeholder" aria-label="Espaço reservado para uma foto real de Felipe Cal"><Camera /><span>Foto de Felipe Cal</span><small>Espaço reservado para foto real</small><Sparkles className="portrait-sparkle" /></div><p>Sou web designer há 5 anos e acredito que cada negócio merece uma presença digital que represente sua essência.</p><p>Meu trabalho é transformar ideias em sites modernos, funcionais e personalizados, combinando design, tecnologia e uma experiência agradável para quem navega.</p><p>Mais do que criar páginas, quero ajudar marcas e profissionais a se apresentarem melhor na internet e facilitarem o caminho entre seus serviços e seus futuros clientes.</p><ContactButton>Vamos conversar sobre sua ideia</ContactButton></div>
    </div></section>
    <section className="section-band"><div className="page-container"><SectionLabel number="06">DA IDEIA AO SITE NO AR</SectionLabel><h2>Um processo claro.<br /><span className="text-muted-foreground">Um projeto feito com você.</span></h2><div className="process-grid">{[['Conversamos', 'Entendo seu negócio, seus objetivos e o que você precisa.'], ['Planejamos', 'Definimos estrutura, identidade visual e funcionalidades.'], ['Criamos', 'Desenvolvo o site com atenção ao design, navegação e responsividade.'], ['Publicamos', 'Preparamos o projeto para entrar no ar e representar sua marca.']].map(([title, text], i) => <article key={title} className="process-item reveal"><span className="process-number"><span>0{i + 1}</span><ArrowRight /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section-band faq-band"><div className="page-container faq-layout"><div><SectionLabel number="07">VAMOS TIRAR AS DÚVIDAS?</SectionLabel><h2>Antes de começar,<br /><span className="text-muted-foreground">vale conversar.</span></h2><p>Não encontrou sua resposta?<br />Me chama no WhatsApp.</p><Button asChild variant="link" className="px-0"><a href={whatsapp} target="_blank" rel="noopener noreferrer">Falar com Felipe<ArrowUpRight /></a></Button></div><Accordion type="single" collapsible>{faqs.map(([question, answer], i) => <AccordionItem key={question} value={`faq-${i}`}><AccordionTrigger className="py-6 text-base hover:no-underline">{question}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>
    <section id="contato" className="contact-section"><div className="page-container"><span className="eyebrow">VAMOS CRIAR ALGO QUE FAÇA A DIFERENÇA?</span><h2>Sua ideia pode ser meu<br />próximo grande projeto<span className="text-cyan">.</span></h2><p>Vamos criar um site que represente sua marca, valorize seu trabalho<br />e facilite a chegada de novas oportunidades.</p><ContactButton>Vamos conversar sobre seu site?</ContactButton><a href={instagram} target="_blank" rel="noopener noreferrer" className="instagram-link"><Instagram />Ou me encontre no Instagram<ArrowUpRight /></a></div></section>
  </>;
}
