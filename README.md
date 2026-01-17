# Full Stack Portfolio API (Me-API)

A dynamic portfolio application built as a backend assessment project. It features a RESTful API built with Node.js and Express that serves personal profile data, skills, projects, and experience stored in a MySQL cloud database.

### 🔗 **Quick Links**
- 🌐 **Live Demo:** https://portfoliowebsite-production-9ce4.up.railway.app
- 📄 **My Resume:** https://drive.google.com/file/d/1FxFkLsbzh8RXtTluOA5GISphCP3lJYO1/view?usp=sharing

---

## 🏗️ Architecture & Technologies

The application follows a client-server architecture designed for separation of concerns.

* **Frontend:** Static HTML5, CSS3 (Professional Split-Screen Layout), Vanilla JavaScript for DOM manipulation and API data fetching. Served as static files by the backend.
* **Backend:** Node.js runtime environment with the Express.js framework for routing and middleware management.
* **Database:** MySQL relational database hosted on Railway, storing structured data for profile, education, work history, projects, and skills.
* **Deployment:** Full-stack deployment on Railway with environment variable management for database connection security.

---

## ⚙️ Local Setup Instructions

Follow these steps to run the project locally on your machine.

**Prerequisites:** Node.js and MySQL installed.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Harsh64041/Portfolio_Website.git](https://github.com/Harsh64041/Portfolio_Website.git)
    cd Portfolio_Website
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment:**
    Create a `.env` file in the root directory with your local database credentials:
    ```ini
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_local_password
    DB_NAME=portfolio_db
    PORT=3000
    ```

4.  **Seed the Database:**
    Run the included script to create tables and insert sample data:
    ```bash
    node seed.js
    ```

5.  **Start the Server:**
    ```bash
    node server.js
    ```
    Access the application at `http://localhost:3000`.

---

## 🔌 API Endpoints Documentation

The backend exposes the following RESTful GET endpoints. All responses are in JSON format.

### 1. Get Full Profile
Fetches main profile details, work experience, and education history.
* **Endpoint:** `GET /api/profile`
* **Response Example:**
    ```json
    {
      "name": "Harsh Vardhan Sharma",
      "role": "Backend Developer",
      "work": [ { "company": "...", "position": "..." } ],
      "education": [ { "institution": "...", "degree": "..." } ]
    }
    ```

### 2. Get All Skills
Retrieves a list of technical skills grouped by category.
* **Endpoint:** `GET /api/skills`
* **Response Example:**
    ```json
    {
      "skills": [
        { "name": "C++", "category": "Language" },
        { "name": "Node.js", "category": "Backend" }
      ]
    }
    ```

### 3. Search Projects
Fetches portfolio projects. Supports an optional query parameter for filtering by title or technology stack.
* **Endpoint:** `GET /api/projects`
* **Query Param (Optional):** `?q=search_term` (e.g., `/api/projects?q=python`)
* **Response Example:**
    ```json
    {
      "projects": [
        {
          "title": "Face Recognition Attendance",
          "description": "Automated system using Python & OpenCV...",
          "tech_stack": "Python, OpenCV, MySQL",
          "repo_link": "[https://github.com/](https://github.com/)..."
        }
      ]
    }
    ```
