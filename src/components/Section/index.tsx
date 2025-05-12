import { Container, Tittle } from './styles'
export type Props = {
  title: string
  background?: 'black' | 'gray'
  children: JSX.Element
}
const Section = ({ title, background, children }: Props) => (
  <Container background={background}>
    <div className="container">
      <Tittle>{title}</Tittle>
      {children}
    </div>
  </Container>
)

export default Section
