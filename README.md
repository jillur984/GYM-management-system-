# Gym Management System

This system manages three roles: **Admin**, **Trainer**, and **Trainee**, each with distinct access levels and functionalities.

## Features

### Admin
- Create and manage trainee accounts.
- Schedule up to **5 classes per day**, each with a maximum duration of **2 hours**.
- **Limitations**: Cannot reschedule more than **5 classes per day**.

### Trainer
- Create and manage their own account.
- Update profile picture and personal information.

### Trainee
- Extend class duration or reschedule classes beyond admin's limitations.
- Manage a **card system** for personal data (edit and delete functionality included).
- Access a schedule indicating availability and organizational holidays.

## Authentication and Authorization
- **JSON Web Tokens (JWT)** are used to manage public and private roles.
- **Access Tokens** enable login and sign-in functionality.
- **Private Routes** ensure restricted access based on authorization.
- **Conditional Navigation**: Authorized users see additional options in the navigation bar.

## Forms
- Unified forms for account creation for both trainees and trainers.

## Scheduling
- Time schedules to display trainee availability.
- Clearly marked organization holidays.

## Future Expansion
- The system is designed to be scalable, allowing for additional features in the future, In sha Allah.

---

This project ensures smooth role-based access while maintaining flexibility and scalability for future enhancements.
