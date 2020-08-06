React Shop is a React hooks based demo e-commerce application. Main purpose of the application to showcase how to integrate react-hooks, react-toolkit, react-redux 
react-bootstrap and react-route.

---
Local setup
- ``npm install``
- ``npm start``
---
### Live
GitHub Live Page - [React-Shop](https://rajatgms.github.io/react-shop/)
- URL - https://rajatgms.github.io/react-shop
---
### Tech Overview
Used Redux-Toolkit and Redux-Thunk for state management of React Shop Application.
- React-Redux hooks API - useSelector and useDispatch to interact with store.
- Redux-Toolkit API for state management.

Benefits of using state management - 
1. Centralized single store which act as source of truth for whole application state.
2. No prop-drilling.
3. Business logic at Redux layer. 
4. Easy to scale and refactor application.

Benefits of using redux-toolkit -
1. Commonly required utility packages are included and configured in redux-toolkit.
   - [nanoid](https://redux-toolkit.js.org/api/other-exports#nanoid)
   - [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
   - [Redux-Devtools](https://github.com/reduxjs/redux-devtools) 
   - [immer](https://immerjs.github.io/immer/)
   - [Reselect](https://github.com/reduxjs/reselect)
   - [NgRx](https://ngrx.io/guide/entity) and more 
2. No need to handle default return in reducers.
3. Automatically create action type and static action creator. [CreateSlice API](https://redux-toolkit.js.org/api/createSlice)  
4. Reducer uses [immer](https://immerjs.github.io/immer/) draft state to avoid accidentally mutation state in a reducer.
5. Easy approach to handle thunk action creator asynchronous request lifecycle. [createAsyncThunk API](https://redux-toolkit.js.org/api/createAsyncThunk#createasyncthunk)
6. Many more features to handle common use cases encounter in application development.

---
### Other code branches
1. [react-hook-base](https://github.com/Rajatgms/react-shop/tree/react-hook-base)
   
   Base project created using React Hooks with no state management.
   
2. [react-hook-redux-hoc](https://github.com/Rajatgms/react-shop/tree/react-hook-redux-hoc)
   
   Used Redux and React-Redux connect HOC - mapStateToProps and mapDispatchToProps for state management.
   
3. [react-hook-redux-thunk-hook](https://github.com/Rajatgms/react-shop/tree/react-hook-redux-thunk-hook)

   Used Redux and React-Redux Hooks for state management. 
   
4. [react-hook-redux-toolkit](https://github.com/Rajatgms/react-shop/tree/react-hook-redux-toolkit)

   Used Redux-Toolkit and React-Redux Hooks for state management.
