import { useEffect, useState } from 'react'
import { Imagem, Titulo, Precos } from './styles'

import Tag from '../Tag/index'
import Button from '../Button'
import { Game } from '../../pages/Home'

import { formataPreco } from '../ProductsList/index'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((resp) => resp.json())
      .then((res) => setGame(res))
  }, [])

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
