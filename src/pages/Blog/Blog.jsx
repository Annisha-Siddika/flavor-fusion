import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { FaFilePdf } from 'react-icons/fa';

const styles = StyleSheet.create({
    page: { backgroundColor: '#fff' },
    header: { textAlign: 'center', fontSize: 24, margin: 30 },
    post: { margin: 30 },
    title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    author: { fontSize: 12, marginBottom: 10 },
    content: { fontSize: 14, lineHeight: 1.5 }
});

const blogPost = {
    title: 'My First Blog Post',
    author: 'Annisha Siddika',
    content: 'Here we will know some important Questions answers for job interview -> Q-1: What is the differences between uncontrolled and controlled components? Q-2: How to validate React props using PropTypes? Q-3: What is the difference between nodejs and express js? Q-4: What is a custom hook, and why will you create a custom hook? The answers of these questions can be found on my websites Blog page'

};

const MyDoc = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text>My Blog</Text>
            </View>
            <View style={styles.post}>
                <Text style={styles.title}>{blogPost.title}</Text>
                <Text style={styles.author}>{blogPost.author}</Text>
                <Text style={styles.content}>{blogPost.content}</Text>
            </View>
        </Page>
    </Document>
);

const Blog = () => {

    return (
        <div className='pt-4 bg-slate-600 pb-20'>
            <h1 className='text-2xl text-orange-300 font-bold text-center underline decoration-orange-500 decoration-2 underline-offset-4 mb-8 pt-20'>Questions and Answers </h1>
            <div className='w-44 mx-auto'>
            <PDFDownloadLink document={<MyDoc />} fileName="blog.pdf">
                    <button className='bg-orange-500 text-lg font-semibold px-4 py-1 rounded-md text-white hover:bg-orange-600 flex items-center my-8'><FaFilePdf></FaFilePdf> Download PDF</button>
                </PDFDownloadLink>
            </div>
            <div className='mx-24'>
                <span className='text-lg font-semibold bg-red-200 drop-shadow-md p-2 my-6 rounded-lg text-orange-900'>Q-1: What is the differences between uncontrolled and controlled components?</span>
                <div className='my-4 sm:mx-auto md:mx-0 rounded-lg p-4 bg-slate-700 text-white'>In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.
                    <br />
                    A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value.
                    <br />
                    An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value.

                </div>
                <br />
                <span className='text-lg font-semibold bg-red-200 drop-shadow-md p-2 my-6 rounded-lg text-orange-900'>Q-2: How to validate React props using PropTypes</span>
                <div className='my-4 sm:mx-auto md:mx-0 rounded-lg p-4 bg-slate-700 text-white'>
                    To validate React props using PropTypes, you can use the prop-types library, which is commonly used in React applications. Here are the steps to use PropTypes:
                    <br />
                    <ul className='list-disc pl-4 py-2'>
                        <li>Install the prop-types library by running npm install prop-types in your project directory.</li>
                        <li>Import PropTypes into your component file: import PropTypes from 'prop-types';</li>
                        <li>Define the expected props and their data types in your component by creating a propTypes object.</li>
                        <li>
                            Pass the props to the component, and PropTypes will automatically check if the props are of the expected type. If a prop is not of the expected type, PropTypes will generate a warning in the console.
                        </li>
                    </ul>
                    <p>
                        PropTypes provide various data types to define expected types, including array, bool, func, number, object, string, symbol, and node, among others. You can also define custom validation rules using the PropTypes.shape() and PropTypes.instanceOf() methods. Proper use of PropTypes can help catch errors early on and make your code more robust.
                    </p>
                </div>
                <br />
                <span className='text-lg font-semibold bg-red-200 drop-shadow-md p-2 my-6 rounded-lg text-orange-900'>Q-3: Tell us the difference between nodejs and express js.</span>
                <div className='my-4 sm:mx-auto md:mx-0 rounded-lg p-4 bg-slate-700 text-white'>
                    Node.js and Express.js are both popular tools used in web development, but they serve different purposes.
                    <br />
                    <br />
                    Node.js is a server-side JavaScript runtime environment that allows developers to build server-side applications using JavaScript. Node.js provides a set of built-in modules and APIs for performing I/O operations, networking, and other low-level tasks. Node.js is designed to be lightweight, fast, and scalable, and it can be used to build a wide range of applications, including web servers, real-time chat applications, and command-line tools.
                    <br />
                    <br />
                    Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools for building web applications, such as routing, middleware, and template rendering. Express.js simplifies the process of building web applications in Node.js by providing a higher-level abstraction layer and a set of commonly used features.
                </div>
                <br />
                <span className='text-lg font-semibold bg-red-200 drop-shadow-md p-2 my-6 rounded-lg text-orange-900'>Q-4: What is a custom hook, and why will you create a custom hook?</span>
                <div className='my-4 sm:mx-auto md:mx-0 rounded-lg p-4 bg-slate-700 text-white'>
                    A custom hook in React is a JavaScript function that uses built-in hooks (like useState, useEffect, useContext, etc.) to provide a reusable functionality that can be shared across multiple components in an application.
                    <br />
                    Some common use cases for creating a custom hook include:
                    <br />
                    <ul className='list-disc pl-4 py-2'>
                        <li>Reusing complex state logic across multiple components: For example, you might create a custom hook to manage complex form state and validation logic, which can be reused across multiple forms in your application.</li>
                        <li>Abstracting network requests and caching: You might create a custom hook that abstracts away the details of making API calls and caching responses, which can be reused across multiple components that require data from the same API endpoint.</li>
                        <li>Simplifying common tasks: You might create a custom hook that simplifies common tasks, such as managing a user's authentication state or handling keyboard shortcuts.</li>
                    </ul>
                    Overall, custom hooks are a powerful tool that can help you write cleaner and more maintainable code by abstracting away complex logic into a reusable piece of code that can be shared across multiple components in your application.
                </div>
            </div>
        </div>
    );
};

export default Blog;