import { useMemo, useState } from 'react';
import { ArrowUpRight, Check, MessageCircle, Plus, Minus } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

function FaqLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="section-label"><span>{number}</span><span className="label-line" />{children}</p>;
}
const SectionLabel = FaqLabel;

const questions = [
  ['Quanto custa criar um site?', 'O investimento depende do tipo de projeto, da quantidade de páginas e das funcionalidades desejadas. Para facilitar seu planejamento, uma landing page pode começar em R$ 800, um site institucional em R$ 1.500 e projetos personalizados em R$ 2.500. Esses valores são referências iniciais, não preços fechados. Cada orçamento é elaborado de acordo com as necessidades do cliente.'],
  ['Preciso ter uma empresa ou CNPJ para contratar?', 'Não! Você não precisa ter uma empresa registrada para criar seu site. Atendo profissionais autônomos, empreendedores, pequenas empresas e negócios de diferentes segmentos. O importante é ter uma ideia ou serviço que deseja apresentar de forma profissional na internet.'],
  ['Meu site vai funcionar no celular?', 'Sim! Todos os sites são desenvolvidos com design responsivo, adaptando-se a celulares, tablets e computadores. Isso proporciona uma navegação confortável e uma boa experiência para seus visitantes, independentemente do dispositivo utilizado.'],
  ['Meu site poderá aparecer no Google?', 'Sim! Seu site será desenvolvido seguindo boas práticas de SEO, incluindo estrutura organizada, títulos adequados e recursos que favorecem a indexação. O posicionamento nos resultados depende de fatores externos, como concorrência, conteúdo e critérios do Google, portanto não há garantia de uma posição específica.'],
  ['Posso integrar WhatsApp e Instagram?', 'Com certeza! Podemos adicionar botões de WhatsApp, links para Instagram, formulários de contato e outros recursos que facilitam a comunicação com seus clientes. Integrações mais avançadas podem ser avaliadas conforme a necessidade do projeto.'],
  ['Quanto tempo demora para criar um site?', 'O prazo de desenvolvimento varia de 5 a 20 dias úteis, dependendo do tipo de site, da quantidade de páginas, das funcionalidades e da disponibilidade dos materiais necessários. Antes de começar, alinhamos as etapas e definimos um cronograma para o seu projeto.'],
  ['Preciso de um site grande para ter resultados?', 'Não! Um site simples, bem planejado e com uma comunicação estratégica pode ser suficiente para apresentar seus serviços, transmitir credibilidade e gerar oportunidades. O mais importante não é a quantidade de páginas, mas ter uma presença digital que faça sentido para o seu negócio.'],
] as const;

const projects = [
  { id: 'landing', label: 'Landing Page', price: 800 },
  { id: 'institutional', label: 'Site Institucional', price: 1500 },
  { id: 'custom', label: 'Projeto Personalizado', price: 2500 },
] as const;
const extras = [
  { id: 'form', label: 'Formulário personalizado', price: 150 },
  { id: 'blog', label: 'Blog ou área de notícias', price: 450 },
  { id: 'booking', label: 'Agendamento ou integração avançada', price: 600 },
] as const;
const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

