# Tradezy - Full-Stack Trading Dashboard

## Overview

Tradezy is an educational full-stack stock trading platform that recreates the core experience of a modern brokerage application. It combines a public product and pricing website with a portfolio dashboard where users can review market data, holdings, positions, funds, and place simulated buy orders. The project is designed for learners and developers exploring end-to-end web application development with React, Express, and MongoDB.

## Features

- Responsive landing pages for products, pricing, company information, and support
- Dashboard summary for equity margin, investment value, and profit and loss
- Market watchlist with price movement indicators and contextual trading actions
- Holdings and positions retrieved from a MongoDB-backed REST API
- Buy-order workflow with quantity selection and automatic order-value calculation
- Persistent order storage through an Express API and Mongoose models
- Dedicated views for orders, funds, holdings, positions, and applications
- Client-side routing and reusable React component architecture

## Tech Stack

- **Frontend:** React, React Router, Bootstrap, Material UI, Axios, Font Awesome
- **Backend:** Node.js, Express, Mongoose, REST API
- **Database:** MongoDB
- **Authentication:** Not implemented
- **Deployment:** No deployment configuration is included

## Screenshots

### Home Page

(Add screenshot)

### Dashboard

(Add screenshot)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sarvxsh555/Tradezy.git
cd Tradezy
```

### 2. Start the backend

```bash
cd backend
npm install
npm start
```

### 3. Start the landing site

```bash
cd frontend
npm install
npm start
```

### 4. Start the dashboard

In a separate terminal, run the dashboard on another available port when prompted:

```bash
cd dashboard
npm install
npm start
```

The API runs on `http://localhost:3002`. Both React applications use Create React App's development server.

## Environment Variables

Create `backend/.env`:

```env
MONGO_URL=your_mongodb_connection_string
PORT=3002
```

- `MONGO_URL` - MongoDB connection URI
- `PORT` - Optional API port; defaults to `3002`

## Project Structure

```text
Tradezy/
|-- frontend/
|   |-- public/
|   `-- src/landing_page/
|-- dashboard/
|   |-- public/
|   `-- src/
|       |-- components/
|       `-- data/
`-- backend/
    |-- model/
    |-- schemas/
    `-- index.js
```

## Key Learnings

- Building and connecting multiple React clients to a shared backend
- Designing REST endpoints and MongoDB data models
- Managing reusable components, routing, state, and React Context
- Persisting and presenting portfolio and order data
- Structuring a full-stack JavaScript project by responsibility

## Author

**Sarvesh Arun**  
[GitHub](https://github.com/Sarvxsh555)
