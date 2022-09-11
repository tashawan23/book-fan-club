# ABC Book Club Frontend Development
To Run the application:

1. Run npm install
2. Run npm start

## Frontend 
- React (TypeScript)
- Redux
- React Routing

## Redux Store 
* Configured Redux store with Slice Reducers for users, books and also the user role
* Declared typed versions of useAppDispatch and useAppSelector hooks to use in corresponding components
* Reducers were used to keep state of list of users, books as well as the uathorization of the current user

1. List of Users
* Allow updates of users through the addition and editing of user details 
* Easy access to user data in components 

2. List of Books
* Allows updates of books through the addition and editing of book details as well as the borrowing of books
* Easy access to book list in components 

3. Current user authorization
* Since the login and authorisation logic was not implemented, I kept the role of the user in the user state to disable and enable certain actions and functions throughout the application. 


## Project File Structure 
Project is separated into:
1. Pages - Book and User management pages and Analytics page
2. Components - Charts and table components
3. Constants - Redux Slices and store 
4. Data - Hardcoded data
* This creates a clear separation between the hierarchy of pages and their child components 
* This separates Redux code from the frontend implementation

## Scalability
* Project is scalable as redux store is set up and only requires the addition of corresponding Slices and reducers to manage the state of the console
* React routing is used in the project which allows for seamless navigation between pages 
* Libraries used for tables and charts however may not be as scalable because of the restriction in the functionality of the libraries used which needs to be considered again to scale up the project 
