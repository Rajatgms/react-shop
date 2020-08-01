React Shop is a React hooks based demo e-commerce application.

Main purpose of the application to showcase how to integrate -
1. react-bootstap and bootstrap
2. react-route
3. react-hooks
4. react-toolkit
5. react-redux

Local setup
- ``npm install``
- ``npm start``

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

