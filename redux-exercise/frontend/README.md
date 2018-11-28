This project can manage post and coments

## Main page

* You can see
    -  Post
    -  Categories
* You can manage
    -  Post: Add, Edit, Remove, See details and vote post
    -  Filter post by : categories, score or datatime

## Detail Post page

* You can see
    -  Post
    -  Comments
* You can manage
    -  Post: Edit, Remove and vote post
    -  Comment: Add, Edit, Remove and vote comment    

## Folder Structure

After creation, your project should look like this:

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── actions # Actions for the elements in store : categories, comments and post
    │   ├── categories.js
    │   ├── comments.js     
    │   └── posts.js
    ├── components # Piece of code reusable for the different pages
    │   ├── List*.js # List of the elements of applications: categories, comments and post
    │   ├── Menu*.js # Two menu for the application: posts and comments
    │   ├── Form*.js # Forms for manage elements of the application: posts and comments    
    │   └── Summary*.js #Summary in read-only mode for elements of the application: posts and comments
    ├── reducer # Reducer for the elements in store : categories, comments and post
    │   ├── categories.js
    │   ├── comments.js
    │   ├── posts.js         
    │   └── index.js  # combine all reducers
    ├── utils # Reducer for the elements in store : categories, comments and post
    │   ├── API.js #Common functions for all apis    
    │   └── *API.js  #API's to connect app-server for the elements of application: categories, comments and posts   
    ├── views # differents views in app
    │   ├── MainPage.js #Define main page
    │   └── DetailPostPage.js #Define post detail page
    ├── App.js # This is router page of my application      
    ├── index.css # Global styles.
    └── index.js # Here you render my app

```
