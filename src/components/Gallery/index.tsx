import Section from '../Section'
import { Item, Itens } from './styles'
import jogo from '../../assets/images/jogohogwarts.png'

const Gallery = () => (
  <Section title={`Galeria`} background="black">
    <Item>
      <Itens>
        <img src={jogo} alt="jogo" />
      </Itens>
      <Itens>
        <img src={jogo} alt="jogo" />
      </Itens>
      <Itens>
        <img src={jogo} alt="jogo" />
      </Itens>
      <Itens>
        <img src={jogo} alt="jogo" />
      </Itens>
    </Item>
  </Section>
)

export default Gallery
