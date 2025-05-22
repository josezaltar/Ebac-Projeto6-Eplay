import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightingGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao } = useGetActionGamesQuery()
  const { data: gamesEsportes } = useGetSportsGamesQuery()
  const { data: gamesSimulacao } = useGetSimulationGamesQuery()
  const { data: gamesLuta } = useGetFightingGamesQuery()
  const { data: gamesRpg } = useGetRpgGamesQuery()

  if (gamesAcao && gamesEsportes && gamesSimulacao && gamesLuta && gamesRpg) {
    return (
      <>
        <ProductsList
          id="action"
          games={gamesAcao}
          title="Ação"
          background="black"
        />
        <ProductsList
          id="sports"
          games={gamesEsportes}
          title="Esportes"
          background="gray"
        />
        <ProductsList
          id="simulation"
          games={gamesSimulacao}
          title="Simulação"
          background="black"
        />
        <ProductsList
          id="fight"
          games={gamesLuta}
          title="Luta"
          background="gray"
        />
        <ProductsList
          id="rpg"
          games={gamesRpg}
          title="Rpg"
          background="black"
        />
      </>
    )
  }
  return <h4> Carregando...</h4>
}
export default Categories
