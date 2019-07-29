# Running/Environment

- Make sure you **fork** this repository to your own Github, then clone it to your computer
- Install all the dependencies from `package.json` file using `$ npm install `
- Then, start the server by using `$ npm start` and **not** using `$ node server.js`
- There are automatic scripts that will run in the background and will compile all your
files into one big file called `./build/server.js`.
It is NOT a file that you should be able to read.
- You have a file attached call _Architecture.pdf_ that explains the architecture of the application, use it!

# Features

- Save each requested photo in the database - when a user requests a photo, save it using mongoose models. It means you should also build the schema and a model in the right files
- Add the ability to get/fetch a random photo (read about it in Unsplash API: https://unsplash.com/documentation)

# To Do

- Fixing access to `/public` folder
- Fixing all the errors that pops up in the console
- Server is not even running (go to `/health` to monitor the server), check why
- Fix authentication headers
- Add the ability to order by `likes` when searching photos (see the routes)

# Goal

In this simulation the aim is to expose you to a real world backend architecture and also `bundling` using `webpack`.
- Learning to read architecture diagram in order to understand complicated structured code
- Handling REST API/HTTP status codes (`401`, `422`)
- Using Mongoose
- Learning about self invoked async functions
- Using ES6 in node environment (`export`, `import`, etc)
- Working with external API 
- Using authentication headers
- Get know Axios module

# Available Routes
`/api/photos/search/<QUERY>` | Can add query string: `?orderBy=likes` or `?orderBy=resolution`
 
`/api/photos/<PHOTO_ID>`
