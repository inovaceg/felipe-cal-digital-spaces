import docesMockup from '@/assets/doces-mockup.png';
import guaruMockup from '@/assets/guaru-mockup.png';
import frederickMockup from '@/assets/frederick-mockup.png';
import villageMockup from '@/assets/village-mockup.png';
import crismarMockup from '@/assets/crismar-mockup.png';

export const whatsapp = 'https://wa.me/5532984022567?text=Ol%C3%A1%2C%20Felipe%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20um%20site.';
export const instagram = 'https://www.instagram.com/felipecal/';
export const projects = [
  { id: 'frederick', name: 'Dr. Frederick Parreira', category: 'Site Profissional / Saúde', image: frederickMockup, description: 'Site profissional com identidade elegante e comunicação clara, desenvolvido para apresentar os serviços e facilitar o contato com pacientes.', challenge: 'Apresentar com clareza os serviços e diferenciais do atendimento profissional.', solution: 'Uma apresentação digital organizada, com navegação responsiva e caminhos de contato.', features: ['Apresentação dos serviços', 'Design profissional', 'Navegação responsiva', 'Integração de contato e agendamento'], url: undefined },
  { id: 'crismar', name: 'Crismar', category: 'Sistema Web / Ferramentas para Comércio', image: crismarMockup, description: 'Sistema web desenvolvido para facilitar a criação e impressão de placas de ofertas, proporcionando mais praticidade e agilidade à rotina comercial.', challenge: 'Facilitar a criação e impressão recorrente de placas de ofertas no comércio.', solution: 'Uma ferramenta web para cadastrar produtos e preços e preparar placas para impressão.', features: ['Geração de placas de ofertas', 'Formatos de impressão', 'Cadastro de produtos e preços', 'Interface prática e intuitiva'], url: 'https://placascrismar.vercel.app/' },
  { id: 'doces', name: 'Doces São Fidélis', category: 'Site Institucional / Catálogo Digital', image: docesMockup, description: 'Site institucional que valoriza a tradição e a identidade da Doces São Fidélis, apresentando sua história e seu catálogo de produtos.', challenge: 'Apresentar a história da marca e seus produtos em um espaço digital organizado.', solution: 'Um site institucional com conteúdo da marca e catálogo digital de produtos.', features: ['Apresentação institucional', 'História da marca', 'Catálogo de produtos', 'Navegação responsiva'], url: 'https://docessaofidelis.com.br/' },
  { id: 'guaru', name: 'Guaru Burguer', category: 'Site para Delivery / Gastronomia', image: guaruMockup, description: 'Experiência digital criada para apresentar a hamburgueria, valorizar seu cardápio e facilitar o contato e os pedidos dos clientes.', challenge: 'Comunicar o cardápio, a identidade da hamburgueria e as opções de pedido.', solution: 'Uma experiência responsiva que reúne cardápio, informações e caminhos para contato.', features: ['Identidade visual personalizada', 'Cardápio digital', 'Interface adaptada ao celular', 'Jornada de pedidos'], url: 'https://guaru-burguer-delivery-jf.lovable.app/' },
  { id: 'village', name: 'Espaço Village', category: 'Site Institucional / Saúde', image: villageMockup, description: 'Site institucional com visual acolhedor e sofisticado, criado para apresentar a estrutura, os serviços e as informações do Espaço Village.', challenge: 'Apresentar o espaço, os serviços e as informações úteis para quem busca atendimento.', solution: 'Uma apresentação institucional com galeria, informações sobre serviços e unidades.', features: ['Apresentação do espaço', 'Galeria de imagens', 'Informações sobre serviços', 'Unidades e canais de contato'], url: 'https://espacovillage.verdent.app/' },
];
export type Project = (typeof projects)[number];
export const faqs = [
  ['Quanto custa criar um site?', 'O investimento depende do tipo de site, das funcionalidades e das necessidades do projeto. Entre em contato para conversarmos sobre sua ideia.'],
  ['Preciso ter uma empresa para contratar?', 'Não. Também desenvolvo sites para profissionais autônomos e projetos pessoais.'],
  ['Meu site vai funcionar no celular?', 'Sim. Os projetos são planejados para proporcionar uma boa experiência em diferentes tamanhos de tela.'],
  ['Meu site poderá aparecer no Google?', 'Um site pode ser preparado com boas práticas de SEO para facilitar sua indexação e visibilidade, mas posições e resultados não são garantidos.'],
  ['Posso integrar WhatsApp e Instagram?', 'Sim. É possível criar caminhos rápidos para que seus visitantes entrem em contato.'],
  ['Quanto tempo demora para criar um site?', 'O prazo varia conforme a complexidade e as necessidades de cada projeto.'],
  ['Preciso de um site grande?', 'Não necessariamente. Uma página simples e bem planejada pode ser um excelente começo.'],
];
