import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightingGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: gamesEsportes, isLoading: isLoadingEsportes } =
    useGetSportsGamesQuery()
  const { data: gamesSimulacao, isLoading: isLoadingSim } =
    useGetSimulationGamesQuery()
  const { data: gamesLuta, isLoading: isLoadingLuta } =
    useGetFightingGamesQuery()
  const { data: gamesRpg, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        id="action"
        games={gamesAcao}
        title="Ação"
        background="black"
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sports"
        games={gamesEsportes}
        title="Esportes"
        background="gray"
        isLoading={isLoadingEsportes}
      />
      <ProductsList
        id="simulation"
        games={gamesSimulacao}
        title="Simulação"
        background="black"
        isLoading={isLoadingSim}
      />
      <ProductsList
        id="fight"
        games={gamesLuta}
        title="Luta"
        background="gray"
        isLoading={isLoadingLuta}
      />
      <ProductsList
        id="rpg"
        games={gamesRpg}
        title="Rpg"
        background="black"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