export function FaqBudgetSections() {
  const [projectId, setProjectId] = useState<(typeof projects)[number]['id']>('landing');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const selectedProject = projects.find(project => project.id === projectId)!;
  const selectedFeatures = extras.filter(extra => selectedExtras.includes(extra.id));
  const estimate = useMemo(() => selectedProject.price + selectedFeatures.reduce((sum, extra) => sum + extra.price, 0), [selectedProject, selectedFeatures]);
  const whatsappUrl = `https://wa.me/5532984022567?text=${encodeURIComponent(`Olá, Felipe! Gostaria de receber um orçamento personalizado.\n\nTipo de projeto: ${selectedProject.label}\nFuncionalidades: WhatsApp e redes sociais${selectedFeatures.length ? `, ${selectedFeatures.map(extra => extra.label).join(', ')}` : ''}\nEstimativa inicial: ${brl.format(estimate)}\n\nEntendo que o valor é uma estimativa e gostaria de conversar sobre as particularidades do meu projeto.`)}`;

  function toggleExtra(id: string) {
    setSelectedExtras(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  }

  return <>
    <section className="section-band faq-band"><div className="page-container faq-layout">
      <div className="faq-intro"><FaqLabel number="07">TIRE SUAS DÚVIDAS</FaqLabel><h2>Perguntas frequentes.<br /><span className="text-muted-foreground">Tudo o que você precisa saber antes de começar.</span></h2><p>Reuni as principais dúvidas sobre criação de sites, investimento e desenvolvimento para ajudar você a dar o próximo passo com segurança.</p></div>
      <Accordion type="single" collapsible className="faq-accordion">{questions.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`} className="faq-item"><AccordionTrigger className="faq-trigger">{question}<span className="faq-toggle" aria-hidden="true"><Plus className="faq-plus" /><Minus className="faq-minus" /></span></AccordionTrigger><AccordionContent className="faq-answer">{answer}</AccordionContent></AccordionItem>)}</Accordion>
    </div><div className="page-container faq-cta"><div><h3>Ainda tem alguma dúvida?</h3><p>Cada projeto começa com uma boa conversa. Me conte sua ideia e vamos descobrir juntos a melhor solução para o seu negócio.</p></div><Button asChild className="contact-button"><a href="https://wa.me/5532984022567?text=Ol%C3%A1%2C%20Felipe!%20Tenho%20uma%20d%C3%BAvida%20sobre%20meu%20projeto%20e%20gostaria%20de%20conversar." target="_blank" rel="noopener noreferrer"><MessageCircle />Conversar com Felipe no WhatsApp<ArrowUpRight /></a></Button></div></section>
    <section className="section-band estimate-section"><div className="page-container"><SectionLabel number="08">SIMULAÇÃO INICIAL</SectionLabel><div className="estimate-heading"><div><h2>Quanto investir no<br />seu próximo site?</h2><p>Faça uma simulação rápida e descubra uma estimativa inicial para transformar sua ideia em um projeto digital.</p></div><span className="estimate-mark"><Check />Sem cadastro</span></div>
      <div className="estimate-card"><div className="estimate-options"><fieldset><legend>Tipo de projeto</legend><div className="project-options">{projects.map(project => <label className={`estimate-option ${projectId === project.id ? 'selected' : ''}`} key={project.id}><input type="radio" name="project-type" value={project.id} checked={projectId === project.id} onChange={() => setProjectId(project.id)} /><span className="custom-radio" aria-hidden="true" /><span className="option-copy"><strong>{project.label}</strong><small>A partir de {brl.format(project.price)}</small></span></label>)}</div></fieldset>
        <fieldset className="extras-fieldset"><legend>Funcionalidades adicionais</legend><p className="included-extra"><Check />WhatsApp e redes sociais <span>Incluso</span></p><div className="extra-options">{extras.map(extra => <label className="extra-option" key={extra.id}><input type="checkbox" checked={selectedExtras.includes(extra.id)} onChange={() => toggleExtra(extra.id)} /><span className="custom-checkbox" aria-hidden="true"><Check /></span><span>{extra.label}</span><strong>+ {brl.format(extra.price)}</strong></label>)}</div></fieldset></div>
        <aside className="estimate-result" aria-live="polite"><span className="estimate-result-label">INVESTIMENTO ESTIMADO A PARTIR DE</span><strong className="estimate-amount">{brl.format(estimate)}</strong><p>Esta é uma estimativa inicial. O valor final será definido após entendermos as necessidades e particularidades do seu projeto.</p><Button asChild className="contact-button estimate-cta"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Solicitar meu orçamento personalizado<ArrowUpRight /></a></Button><small>Domínio, hospedagem e serviços de terceiros podem ter custos separados, conforme a contratação.</small></aside>
      </div></div></section>
  </>;
}

export default FaqBudgetSections;
