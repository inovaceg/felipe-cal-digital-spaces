import { useMemo, useState } from 'react';
import { ArrowUpRight, Check, MessageCircle, Minus, Plus, Code2, Globe2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="section-label"><span>{number}</span><span className="label-line" />{children}</p>;
}

const questions = [
  ['Quanto custa criar um site?', 'O investimento depende do tipo de projeto, da quantidade de páginas e das funcionalidades desejadas. Para facilitar seu planejamento, uma landing page pode começar em R$ 800, um site institucional em R$ 1.400 e projetos personalizados em R$ 2.000. Esses valores são referências iniciais, não preços fechados. Cada orçamento é elaborado de acordo com as necessidades do cliente.'],
  ['Preciso ter uma empresa ou CNPJ para contratar?', 'Não! Você não precisa ter uma empresa registrada para criar seu site. Atendo profissionais autônomos, empreendedores, pequenas empresas e negócios de diferentes segmentos. O importante é ter uma ideia ou serviço que deseja apresentar de forma profissional na internet.'],
  ['Meu site vai funcionar no celular?', 'Sim! Todos os sites são desenvolvidos com design responsivo, adaptando-se a celulares, tablets e computadores. Isso proporciona uma navegação confortável e uma boa experiência para seus visitantes, independentemente do dispositivo utilizado.'],
  ['Meu site poderá aparecer no Google?', 'Sim! Seu site será desenvolvido seguindo boas práticas de SEO, incluindo estrutura organizada, títulos adequados e recursos que favorecem a indexação. O posicionamento nos resultados depende de fatores externos, como concorrência, conteúdo e critérios do Google, portanto não há garantia de uma posição específica.'],
  ['Posso integrar WhatsApp e Instagram?', 'Com certeza! Podemos adicionar botões de WhatsApp, links para Instagram, formulários de contato e outros recursos que facilitam a comunicação com seus clientes. Integrações mais avançadas podem ser avaliadas conforme a necessidade do projeto.'],
  ['Quanto tempo demora para criar um site?', 'O prazo de desenvolvimento varia de 5 a 20 dias úteis, dependendo do tipo de site, da quantidade de páginas, das funcionalidades e da disponibilidade dos materiais necessários. Antes de começar, alinhamos as etapas e definimos um cronograma para o seu projeto.'],
  ['Preciso de um site grande para ter resultados?', 'Não! Um site simples, bem planejado e com uma comunicação estratégica pode ser suficiente para apresentar seus serviços, transmitir credibilidade e gerar oportunidades. O mais importante não é a quantidade de páginas, mas ter uma presença digital que faça sentido para o seu negócio.'],
] as const;

const siteTypes = [
  { id: 'landing', label: 'Landing Page', price: 800 },
  { id: 'institutional', label: 'Site institucional', price: 1400 },
  { id: 'custom', label: 'Site personalizado', price: 2000 },
] as const;
const pageScopes = [
  { id: 'one', label: '1 página', price: 0 },
  { id: 'three', label: '2 a 3 páginas', price: 200 },
  { id: 'five', label: '4 a 5 páginas', price: 400 },
] as const;
const siteFeatures = [
  { id: 'form', label: 'Formulário de contato personalizado', price: 150 },
  { id: 'seo', label: 'Configuração inicial de SEO', price: 200 },
  { id: 'blog', label: 'Blog ou área de notícias', price: 350 },
  { id: 'analytics', label: 'Estatísticas de acesso e relatórios', price: 250, detail: 'Relatórios de visitas, páginas acessadas, origem geográfica aproximada, navegadores e interações monitoradas, conforme a configuração de análise e as permissões de privacidade.' },
] as const;
const systemOptions = [
  'Sistema de agendamento online',
  'Sistema de controle financeiro',
  'Painel administrativo completo',
  'Dashboard com gráficos e indicadores',
  'Estatísticas e relatórios de acesso',
  'PDV não fiscal para controle de vendas no comércio',
  'Sistema de cadastro e gerenciamento de clientes',
  'Controle de produtos e mercadorias',
  'Outra solução personalizada',
] as const;
const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

