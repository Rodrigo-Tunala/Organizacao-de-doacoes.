# 📌 Organização de Doações

## 1 - Apresentação da Ideia

Este projeto foi desenvolvido a partir da necessidade de melhorar a organização e distribuição de doações, um problema comum em épocas de desastres.
Ao analisar esse cenário, foi possível identificar dificuldades na gestão das informações como onde encontrar pontos de doações, saber onde necessita de mais doações e qual o tipo das doações.

A ideia surgiu com o objetivo de aplicar conceitos de desenvolvimento back-end na construção de uma API capaz de centralizar e organizar esses dados de forma eficiente e também de facil adptação para usar em diferentes locais e necessidades.

---

## 2 - Problema Escolhido

O problema abordado neste projeto é a falta de organização no gerenciamento de doações.

Muitas organizações enfrentam dificuldades como:

* Falta informação sobre locais de doação
* Dificuldade em registrar os itens recebidos
* Problemas na distribuição dos recursos

As principais pessoas impactadas são:

* ONGs e instituições sociais
* Voluntários responsáveis pela gestão
* Beneficiários que dependem dessas doações

Esse problema é relevante pois a má gestão pode levar ao desperdício de recursos e dificultar o atendimento às pessoas que realmente precisam.

---

## 3 - Solução Proposta

A solução desenvolvida consiste em uma API back-end para gerenciamento de doações.

O sistema permite:

* Cadastro de usuários/ponto de doações
* Controle dos itens doados
* Organização das informações de forma estruturada

De forma geral, a aplicação funciona como um sistema centralizado onde todas as informações são armazenadas e podem ser acessadas por meio de requisições HTTP.

O principal diferencial da proposta é a simplicidade e organização da arquitetura, facilitando a manutenção e futura expansão do sistema, como integração com um front-end ou aplicativos.

---

## 4 - Estrutura do Sistema

O projeto foi estruturado seguindo boas práticas de organização de back-end.

### 🔧 Back-end

Responsável por toda a lógica da aplicação, incluindo:

* Processamento das requisições
* Validação de dados
* Regras de negócio
* Comunicação com o banco de dados

### 🗄️ Banco de Dados

Utilizado para armazenar informações essenciais, como:

* Usuários/Ponto de doações
* Itens doados

Esses dados são fundamentais para garantir o controle e rastreabilidade das doações.

### 🎨 Front-end

O projeto foi desenvolvido com foco no back-end, permitindo integração futura com qualquer interface (web ou mobile).

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express
* MySQL
* JavaScript

---

## ⚙️ Como executar o projeto

```bash
# Clonar o repositório
git clone https://github.com/Rodrigo-Tunala/Organizacao-de-doacoes.git

# Entrar na pasta
cd Organizacao-de-doacoes

# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

---

## 🧪 Testes

As rotas da API podem ser testadas utilizando ferramenta como:

* Postman


---

## 📌 Melhorias Futuras

* Implemnetar sistema de login
* Implementar autenticação (JWT)
* Criar interface front-end
* Melhorar validações

---

## 👨‍💻 Autor

Rodrigo Tunala Rezende
GitHub: https://github.com/Rodrigo-Tunala
