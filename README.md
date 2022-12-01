# Find-Github-users-using-React

Hosted url: https://nawazdanish1996.github.io/Find-Github-users-using-React/


code url: https://github.com/nawazdanish1996/Find-Github-users-using-React



# Deploy-React-project-on-Github

npm install gh-pages --save-dev

In the package.json file, add a homepage property that follows this structure: http://{github-username}.github.io/{repo-name}


In the package.json file, scroll down to the scripts property and add the following commands:
"predeploy" : "npm run build",
"deploy" : "gh-pages -d build",


npm run deploy