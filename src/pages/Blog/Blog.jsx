import React from 'react';

const Blog = () => {
    return (
        <div className='mt-4 bg-slate-200 pb-20'>
            <h1 className='text-xl font-bold text-center underline decoration-violet-800 decoration-2 underline-offset-4 mb-14 pt-12'>Questions and Answers</h1>
            <div className='mx-24'>
                <span className='text-lg font-semibold bg-violet-200 drop-shadow-md p-2 my-6 rounded-lg text-violet-900'>Q-1: When should you use context API?</span>
                <div className='my-4 bg-pink-200 sm:mx-auto md:mx-0 rounded-lg p-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l text-white'>The Context API is a feature in React that allows us to share data between components without the need to pass props down through multiple levels of the component tree. The Context API is a useful tool for managing global state in our React applications and should be used when we need to share data between components at different levels of the component tree or when we need a centralized state management solution.

                </div>
                <br />
                <span className='text-lg font-semibold bg-violet-200 drop-shadow-md p-2 my-6 rounded-lg text-violet-900'>Q-2: What is a custom hook?</span>
                <div className='my-4 bg-pink-200 sm:mx-auto md:mx-0 rounded-lg p-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l text-white'>
                    A custom hook is a JavaScript function in React that uses one or more built-in hooks to encapsulate a piece of reusable functionality. Custom hooks allow us to extract component logic into reusable functions, which can be shared across multiple components or even across multiple projects.
                    <br />
                    Custom hooks follow a naming convention of using the prefix "use" in their name, such as "useForm" or "useFetch". They are defined just like any other JavaScript function, but they must call at least one of the built-in hooks such as useState, useEffect, useContext, or useReducer.
                    <br />
                    For example, a custom hook could encapsulate the logic for fetching data from an API endpoint and returning the data to a component. The hook could use the built-in useEffect hook to handle the asynchronous fetch and the useState hook to manage the loading and error states. This custom hook can then be reused in multiple components throughout the application to handle API calls.
                    <br />
                    Custom hooks allow for cleaner and more reusable code by extracting component logic into separate functions that can be reused across components. They also promote code organization and can make testing components easier by isolating component logic.
                </div>
                <br />
                <span className='text-lg font-semibold bg-violet-200 drop-shadow-md p-2 my-6 rounded-lg text-violet-900'>Q-3: What is useRef?</span>
                <div className='my-4 bg-pink-200 sm:mx-auto md:mx-0 rounded-lg p-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l text-white'>
                    useRef is a built-in hook in React that provides a way to create a mutable reference to a DOM element or a value that persists across component renders. useRef returns a JavaScript object with a current property that is initialized to the passed value or null if no value is provided.One common use case for useRef is to access and manipulate DOM elements directly.Another use case for useRef is to store and access previous values of a component's state. useRef is a useful tool in React for creating mutable references to DOM elements or values that persist across renders. It can be used to access and manipulate DOM elements directly or to store and access previous values of a component's state.
                </div>
                <br />
                <span className='text-lg font-semibold bg-violet-200 drop-shadow-md p-2 my-6 rounded-lg text-violet-900'>Q-4: What is useMemo?</span>
                <div className='my-4 bg-pink-200 sm:mx-auto md:mx-0 rounded-lg p-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l text-white'>
                    useMemo is a built-in hook in React that allows us to memoize the result of a function call and recompute it only when one of its dependencies changes. Memoization is a technique to optimize the performance of a function by caching its result and returning the cached result when called again with the same arguments.
<br />
                    useMemo takes two arguments: a function and an array of dependencies. The function is called every time the component is rendered, and the returned value is memoized if the dependencies have not changed since the last render. If any of the dependencies have changed, the function is called again to compute a new value, which is then memoized for the next render.
<br />
                    One common use case for useMemo is to optimize expensive calculations or data transformations in a component. By memoizing the result of the calculation, we can avoid unnecessary recalculations when the component re-renders due to changes in other state or props.
                </div>
            </div>
        </div>
    );
};

export default Blog;