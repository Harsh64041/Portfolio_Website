# Portfolio_Website (Backend Assessment)

A Full Stack Portfolio Playground that exposes a REST API to manage and display personal profile data, skills, work experience, and projects.

- **Live Demo:** https://portfoliowebsite-production-9ce4.up.railway.app/
- **Resume:** https://drive.google.com/file/d/1FxFkLsbzh8RXtTluOA5GISphCP3lJYO1/view?usp=sharing

---

## 🏗 Architecture

* **Backend:** Node.js, Express.js
* **Database:** MySQL (Relational Data Model)
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Hosting:** Railway

---

## 🚀 Setup & Installation

### 1. Local Setup
Prerequisites: Node.js and MySQL installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/harshvardhans809/harsh-portfolio.git
    cd harsh-portfolio
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment:**
    Create a `.env` file in the root directory:
    ```ini
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=portfolio_db
    PORT=3000
    ```

4.  **Seed the Database:**
    Run this script to create tables and insert resume data:
    ```bash
    node seed.js
    ```

5.  **Start the Server:**
    ```bash
    node server.js
    ```
    Visit `http://localhost:3000` in your browser.

---

## 🗄 Database Schema

The database uses the following relational tables:

* **`profile`**: Stores main bio, name, and social links.
* **`education`**: Academic history (Degree, Institution, Year).
* **`work`**: Professional experience and positions.
* **`skills`**: List of technical skills (Languages, Tools).
* **`projects`**: Portfolio projects with searchable fields (`tech_stack`, `description`).

---

## 🔌 API Documentation (Sample cURL)

**1. Health Check**
```bash
curl -X GET http://localhost:3000/api/health
# Response: { "status": "UP" }
