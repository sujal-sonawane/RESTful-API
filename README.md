# RESTful API - Post Management

A RESTful web application built using Node.js, Express.js, EJS, UUID, and Method-Override.

This project demonstrates CRUD operations for managing posts.

## Features

- Create a new post
- View all posts
- View a single post in detail
- Edit an existing post
- Delete a post
- Generate unique post IDs using UUID
- Render dynamic pages using EJS
- Use Method-Override for PATCH and DELETE requests

## Technologies Used

- Node.js
- Express.js
- EJS
- UUID
- Method-Override
- HTML
- CSS

## Project Structure

```text
RESTful-API/
├── public/
│   └── style.css
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── show.ejs
│   └── edit.ejs
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page |
| GET | `/posts` | Display all posts |
| GET | `/posts/new` | Form to create a new post |
| POST | `/posts` | Create a new post |
| GET | `/posts/:id` | Display a specific post |
| GET | `/posts/:id/edit` | Edit form for a post |
| PATCH | `/posts/:id` | Update a post |
| DELETE | `/posts/:id` | Delete a post |

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/RESTful-API.git
```

Go into the project folder:

```bash
cd RESTful-API
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node index.js
```

Open:

```text
http://localhost:8080
```

## What I Learned

- Express.js routing
- RESTful API concepts
- CRUD operations
- EJS templating
- Express middleware
- `req.params`
- `req.body`
- UUID generation
- GET, POST, PATCH and DELETE methods
- Git and GitHub

## Author

**Sujal Sonawane**

--------------------------------------------------
2. .gitignore CONTENT
--------------------------------------------------

node_modules/
.env

--------------------------------------------------
3. FAST GITHUB SETUP
--------------------------------------------------

FIRST create an EMPTY GitHub repository named:

RESTful-API

Do NOT add:
- README
- .gitignore
- License

Then open VS Code terminal inside:

C:\RESTFUL API

Run these commands ONE BY ONE:

git init

git add .

git commit -m "Initial RESTful API project"

git branch -M main

git remote add origin https://github.com/YOUR_USERNAME/RESTful-API.git

git push -u origin main

Replace YOUR_USERNAME with your GitHub username.

--------------------------------------------------
4. AFTER MAKING FUTURE CHANGES
--------------------------------------------------

Use:

git add .

git commit -m "Updated RESTful API"

git push

--------------------------------------------------
5. IMPORTANT
--------------------------------------------------

Do NOT upload:
- node_modules/
- .env
- passwords
- API keys
- secret tokens

package.json and package-lock.json SHOULD be uploaded.

--------------------------------------------------
6. IF YOU HAVE NOT CREATED .gitignore YET
--------------------------------------------------

Create a file named:

.gitignore

and put:

node_modules/
.env

Then run:

git add .
git commit -m "Initial RESTful API project"
git push -u origin main

--------------------------------------------------
END
--------------------------------------------------
