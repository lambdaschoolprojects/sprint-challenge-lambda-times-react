## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
    > PropTypes are the expected datatypes for parameters being passed into a component. They are used to validate data during the development stage.

- [ ] Describe a life-cycle event in React?
    > A React component goes through a life cycle from birth to life to death. A life-cycle event is something that occurs in that component that is part of that life cycle. Different React life-cycle methods can be used in a class-based component around these events to make the components more dynamic and interactive. 
- [ ] Explain the details of a Higher Order Component?
    > A Higher Order Component is a component that accepts another component as a parameter. The HOC can be initialized and used like any other component and/or can be used to extend the functionality of existing components.
- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
    > Importing CSS, keeps the styles abstracted from the component
    
    > CSS in JS, adding CSS to the JSX inline, can provide more dynamic styling
    
    > Reactstrap, integrates bootstrap into React. Good for rapid prototyping of apps 
    
    > StyledComponents, uses ES6 template strings to add styling directly to the component. It is faster and allows the use of plain CSS anywhere in a React component. It also allows for dynamic styling.