# 🌟 Insurance Policy Management Application

A robust and secure application for managing insurance policies, developed using Spring Boot, Angular, and MySQL. This application features a strong authentication system with separate portals for users and admins, ensuring smooth and efficient management of insurance policies.

## ✨ Features

### Admin Portal
- **Login to the portal**
- **Create Admin Account**
- **View/Update/Delete Customer**
- **View/Add/Update/Delete Policy Category** (Life, Health, Motor, Travel)
- **View/Add/Update/Delete/Approve Policy**
- **View Total Policy Holder Statistics**
- **Approve Policies Applied by Customers**
- **Answer Customer Questions**

### User Portal
- **Create Account** (No approval required by admin)
- **Change Password**
- **Update Personal Information** (Address, Email, Mobile)
- **View All Policies Added by Admin**
- **Apply for Policies** (Goes into pending status for admin approval)
- **Check Policy Status** (Under History Section)
- **Direct Communication**: Users can directly ask questions and get answers from admins.

## 🎯 Objectives

1. **Bug-Free Application**: Ensure a smooth experience for both policymakers (admins) and customers.
2. **Secure & Robust System**: Build a reliable insurance management system with proper policy management.
3. **Efficient Record Maintenance**: Maintain customer, policy, and buyer records for easy 24/7 access.
   
## 📸 Some Screenshots
### Home Page
![image](https://github.com/user-attachments/assets/0a3ba73c-4e2c-4225-9294-aa8a11f2ea0d)

### User Portal

#### User Dashboard
![image](https://github.com/user-attachments/assets/d48ab5c9-0843-4a36-9990-bca0e730c442)

### Apply Policy
![image](https://github.com/user-attachments/assets/94d1d355-feab-4e87-8c8e-5bf80f8851c5)

#### Policy History
![image](https://github.com/user-attachments/assets/b7cc2c07-e856-455e-8736-ebfb7f88e197)

### Admin Portal

#### Admin Dashboard
![image](https://github.com/user-attachments/assets/c2433783-8bca-46c6-af4c-ff7c57437f36)

#### Manage Policies
![image](https://github.com/user-attachments/assets/2a6b683d-5a02-40b0-b6fd-25e0d1e0540c)

## 🚀 Getting Started

### Prerequisites

- **Java Development Kit (JDK)**
- **Node.js and npm**
- **MySQL Database**

### Installation

1. **Clone the repository**:
    ```bash
    https://github.com/suchitdhiman/Insurance_policy.git
    ```

2. **Backend Setup (Spring Boot)**:
    - Navigate to the backend directory:
      ```bash
      cd insurance-policy-management/IPM-SPRING BOOT
      ```
    - Update `application.properties` with your MySQL database configuration.
    - Build and run the backend application:
      ```bash
      ./mvnw spring-boot:run
      ```

3. **Frontend Setup (Angular)**:
    - Navigate to the frontend directory:
      ```bash
      cd insurance-policy-management/IPM-ANGULAR FINAL
      ```
    - Install dependencies and run the Angular application:
      ```bash
      npm install
      ng serve
      ```

4. **Access the Application**:
    - Open your browser and navigate to `http://localhost:4200`.

## 📜 Application Details

### Admin Responsibilities
- **Manage Policies**: Admins can add, update, delete, and approve policies.
- **Handle Customer Queries**: Respond to customer questions and provide necessary support.
- **Policy Category Management**: Admins can organize policies into categories like Life, Health, Motor, and Travel.
- **User Management**: Admins have full control over customer accounts and their details.

### User Experience
- **Personal Dashboard**: Users have a unique dashboard displaying their specific details and applied policies.
- **Policy Application**: Users can browse through available policies and apply for the ones they are interested in.
- **Policy Status Tracking**: Users can track the approval status of their applied policies in real-time.

## 🧪 Unit Testing

Unit testing is a crucial aspect of ensuring the reliability and functionality of individual components in the application. In this project, we have implemented unit tests for various repository methods to verify their correctness. Some key aspects of our unit testing approach include:

- **Isolation**: Each test is designed to focus on a single functionality, ensuring that individual components perform as expected.
- **Comprehensive Coverage**: Tests cover all critical functions such as creating, updating, and retrieving records from the database.
- **Spring Boot Context**: Tests run within the Spring Boot context, allowing for integration testing with actual database interactions.
- **Assertions**: Use of assertions to validate the expected outcomes of each test case, ensuring the application behaves correctly.

### Example Test Cases

- **Add Customer Query**: Verifies that a new customer query can be added to the repository.
- **Answer Customer Query**: Ensures that answers can be provided for existing customer queries.
- **List Customer Queries**: Checks that the list of customer queries can be retrieved successfully.
- **Add Public Query**: Confirms that a public query can be added to the repository.
- **List Public Queries**: Ensures that the list of public queries can be retrieved successfully.

🤝 Contributing
If you wish to contribute to the project, please fork the repository and submit a pull request. I'll appreciate your contributions!

Feel free to reach out if you have any questions or need further assistance!

## 🌟 Connect with Me
Feel free to reach out if you have any questions or need further assistance!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suchit-kumar98/) 
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white)](mailto:dhiman.suchit@gmail.com)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=flat&logo=twitter&logoColor=white)](https://x.com/suchit_dhiman)

---

