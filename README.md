Simple Task Manager API

This is a simple RESTful API for a task manager application built with Node.js and Express.js. The API allows users to perform CRUD operations (Create, Read, Update, and Delete) on tasks. Tasks have a title, description, and a flag for completion status.

Getting Started
To get started with the project, clone the repository and install the dependencies:


git clone https://github.com/your-username/simple-task-manager-api.git
cd simple-task-manager-api
npm install
To start the server, run: node index.js

The server will start on http://localhost:3000.

API Endpoints
The API has the following endpoints:

GET /tasks
Retrieve all tasks.

GET /tasks/:id
Retrieve a single task by its ID.

POST /tasks
Create a new task.

PUT /tasks/:id
Update an existing task by its ID.

DELETE /tasks/:id
Delete a task by its ID.

Data Storage
The API uses an in-memory data store (an array) to store the tasks.

Error Handling and Input Validation
The API implements proper error handling for invalid requests and input validation for task creation and updates. The API validates that the title and description are not empty and that the completion status is a boolean value.

Testing the API
You can test the API using a tool like Postman or cURL. The API endpoints can be accessed at http://localhost:3000/tasks (replace tasks with the appropriate endpoint).

Contributing
If you would like to contribute to the project, please fork the repository and create a pull request.
