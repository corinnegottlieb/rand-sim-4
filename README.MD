# Running/Environment

- Make sure you **fork** this repository to your own Github, then clone it to your computer
- Install all the dependencies from `package.json` file using `$ npm install `
- Then, start the server by using `$ npm start` and not using `$ node server.js`
- There are automatic scripts that will run in the background and will compile all your
files into one big file called `./build/server.js`.
It is NOT a file that you should be able to read.
- You a file attached call _Architecture.pdf_ that explains the architecture of the application, use it!

# Features

- Save each requested photo in the database - when user request a photo, save it using mongoose models
So you should also build the schema and the model in the right file
- Add the ability to get a random photo (read about it in Unsplash API: https://unsplash.com/documentation)

# To Do

- Fixing access to `/public` folder
- Fixing `CORS` (Read about it)
- Fixing all the errors that pops up in the console
- Server is not even running (go to `/health` to monitor the server), check why

# Goal

In this simulation the aim is to expose you to a real world backend architecture and also `bundling` using `webpack`.
- Learning to read architecture diagram in order to understand complicated structured code
- Handling REST API status codes
- Handling CORS
- Using Mongoose
- Learning about self invoked async functions
- Using ES6 in node environment (export, import, etc)
- Working with external API 
