We used Redux and React-Redux to do state management of React Shop Application.

- We used Redux HOC approach - mapStateToProps and mapDispatchToProp.


Pros - 
1. Centralized state management.
2. No prop-drilling.
3. Business logic at Redux layer such as Fetch API. 
4. No unnecessary component re-render.

Cons - 
1. Need to configure redux.
2. Manage Redux - action, reducer and container.
3. Component need to switch between two patterns - 

    a. `For synchronous action creator - dispatch(action_creator);`
    
    b. `For Asynchronous action creator - async_action_creator(dispatch);` 

4. No access of Redux state in action creator hence for state based conditional logic
   either `pass state from component` or `import and use store.getState`. 
