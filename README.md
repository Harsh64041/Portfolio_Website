# 🚀 Full-Stack Modern Portfolio

A dynamic, data-driven portfolio website built with the MERN stack (MySQL, Express, React, Node.js) and hosted on Render with TiDB Cloud (Serverless MySQL).

**Live Demo:** [https://portfolio-website-iz6c.onrender.com/](https://portfolio-website-iz6c.onrender.com/)

## 🌟 Features
* **Dynamic Content:** All data (Profile, Education, Experience, Projects, Skills) is fetched from a TiDB MySQL database.
* **Modern UI:** Clean, responsive design for all devices.
* **Cloud Native:** Uses TiDB Serverless for database management and Render for web hosting.
* **Automated Setup:** Includes a `seed.js` script to set up database tables and initial data automatically.

## 📂 Project Structure
```text
Harsh Portfolio/
├── config/
│   └── db.js                # TiDB Database connection
├── controllers/
│   └── portfolioController.js # Logic for fetching data
├── public/                  # Frontend assets
├── routes/                  # API route definitions
├── seed.js                  # Database initialization script
└── server.js                # Express server
```

## 🛠️ Tech Stack
* **Frontend:** React.js, CSS
* **Backend:** Node.js, Express.js
* **Database:** TiDB (MySQL compatible serverless database)
* **Deployment:** Render

## 📋 Prerequisites
Before you begin, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v16 or higher)
* [Git](https://git-scm.com/)
* A [TiDB Cloud](https://tidbcloud.com/) account (Free Tier)

## ⚙️ Local Setup & Installation

1.  **Fork & Clone the Repository:**
    ```bash
    git clone [https://github.com/Harsh64041/Portfolio_Website.git](https://github.com/Harsh64041/Portfolio_Website.git)
    cd Portfolio_Website
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables Setup:**
    Create a `.env` file in the root directory and add your TiDB credentials:
    ```ini
    DB_HOST=your_tidb_host
    DB_USER=your_tidb_user
    DB_PASSWORD=your_tidb_password
    DB_NAME=portfolio_db
    DB_PORT=4000
    PORT=8080
    ```

4.  **Database Seeding:**
    Run the seed script to create tables and insert initial data:
    ```bash
    node seed.js
    ```

5.  **Run the Server:**
    ```bash
    node server.js
    ```
    The site will be available at `http://localhost:8080`.

## 🚀 Deployment on Render

1.  Create a new **Web Service** on Render and connect your GitHub repository.
2.  Set the **Environment Variables** in the Render dashboard:
    * Add all keys from your `.env` file (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, etc.).
3.  **Important:** Ensure `DB_NAME` matches the name created by `seed.js` (e.g., `portfolio_db`).
4.  Render will automatically build and deploy your service.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!
1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 👤 Author
**Harsh Vardhan Sharma**
* LinkedIn: [@harsh-vardhan-sharma](https://linkedin.com/in/harsh-vardhan-sharma)
* GitHub: [@Harsh64041](https://github.com/Harsh64041)

---
