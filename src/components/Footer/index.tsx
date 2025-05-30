import { Container, SectionTitle, Links, Link, FooterSection } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <SectionTitle className="container">
      <FooterSection>
        <SectionTitle> Categorias</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categorias#rpg"
            >
              RPG
            </Link>
            <Link
              title="Clique aqui para acessar jogos de Ação"
              to="/categorias#action"
            >
              Ação
            </Link>
            <Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categorias#sports"
            >
              Esportes
            </Link>
            <Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categorias#simulation"
            >
              Simulação
            </Link>
            <Link
              title="Clique aqui para acessar jogos de Luta"
              to="/categorias#fight"
            >
              Luta
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle> Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogos em Promoção"
              to="/#on-sale"
            >
              Promoções
            </Link>
            <Link
              title="Clique aqui para acessar jogos que serão lançados em breve"
              to="/#coming-soon"
            >
              Em breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <div>
        <p>{currentYear} - &copy; EPLAY - Todos os direitos reservados</p>
      </div>
    </SectionTitle>
  </Container>
)

export default Footer
