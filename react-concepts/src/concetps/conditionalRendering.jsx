Rendering Content Conditionally in React

1. Using `if-else` Statement
This is the most basic way to conditionally render components.

jsx
function App() {
    const isLoggedIn = true;
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    } else {
        return <h1>Please log in.</h1>;
    }
}


2. Using Ternary Operator
A compact way to render content based on a condition.

jsx
function App() {
    const isLoggedIn = false;

    return (
        <div>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
        </div>
    );
}


3. Using `&&` (Logical AND Operator)
Render content only when a condition is true.

jsx
function App() {
    const showMessage = true;

    return (
        <div>
            {showMessage && <p>This is a conditional message.</p>}
        </div>
    );
}


4. Using `||` (Logical OR Operator)
Render fallback content when the main condition is false.

jsx
function App() {
    const user = null;

    return (
        <div>
            <p>{user || "Guest"}</p>
        </div>
    );
}




5. Using Immediately Invoked Function Expression (IIFE)
For complex logic before rendering.

jsx
function App() {
    const isLoggedIn = true;

    return (
        <div>
            {(() => {
                if (isLoggedIn) {
                    return <h1>Welcome back!</h1>;
                } else {
                    return <h1>Please log in.</h1>;
                }
            })()}
        </div>
    );
}

6. Using `switch` Statement
Useful for multiple conditions.

jsx
function App() {
    const userRole = "admin";

    let content;
    switch (userRole) {
        case "admin":
            content = <h1>Welcome, Admin!</h1>;
            break;
        case "user":
            content = <h1>Welcome, User!</h1>;
            break;
        default:
            content = <h1>Welcome, Guest!</h1>;
    }

    return <div>{content}</div>;
}

7. Inline Function
Call a function to determine what to render.

jsx
function App() {
    const isLoggedIn = false;

    const renderMessage = () => {
        return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
    };

    return <div>{renderMessage()}</div>;
}

8. Conditional Rendering with Arrays
Conditionally include components in an array and render them.

function App() {
    const items = [true && <p key="1">Item 1</p>, false && <p key="2">Item 2</p>];
    return <div>{items}</div>;
}

9. CSS Class-Based Conditional Rendering
Apply conditional styling to change content visibility.
function App() {
    const isHidden = true;

    return (
        <div>
            <p className={isHidden ? "hidden" : "visible"}>This is a paragraph.</p>
        </div>
    );
}


css
.hidden {
    display: none;
}
.visible {
    display: block;
}




10. React Fragments for Conditional Wrapping
Render multiple elements conditionally without extra `<div>` tags.

jsx
function App() {
    const showContent = true;

    return (
        <>
            {showContent ? <p>Content is visible</p> : <p>Content is hidden</p>}
        </>
    );
}

Summary
- Use `if-else` or `switch` for readable and structured logic.
- Use `&&` or ternary for concise and inline conditions.
- Choose the approach based on complexity and readability requirements.
