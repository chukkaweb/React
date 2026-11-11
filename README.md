# react

[https://developers.google.com/web/fundamentals/primers/service-workers/](https://developers.google.com/web/fundamentals/primers/service-workers/)

Redux

ReactJS | Lifecycle of Components Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class. Mounting: Mounting is the stage of rendering the **JSX** returned by the render method itself. Updating: Updating is the stage when the state of a component is updated and the application is repainted. Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.

Use-case for the componentWillMount() For example, if you want to keep the date of when the component was created in your component state, you could set this up in this method. Please keep in mind that setting state in this method won’t re-render **DOM**. This is important to keep in mind, because in most cases whenever we change the component’s state, a re-render is triggered. componentWillMount() { this.setState({ todayDate: new Date(Date.now())}); } Use-case for the componentDidMount() For example, if you were building a news app that fetches data on the current news and displays it to the user and you may want this data to be updated every hour without the user having to refresh the page. componentDidMount() { this.interval = setInterval(this.fetchNews, **3600000**); } That’s it on this. Any suggestion or question, please feel free to write me at [hima.chhag@gmail.com](mailto:hima.chhag@gmail.com) or in comment section below. Happy Coding!   For parent-child communication, simply pass props. Use state to store the data your current page needs in your controller-view. Use props to pass data & event handlers down to your child components. These lists should help guide you when working with data in your components. Props are immutable which lets React do fast reference checks are used to pass data down from your view-controller your top level component have better performance use this to pass data to child components State should be managed in your view-controller your top level component is mutable has worse performance should not be accessed from child components pass it down with props instead For communication between two components that don't have a parent-child relationship, you can set up your own global event system. Subscribe to events in componentDidMount(), unsubscribe in componentWillUnmount(), and call setState() when you receive an event. Flux pattern is one of the possible ways to arrange this. - [https://facebook.github.io/react/tips/communicate-between-](https://facebook.github.io/react/tips/communicate-between-)

React for Angular Developers whereas React is a library focused only on the view layer.

**JSX** syntax for templates with JavaScript expressions in single curlies { } ng-repeat <ul> { words.map((word)=> <li>{ word }</li> )} </ul> ng-class <form className={ classNames({active: active, error: error}) }> </form> ng-if <div> { enabled ? <p>Enabled</p> : null } </div> ng-show / ng-hide <p style={ display: alive ? 'block' : 'none' }>Living</p>

Ex: class component
class SlideShow extends Component {
    constructor() {
    super()
    this.state = { activeIndex: 0 };
    }
Reasons why you should use React
 Reusable Components
Fast render with Virtual **DOM**
a **DOM** kept in memory. Any view changes are first reflected to virtual **DOM**, then an efficient diff algorithm compares the previous and current states of the virtual **DOM** and calculates the best way (minimum amount of updates needed) to apply these changes
 Clean Abstraction
Flux and Redux
 Great Developer Tools
React Developer Tools and Redux Developer Tools.
### React Native

React-helmet Featured snippet from the web React Helmet is a simple component that makes it easy to manage and dynamically set what's in the document's head section. ... This makes server-side rendering and React Helmet a dynamic duo for creating apps that are **SEO** and social media friendly  Types of ReactJS components There are four main types of ReactJS components: State-full or class-based components State-less or function-based components Presentational (or high-order) components Container components A state-full component has its state and data associated with the state. You can pass data inside this type of component via state or props objects. state-full components are most often class-based components that have a constructor (it’s considered a best practice to set state for your component in the constructor).

Props are immutable and are one-way bound to a state, and this is why you cannot change them within your component. You use props to set a state for the component and to render its UI. If you try to change props in your component, you will get a Type Error.

State is an object that is exposed to a component. State scope is limited to inside the component where it is declared. Components can initialize state and pass it to another component. We can declare a state in two ways, using the constructor or declaring state property. With the second case, that is just syntactic sugar, and the transpiler (such as Babel) will turn your state

From the performance point-of-view, there is practically no difference between using class-based components and using function-based components. ReactJS rendering mechanism is smart enough to optimize that for us. Function-based components are easier to work with and more comfortable to test

What you’ll use a stateless component for: No State Required — not state, just needs to render an output with styles One-Dimensional functionality — doesn’t need to do overly complex calculations and is simple and clean cut component Styles Based on Properties — easily change the style of the component based on the properties passed from the parent component. For example, the text color<Title color={this.state.error ? 'red': 'grey'} title=*My Title* /> “Interactive Component” — Basic component with user interactive actions A component that changes states when on a user is interacting with it. For example, a component might need to change based on a user’s specific action with it, such as typing text in an input, or submitting a form. Very similar to the “basic” example above, the difference with this component is that a component is listening to user interactions such as onMouseEnter, onMouseLeave, onClick, onTouchStart, onTouchEnd and others.

### Best Practices List

When using ReduxJS, split your Reducercode into smaller methods to avoid huge **JSON** within your Reducer.
Use the create-react-app generator to bootstrap your ReactJS app
Avoid having large classes, methods or components, including Reducers
Use more robust managers to manage application state, such as Redux
Use event synchronizer, such as Redux-Thunk, for interactions with your back end **API**.
Avoid passing too many attributes or arguments. Limit yourself to five props that you pass into your component.
Use ReactJS defaultProps and ReactJS propTypes.
Use linter, break up lines that are too long.
Keep your own jslint configuration file.
Always use a dependency manager with a lock file, such as **NPM** or yarn.
Test your commonly accessed code, code that is complex and prone to bugs.
Write more tests that give more test coverage for your code with a little effort and test code to ensure its proper functioning.
Every time you find a bug, make sure you write a test first.
Use function-based components by starting to use React Hooks, a new ReactJS way to create state-full components.
Use **ES6** de-structuring for your props.
Use conditional rendering.
Use partial components, such as `<>` … `</>`
Use **JEST** to test your ReactJS code.
What is mapDispatchToProps?
49. mapStateToProps() is a utility which helps your component get updated state(which is updated by some other components), mapDispatchToProps() is a utility which will help your component to fire an action event (dispatching action which may cause change of application state
 
Referal urls
[https://medium.com/@etherealm/super-vs-super-props-in-react-class-components-58658af6ecf2](https://medium.com/@etherealm/super-vs-super-props-in-react-class-components-58658af6ecf2)

**PWA** References Creating **PWA** with Angular 6 using Angular Material [https://[www.youtube.com/watch?v=0UKJbtdPx4I](https://www.youtube.com/watch?v=0UKJbtdPx4I](https://www.youtube.com/watch?v=0UKJbtdPx4I](https://www.youtube.com/watch?v=0UKJbtdPx4I)) [https://[www.youtube.com/watch?v=othhfZ0mGjU](https://www.youtube.com/watch?v=othhfZ0mGjU](https://www.youtube.com/watch?v=othhfZ0mGjU](https://www.youtube.com/watch?v=othhfZ0mGjU))

Pwa with angular [https://[www.youtube.com/watch?v=0UKJbtdPx4I](https://www.youtube.com/watch?v=0UKJbtdPx4I](https://www.youtube.com/watch?v=0UKJbtdPx4I](https://www.youtube.com/watch?v=0UKJbtdPx4I)) [https://[www.youtube.com/watch?v=51Nd_mTpugY](https://www.youtube.com/watch?v=51Nd_mTpugY](https://www.youtube.com/watch?v=51Nd_mTpugY](https://www.youtube.com/watch?v=51Nd_mTpugY))

ng add @angular/pwa --project project_name

Pwa [https://codelabs.developers.google.com/codelabs/your-first-pwapp/#5](https://codelabs.developers.google.com/codelabs/your-first-pwapp/#5)

[https://blog.angulartraining.com/progressive-web-apps-for-angular-6-and-beyond-f7e4b9a2f9fa](https://blog.angulartraining.com/progressive-web-apps-for-angular-6-and-beyond-f7e4b9a2f9fa)

Service workers [https://developers.google.com/web/fundamentals/primers/service-workers/](https://developers.google.com/web/fundamentals/primers/service-workers/)

npm install @angular/service-worker --save   Progressive - Works for every user, regardless of browser choice because it's built with fprogressive enhancement as a core tenet. Responsive - Fits any form factor: desktop, mobile, tablet, or whatever is next. Connectivity independent - Enhanced with service workers to work offline or on low-quality networks. App-like - Feels like an app, because the app shell model separates the application functionality from application content. Fresh - Always up-to-date thanks to the service worker update process. Safe - Served via **HTTPS** to prevent snooping and to ensure content hasn't been tampered with. Discoverable - Is identifiable as an *application* thanks to **W3C** manifest and service worker registration scope, allowing search engines to find it. Re-engageable - Makes re-engagement easy through features like push notifications. Installable - Allows users to add apps they find most useful to their home screen without the hassle of an app store. Linkable - Easily share the application via **URL**, does not require complex installation.

Uses
Offline caching with service workers so your app can work without an internet connection Application manifest to define the look and feel of your app (splash screen, icons, name, full screen or not)
Install to home screen feature so your web app can be accessed just like any other native app
Web notifications so you can send background notifications to the user, just like native mobile apps do!
2. Getting set up
Download sourec code
Unpack the downloaded zip file.

Install and verify web server After installing the Web Server for Chrome app, click on the Apps shortcut on the bookmarks bar: In the ensuing window, click on the Web Server icon: You'll see this dialog next, which allows you to configure your local web server:

Click the choose folder button, and select the work folder. This will enable you to serve your work in progress via the **URL** highlighted in the web server dialog (in the Web Server **URL**(s) section). Then stop and restart the server by sliding the toggle labeled *Web Server: **STARTED*** Now visit your work site in your web browser

## Architect your App Shell

The app's shell is the minimal **HTML**, **CSS**, and JavaScript that is required to power the user interface of a progressive

All of the UI and infrastructure is cached locally using a service worker so that on subsequent loads, the Progressive Web App only needs to retrieve the necessary data, instead of having to load everything. A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction.

Service worker is a programmable network proxy, allowing you to control how network requests from your page are handled.

4 Implement your App Shell Remember, the key components will consist of: Header with a title, and add/refresh buttons Container for forecast cards A forecast card template A dialog for adding new cities A loading indicator

## Use service workers to pre-cache the App Shell

Register the service worker if it's available

This takes two simple steps:
Tell the browser to register the JavaScript file as the service worker.
Create a JavaScript file containing the service worker.
 if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('./service-worker.js')
    .then(function() { console.log('Service Worker Registered'); });
    }

## Deploy to a secure host and celebrate

Lighthouse Lighthouse, an open-source, automated tool for improving the quality of your Progressive Web Apps, eliminates much of the manual testing that was previously required. You can even use Lighthouse in continuous integration systems to catch regressions. [https://developers.google.com/web/tools/lighthouse/#devtools](https://developers.google.com/web/tools/lighthouse/#devtools) Choose the Lighthouse workflow that suits you best: In Chrome DevTools. Easily audit pages that require authentication, and read your reports in a user-friendly format. From the command line. Automate your Lighthouse runs via shell scripts. As a Node module. Integrate Lighthouse into your continuous integration systems. Run Lighthouse in Chrome DevTools Lighthouse now powers the Audits panel of Chrome DevTools. To run a report: Download Google Chrome for Desktop. In Google Chrome, go to the **URL** you want to audit. You can audit any **URL** on the web. Open Chrome DevTools. Click the Audits tab. Figure 1. To the left is the viewport of the page that will be audited. To the right is the Audits panel of Chrome DevTools, which is now powered by Lighthouse Click Perform an audit. DevTools shows you a list of audit categories. Leave them all enabled. Click Run audit. After 60 to 90 seconds, Lighthouse gives you a report on the page. Figure 2. A Lighthouse report in Chrome DevTools Install and run the Node command line tool To install the Node module: Download Google Chrome for Desktop. Install the current Long-Term Support version of Node. Install Lighthouse. The -g flag installs it as a global module. npm install -g lighthouse To run an audit: lighthouse <url> lighthouse --help

React learning steps [https://medium.com/free-code-camp/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6](https://medium.com/free-code-camp/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6)

## Best practices for reactjs

[https://medium.com/@konstankino/**2019**-reactjs-best-practices-design-patterns-516e1c3ca06a](https://medium.com/@konstankino/**2019**-reactjs-best-practices-design-patterns-516e1c3ca06a)

React libraries [https://blog.bitsrc.io/11-react-component-libraries-you-should-know-178eb1dd6aa4](https://blog.bitsrc.io/11-react-component-libraries-you-should-know-178eb1dd6aa4)

throw er // unhandled 'error' event  while running npm start [https://github.com/facebook/create-react-app/issues/**4227**](https://github.com/facebook/create-react-app/issues/**4227**) [https://stackoverflow.com/questions/**22475849**/node-js-what-is-enospc-error-and-how-to-solve/**32600959**#**32600959**](https://stackoverflow.com/questions/**22475849**/node-js-what-is-enospc-error-and-how-to-solve/**32600959**#**32600959**)

If else condition [https://react-cn.github.io/react/tips/if-else-in-**JSX**.html](https://react-cn.github.io/react/tips/if-else-in-**JSX**.html)

[https://riptutorial.com/reactjs/example/**28223**/stateless-functional-component](https://riptutorial.com/reactjs/example/**28223**/stateless-functional-component)

Routing [https://codeburst.io/getting-started-with-react-router-5c978f70df91](https://codeburst.io/getting-started-with-react-router-5c978f70df91) [https://tylermcginnis.com/react-router-programmatically-navigate/](https://tylermcginnis.com/react-router-programmatically-navigate/)

Reload window [https://stackoverflow.com/questions/**47201919**/how-to-reload-current-page-in-reactjs](https://stackoverflow.com/questions/**47201919**/how-to-reload-current-page-in-reactjs)

On error image [https://stackoverflow.com/questions/**34097560**/react-js-replace-img-src-onerror](https://stackoverflow.com/questions/**34097560**/react-js-replace-img-src-onerror)

Axios [https://[www.npmjs.com/package/axios](https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios))

ngModel [https://stackoverflow.com/questions/**43927144**/react-equivalent-to-ng-model](https://stackoverflow.com/questions/**43927144**/react-equivalent-to-ng-model)

ngIf [https://stackoverflow.com/questions/**32340051**/change-classes-to-an-element-with-react](https://stackoverflow.com/questions/**32340051**/change-classes-to-an-element-with-react) Deployment npm run build [https://stackoverflow.com/questions/**43830866**/what-is-npm-run-build-in-create-react-app](https://stackoverflow.com/questions/**43830866**/what-is-npm-run-build-in-create-react-app)

Reponsive carosel [https://[www.npmjs.com/package/react-responsive-carousel#demo](https://www.npmjs.com/package/react-responsive-carousel#demo](https://www.npmjs.com/package/react-responsive-carousel#demo](https://www.npmjs.com/package/react-responsive-carousel#demo))

React patterns [https://reactpatterns.com/#function-component](https://reactpatterns.com/#function-component)

## React Component Types

[https://medium.com/@thechrisbull/4-different-kinds-of-components-creating-a-react-ui-component-framework-saga-a-designer-9043c0cc597](https://medium.com/@thechrisbull/4-different-kinds-of-components-creating-a-react-ui-component-framework-saga-a-designer-9043c0cc597)

## React Difference between State and Props

[https://stackoverflow.com/questions/**27991366**/what-is-the-difference-between-state-and-props-in-react](https://stackoverflow.com/questions/**27991366**/what-is-the-difference-between-state-and-props-in-react)

[https://dev.to/guimg/differences-between-props-and-state-in-reactjs-1kic](https://dev.to/guimg/differences-between-props-and-state-in-reactjs-1kic)

## Reactjs-LifeCycle

[https://[www.geeksforgeeks.org/reactjs-lifecycle-components/](https://www.geeksforgeeks.org/reactjs-lifecycle-components/](https://www.geeksforgeeks.org/reactjs-lifecycle-components/](https://www.geeksforgeeks.org/reactjs-lifecycle-components/))

## How to better organize your React applications?

[https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

## Angular Directives Mapped to React

[https://daveceddia.com/angular-directives-mapped-to-react/](https://daveceddia.com/angular-directives-mapped-to-react/)

Vs code extention for react [https://fullstackengine.net/recommended-vscode-extensions-react/](https://fullstackengine.net/recommended-vscode-extensions-react/)

React for angular developers [https://[www.sitepoint.com/react-for-angular-developers/](https://www.sitepoint.com/react-for-angular-developers/](https://www.sitepoint.com/react-for-angular-developers/](https://www.sitepoint.com/react-for-angular-developers/))

## Infinite Scroll

[https://github.com/CassetteRocks/react-infinite-scroller/issues/**143**](https://github.com/CassetteRocks/react-infinite-scroller/issues/**143**)

Why react? [https://stories.jotform.com/7-reasons-why-you-should-use-react-ad420c634247](https://stories.jotform.com/7-reasons-why-you-should-use-react-ad420c634247)

Css file move to assets folder	
React project deployment
[https://[www.youtube.com/watch?v=ji6urVl6oP4](https://www.youtube.com/watch?v=ji6urVl6oP4](https://www.youtube.com/watch?v=ji6urVl6oP4](https://www.youtube.com/watch?v=ji6urVl6oP4))

React developer tool chrome extention [https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en)

React reference [https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

Angular react [https://appinventiv.com/blog/react-vs-angular/](https://appinventiv.com/blog/react-vs-angular/)

Api Error handling in react [https://gist.github.com/odewahn/5a5eeb23279eed6a80d7798fdb47fe91](https://gist.github.com/odewahn/5a5eeb23279eed6a80d7798fdb47fe91)

## Two way databinding in react

[https://reactgo.com/two-way-data-binding-react/](https://reactgo.com/two-way-data-binding-react/)

## Redux

[https://daveceddia.com/redux-tutorial/](https://daveceddia.com/redux-tutorial/) [https://egghead.io/lessons/react-redux-react-counter-example](https://egghead.io/lessons/react-redux-react-counter-example) [https://[www.techomoro.com/how-to-build-a-simple-counter-app-using-react-and-redux/](https://www.techomoro.com/how-to-build-a-simple-counter-app-using-react-and-redux/](https://www.techomoro.com/how-to-build-a-simple-counter-app-using-react-and-redux/](https://www.techomoro.com/how-to-build-a-simple-counter-app-using-react-and-redux/))

## DataFlow for React-Redux

[https://[www.techomoro.com/wp-content/uploads/**2018**/12/Untitled-1.jpg](https://www.techomoro.com/wp-content/uploads/**2018**/12/Untitled-1.jpg](https://www.techomoro.com/wp-content/uploads/**2018**/12/Untitled-1.jpg](https://www.techomoro.com/wp-content/uploads/**2018**/12/Untitled-1.jpg))

[https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/](https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/) [https://redux.js.org/introduction/getting-started](https://redux.js.org/introduction/getting-started)

## Redux actions

1. [https://redux.js.org/basics/actions](https://redux.js.org/basics/actions)

## Redux api call

1.[https://stackoverflow.com/questions/**38728884**/how-to-properly-make-rest-calls-from-reactjs-redux-application](https://stackoverflow.com/questions/**38728884**/how-to-properly-make-rest-calls-from-reactjs-redux-application)

## How to update state in reducer 

[https://[www.youtube.com/watch?v=**BWN**-9bF51BU](https://www.youtube.com/watch?v=**BWN**-9bF51BU](https://www.youtube.com/watch?v=**BWN**-9bF51BU](https://www.youtube.com/watch?v=**BWN**-9bF51BU))

[https://stackoverflow.com/questions/**35628774**/how-to-update-single-value-inside-specific-array-item-in-redux](https://stackoverflow.com/questions/**35628774**/how-to-update-single-value-inside-specific-array-item-in-redux) ## Upload images in reactjs [https://[www.academind.com/learn/react/snippets/image-upload/](https://www.academind.com/learn/react/snippets/image-upload/](https://www.academind.com/learn/react/snippets/image-upload/](https://www.academind.com/learn/react/snippets/image-upload/))

## Push notifications using reactjs

[https://medium.com/@akshaypts/magic-mix-of-react-web-app-and-push-notification-using-fcm-bad4191a4987](https://medium.com/@akshaypts/magic-mix-of-react-web-app-and-push-notification-using-fcm-bad4191a4987)

[https://hackernoon.com/integrating-push-notifications-in-your-react-web-app-cra-22d3010392e](https://hackernoon.com/integrating-push-notifications-in-your-react-web-app-cra-22d3010392e)

## Progressive web app

[https://codebrahma.com/building-progressive-web-app-react/](https://codebrahma.com/building-progressive-web-app-react/)

## In serviceWorker.js file add some code

[https://codebrahma.com/building-progressive-web-app-react/](https://codebrahma.com/building-progressive-web-app-react/)

[https://blog.usejournal.com/developing-our-first-pwa-using-react-f75c9e9c9b43](https://blog.usejournal.com/developing-our-first-pwa-using-react-f75c9e9c9b43)

[https://egghead.io/lessons/react-course-introduction-progressive-web-apps-in-react-with-create-react-app](https://egghead.io/lessons/react-course-introduction-progressive-web-apps-in-react-with-create-react-app)

[https://karannagupta.com/using-custom-workbox-service-workers-with-create-react-app/](https://karannagupta.com/using-custom-workbox-service-workers-with-create-react-app/)

## Steps for making progressive webapp

Serve over **HTTPS**. ... Create an application shell. ... Register a service worker. ... Add push notifications. ... Add a web app manifest. ... Configure the install prompt. ... Analyse your app's performance. ... Audit your app with Lighthouse.

## Reactnative Lifecycle

[https://blog.usejournal.com/understanding-react-native-component-lifecycle-api-d78e06870c6d](https://blog.usejournal.com/understanding-react-native-component-lifecycle-api-d78e06870c6d)

[https://[www.tutorialspoint.com/react_native/react_native_http.htm](https://www.tutorialspoint.com/react_native/react_native_http.htm](https://www.tutorialspoint.com/react_native/react_native_http.htm](https://www.tutorialspoint.com/react_native/react_native_http.htm))

[http://[www.techup.co.in/react-native-life-cycle/](http://www.techup.co.in/react-native-life-cycle/](https://www.techup.co.in/react-native-life-cycle/](http://www.techup.co.in/react-native-life-cycle/))

## React native project-structure

[https://[www.reactnative.guide/5-project-structure-and-start-building-some-app/5.0-intro.html](https://www.reactnative.guide/5-project-structure-and-start-building-some-app/5.0-intro.html](https://www.reactnative.guide/5-project-structure-and-start-building-some-app/5.0-intro.html](https://www.reactnative.guide/5-project-structure-and-start-building-some-app/5.0-intro.html))

## React Native getting started

[https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)

[https://react-native-training.github.io/react-native-elements/docs/0.19.1/getting_started.html](https://react-native-training.github.io/react-native-elements/docs/0.19.1/getting_started.html)

## ReactNative redux example

[https://appdividend.com/**2018**/08/04/react-native-redux-example-tutorial/](https://appdividend.com/**2018**/08/04/react-native-redux-example-tutorial/)

[https://stackoverflow.com/questions/**35973914**/can-react-native-apps-be-tested-in-a-browser](https://stackoverflow.com/questions/**35973914**/can-react-native-apps-be-tested-in-a-browser)

## How to sync with mobile reactnativeapp

[https://[www.c-sharpcorner.com/article/create-hello-world-applicationusing-react-native/](https://www.c-sharpcorner.com/article/create-hello-world-applicationusing-react-native/](https://www.c-sharpcorner.com/article/create-hello-world-applicationusing-react-native/](https://www.c-sharpcorner.com/article/create-hello-world-applicationusing-react-native/))

[https://stackoverflow.com/questions/**44037361**/cannot-find-entry-file-index-js-with-expo-xde](https://stackoverflow.com/questions/**44037361**/cannot-find-entry-file-index-js-with-expo-xde)

Working create-react-app command : react-native init reactnativeapp

Bestpractices for Reactnative           : [https://medium.com/react-native-training/best-practices-for-creating-react-native-apps-part-1-66311c746df3](https://medium.com/react-native-training/best-practices-for-creating-react-native-apps-part-1-66311c746df3) ## Fetchingdata with redux [https://stackoverflow.com/questions/**48178468**/fetching-data-from-api-in-react-native-using-redux](https://stackoverflow.com/questions/**48178468**/fetching-data-from-api-in-react-native-using-redux)

## Integrating react-nativeapp 

[https://medium.com/mindorks/react-native-integration-with-existing-app-f2757c2e672d](https://medium.com/mindorks/react-native-integration-with-existing-app-f2757c2e672d)

[http://[www.techup.co.in/integrating-react-native-with-existing-android-app/](http://www.techup.co.in/integrating-react-native-with-existing-android-app/](https://www.techup.co.in/integrating-react-native-with-existing-android-app/](http://www.techup.co.in/integrating-react-native-with-existing-android-app/))

[http://[www.techup.co.in/integrating-react-native-with-existing-android-app/](http://www.techup.co.in/integrating-react-native-with-existing-android-app/](https://www.techup.co.in/integrating-react-native-with-existing-android-app/](http://www.techup.co.in/integrating-react-native-with-existing-android-app/))

[https://programmablebusiness.com/integrating-react-native-app-in-an-existing-ios-native-app-part-1-ac4751ca999b](https://programmablebusiness.com/integrating-react-native-app-in-an-existing-ios-native-app-part-1-ac4751ca999b)

[https://facebook.github.io/react-native/docs/integration-with-existing-apps.html](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html)

## Communicating between nativ and react-native

[https://facebook.github.io/react-native/docs/communication-ios](https://facebook.github.io/react-native/docs/communication-ios) [https://medium.com/@bogdan.bolchis/integrating-react-native-with-an-existing-ios-app-ce6f68e55e13](https://medium.com/@bogdan.bolchis/integrating-react-native-with-an-existing-ios-app-ce6f68e55e13)

## Problems for reactnative project integrate to native project

1.The main drawback of cross-language properties is that they do not support callbacks

## Custom navgation tab

[https://dev.to/hrastnik/lets-create-a-custom-animated-tab-bar-with-react-native-**3496**](https://dev.to/hrastnik/lets-create-a-custom-animated-tab-bar-with-react-native-**3496**)

## Splash screen react-native

[http://[www.techup.co.in/react-native-splash-screen-example-using-react-navigation/](http://www.techup.co.in/react-native-splash-screen-example-using-react-navigation/](https://www.techup.co.in/react-native-splash-screen-example-using-react-navigation/](http://www.techup.co.in/react-native-splash-screen-example-using-react-navigation/)) Linking Libraries : [https://facebook.github.io/react-native/docs/linking-libraries-ios](https://facebook.github.io/react-native/docs/linking-libraries-ios) [https://medium.com/salamcinema/react-native-step-by-step-guide-to-create-a-to-do-app-9fc8b95554f7](https://medium.com/salamcinema/react-native-step-by-step-guide-to-create-a-to-do-app-9fc8b95554f7)

## Enable Hot Reloader in ios and android using react-native

[https://dev.to/skptricks/enable-hot-reloading-in-react-native-1pe0](https://dev.to/skptricks/enable-hot-reloading-in-react-native-1pe0)

## ReactNative tutorials

[https://[www.skptricks.com/search/label/React%20Native](https://www.skptricks.com/search/label/React%20Native](https://www.skptricks.com/search/label/React%20Native](https://www.skptricks.com/search/label/React%20Native))

## Reactjs higher order component

[https://codepen.io/datchley/pen/xRgdKL?editors=**0010**](https://codepen.io/datchley/pen/xRgdKL?editors=**0010**) [https://gist.github.com/datchley/4e0d05c526d532d1b05bf9b48b174faf#table-of-contents](https://gist.github.com/datchley/4e0d05c526d532d1b05bf9b48b174faf#table-of-contents)

Step 1 : ssh root@**206**.**189**.**137**.**191**

server cd  /usr/share/nginx Remove rm -rf html/* Folder file delete rm -rf reporter-analytics/*

## Use case of facebook messenger chatbot

Save Time. One of the great benefits of using chatbots in your business is that they save time. ...

Save Money. Chatbot use can be cheaper than hiring more workers. ... Provide Greater Customer Satisfaction. ... Increase Customer Base. ... ### Automated Customer Support For Similar Queries ### Improves Business Branding With Minimum Effort ### Chatbot Development Requires Less Time Chatbots Development Cost is Cheap 24/7 customer service. Facebook chatbots are live at all hours of the day and send near-instant responses to user inquiries. ...

## Call a function in parent component from child component

[https://ourcodeworld.com/articles/read/**327**/how-to-execute-child-component-function-from-the-parent-component-in-react](https://ourcodeworld.com/articles/read/**327**/how-to-execute-child-component-function-from-the-parent-component-in-react)

## React-Redux bestpractices

Avoid having large classes, methods or components, including Reducers. Use conditional rendering. Name your event handlers with handle prefixes, such as `handleClick()` or `handleUpdate()` Use **ES6** de-structuring for your props. Ex: const { firstName, lastName, email, doSomethingAmazing } = this.props; Always use a dependency manager with a lock file, such as **NPM** or yarn. Use partial components, such as `<>` … `</>` DataFlow for redux : [https://lh3.googleusercontent.com/eG5jgDqCxPhW5yCpx1g7oyJGD6ZNGyjR7uolGBRqqCjLhyM6u8hIvA21m9-K-qKja3TK0g=s170](https://lh3.googleusercontent.com/eG5jgDqCxPhW5yCpx1g7oyJGD6ZNGyjR7uolGBRqqCjLhyM6u8hIvA21m9-K-qKja3TK0g=s170) [https://lh3.googleusercontent.com/SgFcDe_BU8vV5KOcHHwyAFBCQnTsMo-oQD3hCzi9ifBydnRGqND___u9xuF_exTinPHSiw=s105](https://lh3.googleusercontent.com/SgFcDe_BU8vV5KOcHHwyAFBCQnTsMo-oQD3hCzi9ifBydnRGqND___u9xuF_exTinPHSiw=s105) When to use store.dispatch() in my React / Redux app? [https://stackoverflow.com/questions/**44749723**/when-to-use-store-dispatch-in-my-react-redux-app](https://stackoverflow.com/questions/**44749723**/when-to-use-store-dispatch-in-my-react-redux-app) [https://medium.com/@konstankino/**2019**-reactjs-best-practices-design-patterns-516e1c3ca06a](https://medium.com/@konstankino/**2019**-reactjs-best-practices-design-patterns-516e1c3ca06a) [https://blog.bam.tech/developper-news/4-ways-to-dispatch-actions-with-redux](https://blog.bam.tech/developper-news/4-ways-to-dispatch-actions-with-redux)

# auto matic reload

[https://stackoverflow.com/questions/**55402751**/angular-app-has-to-clear-cache-after-new-deployment](https://stackoverflow.com/questions/**55402751**/angular-app-has-to-clear-cache-after-new-deployment) [https://medium.com/pixelpoint/best-practices-for-cache-control-settings-for-your-website-ff262b38c5a2](https://medium.com/pixelpoint/best-practices-for-cache-control-settings-for-your-website-ff262b38c5a2) [https://stackoverflow.com/questions/**49267451**/is-angular-clis-output-hashing-always-supposed-to-work-with-lazily-loaded-mod](https://stackoverflow.com/questions/**49267451**/is-angular-clis-output-hashing-always-supposed-to-work-with-lazily-loaded-mod)

# Amp

Create a basic **AMP** page Create your first **AMP** page. Follow the Google Search guidelines for **AMP** pages. Make your content discoverable by linking your pages. For crawling and indexing, Google Search requires that an **AMP** page links to a canonical page. The canonical page can be either a non-**AMP** version of the page or it can be the **AMP** page itself. For more information, see the What's in an **AMP** **URL**? developer blog post. Ensure that users can experience the same content and complete the same actions on **AMP** pages as on the corresponding canonical pages, where possible. Use the **AMP** Test Tool to ensure that your page meets the Google Search requirements for a valid **AMP** **HTML** document. Use the same structured data markup across both the canonical and **AMP** pages. Apply common content best practices: Make sure that your robots.txt file doesn't block your **AMP** page. Use the meta robots noindex, block indexing, and robots meta tags. Follow the guidelines for hreflang for language and regional URLs. For Your The <style amp-boilerplate> tag initially hides the content of the body until the **AMP** JavaScript library is loaded, then the content is rendered. Exclude third-party JavaScript An **AMP** Cache is a proxy-based content delivery network (**CDN**) for delivering valid **AMP** documents. **AMP** Caches are designed to:

Serve only valid **AMP** pages. Allow **AMP** pages to be preloaded efficiently and safely. Perform additional user-beneficial performance optimizations to content.

What **AMP** Caches are available? Currently, there are two **AMP** Cache providers:

Google **AMP** Cache Bing **AMP** Cache General guidelines For all canonicalization methods, follow these general guidelines. General guidelines Don't use the robots.txt file for canonicalization purposes. Don't use the **URL** removal tool for canonicalization: it removes all versions of a **URL** from search. Don't specify different URLs as canonical for the same page using the same or different canonicalization techniques (for example, don't specify one **URL** in a sitemap but a different **URL** for that same page using rel=*canonical*). Don't use noindex as a means to prevent selection of a canonical page. This directive is intended to exclude the page from the index, not to manage the choice of a canonical page. Do specify a canonical page when using hreflang tags. Specify a canonical page in same language, or the best possible substitute language if a canonical doesn't exist for the same language. Do link to the canonical **URL** rather than a duplicate **URL**, when linking within your site. Linking consistently to the **URL** that you consider to be canonical helps Google understand your preference. Prefer **HTTPS** over **HTTP** for canonical URLs Google prefers **HTTPS** pages over equivalent **HTTP** pages as canonical, except when there are issues or conflicting signals such as the following: The **HTTPS** page has an invalid **SSL** certificate. The **HTTPS** page contains insecure dependencies (other than images). The **HTTPS** page redirects users to or through an **HTTP** page. The **HTTPS** page has a rel=*canonical* link to the **HTTP** page. Although our systems prefer **HTTPS** pages over **HTTP** pages by default, you can ensure this behavior by taking any of the following actions: Add redirects from the **HTTP** page to the **HTTPS** page. Add a rel=*canonical* link from the **HTTP** page to the **HTTPS** page. Implement **HSTS**. To prevent Google from incorrectly making the **HTTP** page canonical, you should avoid the following practices: Bad **SSL** certificates and **HTTPS**-to-**HTTP** redirects cause us to prefer **HTTP** very strongly. Implementing **HSTS** cannot override this strong preference. Including the **HTTP** page in your sitemap or hreflang entries rather than the **HTTPS** version. Implementing your **SSL**/**TLS** certificate for the wrong host-variant: for example, example.com serving the certificate for [www.example.com.](https://www.example.com.)  The certificate must match your complete site **URL**, or be a wildcard certificate that can be used for multiple subdomains on a domain. Advanced users only: Tell Google to ignore dynamic parameters Use Parameter Handling to tell Googlebot about any parameters that should be ignored when crawling. Ignoring certain parameters can reduce duplicate content in Google's index and make your site more crawlable. For example, if you specify that the parameter sessionid should be ignored, Googlebot will consider the following two URLs as duplicates: [https://[www.example.com/dresses/green.php?sessionid=**273749**](https://www.example.com/dresses/green.php?sessionid=**273749**](https://www.example.com/dresses/green.php?sessionid=**273749**](https://www.example.com/dresses/green.php?sessionid=**273749**)) [https://[www.example.com/dresses/green.php](https://www.example.com/dresses/green.php](https://www.example.com/dresses/green.php](https://www.example.com/dresses/green.php)) Cache guidelines An **AMP** Cache only serves valid **AMP** input documents. It participates in the **AMP** validator release cycle. It participates in the **AMP** JS library release cycle and makes every effort to serve the latest version. It does not allow sites to perform version locking. It serves each site from a subdomain of the cache domain. See for example: the Google **AMP** Cache **URL** format. Pledges to maintain **URL** space forever (even beyond the lifetime of the cache itself): This can be achieved by donating the **URL** space to a trustworthy third party entity such as archive.org. This means that, should a cache decide to no longer operate, URLs should redirect to the origin **URL** or be served by another cache. Uses **HTTPS** serving only. Serves a strong Content Security Policy (**CSP**) - a **CSP** defines a mechanism by which web developers can control the resources which a particular page can fetch or execute, as well as a number of security-relevant policy decisions. Implements separately documented security rewrites on served content. The **CSP** should be equivalent or stronger to what is being served on cdn.ampproject.org. Caches must update their **CSP** in a timely fashion (within 7 days) at the request of the **AMP**. Supports a public Update Cache mechanism for document publishers to notify the **AMP** cache about new, updated or deleted documents: Equivalent to the Google **AMP** Update Cache **API** Supports a public **AMP** Cache **URL** **API**: Equivalent to the Google **AMP** Cache **URL** **API** Provides a faithful visual and UX reproduction of source document. E.g. changes in image resolution or compression rate may be acceptable if they provide strong benefits in terms of bandwidth usage and load time. No obstruction of the contents, branding or attribution of the original **AMP** document. No changes to ads, monetization, access (paywall monetization and similar), analytics, or similar. Respects all resource deletions within a reasonable timeframe. Uses a stale-while-revalidate caching model and reasonable min cache time (such as in the order of single digit minutes) is allowed. For example, as per Google **AMP** Cache updates, "[the cache] uses the origin's caching headers, such as Max-Age, as hints in deciding whether a particular document or resource is stale. When a user makes a request for something that is stale, that request causes a new copy to be fetched, so that the next user gets fresh content": The cache is allowed to serve stale content independent of **HTTP** caching headers. It must make reasonable efforts to keep the cache contents fresh and must revalidate content after serving stale responses. Follows **AMP** cache modifications best practices.

**AMP** Cache **URL** Format and Request Handling [https://amp-dev.cdn.ampproject.org/c/s/amp.dev/index.amp.html](https://amp-dev.cdn.ampproject.org/c/s/amp.dev/index.amp.html) The converted **AMP** Cache **URL** consists of the following parts: amp-dev: the publisher domain converted into a subdomain using the algorithm described above. cdn.ampproject.org: the **AMP** Cache domain. c: to indicate that it's an **AMP** document (there is also i for image and r for resources such as fonts). s: indicating that the **AMP** Cache fetches the content from the origin using **TLS** (secure **HTTPS**). amp-dev.com/index.amp.html: the original **URL** excluding the scheme. refUrls [https://github.com/ampproject/amphtml](https://github.com/ampproject/amphtml) [https://amp.dev/documentation/components/](https://amp.dev/documentation/components/) [https://developers.google.com/search/docs/guides/sd-policies](https://developers.google.com/search/docs/guides/sd-policies) [https://developers.google.com/search/docs/data-types/article#article_types](https://developers.google.com/search/docs/data-types/article#article_types) [https://developers.google.com/search/docs/guides/about-amp](https://developers.google.com/search/docs/guides/about-amp) [https://support.google.com/news/producer/answer/**6204050**](https://support.google.com/news/producer/answer/**6204050**) [https://amp.dev/documentation/guides-and-tutorials/start/add_advanced/tracking_data/?format=websites](https://amp.dev/documentation/guides-and-tutorials/start/add_advanced/tracking_data/?format=websites) [https://github.com/ampproject/amphtml/blob/master/spec/amp-html-format.md](https://github.com/ampproject/amphtml/blob/master/spec/amp-html-format.md) [https://developers.google.com/amp/cache/overview#amp-cache-url-format](https://developers.google.com/amp/cache/overview#amp-cache-url-format) [https://github.com/ampproject/amphtml/blob/master/spec/amp-cache-modifications.md](https://github.com/ampproject/amphtml/blob/master/spec/amp-cache-modifications.md) [https://github.com/ampproject/amphtml/blob/master/spec/amp-cache-guidelines.md](https://github.com/ampproject/amphtml/blob/master/spec/amp-cache-guidelines.md)

Templates [https://[www.elgrupoinformatico.com/amp/k40-k50-q60-son-oficiales-conoce-todos-los-detalles-t72697.html](https://www.elgrupoinformatico.com/amp/k40-k50-q60-son-oficiales-conoce-todos-los-detalles-t72697.html](https://www.elgrupoinformatico.com/amp/k40-k50-q60-son-oficiales-conoce-todos-los-detalles-t72697.html](https://www.elgrupoinformatico.com/amp/k40-k50-q60-son-oficiales-conoce-todos-los-detalles-t72697.html)) Tools [https://search.google.com/structured-data/testing-tool#url=https%3A%2F%2Famp.dev%2Fabout%2Fhow-amp-works%2F%3Freferrer%3Dampproject.org](https://search.google.com/structured-data/testing-tool#url=https%3A%2F%2Famp.dev%2Fabout%2Fhow-amp-works%2F%3Freferrer%3Dampproject.org) [https://validator.ampproject.org/](https://validator.ampproject.org/) [https://search.google.com/test/amp](https://search.google.com/test/amp)

# Used to websites stories,ads,emails

# Social discovery [https://developers.google.com/web/fundamentals/discovery/social-discovery/](https://developers.google.com/web/fundamentals/discovery/social-discovery/)

# External css

currently there is no support for external css in Accelerated mobile pages. Although you can use inline css which was not allowed earlier. So you have to compromise with the css.

# Prepare your page for discovery and distribution

Add the following to the non-**AMP** page: <link rel=*amphtml* href=*[https://[www.example.com/url/to/amp/document.html*>](https://www.example.com/url/to/amp/document.html">](https://www.example.com/url/to/amp/document.html">](https://www.example.com/url/to/amp/document.html*>)) And this to the **AMP** page: <link rel=*canonical* href=*[https://[www.example.com/url/to/full/document.html">](https://www.example.com/url/to/full/document.html">](https://www.example.com/url/to/full/document.html">](https://www.example.com/url/to/full/document.html*>))

One amp page <link rel=*canonical* href=*[https://[www.example.com/url/to/amp/document.html">](https://www.example.com/url/to/amp/document.html">](https://www.example.com/url/to/amp/document.html">](https://www.example.com/url/to/amp/document.html">))

# Add structured data

<script application/ld+json>-------</script>

# Preview and validate

Open your page in your browser. Add *#development=1* to the **URL**, for example, [http://localhost:**8000**/released.amp.html#development=1.](http://localhost:**8000**/released.amp.html#development=1.) Open the Chrome DevTools console and check for validation errors

# Validating error

Specify the amp attribute <html ⚡ lang=*en*> or  <html amp lang=*en*>

# Making your page discoverable

Validate the structured data Google Structured Data Validation Tool.

# Anaylitics

[https://developers.google.com/analytics/devguides/collection/amp-analytics/](https://developers.google.com/analytics/devguides/collection/amp-analytics/) Tracking anaylitics [https://amp.dev/documentation/guides-and-tutorials/start/add_advanced/tracking_data/?format=websites](https://amp.dev/documentation/guides-and-tutorials/start/add_advanced/tracking_data/?format=websites)

Traking the google anaytics

# Amp spectification

Boilaplate code Html specification [https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/?format=websites](https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/?format=websites) Links The javascript: schema is disallowed. Important Usage of the !important qualifier is not allowed. Properties **AMP** only allows transitions and animations of properties that can be **GPU** accelerated in common browsers. We currently white list: opacity, transform (also -vendorPrefix-transform). Maximum size It is a validation error if the author stylesheet or inline styles together are larger than 50,**000** bytes.

# Validaiton workflow

Append *#development=[1,actions,amp,amp4ads,amp4email]*

# Amp components

[https://amp.dev/documentation/components/amp-next-page/?format=websites](https://amp.dev/documentation/components/amp-next-page/?format=websites)

# Amp cahes and cors

Platform discovery: Platforms discover your **AMP** content via the <html ⚡> or <html amp> tag and cache the content. For example, Google Search crawls content; for any identified and valid **AMP** pages, the content is added to the Google **AMP** Cache.

Cache **URL** request: Platforms can specifically request an **AMP** page by using the **AMP** Cache **URL** format. The **AMP** Cache acts as a reverse proxy, therefore, when the platform accesses the page, it results in the page being cached automatically.

Cloudflare **AMP** Cache **URL** example: [https://amp.cloudflare.com/c/foo.com/amp_document.html](https://amp.cloudflare.com/c/foo.com/amp_document.html) Google **AMP** Cache **URL** example: [https://foo-com.cdn.ampproject.org/c/s/foo.com/amp_document.html](https://foo-com.cdn.ampproject.org/c/s/foo.com/amp_document.html)

# AMP Cache URL Format and Request Handling

[https://amp-dev.cdn.ampproject.org/c/s/amp.dev/index.amp.html](https://amp-dev.cdn.ampproject.org/c/s/amp.dev/index.amp.html) The converted **AMP** Cache **URL** consists of the following parts: amp-dev: the publisher domain converted into a subdomain using the algorithm described above. cdn.ampproject.org: the **AMP** Cache domain. c: to indicate that it's an **AMP** document (there is also i for image and r for resources such as fonts). s: indicating that the **AMP** Cache fetches the content from the origin using **TLS** (secure **HTTPS**). amp-dev.com/index.amp.html: the original **URL** excluding the scheme.

# CORD in AMP

**AMP** components that fetch dynamic data (e.g., amp-form, amp-list, etc.) make **CORS** requests to remote endpoints to retrieve the data. If your **AMP** page includes such components, you'll need to handle **CORS** so that those requests do not fail.

Google Search uses the Google **AMP** Cache to render **AMP** pages quickly; these are cached pages that are served from the Google **AMP** Cache, which is a differentdomain. When your user clicks the button to update the prices on your page, the cached **AMP** page sends a request to your origin domain to get the prices, which is a mismatch between origins (cache -> origin domain). To allow for such cross-origin requests, you need to handle **CORS**, otherwise, the request fails.

# Utilizing cookies for CORS requests

Most **AMP** components that use **CORS** requests either automatically set the credentials mode or allow the author to optionally enable it. For example, the amp-list component fetches dynamic content from a **CORS** **JSON** endpoint, and allows the author to set the credential mode through the credentials attribute.

# Serve only valid AMP pages.

Allow **AMP** pages to be preloaded efficiently and safely. Perform additional user-beneficial performance optimizations to content.

# What AMP Caches are available?

Currently, there are two **AMP** Cache providers:

Google **AMP** Cache Bing **AMP** Cache

# Who requests cached AMP pages?

Cached **AMP** pages are accessed by platforms (like Google Search, Google News, and Bing) and mobile apps. Mobile apps can link to cached **AMP** content via the U

Caching is a core part of the **AMP** ecosystem. Publishing a valid **AMP** document automatically opts it into cache delivery.

# cache guidlines

[https://github.com/ampproject/amphtml/blob/master/spec/amp-cache-guidelines.md](https://github.com/ampproject/amphtml/blob/master/spec/amp-cache-guidelines.md)

# Add custom fonts

Typography.com: [https://cloud.typography.com](https://cloud.typography.com) Fonts.com: [https://fast.fonts.net](https://fast.fonts.net) Google Fonts: [https://fonts.googleapis.com](https://fonts.googleapis.com) Typekit: [https://use.typekit.net](https://use.typekit.net) Font Awesome: [https://maxcdn.bootstrapcdn.com,](https://maxcdn.bootstrapcdn.com,) [https://use.fontawesome.com](https://use.fontawesome.com)

## Using @font-face

Alternatively, you can use @font-face within your **AMP** stylesheet:

<style amp-custom>
    @font-face {
    font-family: *Bitstream Vera Serif Bold*;
    src: url(*[https://somedomain.org/VeraSeBd.ttf*](https://somedomain.org/VeraSeBd.ttf"));
    }

# Include custom JavaScript in AMP pages

[https://amp.dev/documentation/guides-and-tutorials/develop/custom-javascript/?format=websites](https://amp.dev/documentation/guides-and-tutorials/develop/custom-javascript/?format=websites) [https://amp.dev/documentation/guides-and-tutorials/develop/custom-javascript-tutorial/?format=websites](https://amp.dev/documentation/guides-and-tutorials/develop/custom-javascript-tutorial/?format=websites)

<html ⚡>
<head>
    ...
    <script async custom-element=*amp-script* src=*[https://cdn.ampproject.org/v0/amp-script-0.1.js*></script>](https://cdn.ampproject.org/v0/amp-script-0.1.js*></script>)
<body>  
    ...
    <amp-script layout=*container* src=*[https://example.com/myfile.js*>](https://example.com/myfile.js*>)
    <p>Initial content that can be modified from JavaScript</p>
    </amp-script>
    ...
</body>
</html>

# Event triggers

All event triggers are allowed.

# API restrictions

Some synchronous methods are disallowed in <amp-script> and replaced with alternatives, such as Element.getBoundingClientRect()). Because Element.getBoundingClientRect() could not be implemented in a Web Worker, an async alternative to it, getBoundingClientRectAsync(), is provided. getBoundingClientRectAsync() returns a Promise instead of returning the result directly.

# publishing test

[https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/publishing_checklist/?format=websites](https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/publishing_checklist/?format=websites)

# offline access

Easy offline access and improved performance [https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/amp-as-pwa/?format=websites](https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/amp-as-pwa/?format=websites)

# server side rendering

[https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/server-side-rendering/?format=websites](https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/server-side-rendering/?format=websites)

secure from third party attacks

# Implement AMP’s CSP

Implement a **CSP** by adding the appropriate meta tag to the head of your pages. Below is **AMP**’s **CSP**, allowing only **AMP** scripts to be injected into your page:

<meta http-equiv=*Content-Security-Policy* content="default-src * data: blob:; script-

# amp gproject uidlines

[https://github.com/ampproject/amphtml](https://github.com/ampproject/amphtml)
