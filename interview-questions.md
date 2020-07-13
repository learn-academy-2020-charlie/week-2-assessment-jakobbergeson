# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer: You would use the super() method in a class that also uses constructor()

  Researched answer: "By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods" 
  Source - https://www.w3schools.com/jsref/jsref_class_super.asp



2. What is a virtual DOM?

  Your answer: It is the virtual "memory" of a UI. 

  Researched answer: "The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM."
  Source - https://reactjs.org/docs/faq-internals.html



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer: After creating the class and extending it to Component you would have to code in the render() and return() methods to house "Hello World" in between some sort of HTML tags.

  Researched answer:
<!-- <script type="text/babel">
  class HelloReact extends React.Component{
    render(){
      return(
        <h1>Hello React!</h1>
      )
    }
  }
  const domContainer = document.querySelector('#react-container');
  ReactDOM.render(<HelloReact />, domContainer);
</script> -->
Source - https://github.com/LEARNAcademy/Syllabus/blob/master/react/intro.md


4. What is JSX?

  Your answer: JSX is a Javascript library that is used in React to interact with XML. 

  Researched answer: "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”."
  Source - https://reactjs.org/docs/glossary.html#jsx



5. What is state in React?

  Your answer: state is an object that contains dynamic data. 

  Researched answer: "State is an object that stores a component's dynamic data and determines how the component renders and behaves."
  Source - https://github.com/LEARNAcademy/Syllabus/blob/master/react/state.md





6. STRETCH: What is hoisting in JavaScript?

  Your answer:

  Researched answer:



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
"Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting."
Source - https://www.w3schools.com/react/react_lifecycle.asp
- event.preventDefault()
"The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be." 
Source - https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
- DOM events
"DOM (Document Object Model) events are actions that occurs as a result of the user action or as result of state change of the elements of a DOM tree. Client-side scripting languages like JavaScript, JScript, ECMAScript, VBScript, and Java can register various event handlers or listeners on the element nodes inside a DOM tree, such as in HTML, XHTML, XUL, and SVG documents." 
Source - https://en.wikipedia.org/wiki/DOM_events
- React props
"Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen."
Source - https://reactjs.org/docs/components-and-props.html
- onChange
"The onChange event in React detects when the value of an input element changes."
Source - https://upmostly.com/tutorials/react-onchange-events-with-examples