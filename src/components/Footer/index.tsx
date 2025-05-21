import { Container, SectionTitle, Links, Link, FooterSection } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <SectionTitle className="container">
      <FooterSection>
        <SectionTitle> Categorias</SectionTitle>
        <Links>
          <li>
            <Link>RPG</Link>
            <Link>Ação</Link>
            <Link>Esportes</Link>
            <Link>Simulação</Link>
            <Link>Estrategia</Link>
            <Link>FPS</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle> Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link>Novidades</Link>
            <Link>Promoções</Link>
            <Link>Em breve</Link>
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
