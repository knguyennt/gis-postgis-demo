# GIS PostGIS Demo

This project demonstrates how to leverage PostgreSQL's PostGIS extension for efficient geospatial data storage and location-based searching.

## Prerequisites

The project is divided into two repositories:
- **Frontend**: React
- **Backend**: Flask

### Requirements:
- [Docker & Docker Compose](https://docs.docker.com/engine/install/)
- [Poetry](https://python-poetry.org/docs/#installation) (for backend dependencies)
- [Node.js & npm](https://nodejs.org/) (for frontend)

## Project Setup

### 1. Setup Husky (Code Linting & Pre-commit Hooks)

Husky is used to enforce code standards and run pre-commit hooks.  
From the project root directory, run:

```
npm install
npm run prepare
```

### 2. Setup Frontend

Navigate to the frontend directory and run:

```
cd frontend/app
npm install
npm start
```

### 3. Setup Backend

Navigate to the backend directory and run:

```
cd backend
poetry install
pre-commit install --hook-type pre-commit
```