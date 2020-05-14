# To do lis

-install (dotenv, redux, react-redux, redux-logger, redux-saga)
-create dotenv with giphys in server
    - [x] create .env file at root level and add GIPHY_API_KEY
    - [x] .gitignore, add .env to # misc
    - [x] server.js require dotenv 
    - [x] server.js dotenv config
    - server.js app.get

-/ route (aka Home)
    -search component (input and button)
        -Input 
            - handleChange function that stores in state locally 
        -submit/search button w/ link to get request
            - handleClick function that does a get request to server (that does a get request to giphy)
    -results list component (map thru results array)
            - map through array
    -results item (displays individual item on DOM with favorite button)
        -   render item and a button to favorite 
        
-/favorites route  
    -favorite list component
        - 
    -favorite item
        -