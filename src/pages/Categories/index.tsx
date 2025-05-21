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
        <ProductsList games={gamesAcao} title="Ação" background="black" />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
        />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="black"
        />
        <ProductsList games={gamesLuta} title="Luta" background="gray" />
        <ProductsList games={gamesRpg} title="Rpg" background="black" />
      </>
    )
  }
  return <h4> Carregando...</h4>
}
export default Categories
