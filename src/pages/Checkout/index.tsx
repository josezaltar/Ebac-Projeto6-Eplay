import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome Completo</label>
              <input id="fullName" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteudo digital </h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryemail">Email</label>
              <input id="deliveryemail" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryemail">Confirme o e-mail</label>
              <input id="confirmDeliveryemail" type="email" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <div>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="boleto" />
            Boleto Bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="cartao de credito" />
            Cartão de crédito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner">
                      Nome do titular do cartão{' '}
                    </label>
                    <input id="cardOwner" type="email" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfcardOwner">
                      CPF do titular do cartão{' '}
                    </label>
                    <input id="cpfcardOwner" type="email" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão </label>
                    <input id="cardcardDisplayNamewner" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input id="cardNumber" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresMonth">Mes de vencimento</label>
                    <input id="expiresMonth" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input id="expiresYear" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCvv">CVV</label>
                    <input id="cardCvv" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="130px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select id="installments">
                      <option value="1">1x sem juros</option>
                      <option value="2">2x sem juros</option>
                      <option value="3">3x sem juros</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique maiores facere consequatur molestias reprehenderit qui
                ex amet eveniet quae sequi accusamus magni illo nihil, possimus
                impedit doloribus nisi. Sapiente, officiis.
              </p>
            )}
          </div>
        </div>
      </Card>
      <Button type="button" title="Finalizar compra">
        Finalizar compra
      </Button>
    </div>
  )
}
export default Checkout
