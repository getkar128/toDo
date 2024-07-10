
# MERN Stack Todo Application

This is a MERN (MongoDB, Express, React, Node.js) stack application for managing a todo list. The frontend is developed using React, with state management handled by Redux Toolkit. I have used Tailwind CSS for making responsive design. The backend uses Express, Node.js, and MongoDB to store and manage todos.

## Developer Info

I am a front-end developer with basic knowledge of Express, Node.js, and MongoDB. I have built this application to enhance my skills and demonstrate my ability to develop a full-stack application.

## Project Structure

```
TODO
│
├── api
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   └── utils
│       └── index.js
│
├── client
│   ├── node_modules
│   ├── public
|   ├── src
|   ├── .eslintrc.cjs
|   ├── .gitignore
|   ├── index.html
|   ├── package-lock.json
|   ├── package.json
|   ├── postcss.config.js
|   ├── README.md
|   ├── tailwind.config.js
|   └── vite.config.js
├── node_modules
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

```

## Installation

### Prerequisites

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)

### Backend Setup

1. Navigate to the `Root` directory:

   ```bash
   cd toDo
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `root` directory and add your MongoDB URI and other necessary environment variables:

   ```env
   MONGO_URI=your_mongo_db_uri
   PORT=3500
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

## Running the Application

To run the entire application, follow these steps:

1. Ensure MongoDB is running on your local machine or accessible via a URI.
2. Start the backend server from the `api` directory.
3. Start the frontend development server from the `client` directory.

## Best Practices

- **Code Organization:** Maintain a clear and logical file structure. Separate concerns by organizing code into directories such as `controllers`, `models`, and `routes` for the backend, and `components`, `pages`, and `store` for the frontend.
- **Environment Variables:** Use a `.env` file to manage configuration settings and sensitive information such as API keys and database URIs.
- **Error Handling:** Implement proper error handling in both the backend and frontend to improve the application's robustness and user experience.
- **Linting and Formatting:** Use tools like ESLint and Prettier to ensure code quality and consistency. The `.eslintrc.cjs` file is configured for this purpose.
- **State Management:** Use Redux Toolkit for efficient and scalable state management in the frontend.
- **Styling:** Utilize a consistent styling approach, such as Tailwind CSS, for a clean and maintainable UI.
- **Documentation:** Keep your README.md and other documentation up-to-date to help others understand and contribute to your project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact me at [getkar128@gmail.com].

---

Thank you for checking out my MERN stack todo application! I hope you find it useful and informative.
