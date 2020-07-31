Used Redux, React-Redux, Redux-Thunk to do state management of React Shop Application.

- Used Redux mapStateToProps and mapDispatchToProp.
- Used Redux-Thunk middleware to define async action creator and access store at action creator.

Pros - 
1. Centralized state management.
2. No prop-drilling.
3. Business logic at Redux layer such as Fetch API. 
4. No unnecessary component re-render.
5. Usage of Redux-Thunk add simplicity - 
    
    a. One action creator syntax - Dispatch Action object or async function from container component.
    
    b. Store can be access in action creator function.
    
    c. Redux store can be access in action creator hence component no need to map unnecessary state.
    
    d. Due to `point c` re-rendering of component due to unnecessary state will remove.
         
Cons - 
1. Need to configure redux.
2. Manage Redux - action, reducer and container.
