# 🚌 OniBus Express

Sistema de venda de passagens rodoviárias desenvolvido como solução para o desafio técnico da OniBus Express.

## 📋 Sobre o Projeto

O projeto consiste em uma aplicação frontend para busca, seleção e reserva de passagens rodoviárias, simulando o fluxo completo de compra de uma passagem online.

### Funcionalidades Implementadas

- Busca de viagens por origem, destino e data
- Seleção de assentos através de mapa visual
- Cadastro de dados do passageiro
- Confirmação da reserva
- Consulta de reserva por código
- Gerenciamento global de estado utilizando Context API
- Integração com API mockada via json-server
- Testes automatizados com React Testing Library e Jest
- Interface responsiva utilizando Tailwind CSS
- Navegação entre páginas com React Router

---

## 🚀 Tecnologias Utilizadas

### Frontend

- React 19
- TypeScript
- Vite
- React Router DOM
- Context API
- Axios
- Tailwind CSS
- Material UI (Autocomplete)

### Testes

- Jest
- React Testing Library
- User Event

### Mock API

- json-server

### Containerização

- Docker
- Nginx

---

## 📁 Estrutura do Projeto

```text
src/
├── components/
│   ├── Navbar/
│   ├── PassengerForm/
│   ├── SeatMap/
│   └── TripCard/
│
├── contexts/
│   └── BookingContext.tsx
│
├── hooks/
│   └── useBooking.ts
│
├── layouts/
│   └── MainLayout.tsx
│
├── pages/
│   ├── SearchPage/
│   ├── SeatSelectionPage/
│   ├── PassengerPage/
│   ├── SuccessPage/
│   ├── ReservationLookupPage/
│   └── NotFoundPage/
│
├── services/
│   ├── routesService.ts
│   ├── tripsService.ts
│   └── reservationService.ts
│
├── types/
├── tests/
└── App.tsx
```

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- Node.js 20+
- npm 10+
- Docker (opcional)

---

### 1. Clonar o Repositório

```bash
git clone <url-do-repositorio>

cd onibus-express-frontend
```

---

### 2. Instalar Dependências

```bash
npm install
```

---

### 3. Iniciar o json-server

Instale globalmente:

```bash
npm install -g json-server
```

Execute:

```bash
json-server --watch db.json --port 3001
```

API disponível em:

```text
http://localhost:3001
```

---

### 4. Executar Aplicação

```bash
npm run dev
```

Aplicação disponível em:

```text
http://localhost:5173
```

---

## 🧪 Executando os Testes

Executar todos os testes:

```bash
npm test
```

ou

```bash
npx jest
```

Executar cobertura:

```bash
npm test -- --coverage
```

---

## 🐳 Executando com Docker

### Build da imagem

```bash
docker build -t onibus-express .
```

### Executar container

```bash
docker run -p 8080:80 onibus-express
```

Aplicação disponível em:

```text
http://localhost:8080
```

---

## 📡 Endpoints Mockados

### Rotas

```http
GET /routes
```

### Viagens

```http
GET /trips

GET /trips?origin=São Paulo&destination=Rio de Janeiro&departureDate=2026-06-15
```

### Reservas

```http
POST /reservations

GET /reservations?code=ABC-12345

PATCH /reservations/:id
```

---

## 🏗️ Decisões de Arquitetura

### Context API

Foi utilizada para gerenciar o estado global da aplicação, armazenando:

- Viagem selecionada
- Assento selecionado
- Dados do passageiro
- Reserva criada

Essa abordagem elimina prop drilling e mantém o fluxo desacoplado entre as telas.

### json-server

Foi utilizado para simular o backend da aplicação sem necessidade de implementação completa da API.

### Componentização

Os principais elementos reutilizáveis foram extraídos para componentes independentes:

- SeatMap
- PassengerForm
- TripCard
- Navbar

Facilitando manutenção e testes.

---

## ✅ Requisitos Atendidos

### Tela de Busca

- Origem
- Destino
- Data
- Listagem de viagens
- Loading
- Estado vazio

### Tela de Assentos

- Mapa visual
- Assentos livres
- Assentos ocupados
- Seleção de assento

### Tela de Passageiro

- Nome
- CPF
- Email
- Validação dos campos

### Consulta de Reserva

- Busca por código
- Exibição dos dados
- Cancelamento

### Testes

- Busca de viagens
- Seleção de assentos
- Validação do formulário

---

## 🔮 Melhorias Futuras

- Persistência em banco de dados real
- Autenticação de usuários
- Validação completa de CPF
- Integração com gateway de pagamento
- Controle real de disponibilidade de assentos
- Testes E2E com Cypress
- Internacionalização (i18n)
- Dark Mode

---

## 👨‍💻 Autor

**Levy Buarque**

Desenvolvedor Frontend especializado em React, TypeScript e arquitetura de aplicações web modernas.
