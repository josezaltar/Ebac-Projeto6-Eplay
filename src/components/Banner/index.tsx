import { Imagem, Titulo, Precos } from './styles'

import Tag from '../Tag/index'
import Button from '../Button'

import { formataPreco } from '../ProductsList/index'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title={'Clique aqui para aproveitar está oferta '}
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
