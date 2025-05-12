import Section from '../Section'
import { Item, Itens, Action, Modal, ModalContent } from './styles'
import jogo from '../../assets/images/jogohogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}
const mock: GalleryItem[] = [
  {
    type: 'image',
    url: jogo
  },
  {
    type: 'image',
    url: jogo
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/yF29baX-IsA?si=CnKsJubkk1EgiJS_'
  }
]

type Props = {
  defaultCover: string
  name: string
}
const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') {
      return item.url
    }
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') {
      return zoom
    }
    return play
  }
  return (
    <>
      <Section title={`Galeria`} background="black">
        <Itens>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a Mídia"
                />
              </Action>
            </Item>
          ))}
        </Itens>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Ícone de fechar" />
          </header>
          <img src={jogo} alt={`Imagem ampliada de ${name}`} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
