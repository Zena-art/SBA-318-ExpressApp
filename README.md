# User Management Express App

## Description
This is a simple Express application for managing users, posts, and comments. It provides a RESTful API that allows you to create, read, update, and delete users, posts, and comments.

## Features
- User management (create, read, update, delete)
- Post management (create, read, update, delete)
- Comment management (create, read, delete)
- Simple front-end interface for user interaction
- Uses Express.js for backend and EJS as the templating engine

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript)
- Body-parser
- CORS (if necessary)

### Users

| Endpoint              | Method | Description                          | Request Body                      |
|----------------------|--------|--------------------------------------|-----------------------------------|
| `/api/users`         | GET    | Get all users                       | -                                 |
| `/api/users/add`     | POST   | Create a new user                   | `{ "name": "string" }`           |
| `/api/users/:id`     | PATCH  | Update a user                       | `{ "name": "string" }`           |
| `/api/users/:id`     | DELETE | Delete a user                       | -                                 |

### Posts

| Endpoint              | Method | Description                          | Request Body                      |
|----------------------|--------|--------------------------------------|-----------------------------------|
| `/api/posts`         | GET    | Get all posts                       | -                                 |
| `/api/posts`         | POST   | Create a new post                   | `{ "title": "string", "content": "string" }` |
| `/api/posts/:id`     | PATCH  | Update a post                       | `{ "title": "string", "content": "string" }` |
| `/api/posts/:id`     | DELETE | Delete a post                       | -                                 |

### Comments

| Endpoint                  | Method | Description                          | Request Body                      |
|--------------------------|--------|--------------------------------------|-----------------------------------|
| `/api/comments/:postId`  | GET    | Get all comments for a specific post | -                                 |
| `/api/comments`          | POST   | Create a new comment                | `{ "postId": "number", "content": "string" }` |
| `/api/comments/:id`      | DELETE | Delete a comment                    | -                                 |


## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Zena-art/SBA-318-ExpressApp.git
   cd repository-name
