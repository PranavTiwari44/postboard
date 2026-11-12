<div align="center">
  <img src="public/postboard-logo.svg" alt="Postboard" width="320" />
  <p><strong>Write it, edit it, pin it to the board.</strong></p>

  ![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
  ![Axios](https://img.shields.io/badge/Axios-1-5A29E4?logo=axios&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
  ![CSS](https://img.shields.io/badge/CSS-663399?logo=css&logoColor=white)
</div>

## About

A simple posts board I built with React. It loads posts from a REST API and lets you create, edit and delete them, all from one page.

## Features

- Browse posts in a responsive card grid
- Create a new post (it appears at the top of the board)
- Edit or delete any post
- Loading and error messages when the API is slow or unreachable
- Light and dark theme that follows your system setting

## Run it locally

```bash
git clone https://github.com/PranavTiwari44/postboard.git
cd postboard
npm install
npm start
```

Then open [localhost:3000](http://localhost:3000).

## Post data

Posts come from the [JSONPlaceholder](https://jsonplaceholder.typicode.com) fake API, using the requests in `src/Services/postService.js`:

```js
getPosts()                  // GET    /posts
createPost(postData)        // POST   /posts
updatePost(postId, data)    // PUT    /posts/:id
deletePost(postId)          // DELETE /posts/:id
```

JSONPlaceholder pretends to save your changes but doesn't keep them, so everything resets when you refresh. Posts you create are only stored in the app, so editing or deleting them skips the API. To use your own backend, change `baseURL` in `postService.js`.

## To do

- Save posts so they survive a page refresh
- Search and filter posts
- Use functional state updates (`setPosts(prev => ...)`) everywhere
