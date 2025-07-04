# 🎮 Eplay – Loja Virtual de Games

Bem-vindo ao repositório do **Eplay**, um projeto de e-commerce completo desenvolvido como parte do curso de Front-End da EBAC. A aplicação simula uma loja virtual de jogos, aplicando conceitos modernos e tecnologias avançadas do ecossistema React.

**[➡️ Acesse a loja online aqui! ⬅️](https://e-play-ebac.vercel.app/)**

##  галерея

| Página Inicial | Checkout | Confirmação de Pedido |
| :---: | :---: | :---: |
| ![Página Inicial](https://i.imgur.com/9xJYxMu.png) | ![Checkout](https://i.imgur.com/qry5MAu.png) | ![Confirmação de Pedido](https://i.imgur.com/ii9Pei5.png) |

## 📖 Sobre o Projeto

O Eplay é uma aplicação web robusta que demonstra um fluxo de e-commerce completo, desde a visualização de produtos até a finalização da compra. O projeto foi estruturado para ser escalável e manutenível, utilizando as melhores práticas de desenvolvimento, como gerenciamento de estado centralizado, validação de formulários e componentização.

O principal objetivo foi construir uma aplicação que não apenas parecesse profissional, mas que também funcionasse com a complexidade de um sistema real, incluindo a interação com um carrinho de compras e um processo de checkout seguro.

## ✨ Funcionalidades Principais

* **Navegação Completa:** Página inicial com destaques, páginas de categorias e perfis de produtos.
* **Carrinho de Compras Interativo:** Adicione, remova e visualize itens no carrinho de forma dinâmica.
* **Fluxo de Checkout:** Processo de finalização de compra com formulários para dados de entrega e pagamento.
* **Validação de Formulários:** Utilização do **Formik** e **Yup** para garantir que os dados inseridos pelo usuário sejam válidos antes de processar o pedido.
* **Gerenciamento de Estado com Redux:** Controle centralizado do estado da aplicação (carrinho, modais, etc.) com **Redux Toolkit**.
* **Design Totalmente Responsivo:** Experiência de usuário otimizada para desktops, tablets e celulares.

## 🛠️ Tecnologias Utilizadas

* **[React](https://reactjs.org/) (v18.2.0):** Biblioteca principal para a construção da interface.
* **[TypeScript](https://www.typescriptlang.org/):** Garante um código mais seguro e robusto com tipagem estática.
* **[Redux Toolkit](https://redux-toolkit.js.org/):** Para gerenciamento de estado global da aplicação.
* **[Styled Components](https://styled-components.com/):** Para estilização de componentes de forma modular e dinâmica.
* **[React Router DOM](https://reactrouter.com/):** Para gerenciamento de rotas e navegação.
* **[Formik](https://formik.org/):** Para construção de formulários complexos.
* **[Yup](https://github.com/jquense/yup):** Para validação de esquemas de dados de formulários.
* **[ESLint](https://eslint.org/) & [Prettier](https://prettier.io/):** Para garantir a qualidade e a consistência do código.

## 🚀 Começando

Para obter uma cópia local do projeto e executá-la, siga os passos abaixo.

### Pré-requisitos

Você precisa ter o [Node.js](https://nodejs.org/en/) (que inclui o `npm`) instalado em sua máquina.

### Instalação

1.  Clone o repositório:
    ```sh
    git clone https://github.com/josezaltar/Ebac-Projeto6-Eplay.git
    ```
2.  Navegue até o diretório do projeto:
    ```sh
    cd eplay
    ```
3.  Instale todas as dependências:
    ```sh
    npm install
    ```

### Executando a Aplicação

Após a instalação, inicie o servidor de desenvolvimento:

```sh
npm start
