import * as S from './styles'
export type Props = {
  title: string
  background?: 'black' | 'gray'
  children: JSX.Element
}
const Section = ({ title, background, children }: Props) => (
  <S.Container background={background}>
    <div className="container">
      <S.Tittle>{title}</S.Tittle>
      {children}
    </div>
  </S.Container>
)

export default Section
