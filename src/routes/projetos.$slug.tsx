import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactButton, SectionLabel } from '@/components/portfolio-sections';
import { projects } from '@/lib/portfolio';

const caseNotes: Record<string, { context: string; approach: string; result: string }> = {
  crismar: { context: 'Na rotina do comércio, apresentar ofertas de forma clara e preparar materiais para impressão são tarefas recorrentes. O projeto reúne essas necessidades em uma ferramenta web prática.', approach: 'A organização da interface acompanha o trabalho com produtos, preços e formatos de impressão. A hierarquia visual prioriza o preenchimento das informações e a preparação das placas.', result: 'Uma interface web para cadastrar produtos e preços, gerar placas de ofertas e trabalhar com formatos de impressão. A entrega oferece um caminho organizado para essas tarefas da rotina comercial.' },
  doces: { context: 'A Doces São Fidélis precisava de uma presença digital que valorizasse sua tradição e identidade, ao mesmo tempo em que apresentasse seus produtos.', approach: 'A proposta conecta a história da marca à apresentação do catálogo. A composição visual valoriza os produtos e organiza as informações institucionais em uma navegação adaptada a diferentes telas.', result: 'Um site institucional com história da marca e catálogo digital, reunindo conteúdo e produtos em um espaço próprio com navegação responsiva.' },
  guaru: { context: 'Para uma hamburgueria, o ambiente digital é um ponto de encontro entre a identidade da marca, o cardápio e o interesse de quem deseja fazer um pedido.', approach: 'A proposta dá protagonismo à gastronomia, com identidade visual personalizada e informações organizadas para a consulta do cardápio. A experiência contempla a navegação pelo celular e o caminho até o contato.', result: 'Uma experiência digital que apresenta a Guaru Burguer, valoriza seu cardápio e disponibiliza caminhos para contato e pedidos, também em dispositivos móveis.' },
  frederick: { context: 'O projeto profissional do Dr. Frederick Parreira tem como foco apresentar os serviços de saúde com clareza e facilitar a aproximação com pacientes.', approach: 'A direção visual combina uma identidade elegante com uma organização clara dos serviços. A navegação responsiva e os pontos de contato fazem parte da proposta de uma experiência profissional e acessível.', result: 'Um site profissional com apresentação dos serviços, navegação responsiva e integração de contato e agendamento. O endereço de acesso ainda não foi configurado neste portfólio.' },
  village: { context: 'O Espaço Village é apresentado por meio de um site institucional que reúne informações sobre sua estrutura, serviços, unidades e canais de contato.', approach: 'A direção visual acolhedora valoriza as imagens do espaço. A organização do conteúdo aproxima a apresentação dos ambientes das informações práticas sobre serviços e localização.', result: 'Um site institucional com apresentação do espaço, galeria de imagens, informações sobre serviços, unidades e canais de contato, em uma experiência acolhedora e organizada.' },
};

export const Route = createFileRoute('/projetos/$slug')({
  loader: ({ params }) => {
    const project = projects.find(item => item.id === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.name} — Projeto de Felipe Cal | Web Designer` : 'Projeto não encontrado | Felipe Cal';
    const description = loaderData?.description ?? 'Conheça os projetos de web design de Felipe Cal.';
    return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'article' }, { name: 'twitter:card', content: 'summary_large_image' }] };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  const notes = caseNotes[project.id];
  const next = projects[(projects.findIndex(item => item.id === project.id) + 1) % projects.length];
  return <><header className="site-header detail-header"><div className="page-container header-inner"><Link to="/" className="wordmark">Felipe Cal<span>.</span></Link><Button asChild variant="ghost"><Link to="/" hash="projetos"><ArrowLeft />Voltar aos projetos</Link></Button></div></header><main className="detail-main page-container"><div className="detail-intro"><SectionLabel number="PORTFÓLIO">{project.category}</SectionLabel><h1>{project.name}<span className="text-primary">.</span></h1><div className="detail-summary"><p>{project.description}</p>{project.url && <Button asChild size="lg"><a href={project.url} target="_blank" rel="noopener noreferrer">Acessar site<ArrowUpRight /></a></Button>}</div></div><img className="detail-image" src={project.image} alt={`Mockup completo do projeto ${project.name}`} fetchPriority="high" />{notes && <div className="case-sections"><section><SectionLabel number="01">CONTEXTO</SectionLabel><h2>Uma necessidade real.<br />Uma solução digital.</h2><p>{notes.context}</p></section><section><SectionLabel number="02">PROCESSO E DIREÇÃO</SectionLabel><h2>Design alinhado<br />ao propósito.</h2><p>{notes.approach}</p></section><section><SectionLabel number="03">RESULTADO ENTREGUE</SectionLabel><h2>Da proposta<br />à experiência.</h2><p>{notes.result}</p><ul className="detail-features">{project.features.map(item => <li key={item}><Check />{item}</li>)}</ul></section></div>}<div className="detail-contact"><div><span className="eyebrow">SEU PROJETO PODE SER O PRÓXIMO</span><h2>Vamos dar forma<br />à sua ideia?</h2></div><ContactButton>Quero criar meu site</ContactButton></div>{next && <Link className="next-project" to="/projetos/$slug" params={{ slug: next.id }}><span>PRÓXIMO PROJETO<strong>{next.name}</strong></span><ArrowRight /></Link>}</main><footer className="detail-footer page-container">© {new Date().getFullYear()} Felipe Cal. Web Designer.</footer></>;
}