import { act, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { InputGroup, Row, TabButton } from './styles'

import Button from '../../components/Button'
import Card from '../../components/Card'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryemail: '',
      confirmDeliveryemail: '',
      cardOwner: '',
      cpfcardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCvv: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome deve ter no mínimo 5 caracteres')
        .required('O nome é obrigatório'),
      email: Yup.string()
        .email('Email inválido')
        .required('O email é obrigatório'),
      cpf: Yup.string()
        .min(14)
        .max(14, 'o campo precisa ter 14 caracteres')
        .required('O CPF é obrigatório'),
      deliveryemail: Yup.string()
        .email('Email inválido')
        .required('O email é obrigatório'),
      confirmDeliveryemail: Yup.string()
        .oneOf([Yup.ref('deliveryemail')], 'Os emails devem ser iguais')
        .required('O campo é obrigatório'),
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O nome é obrigatório') : schema
      ),
      cpfcardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O nome é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O nome é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O nome é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O nome é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O nome é obrigatório') : schema
      ),
      cardCvv: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O nome é obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O nome é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryemail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCvv),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfcardOwner,
              name: values.cardOwner
            },
            expires: {
              monthe: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 100
          }
        ]
      })
    }
  })
  const getErrormessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome Completo</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrormessage('fullName', form.errors.fullName)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrormessage('email', form.errors.email)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrormessage('cpf', form.errors.cpf)}</small>
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteudo digital </h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryemail">Email</label>
              <input
                id="deliveryemail"
                type="email"
                name="deliveryemail"
                value={form.values.deliveryemail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrormessage('deliveryemail', form.errors.deliveryemail)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryemail">Confirme o e-mail</label>
              <input
                id="confirmDeliveryemail"
                type="email"
                name="confirmDeliveryemail"
                value={form.values.confirmDeliveryemail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrormessage(
                  'confirmDeliveryemail',
                  form.errors.confirmDeliveryemail
                )}
              </small>
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <div>
          <TabButton
            type="button"
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="boleto" />
            Boleto Bancário
          </TabButton>
          <TabButton
            type="button"
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
                    <input
                      id="cardOwner"
                      type="text"
                      name="cardOwner"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrormessage('cardOwner', form.errors.cardOwner)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfcardOwner">
                      CPF do titular do cartão{' '}
                    </label>
                    <input
                      id="cpfcardOwner"
                      type="text"
                      name="cpfcardOwner"
                      value={form.values.cpfcardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrormessage(
                        'cpfcardOwner',
                        form.errors.cpfcardOwner
                      )}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão </label>
                    <input
                      id="cardDisplayName"
                      type="text"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrormessage(
                        'cardDisplayName',
                        form.errors.cardDisplayName
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrormessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresMonth">Mes de vencimento</label>
                    <input
                      id="expiresMonth"
                      type="text"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrormessage(
                        'expiresMonth',
                        form.errors.expiresMonth
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input
                      id="expiresYear"
                      type="text"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrormessage('expiresYear', form.errors.expiresYear)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCvv">CVV</label>
                    <input
                      id="cardCvv"
                      type="text"
                      name="cardCvv"
                      value={form.values.cardCvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrormessage('cardCvv', form.errors.cardCvv)}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="130px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select
                      id="installments"
                      name="installments"
                      value={form.values.installments}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    >
                      <small>
                        {getErrormessage(
                          'installments',
                          form.errors.installments
                        )}
                      </small>
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
      <Button
        type="button"
        title="Finalizar compra"
        onClick={form.handleSubmit}
      >
        Finalizar compra
      </Button>
    </form>
  )
}
export default Checkout
