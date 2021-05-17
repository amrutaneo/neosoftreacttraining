# REACT CONCEPTS

## Reconciliation: 
Reconciliation is the process through which React updates the DOM. When a component’s state changes, React has to calculate if it is necessary to update the DOM. It does this by creating a virtual DOM and comparing it with the current DOM. 


## Diffing Algorithm:
React updates the virtual DOM tree. Once the virtual DOM has been updated, React then compares the current version of the virtual DOM with the previous version of the virtual DOM. This process is called “diffing”.


**Elements Of Different Types:**

Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. Going from <a> to <img>, or from <Article> to <Comment>, or from <Button> to <div> - any of those will lead to a full rebuild.


**DOM Elements Of The Same Type:**

When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes.

**Component Elements Of The Same Type:** 

React updates the props of the underlying component instance to match the new element.


**Recursing On Children:**

when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference.


**Keys:**

React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. 


## React Fibre
React Fiber is a completely backward-compatible rewrite of the old reconciler. This new reconciliation algorithm from React is called Fiber Reconciler. The main goals of the Fiber reconciler are incremental rendering, better or smoother rendering of UI animations and gestures, and responsiveness of the user interactions.

## Data structure
Binary Search tree:
In a binary search tree, each node either has zero, one or two children. The child on the left is called the left child, and the child on the right is the right child. In a binary search tree, the child on the left must be smaller than the child on the right.

**Stack:**
In stack the last item you pushed on the stack will be the first one removed. This is referred to as last-in, first-out (LIFO). 

**Queue:**
The key difference between the stack and the queue is that the queue is first-in, first-out (FIFO), the first item inserted in the array will be removed first.

**Linked List:**
Linked lists organize items sequentially, with each item pointing to the next item.

**Hash table:**
A hash table is a data structure that implements an associative array, which means it maps keys to values. A JavaScript object is a hash table, as it stores key-value pairs.

## Physical DOM vs Virtual DOM
    
**Physical DOM:**
The HTML you write is parsed by the browser and turned into the DOM. The DOM represents documents in the page as nodes and objects.

**Virtual DOM:**
In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object, like a lightweight copy.A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.


## Interview Questions (11-05-2021)
### 1.React JS vs Angular

AngularJS is a structural framework for developing dynamic web apps, whereas React is a javascript library that allows you to build UI components.
https://www.guru99.com/react-vs-angular-key-difference.html#:~:text=KEY%20DIFFERENCE,React%20is%20based%20on%20Javascript.

### 2. React Component Lifecycle
https://reactjs.org/docs/react-component.html

### 3. Data type in Javascript
JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.
Primitive data type
Non-primitive (reference) data type
There are five types of primitive data types in JavaScript. They are as follows:
**String**
    represents sequence of characters e.g. "hello”

**Number**
    represents numeric values e.g. 100

**Boolean**
    represents boolean value either false or true

**Undefined**
    represents undefined value

**Null**
    represents null i.e. no value at all


The non-primitive data types are as follows:

**Object**
    represents instance through which we can access members

**Array**
    represents group of similar values

**RegExp**
    represents regular expression


### 4. Purpose of Higher Order Component
A higher-order component (HOC) is an advanced technique in React for reusing component logic. A higher-order component is a function that takes a component and returns a new component.
https://reactjs.org/docs/higher-order-components.html#:~:text=A%20higher%2Dorder%20component%20(HOC,and%20returns%20a%20new%20component.

### 5.Data binding in React JS

Data binding in React can be achieved by using a controlled input. A controlled input is achieved by binding the value to a state variable and a onChange event to change the state as the input value changes.
https://stackoverflow.com/questions/42217579/data-binding-in-react#:~:text=Data%20binding%20in%20React%20can,as%20the%20input%20value%20changes.

### 6.Synthetic event in React JS
An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.
React has its own event handling system which is very similar to handling events on DOM elements. The react event handling system is known as Synthetic Events. The synthetic event is a cross-browser wrapper of the browser's native event.
https://www.javatpoint.com/react-events

### 7. How to create list of React component or html elements

The following function component shows how to render a list of items (JS primitives). It would work the same with a list of numbers instead of strings. Since we can use JavaScript in JSX by using curly braces, we can use the built-in JavaScript array map method to iterate over our list items; and to map them from JavaScript primitive to HTML elements. Each element receives a mandatory key prop:
https://www.robinwieruch.de/react-list-component 

### 8. Higher Order Component and purpose of higher order component.

A higher-order component (HOC) is an advanced technique in React for reusing component logic. ... They are a pattern that emerges from React's compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component.
https://reactjs.org/docs/higher-order-components.html

### 9. One way data binding

In general this concept means that data has one, and only one, way to be transferred to other parts of the application.
In React this means that:
state is passed to the view and to child components
actions are triggered by the view
actions can update the state
the state change is passed to the view and to child components
https://flaviocopes.com/react-unidirectional-data-flow/



### 10. Events in React JS
React has the same events as HTML: click, change, mouseover etc.
    React events are written in camelCase syntax:
    sonClick instead of onclick.
    React event handlers are written inside curly braces:
    onClick={Login}  instead of onClick="Login()".

    Ex:
    <button onClick={login}>Login</button>

https://www.w3schools.com/react/react_events.asp

### 11. Arrow functions
Arrow functions allow us to write shorter function syntax:

    getEmail = function (event){
        this.user.email = event.target.value
    }

    getEmail = (event)=>{
        this.user.email = event.target.value
    }

It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

    getEmail = (event)=> return this.user.email = event.target.value


### 12 this operator
**The handling of this is also different in arrow functions compared to regular functions.**

In short, with arrow functions there are no binding of this.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the this keyword always represents the object that defined the arrow function.

 
 
 
 




 


























