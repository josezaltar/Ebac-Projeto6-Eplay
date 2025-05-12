import styled from 'styled-components'
import { cores } from '../../styles'

export const Item = styled.ul`
  display: flex;
`

export const Itens = styled.li`
  margin-right: 16px;
  img {
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`
