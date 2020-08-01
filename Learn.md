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
2. No need to handle default return in reducers.
3. Automatically create action type and static action creator.  
4. Reducer uses immer library internally which provide draft state to avoid accidentally mutation state in a reducer.
5. Easy approach to handle thunk action creator asynchronous request lifecycle.
6. Many more features to handle common use cases encounter in application development.
