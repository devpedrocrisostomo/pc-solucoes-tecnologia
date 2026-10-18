import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Privacidade | PC Solutions',
  description: 'Entenda quais informações podem ser tratadas durante sua visita à PC Solutions e como exercer seus direitos.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      category="TRANSPARÊNCIA / 01"
      title="Política de Privacidade"
      description="Como a PC Solutions trata informações pessoais relacionadas ao site institucional e aos contatos comerciais, nos termos da LGPD."
    >
      <section>
        <h2>1. Quem é responsável</h2>
        <p>A PC Solutions é um projeto de consultoria e desenvolvimento em tecnologia liderado por Pedro Crisóstomo, em Fortaleza, Ceará. Solicitações relacionadas a dados pessoais podem ser enviadas para <a href="mailto:devpedrocrisostomo@gmail.com">devpedrocrisostomo@gmail.com</a>.</p>
      </section>
      <section>
        <h2>2. Dados que podem ser tratados</h2>
        <p>Este site institucional não oferece cadastro, pagamento ou formulário próprio de coleta de dados. Quando você usa os links de contato por e-mail, poderá compartilhar voluntariamente nome, endereço de e-mail, informações sobre seu negócio e o conteúdo de sua mensagem.</p>
        <p>Na navegação, provedores de infraestrutura e hospedagem podem tratar dados técnicos, como endereço IP, navegador, horários de acesso e registros de segurança. O site também pode armazenar localmente a confirmação de leitura do aviso de cookies e recursos públicos para funcionamento como PWA.</p>
      </section>
      <section>
        <h2>3. Para quais finalidades</h2>
        <p>As informações encaminhadas voluntariamente são usadas para responder solicitações, avaliar propostas, prestar atendimento e manter comunicações relacionadas ao contato iniciado. Os dados técnicos podem ser necessários para disponibilizar o site, preservar sua integridade e investigar falhas ou abusos.</p>
        <p>Conforme o caso, o tratamento pode se apoiar em procedimentos preliminares a pedido do titular, execução de contrato, cumprimento de obrigação legal ou legítimo interesse, observados os requisitos da Lei nº 13.709/2018.</p>
      </section>
      <section>
        <h2>4. Compartilhamento e serviços externos</h2>
        <p>A hospedagem e a entrega do conteúdo podem envolver provedores tecnológicos, incluindo a Vercel na versão publicada por essa plataforma. Links para portfólios e sistemas externos levam a páginas que possuem práticas e políticas próprias. Não declaramos que esses terceiros estejam cobertos por esta política.</p>
        <p>Dependendo da infraestrutura do fornecedor, poderá existir tratamento ou transferência internacional de dados conforme suas condições e as exigências legais aplicáveis.</p>
      </section>
      <section>
        <h2>5. Conservação e proteção</h2>
        <p>As mensagens de contato são mantidas pelo período necessário às finalidades informadas ou ao cumprimento de obrigações aplicáveis. Registros técnicos geridos por terceiros obedecem também às práticas de retenção desses fornecedores. Adotamos medidas proporcionais para restringir o acesso e proteger as informações, sem prometer segurança absoluta.</p>
      </section>
      <section>
        <h2>6. Seus direitos</h2>
        <p>Nos termos da LGPD, você pode solicitar, conforme aplicável, confirmação de tratamento, acesso, correção, informação sobre compartilhamento, anonimização, bloqueio ou eliminação, portabilidade, revisão de decisões automatizadas e revogação de consentimento quando essa for a base utilizada.</p>
        <p>Encaminhe seu pedido para <a href="mailto:devpedrocrisostomo@gmail.com?subject=Solicita%C3%A7%C3%A3o%20LGPD%20-%20PC%20Solutions">devpedrocrisostomo@gmail.com</a>. Poderemos solicitar informações estritamente necessárias para verificar a titularidade antes de atender à solicitação.</p>
      </section>
      <section>
        <h2>7. Atualizações</h2>
        <p>Esta política poderá ser revista conforme o site incorpore serviços, integrações ou mudanças no tratamento de dados. A versão vigente e a data de atualização estarão disponíveis nesta página.</p>
      </section>
    </LegalPage>
  );
}
