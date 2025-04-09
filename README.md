# Table of Contents

1. [Overview](#-overview)
2. [Prerequisites](#-prerequisites)
3. [Project Structure](#-project-structure)
4. [Installation & Setup](#-installation--setup)
5. [API Endpoints](#-api-endpoints)
   - [User Routes](#user-routes)
   - [Admin Routes](#admin-routes)
   - [Customer Routes](#customer-routes)
   - [Loan Routes](#loan-routes)
   - [Loan Payment Routes](#loan-payment-routes)
   - [Transaction Routes](#transaction-routes)
6. [Technologies Used](#-technologies-used)
7. [Best Practices Followed](#-best-practices-followed)
8. [License](#-license)

# MONEY IN THE BANK API PROJECT

## 📌 Overview
This project is a **Node.js** application that simulates a simplified  interacts with a **MariaDB** database. It follows best practices for structuring a backend service and includes database management, RESTful API development, and authentication.

## 🛠 Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [MariaDB](https://www.MariaDB.com/) (v8.0 or later recommended)
- [Postman](https://www.postman.com/) (for API testing, optional)

## 📂 Project Structure
```
/project-root
│── src
│   ├── config          # Configuration files (DB File)
│   ├── controllers     # The HTTP Endpoint that interacts with the database
│   ├── models          # Database models and schema
│   ├── routes          # Express routes
│   ├── validators      # Authentication, validation, etc.
│   ├── services        # Business logic for functions
|   ├── repositories    # Handles data access/updates/deletions  
│── .env                # Environment variables
│── package.json        # Dependencies and scripts
│── index.js            # Entry point of the application
```

## 🚀 Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/Nadim-CPU/money-in-the-bank.git 
   cd project-root
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3001
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=nameOfDatabase
   ```

4. **Start MariaDB and create a database**
   ```sql
   CREATE DATABASE bank_db;
   ```

5. **Run database migrations (if applicable)**
   ```sh
   npm run migrate
   ```

6. **Start the server**
   ```sh
   npm start
   ```
   dev mode
   ```sh
   npm run dev
   ```
   The server will run on `http://localhost:3001`.

## 📌 API Endpoints
### User Routes
| Method  | Endpoint          | Description         |
|---------|-------------------|---------------------|
| POST    | /user/            | Creates a new user  |
| GET     | /user/:id         | Get user by ID      |
| GET     | /user/            | Gets Every User     |
| POST    | /user/login       | Login Authentication|
| DELETE  | /user/:id         | Delete user         |
| PUT     | /user/phone/:id   | Changes User Phone  |
| PUT     | /user/address/:id | Changes User Address|
| PUT     | /user/password/:id| Changes User Password|

### Admin Routes
| Method  | Endpoint          | Description         |
|---------|-------------------|---------------------|
| POST    | /admin/           | Creates a new admin |
| GET     | /admin/:id        | Get admin by ID     |
| GET     | /admin/           | Gets Every Admin    |
| PUT     | /admin/number/:id | Login Authentication|
| DELETE  | /admin/:id        | Delete admin        |

### Customer Routes
| Method  | Endpoint          | Description             |
|---------|-------------------|-------------------------|
| POST    | /customer/        | Creates a new customer  |
| GET     | /customer/:id     | Get customer by ID      |
| GET     | /customer/        | Gets Every Customer     |
| DELETE  | /customer/:id     | Delete customer         |
| PUT     | /customer/add/:id | Adds To Balance         |
| PUT     | /customer/deduct/:id| Deducts From Balance  |
| PUT     | /customer/close/:id | Closes Customer       |
| PUT     | /customer/open/:id  | Opens Customer        |

### Loan Routes
| Method  | Endpoint          | Description             |
|---------|-------------------|-------------------------|
| POST    | /loan/            | Creates a new loan      |
| GET     | /loan/:id         | Get loan by ID          |
| GET     | /loan/customer/:id| Gets Every Loan Of Customer|
| DELETE  | /loan/:id         | Delete loan             |
| PUT     | /loan/deduct/:id  | Deducts Loan Amount     |
| PUT     | /customer/deduct/:id| Deducts From Balance  |
| PUT     | /customer/close/:id | Closes Customer       |

### Loan Payment Routes
| Method  | Endpoint          | Description              |
|---------|-------------------|--------------------------|
| POST    | /loanpayment/     | Creates a new loanpayment|
| GET     | /loanpayment/:id  | Get loan payment by ID   |
| GET     | /lanpayment/loan/:id| Gets Every Loan Payment For Loan|

### Transaction Routes
| Method  | Endpoint                 | Description                     |
|---------|--------------------------|---------------------------------|
| POST    | /transaction/            | Creates a new transaction       |
| GET     | /transaction/:id         | Get loan payment by ID          |
| GET     | /transaction/customer/:id| Gets Every Loan Payment For Loan|
| POST    | /transaction/withdraw/:id| Creates A Withdraw Transaction  |
| POST    | /transaction/deposit/:id | Creates A Deposit Transaction   |
## 🛠 Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **MariaDB** - Relational database
- **dotenv** - Environment variable management

## 🔍 Best Practices Followed
✔️ Follows MVC architecture  
✔️ Uses environment variables for security  
✔️ Implements error handling and validation  
✔️ Uses async/await for better promise handling

## 📝 License
This project is licensed under the MIT License.

---