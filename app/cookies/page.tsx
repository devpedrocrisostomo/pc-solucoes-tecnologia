import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Cookies | PC Solutions',
  description: 'Informações sobre cookies, armazenamento local e cache do site PC Solutions.',
};

export default function CookiesPage() {
  return (
    <LegalPage
      category="TRANSPARÊNCIA / 02"
      title="Política de Cookies"
      description="Informações objetivas sobre cookies, tecnologias de armazenamento e suas finalidades na experiência da PC Solutions."
    >
      <section>
        <h2>1. O que são cookies</h2>
        <p>Cookies são pequenos registros que um site ou serviço pode salvar no navegador. Outras tecnologias, como localStorage e Cache Storage, também guardam informações no dispositivo, mas não são cookies HTTP.</p>
      </section>
      <section>
        <h2>2. O que este site utiliza atualmente</h2>
        <p>Na versão atual do código da PC Solutions, não são integrados cookies próprios de publicidade, personalização comercial ou análise de audiência. Por isso, não solicitamos um consentimento genérico para categorias opcionais que não estão em uso.</p>
        <div className="legal-data-table">
          <div><strong>Tecnologia</strong><strong>Finalidade</strong></div>
          <div><span>localStorage: pc-solutions.cookie-notice.v1</span><span>Lembrar que o aviso informativo foi lido. Não contém dados de identificação ou rastreamento.</span></div>
          <div><span>Cache Storage / service worker</span><span>Guardar arquivos e recursos públicos do site para carregamento e funcionamento básico do PWA.</span></div>
          <div><span>Cookies opcionais próprios</span><span>Não configurados no código atual.</span></div>
        </div>
      </section>
      <section>
        <h2>3. Duração e controle</h2>
        <p>A confirmação de leitura permanece no armazenamento local até você limpar os dados do site no navegador ou até uma mudança de versão do aviso. O cache PWA pode permanecer até a atualização do aplicativo ou remoção dos dados armazenados.</p>
        <p>Você pode apagar cookies, armazenamento local e cache nas configurações de privacidade do navegador. Ao remover esses dados, o aviso poderá aparecer novamente. Também é possível reabrir o aviso pelo rodapé.</p>
      </section>
      <section>
        <h2>4. Terceiros e links externos</h2>
        <p>Provedores de hospedagem ou páginas externas acessadas por links podem empregar seus próprios cookies e registros de acesso. A PC Solutions não controla o armazenamento feito fora deste site. Consulte as políticas de cada serviço antes de compartilhar dados.</p>
      </section>
      <section>
        <h2>5. Mudanças futuras</h2>
        <p>Se forem adicionadas ferramentas não essenciais que dependam de consentimento, suas finalidades serão informadas e esses recursos deverão ficar desativados até uma escolha válida do visitante, com opção de recusa e revogação.</p>
      </section>
      <section>
        <h2>6. Dúvidas</h2>
        <p>Para questionamentos sobre tecnologias de armazenamento, envie uma mensagem para <a href="mailto:devpedrocrisostomo@gmail.com">devpedrocrisostomo@gmail.com</a>.</p>
      </section>
    </LegalPage>
  );
}
