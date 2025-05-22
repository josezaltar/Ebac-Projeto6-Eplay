import { Container, SectionTitle, Links, Link, FooterSection } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <SectionTitle className="container">
      <FooterSection>
        <SectionTitle> Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="/categorias#rpg">RPG</Link>
            <Link to="/categorias#action">Ação</Link>
            <Link to="/categorias#sports">Esportes</Link>
            <Link to="/categorias#simulation">Simulação</Link>
            <Link to="/categorias#fight">Luta</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle> Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">Promoções</Link>
            <Link to="/#coming-soon">Em breve</Link>
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
