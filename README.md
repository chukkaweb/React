# ReactJS, Redux, Progressive Web Apps, React Native and AMP – Technical Notes

## Table of Contents

1. [ReactJS Fundamentals](#1-reactjs-fundamentals)
2. [React Component Lifecycle](#2-react-component-lifecycle)
3. [Props and State](#3-props-and-state)
4. [Parent-Child and Component Communication](#4-parent-child-and-component-communication)
5. [React for Angular Developers](#5-react-for-angular-developers)
6. [React Component Types](#6-react-component-types)
7. [Why Use React?](#7-why-use-react)
8. [React Best Practices](#8-react-best-practices)
9. [React Helmet](#9-react-helmet)
10. [Redux](#10-redux)
11. [Redux Actions and Reducers](#11-redux-actions-and-reducers)
12. [Redux Data Flow](#12-redux-data-flow)
13. [mapStateToProps and mapDispatchToProps](#13-mapstatetoprops-and-mapdispatchtoprops)
14. [Redux API Calls and Middleware](#14-redux-api-calls-and-middleware)
15. [React Routing and Other Features](#15-react-routing-and-other-features)
16. [React Project Setup, Deployment and Troubleshooting](#16-react-project-setup-deployment-and-troubleshooting)
17. [React Libraries and Developer Tools](#17-react-libraries-and-developer-tools)
18. [Progressive Web Apps (PWA)](#18-progressive-web-apps-pwa)
19. [PWA Characteristics](#19-pwa-characteristics)
20. [PWA Features and Use Cases](#20-pwa-features-and-use-cases)
21. [PWA Architecture and App Shell](#21-pwa-architecture-and-app-shell)
22. [Service Workers](#22-service-workers)
23. [Creating an Angular PWA](#23-creating-an-angular-pwa)
24. [Creating a React PWA](#24-creating-a-react-pwa)
25. [Lighthouse](#25-lighthouse)
26. [React Native](#26-react-native)
27. [React Native Lifecycle and Project Structure](#27-react-native-lifecycle-and-project-structure)
28. [React Native and Redux](#28-react-native-and-redux)
29. [React Native Integration with Native Applications](#29-react-native-integration-with-native-applications)
30. [React Native Navigation and Splash Screens](#30-react-native-navigation-and-splash-screens)
31. [React Native Development and Troubleshooting](#31-react-native-development-and-troubleshooting)
32. [Facebook Messenger Chatbot Use Cases](#32-facebook-messenger-chatbot-use-cases)
33. [Calling Parent Functions from Child Components](#33-calling-parent-functions-from-child-components)
34. [React-Redux Best Practices](#34-react-redux-best-practices)
35. [Automatic Reload and Cache Management](#35-automatic-reload-and-cache-management)
36. [AMP (Accelerated Mobile Pages)](#36-amp-accelerated-mobile-pages)
37. [AMP Page Creation Guidelines](#37-amp-page-creation-guidelines)
38. [AMP Canonicalization and SEO](#38-amp-canonicalization-and-seo)
39. [AMP Cache](#39-amp-cache)
40. [AMP Cache URL Format](#40-amp-cache-url-format)
41. [AMP Discovery and Distribution](#41-amp-discovery-and-distribution)
42. [AMP Structured Data](#42-amp-structured-data)
43. [AMP Validation](#43-amp-validation)
44. [AMP Analytics](#44-amp-analytics)
45. [AMP Specification and Restrictions](#45-amp-specification-and-restrictions)
46. [AMP Components](#46-amp-components)
47. [AMP CORS](#47-amp-cors)
48. [AMP Custom Fonts](#48-amp-custom-fonts)
49. [Custom JavaScript with amp-script](#49-custom-javascript-with-amp-script)
50. [AMP Security and Content Security Policy](#50-amp-security-and-content-security-policy)
51. [AMP Offline Access and Server-Side Rendering](#51-amp-offline-access-and-server-side-rendering)
52. [AMP Reference Links and Tools](#52-amp-reference-links-and-tools)
53. [React and PWA Reference Collection](#53-react-and-pwa-reference-collection)

---

# 1. ReactJS Fundamentals

React is a JavaScript library focused on building user interfaces.

React primarily focuses on the view layer, unlike Angular, which provides a more comprehensive application framework.

## Important React concepts

- Reusable components.
- JSX syntax.
- Virtual DOM.
- Props and state.
- Component lifecycle.
- One-way data flow.
- Event handling.
- Conditional rendering.
- State management using Redux.

## JSX

JSX allows developers to write HTML-like syntax inside JavaScript.

JavaScript expressions can be embedded inside curly braces `{}`.

Example:

```jsx
const name = "Ganesh";

function Welcome() {
  return <h1>Hello, {name}</h1>;
}
```

## Virtual DOM

The Virtual DOM is a representation of the actual DOM maintained in memory.

When a component's data changes:

1. React renders an updated Virtual DOM.
2. React compares the updated representation with the previous one.
3. It identifies the necessary changes.
4. React updates the relevant parts of the actual DOM.

The purpose is to minimize unnecessary DOM operations.

## Reasons to use React

- Reusable components.
- Efficient rendering using the Virtual DOM.
- Clean abstraction.
- Flux and Redux integration.
- React Developer Tools.
- Redux Developer Tools.
- React Native for mobile application development.

---

# 2. React Component Lifecycle

A React component goes through different stages during its lifetime.

## Main lifecycle stages

| Stage | Description |
|---|---|
| Initialization | Component is constructed with initial props and state. |
| Mounting | Component is rendered and inserted into the DOM. |
| Updating | Component re-renders when its props or state change. |
| Unmounting | Component is removed from the DOM. |

## Initialization

This is the stage where a component is constructed with the given props and default state.

In class components, this is generally done inside the constructor.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "React"
    };
  }

  render() {
    return <h1>{this.state.name}</h1>;
  }
}
```

## Mounting

Mounting is the stage where the component is rendered and inserted into the DOM.

### componentWillMount()

Original notes example:

```jsx
componentWillMount() {
  this.setState({
    todayDate: new Date(Date.now())
  });
}
```

The original notes describe using this method to initialize a date in component state.

**Important:** `componentWillMount()` is a legacy lifecycle method and should not be used in modern React applications. Use a constructor for class-component initialization or appropriate Hooks for function components.

### componentDidMount()

This lifecycle method runs after the component has mounted.

Original use case: Fetch news data and update it every hour without requiring the user to refresh the page.

```jsx
componentDidMount() {
  this.interval = setInterval(this.fetchNews, 3600000);
}
```

Here:

- `setInterval()` schedules the function.
- `3600000` milliseconds equals one hour.
- `fetchNews` is called periodically.

A corresponding cleanup should be performed when the component is removed.

```jsx
componentWillUnmount() {
  clearInterval(this.interval);
}
```

## Modern React equivalent

Function components use `useEffect()` for side effects and cleanup.

```jsx
import { useEffect } from "react";

function NewsComponent() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchNews();
    }, 3600000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>News updates</div>;
}
```

## Lifecycle reference

https://www.geeksforgeeks.org/reactjs-lifecycle-components/

---

# 3. Props and State

Props and state are two important concepts used to manage data in React components.

## Props

Props are inputs passed from a parent component to a child component.

Characteristics:

- Props are read-only.
- Props are used to pass data down from parent to child.
- Props help components remain reusable.
- A child component should not directly modify its props.
- Props support one-way data flow.

Example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="Ganesh" />;
}
```

## State

State represents data managed by a component.

Characteristics:

- State belongs to the component that manages it.
- State can change over time.
- Updating state causes React to re-render when necessary.
- State should be updated using React's state APIs.
- State can be passed to child components through props.

Example using a class component:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}
```

## Props vs State

| Props | State |
|---|---|
| Passed from parent to child | Managed by a component |
| Read-only from the receiving component's perspective | Updated through state APIs |
| Used to configure a component | Used to manage changing data |
| Supports parent-to-child data flow | Can be local to a component |
| Helps component reuse | Helps manage component behavior |

## State declaration

State can be initialized in a class constructor:

```jsx
constructor(props) {
  super(props);

  this.state = {
    count: 0
  };
}
```

Or using a class property:

```jsx
class Counter extends React.Component {
  state = {
    count: 0
  };
}
```

In function components, use `useState()`:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

---

# 4. Parent-Child and Component Communication

## Parent to child communication

Pass data using props.

```jsx
function Parent() {
  const message = "Hello from parent";

  return <Child message={message} />;
}

function Child({ message }) {
  return <p>{message}</p>;
}
```

## Child to parent communication

Pass a callback function from the parent to the child.

```jsx
function Parent() {
  const handleMessage = (message) => {
    console.log(message);
  };

  return <Child onSendMessage={handleMessage} />;
}

function Child({ onSendMessage }) {
  return (
    <button onClick={() => onSendMessage("Hello parent")}>
      Send
    </button>
  );
}
```

## Communication between unrelated components

The original notes describe using a global event system:

1. Subscribe to events in `componentDidMount()`.
2. Unsubscribe in `componentWillUnmount()`.
3. Call `setState()` when an event is received.
4. Flux is one possible architecture for organizing this communication.

Modern alternatives include:

- React Context.
- Redux.
- Other state-management libraries.
- A shared external store.

Original reference:

https://facebook.github.io/react/tips/communicate-between-

---

# 5. React for Angular Developers

React and Angular both support component-based UI development, but their approaches differ.

| Angular | React |
|---|---|
| Framework | UI library |
| HTML templates | JSX |
| Directives | JavaScript expressions and conditional rendering |
| `ngFor` | `map()` |
| `ngClass` | `className` and conditional classes |
| `ngIf` | Conditional rendering |
| `ngModel` | Controlled component pattern |
| Angular Router | React Router |

## JSX syntax

JSX allows JavaScript expressions inside `{}`.

### Angular ng-repeat equivalent

Angular:

```html
<ul>
  <li ng-repeat="word in words">{{ word }}</li>
</ul>
```

React:

```jsx
<ul>
  {words.map((word) => (
    <li key={word}>{word}</li>
  ))}
</ul>
```

### Angular ng-class equivalent

Angular:

```html
<form ng-class="{active: active, error: error}">
</form>
```

React:

```jsx
<form
  className={classNames({
    active: active,
    error: error
  })}
>
</form>
```

### Angular ng-if equivalent

Angular:

```html
<p ng-if="enabled">Enabled</p>
```

React:

```jsx
<div>
  {enabled ? <p>Enabled</p> : null}
</div>
```

### Angular ng-show / ng-hide equivalent

Angular:

```html
<p ng-show="alive">Living</p>
```

React:

```jsx
<p style={{ display: alive ? "block" : "none" }}>
  Living
</p>
```

### Angular ngModel equivalent

React commonly uses controlled inputs.

```jsx
function UserForm() {
  const [name, setName] = React.useState("");

  return (
    <input
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  );
}
```

## Class component example

```jsx
import React, { Component } from "react";

class SlideShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  render() {
    return <div>{this.state.activeIndex}</div>;
  }
}
```

Reference:

https://www.sitepoint.com/react-for-angular-developers/

---

# 6. React Component Types

The original notes identify four component categories:

1. Stateful or class-based components.
2. Stateless or function-based components.
3. Presentational components.
4. Container components.

## Stateful components

A stateful component manages its own state.

Historically, these were commonly implemented using class components.

```jsx
class UserComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Ganesh"
    };
  }

  render() {
    return <h1>{this.state.username}</h1>;
  }
}
```

## Stateless or function components

A function component can receive props and return UI.

```jsx
function UserComponent({ username }) {
  return <h1>{username}</h1>;
}
```

Modern function components can also manage state using Hooks.

Therefore, function components are not necessarily stateless.

## Presentational components

Presentational components focus primarily on displaying UI.

Typical responsibilities:

- Display data.
- Apply styles.
- Receive values through props.
- Trigger callbacks provided by parent components.

Example:

```jsx
function UserCard({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}
```

## Container components

Container components generally handle application logic and data requirements.

Typical responsibilities:

- Fetch data.
- Manage state.
- Coordinate child components.
- Pass data and callbacks to presentational components.

## When to use simple function components

The original notes identify these use cases:

### 1. No state required

The component only needs to render output with styles.

### 2. Simple functionality

The component does not require complex calculations or behavior.

### 3. Styles based on properties

Example:

```jsx
<Title
  color={error ? "red" : "grey"}
  title="My Title"
/>
```

### 4. Interactive components

A component may respond to user interactions such as:

- `onMouseEnter`
- `onMouseLeave`
- `onClick`
- `onTouchStart`
- `onTouchEnd`
- Text input.
- Form submission.

A function component can manage these interactions using event handlers and Hooks.

---

# 7. Why Use React?

The original notes identify the following advantages.

## Reusable components

Components can be reused across different parts of an application.

## Fast rendering with Virtual DOM

React maintains a Virtual DOM representation in memory.

It compares the previous and updated UI representations and applies the necessary DOM changes.

## Clean abstraction

React allows UI logic to be organized into reusable components.

## Flux and Redux

State-management architectures can help organize application data and updates.

## Developer tools

Useful tools include:

- React Developer Tools.
- Redux Developer Tools.

## React Native

React Native allows developers to build mobile applications using React concepts.

---

# 8. React Best Practices

The following points are collected from the original notes.

1. Split large Redux reducer logic into smaller functions.
2. Use a project generator or supported starter setup to bootstrap applications.
3. Avoid unnecessarily large classes, methods and components.
4. Use an appropriate state manager when application complexity requires it.
5. Use middleware such as Redux Thunk for asynchronous API interactions.
6. Avoid passing too many unrelated props to a component.
7. Use appropriate prop validation.
8. Use linting tools.
9. Break long lines into readable sections.
10. Maintain consistent linting configuration.
11. Use a dependency manager with a lock file, such as npm or Yarn.
12. Test complex and frequently accessed code.
13. Add tests for bugs and regression scenarios.
14. Use function components and React Hooks for modern React development.
15. Use ES6 destructuring for props.
16. Use conditional rendering.
17. Use fragments where appropriate.
18. Use Jest for testing where suitable.

Example of destructuring:

```jsx
function UserProfile(props) {
  const {
    firstName,
    lastName,
    email
  } = props;

  return (
    <div>
      <h2>{firstName} {lastName}</h2>
      <p>{email}</p>
    </div>
  );
}
```

Example using fragments:

```jsx
function UserDetails() {
  return (
    <>
      <h1>User Details</h1>
      <p>User information</p>
    </>
  );
}
```

---

# 9. React Helmet

React Helmet is a library used to manage the document head section dynamically.

Typical use cases:

- Set page titles.
- Set meta descriptions.
- Set social media metadata.
- Manage document head information.
- Support SEO-related metadata requirements.

Example:

```jsx
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Welcome to the application"
        />
      </Helmet>

      <h1>Welcome</h1>
    </>
  );
}
```

The original notes highlight React Helmet's usefulness with server-side rendering and SEO/social-media metadata.

Reference: React Helmet documentation and project information.

---

# 10. Redux

Redux is a state-management library used to manage application state in a predictable way.

It is commonly used when multiple components need access to shared application data.

## Why Redux?

- Centralized application state.
- Predictable state updates.
- Clear data flow.
- Easier debugging.
- Shared state between unrelated components.
- Developer tools support.

## Main Redux concepts

| Concept | Responsibility |
|---|---|
| Store | Holds application state |
| Action | Describes an event or requested change |
| Reducer | Calculates the next state |
| Dispatch | Sends an action to the store |
| Selector | Reads required state |
| Middleware | Handles additional logic such as asynchronous operations |

## Redux reference material

- https://daveceddia.com/redux-tutorial/
- https://egghead.io/lessons/react-redux-react-counter-example
- https://www.techomoro.com/how-to-build-a-simple-counter-app-using-react-and-redux/
- https://redux.js.org/introduction/getting-started
- https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/

---

# 11. Redux Actions and Reducers

## Actions

An action describes something that happened or something the application wants to do.

Example:

```javascript
const incrementAction = {
  type: "INCREMENT"
};
```

An action creator can return an action:

```javascript
function increment() {
  return {
    type: "INCREMENT"
  };
}
```

Reference:

https://redux.js.org/basics/actions

## Reducers

A reducer receives the current state and an action and returns the next state.

Example:

```javascript
const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
}
```

Important points:

- Reducers should be predictable.
- Reducers should not mutate existing state.
- Reducers should return a new state when changes occur.
- Keep complex reducer logic organized.

## Updating a specific array item

When updating an item inside an array, create a new array and a new object for the modified item.

Example:

```javascript
function usersReducer(state = [], action) {
  switch (action.type) {
    case "UPDATE_USER":
      return state.map((user) =>
        user.id === action.payload.id
          ? { ...user, ...action.payload }
          : user
      );

    default:
      return state;
  }
}
```

References:

- https://www.youtube.com/watch?v=BWN-9bF51BU
- https://stackoverflow.com/questions/35628774/how-to-update-single-value-inside-specific-array-item-in-redux

---

# 12. Redux Data Flow

Redux follows a unidirectional data flow.

## Data flow steps

1. A user interacts with the UI.
2. The component dispatches an action.
3. The Redux store receives the action.
4. The reducer processes the action.
5. The reducer returns the updated state.
6. The store holds the new state.
7. Components subscribed to the relevant state receive updates.
8. React re-renders the required UI.

```text
User Interaction
       |
       v
React Component
       |
       v
Dispatch Action
       |
       v
Redux Store
       |
       v
Reducer
       |
       v
New State
       |
       v
Subscribed Components
       |
       v
Updated UI
```

## Data flow references

- https://www.techomoro.com/wp-content/uploads/2018/12/Untitled-1.jpg
- https://lh3.googleusercontent.com/eG5jgDqCxPhW5yCpx1g7oyJGD6ZNGyjR7uolGBRqqCjLhyM6u8hIvA21m9-K-qKja3TK0g=s170
- https://lh3.googleusercontent.com/SgFcDe_BU8vV5KOcHHwyAFBCQnTsMo-oQD3hCzi9ifBydnRGqND___u9xuF_exTinPHSiw=s105

---

# 13. mapStateToProps and mapDispatchToProps

These utilities are associated with the React-Redux `connect()` API.

## mapStateToProps()

`mapStateToProps()` allows a component to receive selected Redux store state through props.

Example:

```javascript
const mapStateToProps = (state) => ({
  count: state.counter.count
});
```

## mapDispatchToProps()

`mapDispatchToProps()` allows a component to dispatch actions.

Example:

```javascript
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({
    type: "INCREMENT"
  })
});
```

## Combined example

```jsx
import { connect } from "react-redux";

function Counter({ count, increment }) {
  return (
    <div>
      <p>{count}</p>

      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.counter.count
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({
    type: "INCREMENT"
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
```

## Summary

| Utility | Purpose |
|---|---|
| `mapStateToProps()` | Reads selected Redux state and provides it to the component |
| `mapDispatchToProps()` | Provides functions that dispatch Redux actions |

Modern React-Redux applications can also use Hooks such as `useSelector()` and `useDispatch()`.

---

# 14. Redux API Calls and Middleware

API calls involve asynchronous operations.

Redux middleware can help coordinate these operations.

## Redux Thunk

Redux Thunk allows action creators to return functions instead of only plain action objects.

Example:

```javascript
const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_USERS_REQUEST" });

    try {
      const response = await fetch("/api/users");
      const users = await response.json();

      dispatch({
        type: "FETCH_USERS_SUCCESS",
        payload: users
      });
    } catch (error) {
      dispatch({
        type: "FETCH_USERS_FAILURE",
        error: error.message
      });
    }
  };
};
```

## References

- https://stackoverflow.com/questions/38728884/how-to-properly-make-rest-calls-from-reactjs-redux-application
- https://blog.bam.tech/developper-news/4-ways-to-dispatch-actions-with-redux
- https://stackoverflow.com/questions/44749723/when-to-use-store-dispatch-in-my-react-redux-app

---

# 15. React Routing and Other Features

## React Router

React Router is used to implement navigation and routing in React applications.

Reference:

https://codeburst.io/getting-started-with-react-router-5c978f70df91

Programmatic navigation reference:

https://tylermcginnis.com/react-router-programmatically-navigate/

## Conditional rendering

Reference:

https://react-cn.github.io/react/tips/if-else-in-JSX.html

Example:

```jsx
function Status({ enabled }) {
  return enabled
    ? <p>Enabled</p>
    : <p>Disabled</p>;
}
```

## Stateless functional components

Reference:

https://riptutorial.com/reactjs/example/28223/stateless-functional-component

## Reloading the current window

Reference:

https://stackoverflow.com/questions/47201919/how-to-reload-current-page-in-reactjs

## Handling image errors

Reference:

https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror

## Axios

Axios is an HTTP client used to make API requests.

Package:

https://www.npmjs.com/package/axios

Example:

```javascript
import axios from "axios";

async function getUsers() {
  const response = await axios.get("/api/users");

  return response.data;
}
```

## Two-way data binding

React generally uses controlled components rather than Angular-style automatic two-way binding.

Reference:

https://reactgo.com/two-way-data-binding-react/

## Responsive carousel

Reference:

https://www.npmjs.com/package/react-responsive-carousel#demo

## Infinite scrolling

Reference:

https://github.com/CassetteRocks/react-infinite-scroller/issues/143

---

# 16. React Project Setup, Deployment and Troubleshooting

## Project setup

The original notes mention Create React App as a project bootstrap tool.

**Historical note:** Create React App is a legacy setup reference. For new projects, use a currently maintained React setup recommended by the React documentation.

## Deployment

The original notes mention:

```bash
npm run build
```

This command runs the configured build script in `package.json`.

For Create React App projects, it produces optimized production files in the build directory.

## Moving CSS files to assets

The original notes include:

- Moving CSS files to an assets folder.
- React project deployment.

Deployment tutorial:

https://www.youtube.com/watch?v=ji6urVl6oP4

## Troubleshooting: ENOSPC error

The original notes mention the error:

```text
throw er // unhandled 'error' event
```

Possible reference:

- https://github.com/facebook/create-react-app/issues/4227
- https://stackoverflow.com/questions/22475849/node-js-what-is-enospc-error-and-how-to-solve/32600959#32600959

The ENOSPC error can be associated with operating-system resource limits, including file-watcher limits on Linux.

---

# 17. React Libraries and Developer Tools

## React Developer Tools

Chrome extension reference:

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en

## React component libraries

Reference:

https://blog.bitsrc.io/11-react-component-libraries-you-should-know-178eb1dd6aa4

## React patterns

Reference:

https://reactpatterns.com/#function-component

## VS Code extensions

Reference:

https://fullstackengine.net/recommended-vscode-extensions-react/

## React learning roadmap

Reference:

https://medium.com/free-code-camp/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6

## React best practices and design patterns

Reference:

https://medium.com/@konstankino/2019-reactjs-best-practices-design-patterns-516e1c3ca06a

## Organizing React applications

Reference:

https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1

## Angular vs React

Reference:

https://appinventiv.com/blog/react-vs-angular/

## React API error handling

Reference:

https://gist.github.com/odewahn/5a5eeb23279eed6a80d7798fdb47fe91

## React component types

Reference:

https://medium.com/@thechrisbull/4-different-kinds-of-components-creating-a-react-ui-component-framework-saga-a-designer-9043c0cc597

## React state vs props

- https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react
- https://dev.to/guimg/differences-between-props-and-state-in-reactjs-1kic

## Angular directives mapped to React

https://daveceddia.com/angular-directives-mapped-to-react/

## Other references

- https://www.stories.jotform.com/7-reasons-why-you-should-use-react-ad420c634247
- https://stackoverflow.com/questions/43927144/react-equivalent-to-ng-model
- https://stackoverflow.com/questions/32340051/change-classes-to-an-element-with-react

---

# 18. Progressive Web Apps (PWA)

A Progressive Web App is a web application that uses modern browser capabilities to provide an app-like experience.

PWA combines web technologies with capabilities such as:

- Offline access.
- Service workers.
- Web app manifests.
- Installability.
- Push notifications.
- Caching.
- Responsive design.

## PWA learning references

### Angular PWA

- https://www.youtube.com/watch?v=0UKJbtdPx4I
- https://www.youtube.com/watch?v=othhfZ0mGjU
- https://www.youtube.com/watch?v=51Nd_mTpugY

### General PWA

- https://codelabs.developers.google.com/codelabs/your-first-pwapp/#5
- https://blog.angulartraining.com/progressive-web-apps-for-angular-6-and-beyond-f7e4b9a2f9fa

### Service workers

https://developers.google.com/web/fundamentals/primers/service-workers/

---

# 19. PWA Characteristics

A PWA is commonly described using ten characteristics.

| Characteristic | Explanation |
|---|---|
| Progressive | Works for every user, regardless of browser choice, using progressive enhancement. |
| Responsive | Fits desktop, mobile, tablet and other screen sizes. |
| Connectivity independent | Can work offline or on low-quality networks using service workers and caching. |
| App-like | Provides an app-like experience through application architecture and the app shell model. |
| Fresh | Can receive updates through the service worker update process. |
| Safe | Served over HTTPS to help protect data and prevent tampering. |
| Discoverable | Can be discovered through web search and application metadata. |
| Re-engageable | Can support re-engagement through features such as push notifications. |
| Installable | Can be installed or added to a device's home screen where supported. |
| Linkable | Can be shared through a URL. |

---

# 20. PWA Features and Use Cases

## Offline caching

Service workers can cache application resources so the application can work without an internet connection.

## Application manifest

The Web App Manifest defines application metadata such as:

- Application name.
- Icons.
- Theme color.
- Background color.
- Display mode.
- Start URL.

## Add to home screen

Users can install or add supported web applications to their device's home screen.

## Web notifications

Push notifications can be used to send notifications to users, subject to browser and user permissions.

## Common PWA use cases

- Offline-capable applications.
- News applications.
- E-commerce applications.
- Content applications.
- Applications that need to work under unreliable network conditions.

---

# 21. PWA Architecture and App Shell

## What is an App Shell?

The app shell is the minimal HTML, CSS and JavaScript required to power the user interface of a Progressive Web App.

It separates the application interface from the application content.

The original notes explain that the UI and infrastructure can be cached locally using a service worker.

On subsequent loads, the application can retrieve the required data instead of downloading all application resources again.

## Example App Shell components

The original notes identify these components:

1. Header with a title.
2. Add and refresh buttons.
3. Container for forecast cards.
4. Forecast card template.
5. Dialog for adding new cities.
6. Loading indicator.

## App Shell architecture

```text
Browser
   |
   v
Service Worker
   |
   +----------------------+
   |                      |
   v                      v
Cached App Shell       Network
   |                      |
   v                      v
Application UI          API Data
   |                      |
   +----------+-----------+
              |
              v
         Rendered UI
```

## Original app-shell setup steps

### Step 1: Download source code

Download and unpack the source code.

### Step 2: Install and verify a web server

The original tutorial uses the Web Server for Chrome application.

Historical steps:

1. Install the Web Server for Chrome app.
2. Open the Apps shortcut on the bookmarks bar.
3. Open the Web Server application.
4. Select the project folder using the Choose Folder option.
5. Use the displayed Web Server URL.
6. Stop and restart the server if necessary.
7. Open the application in the browser.

**Note:** Web Server for Chrome is a historical tutorial dependency. A local development server is a more appropriate modern option.

### Step 3: Architect the App Shell

Identify the minimum HTML, CSS and JavaScript required to display the application interface.

### Step 4: Implement the App Shell

Implement the header, forecast cards, dialog and loading indicator.

### Step 5: Pre-cache the App Shell

Use a service worker to cache application resources.

### Step 6: Deploy

Deploy the application to a secure HTTPS host.

---

# 22. Service Workers

A service worker is a JavaScript script that runs separately from the web page.

It can handle background tasks and intercept network requests.

## Important characteristics

- Runs separately from the page.
- Can intercept network requests.
- Can manage caching.
- Can support offline experiences.
- Can support push notifications.
- Requires a secure context, generally HTTPS, except for localhost development.

## Service worker as a network proxy

A service worker acts as a programmable network proxy.

It allows developers to control how requests from the application are handled.

## Registering a service worker

The original notes provide this example:

```javascript
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(function () {
      console.log("Service Worker Registered");
    });
}
```

## Registration steps

1. Check whether the browser supports service workers.
2. Register the service worker JavaScript file.
3. Create the service worker file.
4. Implement the required caching and request-handling logic.

## Service worker reference

https://developers.google.com/web/fundamentals/primers/service-workers/

---

# 23. Creating an Angular PWA

Angular provides a PWA schematic that adds service-worker support and related configuration.

## Installation command

```bash
ng add @angular/pwa --project project_name
```

The original notes also mention:

```bash
npm install @angular/service-worker --save
```

The Angular PWA schematic is generally the preferred setup route for an Angular application.

## What Angular PWA setup provides

Depending on the Angular version and project configuration, the PWA setup can add:

- Service worker configuration.
- Web app manifest.
- Application icons.
- Cache configuration.
- Service worker registration.

## References

- https://www.youtube.com/watch?v=0UKJbtdPx4I
- https://www.youtube.com/watch?v=othhfZ0mGjU
- https://www.youtube.com/watch?v=51Nd_mTpugY
- https://blog.angulartraining.com/progressive-web-apps-for-angular-6-and-beyond-f7e4b9a2f9fa
- https://codelabs.developers.google.com/codelabs/your-first-pwapp/#5

---

# 24. Creating a React PWA

The original notes include the following references:

- https://codebrahma.com/building-progressive-web-app-react/
- https://blog.usejournal.com/developing-our-first-pwa-using-react-f75c9e9c9b43
- https://egghead.io/lessons/react-course-introduction-progressive-web-apps-in-react-with-create-react-app
- https://karannagupta.com/using-custom-workbox-service-workers-with-create-react-app/

## Service worker configuration

The original notes refer to adding code in the `serviceWorker.js` file.

The actual implementation depends on the React project setup and service worker strategy.

## Steps for creating a PWA

1. Serve the application over HTTPS.
2. Create an application shell.
3. Register a service worker.
4. Add push notifications where required.
5. Add a web app manifest.
6. Configure the installation experience.
7. Analyze application performance.
8. Audit the application using Lighthouse.

---

# 25. Lighthouse

Lighthouse is an automated tool for auditing web application quality.

It can help evaluate:

- Performance.
- Accessibility.
- Best practices.
- SEO.
- Progressive Web App-related characteristics in applicable versions.

Original reference:

https://developers.google.com/web/tools/lighthouse/#devtools

## Lighthouse execution options

The original notes identify three workflows:

1. Chrome DevTools.
2. Command line.
3. Node module integration.

## Run Lighthouse in Chrome DevTools

Historical workflow:

1. Install Google Chrome for desktop.
2. Open the URL to audit.
3. Open Chrome DevTools.
4. Select the Audits panel.
5. Enable the required audit categories.
6. Click Perform an audit.
7. Click Run audit.
8. Review the generated report.

The original notes indicate that the report may take approximately 60–90 seconds.

## Install Lighthouse using npm

```bash
npm install -g lighthouse
```

## Run an audit

```bash
lighthouse <url>
```

## View command help

```bash
lighthouse --help
```

## CI integration

Lighthouse can also be integrated into automated testing and continuous integration workflows.

---

# 26. React Native

React Native is a framework for building native mobile applications using React concepts and JavaScript.

It allows developers to create mobile applications for platforms such as Android and iOS.

## React Native learning references

- https://facebook.github.io/react-native/docs/getting-started.html
- https://www.reactnative.guide/5-project-structure-and-start-building-some-app/5.0-intro.html
- https://www.tutorialspoint.com/react_native/react_native_http.htm

## React Native lifecycle

https://blog.usejournal.com/understanding-react-native-component-lifecycle-api-d78e06870c6d

Additional reference:

http://www.techup.co.in/react-native-life-cycle/

## React Native HTTP requests

https://www.tutorialspoint.com/react_native/react_native_http.htm

## React Native project structure

https://www.reactnative.guide/5-project-structure-and-start-building-some-app/5.0-intro.html

---

# 27. React Native Lifecycle and Project Structure

The original notes include these topics:

- React Native component lifecycle.
- React Native project structure.
- Getting started with React Native.
- HTTP requests.
- Redux integration.
- Browser testing.
- Integration with existing applications.

## Getting started

Original reference:

https://facebook.github.io/react-native/docs/getting-started.html

React Native Elements reference:

https://react-native-training.github.io/react-native-elements/docs/0.19.1/getting_started.html

## Project initialization

The original notes mention:

```bash
react-native init reactnativeapp
```

**Historical note:** This is an older React Native CLI initialization command. Current project initialization instructions should be taken from the official React Native documentation.

## Testing React Native applications in a browser

Original reference:

https://stackoverflow.com/questions/35973914/can-react-native-apps-be-tested-in-a-browser

## React Native project issue

Original reference:

https://stackoverflow.com/questions/44037361/cannot-find-entry-file-index-js-with-expo-xde

---

# 28. React Native and Redux

The original notes include the following Redux-related topics:

- React Native Redux example.
- Fetching API data using Redux.
- Managing state in React Native.
- Integrating Redux with mobile applications.

## React Native Redux example

https://appdividend.com/2018/08/04/react-native-redux-example-tutorial/

## Fetching data using Redux

https://stackoverflow.com/questions/48178468/fetching-data-from-api-in-react-native-using-redux

## React Native Redux flow

```text
Mobile UI
   |
   v
User Action
   |
   v
Dispatch Redux Action
   |
   v
Reducer / Middleware
   |
   v
Updated Store
   |
   v
React Native UI
```

---

# 29. React Native Integration with Native Applications

React Native can be integrated into an existing native Android or iOS application.

The original notes include these references:

## General integration

https://medium.com/mindorks/react-native-integration-with-existing-app-f2757c2e672d

## Android integration

http://www.techup.co.in/integrating-react-native-with-existing-android-app/

## iOS integration

https://programmablebusiness.com/integrating-react-native-app-in-an-existing-ios-native-app-part-1-ac4751ca999b

## Official integration reference

https://facebook.github.io/react-native/docs/integration-with-existing-apps.html

## Communication between native and React Native

References:

- https://facebook.github.io/react-native/docs/communication-ios
- https://medium.com/@bogdan.bolchis/integrating-react-native-with-an-existing-ios-app-ce6f68e55e13

## Integration challenge

The original notes identify this drawback:

> The main drawback of cross-language properties is that they do not support callbacks.

This is an older note and should be treated as a historical integration concern rather than a universal limitation of modern React Native communication mechanisms.

---

# 30. React Native Navigation and Splash Screens

## Custom navigation tab

Reference:

https://dev.to/hrastnik/lets-create-a-custom-animated-tab-bar-with-react-native-3496

## Splash screen

Reference:

http://www.techup.co.in/react-native-splash-screen-example-using-react-navigation/

## Linking libraries

Original reference:

https://facebook.github.io/react-native/docs/linking-libraries-ios

## React Native To-Do application

https://medium.com/salamcinema/react-native-step-by-step-guide-to-create-a-to-do-app-9fc8b95554f7

---

# 31. React Native Development and Troubleshooting

## Hot reloading

Original reference:

https://dev.to/skptricks/enable-hot-reloading-in-react-native-1pe0

## React Native tutorials

https://www.skptricks.com/search/label/React%20Native

## React Native best practices

https://medium.com/react-native-training/best-practices-for-creating-react-native-apps-part-1-66311c746df3

## React Native integration reference

https://ourcodeworld.com/articles/read/327/how-to-execute-child-component-function-from-the-parent-component-in-react

---

# 32. Facebook Messenger Chatbot Use Cases

The original notes list the following benefits of Facebook Messenger chatbots.

1. Save time.
2. Save money.
3. Improve customer satisfaction.
4. Increase customer base.
5. Automate customer support for similar queries.
6. Improve business branding.
7. Reduce development time for repetitive support workflows.
8. Provide 24/7 customer service.
9. Send near-instant responses to user inquiries.
10. Reduce the need for manual responses to common questions.

## Example use cases

- Frequently asked questions.
- Automated customer support.
- Product information.
- Basic order updates.
- Customer engagement.
- Business communication.

---

# 33. Calling Parent Functions from Child Components

A parent component can pass a callback function to a child component.

The child component can invoke that function when an event occurs.

Example:

```jsx
function Parent() {
  const handleChildAction = () => {
    console.log("Child triggered parent callback");
  };

  return (
    <Child onAction={handleChildAction} />
  );
}

function Child({ onAction }) {
  return (
    <button onClick={onAction}>
      Trigger Parent
    </button>
  );
}
```

Original reference:

https://ourcodeworld.com/articles/read/327/how-to-execute-child-component-function-from-the-parent-component-in-react

---

# 34. React-Redux Best Practices

The original notes include the following practices:

1. Avoid large classes, methods and components.
2. Avoid unnecessarily large reducers.
3. Use conditional rendering.
4. Name event handlers with the `handle` prefix.
5. Use ES6 destructuring for props.
6. Use a dependency manager with a lock file.
7. Use fragments where appropriate.

## Event handler naming

Example:

```jsx
function UserForm() {
  const handleClick = () => {
    console.log("Clicked");
  };

  const handleUpdate = () => {
    console.log("Updated");
  };

  return (
    <button onClick={handleClick}>
      Submit
    </button>
  );
}
```

## Props destructuring

```jsx
const {
  firstName,
  lastName,
  email,
  doSomethingAmazing
} = this.props;
```

## Redux data flow references

- https://lh3.googleusercontent.com/eG5jgDqCxPhW5yCpx1g7oyJGD6ZNGyjR7uolGBRqqCjLhyM6u8hIvA21m9-K-qKja3TK0g=s170
- https://lh3.googleusercontent.com/SgFcDe_BU8vV5KOcHHwyAFBCQnTsMo-oQD3hCzi9ifBydnRGqND___u9xuF_exTinPHSiw=s105

## Additional references

- https://stackoverflow.com/questions/44749723/when-to-use-store-dispatch-in-my-react-redux-app
- https://medium.com/@konstankino/2019-reactjs-best-practices-design-patterns-516e1c3ca06a
- https://blog.bam.tech/developper-news/4-ways-to-dispatch-actions-with-redux

---

# 35. Automatic Reload and Cache Management

The original notes cover the issue of Angular applications requiring cache clearing after a new deployment.

## Main concern

After deploying a new application version, a browser may continue using older cached assets.

This can cause:

- Old JavaScript files to load.
- Old CSS files to remain cached.
- Version mismatch between HTML and bundled files.
- Application errors caused by stale resources.

## References

### Angular application cache after deployment

https://stackoverflow.com/questions/55402751/angular-app-has-to-clear-cache-after-new-deployment

### Cache-Control best practices

https://medium.com/pixelpoint/best-practices-for-cache-control-settings-for-your-website-ff262b38c5a2

### Angular output hashing and lazy loading

https://stackoverflow.com/questions/49267451/is-angular-clis-output-hashing-always-supposed-to-work-with-lazily-loaded-mod

---

# 36. AMP (Accelerated Mobile Pages)

AMP stands for Accelerated Mobile Pages.

It is an open-source framework and format originally designed to help publishers deliver fast-loading web content.

The original notes cover:

- AMP page creation.
- AMP HTML.
- AMP CSS.
- AMP JavaScript restrictions.
- AMP components.
- AMP Cache.
- Canonical URLs.
- Structured data.
- Analytics.
- CORS.
- Custom fonts.
- Custom JavaScript.
- Offline access.
- Server-side rendering.
- Content Security Policy.

## AMP repository

https://github.com/ampproject/amphtml

## AMP documentation

https://amp.dev/documentation/components/

---

# 37. AMP Page Creation Guidelines

The original notes identify the following steps and considerations.

## Create a basic AMP page

1. Create a basic AMP document.
2. Follow the Google Search guidelines for AMP pages.
3. Make the AMP page discoverable by linking it with the canonical page.
4. Ensure that users can access equivalent content and actions where possible.
5. Validate the AMP HTML document.
6. Use the same structured data markup across canonical and AMP pages.
7. Follow common content and indexing practices.
8. Ensure that the robots.txt file does not block the AMP page.
9. Follow hreflang guidelines for language and regional URLs.
10. Exclude third-party JavaScript that is not allowed by AMP.

## AMP boilerplate

The original notes explain that the `<style amp-boilerplate>` tag initially hides the body content until the AMP JavaScript library loads.

## AMP Cache

An AMP Cache is a proxy-based content delivery network for delivering valid AMP documents.

Its intended functions include:

- Serving valid AMP pages.
- Supporting efficient and safe preloading.
- Performing performance optimizations.

## Available AMP Cache providers in the original notes

1. Google AMP Cache.
2. Bing AMP Cache.

**Historical note:** AMP platform support and search presentation have changed over time. The original notes record the ecosystem as it was described when they were collected.

---

# 38. AMP Canonicalization and SEO

Canonicalization helps search engines identify the preferred URL when similar or duplicate content exists.

## AMP and non-AMP relationship

For a non-AMP page, add:

```html
<link
  rel="amphtml"
  href="https://www.example.com/url/to/amp/document.html"
/>
```

For the AMP page, add:

```html
<link
  rel="canonical"
  href="https://www.example.com/url/to/full/document.html"
/>
```

## When there is only one AMP page

The original notes show:

```html
<link
  rel="canonical"
  href="https://www.example.com/url/to/amp/document.html"
/>
```

## General canonicalization guidelines

The original notes include these recommendations:

1. Do not use robots.txt for canonicalization.
2. Do not use the URL removal tool for canonicalization.
3. Do not specify different canonical URLs for the same page through different techniques.
4. Do not use `noindex` as a method of selecting a canonical URL.
5. Specify a canonical page when using hreflang tags.
6. Link internally to the canonical URL instead of duplicate URLs.
7. Prefer HTTPS over HTTP for canonical URLs when the HTTPS version is valid.

## HTTPS canonicalization considerations

Google may prefer an HTTP version in cases where the HTTPS version has problems, such as:

- Invalid SSL certificate.
- Insecure dependencies.
- Redirects through HTTP pages.
- A canonical link pointing to an HTTP URL.
- Incorrect host-variant certificate configuration.

The original notes identify these approaches for HTTPS preference:

- Redirect HTTP pages to HTTPS.
- Add canonical links from HTTP to HTTPS.
- Implement HSTS.

## Dynamic URL parameters

The original notes discuss telling Google to ignore certain dynamic parameters.

Example:

```text
https://www.example.com/dresses/green.php?sessionid=273749
https://www.example.com/dresses/green.php
```

The notes explain that if `sessionid` is configured as an ignorable parameter, Googlebot may treat these URLs as duplicates.

---

# 39. AMP Cache

AMP Cache is a content delivery system that stores and serves valid AMP documents.

## Main responsibilities

The original notes identify the following cache guidelines:

1. Serve only valid AMP input documents.
2. Participate in the AMP validator release cycle.
3. Participate in the AMP JS library release cycle.
4. Make efforts to serve the latest AMP library version.
5. Avoid site-level version locking.
6. Serve each site from a subdomain of the cache domain.
7. Use HTTPS.
8. Provide a strong Content Security Policy.
9. Implement documented security rewrites.
10. Update the CSP in a timely manner.
11. Support a public cache update mechanism.
12. Support an AMP Cache URL API.
13. Preserve the visual and UX experience of the original document.
14. Avoid obstructing original content, branding and attribution.
15. Avoid changing ads, monetization, access and analytics.
16. Respect resource deletions.
17. Use a stale-while-revalidate caching model.
18. Make reasonable efforts to keep cached content fresh.
19. Follow AMP cache modification best practices.

## Stale-while-revalidate

The original notes describe this caching behavior:

- A cache may serve a stale response.
- It should make reasonable efforts to refresh the content.
- A request for stale content can trigger a new copy to be fetched.
- The cache should revalidate content after serving stale responses.

## AMP cache guidelines

https://github.com/ampproject/amphtml/blob/master/spec/amp-cache-guidelines.md

---

# 40. AMP Cache URL Format

The original notes provide this example:

```text
https://amp-dev.cdn.ampproject.org/c/s/amp.dev/index.amp.html
```

## URL components

| Component | Meaning |
|---|---|
| `amp-dev` | Publisher domain converted into a subdomain |
| `cdn.ampproject.org` | AMP Cache domain |
| `c` | Indicates an AMP document |
| `i` | Used for image resources |
| `r` | Used for other resources such as fonts |
| `s` | Indicates that the origin is accessed using HTTPS |
| `amp.dev/index.amp.html` | Original URL excluding the scheme |

## Google AMP Cache example

```text
https://foo-com.cdn.ampproject.org/c/s/foo.com/amp_document.html
```

## Cloudflare AMP Cache example

```text
https://amp.cloudflare.com/c/foo.com/amp_document.html
```

## How AMP Cache requests work

1. A platform discovers AMP content.
2. The platform identifies valid AMP documents.
3. The platform can request the content through an AMP Cache URL.
4. The cache retrieves and stores the content.
5. The cached document can be served to users.

The original notes describe the AMP Cache as a reverse proxy.

---

# 41. AMP Discovery and Distribution

## Social discovery

Original reference:

https://developers.google.com/web/fundamentals/discovery/social-discovery/

## Discovering AMP pages

The original notes explain that platforms can discover AMP content through the AMP HTML tag.

Examples:

```html
<html amp lang="en">
```

or:

```html
<html ⚡ lang="en">
```

## Link AMP and non-AMP pages

Add this to the non-AMP page:

```html
<link
  rel="amphtml"
  href="https://www.example.com/url/to/amp/document.html"
/>
```

Add this to the AMP page:

```html
<link
  rel="canonical"
  href="https://www.example.com/url/to/full/document.html"
/>
```

## Content requirements

The original notes recommend:

- Ensure users can access equivalent content.
- Ensure important actions remain available.
- Use consistent structured data.
- Do not block AMP pages from crawling.
- Follow the applicable indexing and language guidelines.

---

# 42. AMP Structured Data

Structured data helps search engines understand the content of a page.

The original notes include JSON-LD.

Example structure:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Example Article",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  }
}
</script>
```

The original notes show:

```html
<script application/ld+json>
  -------
</script>
```

The example above is an illustrative corrected JSON-LD structure.

## Structured data requirements in the original notes

- Add structured data to the AMP page.
- Use the same structured data markup across canonical and AMP pages.
- Validate structured data.
- Follow Google's structured data policies.

## References

- https://developers.google.com/search/docs/guides/sd-policies
- https://developers.google.com/search/docs/data-types/article#article_types
- https://developers.google.com/search/docs/guides/about-amp

---

# 43. AMP Validation

AMP documents must follow AMP HTML rules.

## Preview and validate

The original notes describe this workflow:

1. Open the AMP page in a browser.
2. Add `#development=1` to the URL.
3. Open Chrome DevTools.
4. Check the console for validation errors.

Example:

```text
http://localhost:8000/released.amp.html#development=1
```

## AMP attribute

The original notes identify this validation issue:

> Specify the amp attribute.

Valid examples shown in the notes:

```html
<html ⚡ lang="en">
```

or:

```html
<html amp lang="en">
```

## Validation workflow

The original notes also include:

```text
#development=[1,actions,amp,amp4ads,amp4email]
```

## Validation tools

- https://validator.ampproject.org/
- https://search.google.com/test/amp
- https://search.google.com/structured-data/testing-tool#url=https%3A%2F%2Famp.dev%2Fabout%2Fhow-amp-works%2F%3Freferrer%3Dampproject.org

**Note:** Some original validation tools and URLs are historical. Check current AMP documentation for supported validation workflows.

---

# 44. AMP Analytics

The original notes include Google Analytics integration and AMP tracking.

## Google Analytics reference

https://developers.google.com/analytics/devguides/collection/amp-analytics/

## AMP tracking reference

https://amp.dev/documentation/guides-and-tutorials/start/add_advanced/tracking_data/?format=websites

## Tracking considerations

The original notes mention:

- Tracking Google Analytics.
- Tracking user activity.
- Configuring analytics for AMP pages.
- Preserving analytics behavior through AMP Cache delivery.

---

# 45. AMP Specification and Restrictions

The original notes identify several AMP HTML restrictions.

## AMP HTML specification

https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/?format=websites

## JavaScript URL restrictions

The `javascript:` URL schema is disallowed in AMP.

## CSS `!important`

The original notes state that the `!important` qualifier is not allowed.

## Animation properties

The original notes identify GPU-accelerated animation properties such as:

- `opacity`
- `transform`
- Vendor-prefixed transform properties.

## Maximum stylesheet size

The original notes state that the author stylesheet and inline styles together must not exceed 50,000 bytes.

## External CSS

The original notes state that external CSS is not supported in AMP and that inline CSS must be used.

**Clarification:** The exact allowed CSS mechanisms and size constraints should be checked against the AMP specification version being used.

---

# 46. AMP Components

AMP components provide predefined functionality within AMP pages.

The original notes include:

https://amp.dev/documentation/components/amp-next-page/?format=websites

## Component examples mentioned in the original notes

- `amp-form`
- `amp-list`
- `amp-script`
- `amp-next-page`

## Dynamic content

Components such as `amp-form` and `amp-list` can retrieve data from remote endpoints.

Those requests may require CORS configuration.

---

# 47. AMP CORS

CORS stands for Cross-Origin Resource Sharing.

It is a browser security mechanism that controls whether a web page can access resources from another origin.

## Why AMP needs CORS

The original notes describe this scenario:

1. Google Search serves an AMP page from Google AMP Cache.
2. The cached page is hosted on a different origin from the publisher's original domain.
3. A user interacts with a component that needs updated data.
4. The AMP page sends a request to the publisher's origin.
5. The request crosses origins.
6. The server must provide the required CORS response headers.

Without appropriate CORS handling, the request may fail.

## Example scenario

A cached AMP page displays product prices.

When a user clicks a button to update the prices:

```text
AMP Cache
    |
    v
Cached AMP Page
    |
    v
Request to Publisher API
    |
    v
Publisher Server
    |
    v
CORS Response
    |
    v
AMP Page Updates
```

## AMP CORS reference

The original notes explain that components such as `amp-form` and `amp-list` make cross-origin requests to remote endpoints.

## Utilizing cookies for CORS requests

The original notes explain that many AMP components manage credential modes automatically or allow configuration.

For example, `amp-list` can fetch dynamic content from a CORS-enabled JSON endpoint and use its `credentials` attribute to configure credential behavior.

---

# 48. AMP Custom Fonts

The original notes list these font providers:

| Provider | URL |
|---|---|
| Typography.com | https://cloud.typography.com |
| Fonts.com | https://fast.fonts.net |
| Google Fonts | https://fonts.googleapis.com |
| Typekit | https://use.typekit.net |
| Font Awesome | https://maxcdn.bootstrapcdn.com |
| Font Awesome | https://use.fontawesome.com |

## Using @font-face

The original notes include this example:

```html
<style amp-custom>
  @font-face {
    font-family: "Bitstream Vera Serif Bold";
    src: url("https://somedomain.org/VeraSeBd.ttf");
  }
</style>
```

This example demonstrates the `@font-face` approach.

Check the current AMP CSS and font-loading requirements before using a specific font-hosting approach.

---

# 49. Custom JavaScript with amp-script

AMP traditionally restricts arbitrary JavaScript.

The original notes describe `amp-script` as a way to run custom JavaScript within AMP's constraints.

## Documentation

- https://amp.dev/documentation/guides-and-tutorials/develop/custom-javascript/?format=websites
- https://amp.dev/documentation/guides-and-tutorials/develop/custom-javascript-tutorial/?format=websites

## Example

The original notes include this structure:

```html
<html ⚡>
<head>
  ...
  <script
    async
    custom-element="amp-script"
    src="https://cdn.ampproject.org/v0/amp-script-0.1.js">
  </script>
</head>

<body>
  ...
  <amp-script
    layout="container"
    src="https://example.com/myfile.js">

    <p>
      Initial content that can be modified from JavaScript
    </p>

  </amp-script>
  ...
</body>
</html>
```

## Event triggers

The original notes state:

> All event triggers are allowed.

The exact supported event behavior depends on the AMP component and its restrictions.

## API restrictions

The original notes explain that some synchronous APIs are disallowed inside `amp-script`.

Example:

`Element.getBoundingClientRect()` is a synchronous API.

The notes mention an asynchronous alternative:

```javascript
getBoundingClientRectAsync()
```

The asynchronous API returns a Promise.

---

# 50. AMP Security and Content Security Policy

The original notes include security considerations related to third-party attacks.

## Content Security Policy

CSP stands for Content Security Policy.

It is a browser security mechanism that controls which resources a page can load or execute.

## AMP CSP

The original notes describe adding a CSP meta tag to the page head.

The original example is incomplete:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src * data: blob:; script-"
>
```

This is not a complete CSP policy and should not be copied into production.

## AMP Cache security requirements

The original notes mention:

- Serve content over HTTPS.
- Use a strong Content Security Policy.
- Control resources that pages can load or execute.
- Apply documented security rewrites.
- Keep cache CSP configuration up to date.

---

# 51. AMP Offline Access and Server-Side Rendering

The original notes include two additional AMP topics.

## Offline access and PWA

Reference:

https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/amp-as-pwa/?format=websites

The original notes describe this topic as:

> Easy offline access and improved performance.

## Server-side rendering

Reference:

https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/server-side-rendering/?format=websites

The original notes identify server-side rendering as another AMP performance topic.

## Publishing checklist

Reference:

https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/publishing_checklist/?format=websites

---

# 52. AMP Reference Links and Tools

## AMP project and specifications

- https://github.com/ampproject/amphtml
- https://github.com/ampproject/amphtml/blob/master/spec/amp-html-format.md
- https://github.com/ampproject/amphtml/blob/master/spec/amp-cache-modifications.md
- https://github.com/ampproject/amphtml/blob/master/spec/amp-cache-guidelines.md

## AMP documentation

- https://amp.dev/documentation/components/
- https://amp.dev/documentation/components/amp-next-page/?format=websites
- https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/?format=websites
- https://amp.dev/documentation/guides-and-tutorials/develop/custom-javascript/?format=websites
- https://amp.dev/documentation/guides-and-tutorials/develop/custom-javascript-tutorial/?format=websites
- https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/publishing_checklist/?format=websites
- https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/amp-as-pwa/?format=websites
- https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/server-side-rendering/?format=websites

## Google Search and structured data

- https://developers.google.com/search/docs/guides/sd-policies
- https://developers.google.com/search/docs/data-types/article#article_types
- https://developers.google.com/search/docs/guides/about-amp
- https://support.google.com/news/producer/answer/6204050

## Analytics

- https://developers.google.com/analytics/devguides/collection/amp-analytics/
- https://amp.dev/documentation/guides-and-tutorials/start/add_advanced/tracking_data/?format=websites

## AMP Cache

- https://developers.google.com/amp/cache/overview#amp-cache-url-format
- https://github.com/ampproject/amphtml/blob/master/spec/amp-cache-modifications.md
- https://github.com/ampproject/amphtml/blob/master/spec/amp-cache-guidelines.md

## Validation tools

- https://validator.ampproject.org/
- https://search.google.com/test/amp
- https://search.google.com/structured-data/testing-tool

## AMP template reference

https://www.elgrupoinformatico.com/amp/k40-k50-q60-son-oficiales-conoce-todos-los-detalles-t72697.html

---

# 53. React and PWA Reference Collection

This section consolidates the original reference URLs for quick access.

## React fundamentals and learning

- https://medium.com/free-code-camp/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6
- https://www.sitepoint.com/react-for-angular-developers/
- https://daveceddia.com/angular-directives-mapped-to-react/
- https://reactpatterns.com/#function-component
- https://medium.com/@thechrisbull/4-different-kinds-of-components-creating-a-react-ui-component-framework-saga-a-designer-9043c0cc597
- https://www.geeksforgeeks.org/reactjs-lifecycle-components/
- https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1

## React and Redux

- https://daveceddia.com/redux-tutorial/
- https://egghead.io/lessons/react-redux-react-counter-example
- https://redux.js.org/introduction/getting-started
- https://redux.js.org/basics/actions
- https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/
- https://www.techomoro.com/how-to-build-a-simple-counter-app-using-react-and-redux/
- https://stackoverflow.com/questions/38728884/how-to-properly-make-rest-calls-from-reactjs-redux-application
- https://stackoverflow.com/questions/35628774/how-to-update-single-value-inside-specific-array-item-in-redux

## React libraries and tools

- https://blog.bitsrc.io/11-react-component-libraries-you-should-know-178eb1dd6aa4
- https://www.npmjs.com/package/axios
- https://www.npmjs.com/package/react-responsive-carousel#demo
- https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en
- https://fullstackengine.net/recommended-vscode-extensions-react/

## React deployment and troubleshooting

- https://stackoverflow.com/questions/43830866/what-is-npm-run-build-in-create-react-app
- https://github.com/facebook/create-react-app/issues/4227
- https://stackoverflow.com/questions/22475849/node-js-what-is-enospc-error-and-how-to-solve/32600959#32600959
- https://www.youtube.com/watch?v=ji6urVl6oP4

## React Native

- https://facebook.github.io/react-native/docs/getting-started.html
- https://www.reactnative.guide/5-project-structure-and-start-building-some-app/5.0-intro.html
- https://appdividend.com/2018/08/04/react-native-redux-example-tutorial/
- https://facebook.github.io/react-native/docs/integration-with-existing-apps.html
- https://facebook.github.io/react-native/docs/communication-ios
- https://medium.com/mindorks/react-native-integration-with-existing-app-f2757c2e672d
- https://dev.to/hrastnik/lets-create-a-custom-animated-tab-bar-with-react-native-3496

## PWA and service workers

- https://developers.google.com/web/fundamentals/primers/service-workers/
- https://codelabs.developers.google.com/codelabs/your-first-pwapp/#5
- https://developers.google.com/web/tools/lighthouse/#devtools
- https://codebrahma.com/building-progressive-web-app-react/
- https://blog.usejournal.com/developing-our-first-pwa-using-react-f75c9e9c9b43
- https://karannagupta.com/using-custom-workbox-service-workers-with-create-react-app/

---

# Final Revision Checklist

## ReactJS

- [ ] Understand React fundamentals.
- [ ] Understand JSX.
- [ ] Understand Virtual DOM.
- [ ] Understand component lifecycle.
- [ ] Understand props and state.
- [ ] Understand parent-child communication.
- [ ] Understand function and class components.
- [ ] Understand conditional rendering.
- [ ] Understand React Router.
- [ ] Understand API calls and error handling.
- [ ] Understand React Hooks.
- [ ] Understand component organization.

## Redux

- [ ] Understand store.
- [ ] Understand actions.
- [ ] Understand reducers.
- [ ] Understand dispatch.
- [ ] Understand Redux data flow.
- [ ] Understand immutable updates.
- [ ] Understand middleware.
- [ ] Understand Redux Thunk.
- [ ] Understand `mapStateToProps`.
- [ ] Understand `mapDispatchToProps`.
- [ ] Understand `useSelector` and `useDispatch`.

## PWA

- [ ] Understand PWA characteristics.
- [ ] Understand the application manifest.
- [ ] Understand service workers.
- [ ] Understand service worker registration.
- [ ] Understand caching.
- [ ] Understand offline access.
- [ ] Understand App Shell architecture.
- [ ] Understand push notifications.
- [ ] Understand HTTPS requirements.
- [ ] Understand Lighthouse audits.
- [ ] Understand Angular PWA setup.
- [ ] Understand React PWA setup.

## React Native

- [ ] Understand React Native fundamentals.
- [ ] Understand component lifecycle.
- [ ] Understand project structure.
- [ ] Understand API integration.
- [ ] Understand Redux integration.
- [ ] Understand native application integration.
- [ ] Understand native-to-React Native communication.
- [ ] Understand navigation.
- [ ] Understand splash screens.

## AMP

- [ ] Understand AMP HTML.
- [ ] Understand AMP page structure.
- [ ] Understand canonical URLs.
- [ ] Understand AMP Cache.
- [ ] Understand AMP Cache URL format.
- [ ] Understand structured data.
- [ ] Understand AMP validation.
- [ ] Understand AMP analytics.
- [ ] Understand AMP CSS restrictions.
- [ ] Understand AMP components.
- [ ] Understand CORS.
- [ ] Understand custom fonts.
- [ ] Understand amp-script.
- [ ] Understand CSP.
- [ ] Understand AMP and PWA.
- [ ] Understand AMP server-side rendering.

---

**End of document**