export function FaqBudgetSections() {
  const [mode, setMode] = useState<'site' | 'system'>('site');
  const [siteType, setSiteType] = useState<(typeof siteTypes)[number]['id']>('landing');
  const [pageScope, setPageScope] = useState<(typeof pageScopes)[number]['id']>('one');
  const [features, setFeatures] = useState<string[]>([]);
  const [systemFeatures, setSystemFeatures] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [businessSegment, setBusinessSegment] = useState('');

  const selectedType = siteTypes.find(item => item.id === siteType)!;
  const selectedScope = pageScopes.find(item => item.id === pageScope)!;
  const selectedFeatures = siteFeatures.filter(feature => features.includes(feature.id));
  const estimate = useMemo(() => Math.max(800, selectedType.price + selectedScope.price + selectedFeatures.reduce((sum, feature) => sum + feature.price, 0)), [selectedType, selectedScope, selectedFeatures]);
  const scopeWarning = siteType === 'landing' && pageScope !== 'one';
  const overLimit = estimate > 2500;
  const siteEstimateText = overLimit ? `Referência de escopo: ${brl.format(estimate)} (acima do limite da simulação; orçamento personalizado)` : `${brl.format(estimate)} (estimativa inicial)`;
  const siteMessage = `Olá, Felipe! Gostaria de conversar sobre um orçamento para meu site.\n\nTipo de site: ${selectedType.label}\nQuantidade de páginas: ${selectedScope.label}\nFuncionalidades: WhatsApp e Instagram${selectedFeatures.length ? `, ${selectedFeatures.map(feature => feature.label).join(', ')}` : ''}\n${siteEstimateText}\n\nTenho interesse em iniciar uma conversa sobre meu projeto.`;
  const systemMessage = `Olá, Felipe! Gostaria de solicitar um orçamento personalizado para desenvolver um sistema web.${name.trim() ? `\nNome/empresa: ${name.trim()}` : ''}${businessSegment.trim() ? `\nSegmento: ${businessSegment.trim()}` : ''}\nSoluções de interesse: ${systemFeatures.length ? systemFeatures.join(', ') : 'Ainda estou definindo as funcionalidades'}${description.trim() ? `\n\nO que preciso:\n${description.trim()}` : ''}\n\nGostaria de conversar para definir funcionalidades, etapas, investimento e prazo.`;
  const whatsappUrl = `https://wa.me/5532984022567?text=${encodeURIComponent(mode === 'site' ? siteMessage : systemMessage)}`;

  function toggleItem(items: string[], setItems: (value: string[]) => void, item: string) {
    setItems(items.includes(item) ? items.filter(value => value !== item) : [...items, item]);
  }

  return <>
    <section className="section-band faq-band"><div className="page-container faq-layout">
      <div className="faq-intro"><SectionLabel number="07">TIRE SUAS DÚVIDAS</SectionLabel><h2>Perguntas frequentes.<br /><span className="text-muted-foreground">Tudo o que você precisa saber antes de começar.</span></h2><p>Reuni as principais dúvidas sobre criação de sites, investimento e desenvolvimento para ajudar você a dar o próximo passo com segurança.</p></div>
      <Accordion type="single" collapsible className="faq-accordion">{questions.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`} className="faq-item"><AccordionTrigger className="faq-trigger">{question}<span className="faq-toggle" aria-hidden="true"><Plus className="faq-plus" /><Minus className="faq-minus" /></span></AccordionTrigger><AccordionContent className="faq-answer">{answer}</AccordionContent></AccordionItem>)}</Accordion>
    </div><div className="page-container faq-cta"><div><h3>Ainda tem alguma dúvida?</h3><p>Cada projeto começa com uma boa conversa. Me conte sua ideia e vamos descobrir juntos a melhor solução para o seu negócio.</p></div><Button asChild className="contact-button"><a href="https://wa.me/5532984022567?text=Ol%C3%A1%2C%20Felipe!%20Tenho%20uma%20d%C3%BAvida%20sobre%20meu%20projeto%20e%20gostaria%20de%20conversar." target="_blank" rel="noopener noreferrer"><MessageCircle />Conversar com Felipe no WhatsApp<ArrowUpRight /></a></Button></div></section>

    <section id="orcamento" className="section-band estimate-section"><div className="page-container"><SectionLabel number="08">SIMULE SEU INVESTIMENTO</SectionLabel><div className="estimate-heading"><div><h2>Sua ideia tem potencial.<br /><span className="text-cyan">Vamos calcular?</span></h2><p>Descubra uma estimativa inicial para seu projeto digital ou solicite uma proposta personalizada para desenvolver um sistema sob medida.</p></div></div>
      <div className="budget-tabs" role="tablist" aria-label="Tipo de orçamento"><button type="button" role="tab" id="budget-tab-site" aria-selected={mode === 'site'} aria-controls="budget-panel" className={mode === 'site' ? 'budget-tab active' : 'budget-tab'} onClick={() => setMode('site')}><Globe2 /><span><strong>Quero criar um site</strong><small>Simule o investimento para sua presença digital.</small></span></button><button type="button" role="tab" id="budget-tab-system" aria-selected={mode === 'system'} aria-controls="budget-panel" className={mode === 'system' ? 'budget-tab active' : 'budget-tab'} onClick={() => setMode('system')}><Code2 /><span><strong>Quero desenvolver um sistema</strong><small>Solicite uma solução personalizada para seu negócio.</small></span></button></div>
      <div id="budget-panel" role="tabpanel" aria-labelledby={mode === 'site' ? 'budget-tab-site' : 'budget-tab-system'} className="budget-panel" key={mode}>
        {mode === 'site' ? <div className="estimate-card"><div className="estimate-options">
          <fieldset><legend><span>01</span> Tipo de site</legend><div className="project-options">{siteTypes.map(type => <label className={`estimate-option ${siteType === type.id ? 'selected' : ''}`} key={type.id}><input type="radio" name="site-type" value={type.id} checked={siteType === type.id} onChange={() => setSiteType(type.id)} /><span className="custom-radio" aria-hidden="true" /><span className="option-copy"><strong>{type.label}</strong><small>A partir de {brl.format(type.price)}</small></span></label>)}</div></fieldset>
          <fieldset className="extras-fieldset"><legend><span>02</span> Quantidade de páginas</legend><div className="project-options page-scope-options">{pageScopes.map(scope => <label className={`estimate-option ${pageScope === scope.id ? 'selected' : ''}`} key={scope.id}><input type="radio" name="page-scope" value={scope.id} checked={pageScope === scope.id} onChange={() => setPageScope(scope.id)} /><span className="custom-radio" aria-hidden="true" /><span className="option-copy"><strong>{scope.label}</strong><small>{scope.price ? `+ ${brl.format(scope.price)}` : 'Incluso'}</small></span></label>)}</div>{scopeWarning && <p className="scope-warning" role="status">Essa quantidade de páginas pode exigir um formato diferente de landing page. O escopo será avaliado em um orçamento personalizado.</p>}</fieldset>
          <fieldset className="extras-fieldset"><legend><span>03</span> Funcionalidades adicionais</legend><p className="included-extra"><Check />Integração com WhatsApp e Instagram <span>Incluso</span></p><div className="extra-options">{siteFeatures.map(feature => <label className="extra-option" key={feature.id}><input type="checkbox" checked={features.includes(feature.id)} onChange={() => toggleItem(features, setFeatures, feature.id)} /><span className="custom-checkbox" aria-hidden="true"><Check /></span><span className="extra-label">{feature.label}{'detail' in feature && <small>{feature.detail}</small>}</span><strong>+ {brl.format(feature.price)}</strong></label>)}</div></fieldset>
        </div><aside className="estimate-result" aria-live="polite"><span className="estimate-result-label">{overLimit ? 'REFERÊNCIA DE ESCOPO' : 'INVESTIMENTO ESTIMADO'}</span><strong className="estimate-amount">{brl.format(estimate)}</strong>{overLimit ? <p className="estimate-limit-warning">Seu projeto ultrapassa a faixa da simulação. Solicite um orçamento personalizado para avaliarmos todas as funcionalidades.</p> : <p>Estimativa inicial, não é uma proposta comercial definitiva.</p>}<dl className="estimate-summary"><div><dt>Tipo de site</dt><dd>{selectedType.label}</dd></div><div><dt>Páginas</dt><dd>{selectedScope.label}</dd></div><div><dt>Funcionalidades</dt><dd>WhatsApp e Instagram{selectedFeatures.length ? `, ${selectedFeatures.map(feature => feature.label).join(', ')}` : ''}</dd></div></dl><p className="estimate-timeline">Prazo indicativo: 5 a 20 dias úteis para sites convencionais, sujeito à complexidade e ao recebimento dos materiais.</p><Button asChild className="contact-button estimate-cta"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Solicitar orçamento pelo WhatsApp<MessageCircle /></a></Button><small>Domínio, hospedagem e serviços de terceiros podem ter custos separados. Valor estimado, sujeito à avaliação do projeto.</small></aside></div> : <div className="system-panel"><div className="system-form"><div className="system-form-heading"><span className="system-icon"><Code2 /></span><div><h3>Seu negócio precisa de uma solução sob medida?</h3><p>Desenvolvo sistemas web personalizados para organizar processos, automatizar tarefas e facilitar a gestão do seu negócio.</p></div></div><fieldset><legend>Quais soluções você procura?</legend><div className="system-options">{systemOptions.map(option => <label className="system-option" key={option}><input type="checkbox" checked={systemFeatures.includes(option)} onChange={() => toggleItem(systemFeatures, setSystemFeatures, option)} /><span className="custom-checkbox" aria-hidden="true"><Check /></span>{option}</label>)}</div></fieldset><label className="field-label" htmlFor="system-description">Conte um pouco sobre o que você precisa<textarea id="system-description" value={description} onChange={event => setDescription(event.target.value)} placeholder="Ex.: Tenho uma loja e preciso de um sistema para registrar vendas, consultar produtos e acompanhar o movimento diário..." rows={4} /></label><div className="system-optional-fields"><label className="field-label" htmlFor="business-name">Nome ou nome da empresa <span>(opcional)</span><input id="business-name" type="text" value={name} onChange={event => setName(event.target.value)} /></label><label className="field-label" htmlFor="business-segment">Qual o segmento do seu negócio? <span>(opcional)</span><input id="business-segment" type="text" value={businessSegment} onChange={event => setBusinessSegment(event.target.value)} /></label></div></div><aside className="system-result"><span className="system-icon"><Code2 /></span><h3>Orçamento personalizado</h3><p>Cada sistema é desenvolvido de acordo com as necessidades do negócio. Vamos conversar para definir funcionalidades, etapas, investimento e prazo.</p><Button asChild className="contact-button estimate-cta"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Conversar sobre meu sistema<MessageCircle /></a></Button><small>Sem valores fixos ou prazo padrão: cada solução será avaliada individualmente.</small></aside></div>}
      </div>
      <div className="budget-footer"><div><strong>Não encontrou exatamente o que procura?</strong><p>Cada negócio tem suas particularidades. Me conte sua ideia e vamos encontrar a solução ideal.</p></div><Button asChild variant="outline"><a href="https://wa.me/5532984022567?text=Ol%C3%A1%2C%20Felipe!%20Quero%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20para%20meu%20neg%C3%B3cio." target="_blank" rel="noopener noreferrer">Falar diretamente com Felipe<ArrowUpRight /></a></Button></div>
    </div></section>
  </>;
}

export default FaqBudgetSections;
