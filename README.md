# Postboard

A small React app for creating, reading, updating and deleting posts. It talks to the [JSONPlaceholder](https://jsonplaceholder.typicode.com) fake REST API using Axios.

## Features

- Load and show posts from the API in a responsive card grid
- Create a new post
- Edit an existing post (the form fills in with the post's title and body)
- Delete a post
- Light and dark theme that follows your system setting
- Layout that works on desktop and mobile

## Tech stack

- [React 18](https://react.dev) (bootstrapped with Create React App)
- [Axios](https://axios-http.com) for HTTP requests
- Plain CSS (no UI library)

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) 16 or newer
- npm

### Install and run

```bash
git clone <your-repo-url>
cd postboard
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command         | What it does                                              |
| --------------- | --------------------------------------------------------- |
| `npm start`     | Runs the dev server at http://localhost:3000              |
| `npm test`      | Runs the tests in watch mode                              |
| `npm run build` | Builds an optimized production bundle in the `build/` dir |

## Project structure

```
src/
├── App.js                  # App shell: header, main area, footer
├── App.css                 # All UI styles (theme variables, layout, cards, form)
├── components/
│   ├── posts.js            # Fetches posts, renders the list, handles edit/delete
│   └── postForm.js         # Form for creating and updating posts
└── Services/
    └── postService.js      # Axios client: getPosts, createPost, updatePost, deletePost
```

## API

All requests go to `https://jsonplaceholder.typicode.com`:

| Action | Method | Endpoint     |
| ------ | ------ | ------------ |
| List   | GET    | `/posts`     |
| Create | POST   | `/posts`     |
| Update | PUT    | `/posts/:id` |
| Delete | DELETE | `/posts/:id` |

> **Note:** JSONPlaceholder is a fake API. It responds as if your changes worked, but nothing is actually saved on the server. Changes only last until you refresh the page.

## Changing the API

To point the app at your own backend, change `baseURL` in [src/Services/postService.js](src/Services/postService.js).
