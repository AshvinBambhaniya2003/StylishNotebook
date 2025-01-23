# StylishNotebook

StylishNotebook is a full-stack web application that allows users to securely store their notes in the cloud. It features a user authentication system, note creation, editing, deletion, and secure storage using JWT and bcrypt for password hashing.

## Features:
- **User Authentication**: Create and log in with your account using email and password.
- **Note Management**: Add, edit, delete, and view notes.
- **Secure**: Passwords are hashed with bcrypt, and JWT is used for secure authentication.
- **Responsive**: Works in modern browsers such as Chrome, Firefox, and Safari.

---

## Table of Contents
1. [Local Setup](#local-setup)
2. [Kubernetes Setup](#kubernetes-setup)
3. [Application Overview](#application-overview)
4. [Project Structure](#project-structure)

---

## Local Setup

To set up and run the application locally, follow these steps:

### Prerequisites

Ensure that the following software is installed:
- **Docker**: [Install Docker](https://www.docker.com/get-started)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)
- **Node.js** (for development purposes): [Install Node.js](https://nodejs.org/)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/stylishnotebook.git
   cd stylishnotebook
   ```

2. Copy the `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

   Adjust the values in `.env` if necessary (e.g., `REACT_APP_BACKEND_URI` for the frontend).

3. Build and start the application using Docker Compose:

   ```bash
   docker-compose up --build
   ```

   This will start the following services:
   - **Frontend** (React app) on port 3000.
   - **Backend** (Node.js app) on port 5000.
   - **MongoDB** on port 27017 for note storage.

4. Open the app in your browser:

   Visit `http://localhost:3000` to access the app.

---

## Kubernetes Setup

If you'd like to run the application on Kubernetes, follow these steps:

### Prerequisites

Ensure that you have the following set up:
- **kubectl**: [Install kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- **Helm** (optional for deployment): [Install Helm](https://helm.sh/docs/intro/install/)
- **Docker**: Installed and configured for building images.

### Steps

1. **Build Docker Images**:
   
   Build both the frontend and backend Docker images.

   ```bash
   docker build -t yourusername/notebook-frontend ./frontend
   docker build -t yourusername/notebook-backend ./backend
   ```

2. **Push Docker Images to a Registry** (e.g., Docker Hub):

   ```bash
   docker push yourusername/notebook-frontend
   docker push yourusername/notebook-backend
   ```

3. **Create Kubernetes Deployment Files**:

   You will need to create deployment and service YAML files for both frontend and backend services. You can create them manually or use Helm charts.

4. **Deploy to Kubernetes**:

   If using kubectl directly:
   
   ```bash
   kubectl apply -f frontend-deployment.yaml
   kubectl apply -f backend-deployment.yaml
   kubectl apply -f mongo-deployment.yaml
   ```

   Ensure that the services are exposed properly.

5. **Access the Application**:

   After deployment, you should be able to access the application via the frontend service's external IP.

---

## Application Overview

This application is built with a **React frontend** and a **Node.js backend**. The backend is connected to **MongoDB** for storing user data and notes. The main features include:

- **Authentication**: Users can create accounts, log in, and access their own notes.
- **Note Management**: CRUD operations for notes (Create, Read, Update, Delete).
- **Secure**: JWT tokens for authentication, bcrypt for password hashing.
- **Responsive Design**: Mobile and desktop friendly UI.

---

## Project Structure

```plaintext
└─ ashvinbambhaniya2003-stylishnotebook/
    ├─ README.md
    ├─ Dockerfile
    ├─ docker-compose.yml
    ├─ package.json
    ├─ .dockerignore
    ├─ .env.example
    ├─ Backend/
    │   ├─ Dockerfile
    │   ├─ db.js
    │   ├─ index.js
    │   ├─ package-lock.json
    │   ├─ package.json
    │   └─ routes/
    ├─ public/
    ├─ src/
    │   ├─ App.js
    │   ├─ components/
    │   ├─ context/
    ├─ .github/
        └─ workflows/
            ├─ backend-ci.yml
            └─ frontend-ci.yml
```

- **Frontend**: React application in the `src` folder.
- **Backend**: Node.js backend with MongoDB connection in the `Backend` folder.
- **Docker**: Dockerfiles and `docker-compose.yml` to run both the frontend and backend locally.
- **CI/CD**: GitHub Actions workflows for automatic build and deployment.

---

