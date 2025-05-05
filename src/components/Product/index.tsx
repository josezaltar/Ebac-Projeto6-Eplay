import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/222x250" alt="" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag> Categoria </Tag>
    <Tag> Windows </Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, explicabo
      nemo fuga aliquid ipsa laudantium? Neque quam aut saepe cumque tempora in
      reiciendis aliquid necessitatibus fuga. Dolor cum laudantium ea.
    </Descricao>
  </Card>
)

export default Product
