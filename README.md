# Aura Rise Realty - Full Stack Real Estate Platform

A modern, high-performance, full-stack real estate consultancy web platform for **Aura Rise Realty** (Delhi NCR). Built with a **Spring Boot 3 REST API**, **PostgreSQL Database**, and a **Vite + React** frontend.

---

## 🌟 Key Features

- **Full-Stack Architecture**: Clean separation between React frontend (`/frontend`) and Spring Boot backend (`/backend`).
- **PostgreSQL Database Integration**: Persistent storage for properties, image galleries, spec features, amenities, client inquiries, and contact messages.
- **Auto Database Initialization**: Automatically creates the PostgreSQL database `aurarisedb` and seeds initial luxury property data on boot.
- **Dynamic Property Catalog**: Live search bar, location/city filters, category filters, and detailed property pages matching `aurariserealty.com`.
- **Interactive Home Loan EMI Calculator**: Interactive slider inputs for principal loan amount, interest rate, and tenure with real-time EMI calculation.
- **Callback & Inquiry System**: Dynamic popup modals and contact forms connected directly to backend REST endpoints, Google Sheets API, and Formspree fallback.

---

## 🛠️ Technology Stack

### Backend
- **Framework**: Spring Boot 3.2.5 (Java 21)
- **Database**: PostgreSQL (`aurarisedb`)
- **ORM & Data**: Spring Data JPA / Hibernate
- **Build Tool**: Apache Maven

### Frontend
- **Framework**: React 18 + Vite 5
- **Icons**: Lucide React
- **Routing**: React Router v6 (Lazy loaded routes)
- **Styling**: Modern Responsive Vanilla CSS Design Tokens

---

## 🚀 Getting Started

### Prerequisites
1. **Java 21 JDK** installed
2. **Node.js (v18+) & npm** installed
3. **PostgreSQL** installed & running on port `5432`

### 1. Database & Backend Setup
Navigate to the `backend/` directory and run the Spring Boot application:

```bash
cd backend
mvn spring-boot:run
```

- Backend server runs on: `http://localhost:8080`
- API Health Check: `http://localhost:8080/api/properties`

### 2. Frontend Setup
In a separate terminal, navigate to the `frontend/` directory and install dependencies:

```bash
cd frontend
npm install
npm run dev
```

- Frontend app runs on: `http://localhost:3000/#/`

---

## 📂 Project Structure

```
Aurariserealty/
├── backend/
│   ├── src/main/java/com/aurarise/realty/
│   │   ├── config/          # CORS & Auto Database Config
│   │   ├── controller/      # REST API Controllers (Property, Inquiry, Contact)
│   │   ├── initializer/     # PostgreSQL Data Seeders
│   │   ├── model/           # JPA Entities (Property, Inquiry, ContactMessage)
│   │   ├── repository/      # Spring Data JPA Repositories
│   │   └── service/         # Business Logic Services
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/      # Navbar, Footer, InquiryModal, EmiCalculator
│   │   ├── pages/           # HomePage, PropertiesPage, PropertyDetailPage, AboutPage, ContactPage
│   │   ├── services/        # API Client Service
│   │   └── data/            # Local Fallback Datasets
│   ├── index.html
│   └── package.json
└── README.md
```

---

## 📄 License
© 2026 Aura Rise Realty. All Rights Reserved.
