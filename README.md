# Description:

The purpose of this package is to initiate the sign up and login authentication
You can then modify as you wish, add CSS etc. I will be adding CSS in the near future. 
This uses  jsonwebtoken, morgan, MongoDB, Express.js, React.js , Node.js
start by creating your own folder within the terminal.then run npm installation package
### Version 1:
First Push v 0.01
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run start:dev`

This launches the back end 

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `.Env file set up`

 Make sure to add your .env file and add SECRET=(whichever secret key you want) 
 example: 
MONGO_URI=mongodb+srv:/************
SECRET=helloTest

### important links
https://github.com/Orlandouchiha425/chatter.git

https://github.com/Orlandouchiha425?tab=repositories

https://orlandouchiha425.github.io/portfolio-rebuilt/


### Installing package
`npm install mern-authentication-only`


### Usage
```jsx
import { SignUpForm } from 'mern-authentication-only';
function signup() {

  return (
    <div >
      <SignUpForm />
    </div>
  );
}
```
**Example Usage**
```jsx
import { LoginForm } from 'mern-authentication-only';
function Login() {

  return (
    <div >
      <LoginForm />
    </div>
  );
}
```
### Screenshot
![SignUp](https://i.imgur.com/rYOJjlD.png)

![Login](https://i.imgur.com/G2ie5NY.png)
