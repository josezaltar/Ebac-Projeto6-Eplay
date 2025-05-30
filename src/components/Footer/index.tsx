import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <S.SectionTitle className="container">
      <S.FooterSection>
        <S.SectionTitle> Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categorias#rpg"
            >
              RPG
            </S.Link>
            <S.Link
              title="Clique aqui para acessar jogos de Ação"
              to="/categorias#action"
            >
              Ação
            </S.Link>
            <S.Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categorias#sports"
            >
              Esportes
            </S.Link>
            <S.Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categorias#simulation"
            >
              Simulação
            </S.Link>
            <S.Link
              title="Clique aqui para acessar jogos de Luta"
              to="/categorias#fight"
            >
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle> Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos em Promoção"
              to="/#on-sale"
            >
              Promoções
            </S.Link>
            <S.Link
              title="Clique aqui para acessar jogos que serão lançados em breve"
              to="/#coming-soon"
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <div>
        <p>{currentYear} - &copy; EPLAY - Todos os direitos reservados</p>
      </div>
    </S.SectionTitle>
  </S.Container>
)

export default Footer
