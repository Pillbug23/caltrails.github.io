# caltrails.github.io
[Demo](https://pillbug23.github.io/caltrails.github.io/)

A simple web application that allows users to search for hiking trails near their location made with React.js. Auth0 framework allows unique authentication of login and access to user profile information. This projects uses the Google Maps API, TrailAPI, and weatherAPI; extraction of hiking trail data based on user's location. User can favorite hikes and view saved trails. 

To access backend open a git terminal and navigate to the server directory. 
```
cd server
node server.js
```

You should be able to see information logged when you favorite hikes in the explore page and see login information from the signup page.

# Technologies 

* Frontend: Javascript frameworks(React,MaterialUI)
* Backend: Nodejs, MongoDB
* [Google Maps API](https://www.npmjs.com/package/google-map-react)
* [Trail/Weather API data](https://rapidapi.com/)
* Axios
# Deployment

Deployed with GitHub Pages. [Link](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)

Simple guide to install GitHub Pages package as a dev-dependency.

```
cd {yourappname}
npm install gh-pages --save-dev
```

Add properties to package.json file.
```
# Add the homepage attribute where the value is the "http://{username}.github.io/{repo-name}"
"homepage": "http://{yourname}.github.io/{appname}"
```

Add predeploy and deploy to scripts
```
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```

Deploy
```
npm run deploy
```

# Get Started

```
# Clone this repository
git clone https://github.com/Pillbug23/caltrails.github.io

# Go into the repository
cd caltrails.github.io

# Remove current origin repository
git remote rm origin
```

Install dependencies
```
# Install dependencies
npm install

# Start development server
npm start
```




