import Tag from '../Tag/index'
import Button from '../Button'
import Loader from '../Loader'

import { useGetFeaturedGameQuery } from '../../services/api'

import * as S from './styles'
import { parseToBrl } from '../../utils'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Titulo>{game.name}</S.Titulo>
          <S.Precos>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            por apenas {parseToBrl(game.prices.current)}
          </S.Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title={'Clique aqui para aproveitar está oferta '}
        >
          Aproveitar
        </Button>
      </div>
    </S.Imagem>
  )
}

export default Banner
