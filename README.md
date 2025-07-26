# Restaurant Management System - Admin Panel

## Project Description

This is a comprehensive Restaurant Management System's Admin Panel that allows administrators to manage various aspects of their restaurant operations through a web interface. The system includes features for handling customer orders, employee management, menu pricing, and customer reviews.

## Features

### 1. Admin Dashboard
- View all customer orders
- Delete customer data when needed
- Navigation to other management sections

### 2. Employee Management
- Add new employees with details (name, salary, designation)
- View all employees in a tabular format
- Delete employee records

### 3. Customer Reviews
- View all customer feedback and reviews
- See customer details along with their reviews
- Track which food items are being reviewed

### 4. Food Price Management
- Add new food items with pricing
- View all menu items and their prices
- Maintain an up-to-date menu

## Technologies Used

- *Frontend*: HTML5, CSS3, JavaScript
- *Styling*: Bootstrap 5
- *Backend*: Node.js (implied by API endpoints)
- *API Communication*: Fetch API

## Installation

1. Clone the repository:
   bash
   git clone [repository-url]
   

2. Navigate to the project directory:
   bash
   cd restaurant-management-system
   

3. Install dependencies (assuming Node.js backend):
   bash
   npm install
   

4. Start the server:
   bash
   npm start
   

5. Open the application in your browser at:
   
   http://localhost:3000/admin.html
   

## API Endpoints

The frontend communicates with the following API endpoints:

- Customer Orders:
  - POST /submit - Submit new order
  - GET /display - Display all orders
  - DELETE /delete - Delete order

- Employee Management:
  - POST /empsubmit - Add new employee
  - GET /empdisplay - Display all employees
  - DELETE /empdelete - Delete employee

- Customer Reviews:
  - POST /reviewsubmit - Submit new review
  - GET /reviewdisplay - Display all reviews

- Food Prices:
  - POST /pricesubmit - Add new food price
  - GET /pricedisplay - Display all food prices

## File Structure


restaurant-management-system/
├── admin.html                - Main admin dashboard
├── admin.js                  - Admin dashboard functionality
├── admin-employee.html       - Employee management page
├── admin-employee.js         - Employee management functionality
├── admin-review.html         - Customer reviews page
├── admin-review.js           - Reviews functionality
├── admin-price.html          - Food pricing page
├── admin-price.js            - Pricing functionality
├── css/                      - Stylesheets directory
├── App.js                    - Main application logic
├── review.js                 - Review submission logic
└── README.md                 - This file


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is open-source and available under the [MIT License](LICENSE
