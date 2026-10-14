// Apenas conteúdo aprovado para a prévia. Dados pendentes ficam em docs/validacao.md.
export const content = {
 name: 'Dr. Paulo Góes Ribeiro',
 city: 'Sorocaba · São Paulo',
 address: 'Avenida Washington Luiz, 310 — Jardim Emília — Torre White — Sala 32 — Sorocaba/SP',
 portrait: './images/retrato.jpg' as string | null,
 portraitAlt: 'Imagem de apresentação do Dr. Paulo Góes Ribeiro fornecida pelo cliente',
 education: null as string | null,
 professional: null as string | null,
 contact: { whatsapp: '5515997249402' as string | null, telephone: '+55 (15) 99724-9402' as string | null, confirmed: true, message: 'Olá! Gostaria de informações para agendar uma consulta com o Dr. Paulo Góes Ribeiro.' },
 sources: { hospital: 'https://relatoriogri.unimedsorocaba.coop.br/2021/Institucional/DiretoresExecutivos', science: 'https://usbrasil.iweventos.com.br/evento/braspen2023/trabalhosaprovados/naintegra/147' },
 areas: [
  { title: 'Nutrologia', text: 'Um olhar médico sobre a relação entre nutrição, saúde e qualidade de vida.', icon: 'leaf' },
  { title: 'Clínica Médica', text: 'Atenção à saúde do adulto, considerando o contexto e as necessidades de cada pessoa.', icon: 'care' },
  { title: 'Gerenciamento da saúde', text: 'Uma visão integrada do cuidado, que conecta atenção clínica e acompanhamento da saúde.', icon: 'circle' }
 ]
};
// Ponto do edifício no link Google Maps publicado em:
// https://www.bsouzaassessoriajuridica.com.br/contato (unidade Sorocaba).
// O mapa localiza o edifício; a sala 32 permanece indicada no endereço.
export const officeCoordinates = '-23.5122125,-47.4586467';
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${officeCoordinates}`;
export const bookingUrl = content.contact.confirmed && content.contact.whatsapp ? `https://wa.me/${content.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(content.contact.message)}` : null;

export const mapEmbedUrl = `https://www.google.com/maps?q=${officeCoordinates}&z=17&output=embed`;
