import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Segurança da Informação | PC Solutions',
  description: 'Práticas de segurança, limitações e canal para comunicação responsável de vulnerabilidades da PC Solutions.',
};

export default function SecurityPage() {
  return (
    <LegalPage
      category="TRANSPARÊNCIA / 03"
      title="Segurança da Informação"
      description="Conheça as medidas técnicas aplicadas ao site institucional e como comunicar suspeitas de vulnerabilidade de forma responsável."
    >
      <section>
        <h2>1. Compromisso com a segurança</h2>
        <p>A PC Solutions considera a proteção de informações um requisito do desenvolvimento e da operação de seus serviços. As medidas são avaliadas conforme as funcionalidades, os riscos e os recursos disponíveis. Nenhuma aplicação conectada à internet é isenta de riscos.</p>
      </section>
      <section>
        <h2>2. Proteções desta versão do site</h2>
        <p>Na publicação via Vercel, o site utiliza HTTPS e configurações de cabeçalhos HTTP que ajudam a restringir enquadramento externo, acesso a recursos não autorizados, permissões sensíveis e exposição de informações do navegador. O código atual não oferece login, formulários de cadastro ou processamento de pagamentos.</p>
        <p>O service worker armazena recursos públicos do site para uso como PWA, e os links externos de demonstrações são abertos com isolamento de referência entre janelas. A versão estática em outras plataformas pode exigir configuração própria de cabeçalhos no provedor de hospedagem.</p>
      </section>
      <section>
        <h2>3. Contato e divulgação responsável</h2>
        <p>Se identificar uma possível vulnerabilidade neste site institucional, envie uma descrição objetiva para <a href="mailto:devpedrocrisostomo@gmail.com?subject=Relato%20de%20Seguran%C3%A7a%20-%20PC%20Solutions">devpedrocrisostomo@gmail.com</a>, incluindo endereço da página, impacto observado e formas seguras de reprodução.</p>
        <p>Evite testes destrutivos, tentativas de acesso a dados de terceiros, engenharia social, indisponibilização de serviços ou divulgação pública de detalhes exploráveis antes da análise. O contato não constitui autorização para testes invasivos.</p>
      </section>
      <section>
        <h2>4. Incidentes com dados pessoais</h2>
        <p>Quando ocorrer um incidente envolvendo dados pessoais, sua natureza, consequências e medidas de resposta serão avaliadas. As comunicações aos titulares e à Autoridade Nacional de Proteção de Dados serão realizadas quando exigidas pela legislação e pelas normas aplicáveis, incluindo a Resolução CD/ANPD nº 15/2024.</p>
      </section>
      <section>
        <h2>5. Limitações desta declaração</h2>
        <p>Esta página descreve controles observáveis na aplicação e procedimentos de contato; não representa certificação de segurança, auditoria independente, programa de recompensas ou garantia de ausência de vulnerabilidades. A segurança de projetos externos do portfólio deve ser avaliada individualmente.</p>
      </section>
    </LegalPage>
  );
}
