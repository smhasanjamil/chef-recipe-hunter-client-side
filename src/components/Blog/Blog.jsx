import React from 'react';

const Blog = () => {
    return (
        <div className='mx-auto container'>
            <h1 className='text-center text-6xl font-bold my-10 underline'>Blog</h1>

            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">1. Tell us the differences between uncontrolled and controlled components.</h2>
                    <p>Here are the key differences between controlled components and uncontrolled components:</p>

                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Controlled Components</th>
                                    <th>Uncontrolled Components</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>State management</th>
                                    <td>State managed by React</td>
                                    <td>State managed by DOM</td>

                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
                                    <th>Data flow</th>
                                    <td>Unidirectional</td>
                                    <td>Bidirectional</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>Event handling</th>
                                    <td>onChange event</td>
                                    <td>DOM event</td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <th>Initial values</th>
                                    <td>Set through value prop</td>
                                    <td>Set through defaultValue prop</td>
                                </tr>
                                {/* row 5 */}
                                <tr>
                                    <th>Validation</th>
                                    <td>Easy to validate</td>
                                    <td>Harder to validate</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>



            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">2. How to validate React props using PropTypes</h2>
                    <p>PropTypes is a type-checking library built into React that allows us to validate the types of props passed to a component. PropTypes helps in ensuring that the correct types of data are passed as props to a component, which reduces the chance of runtime errors and bugs. <br /> <br />

                        To use PropTypes, import the library and define the propTypes object for the component, which defines the type and requiredness of each prop. PropTypes has a range of validators including string, number, array, object, bool, func, etc.</p>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">3. Tell us the difference between nodejs and express js.</h2>
                    <p>Node.js is a runtime environment for executing JavaScript code outside of a web browser. It provides a platform for building server-side applications using JavaScript, which was traditionally a language used on the client-side of web development. Node.js allows developers to write scalable, high-performance, and networked applications using event-driven, non-blocking I/O model. <br /> <br />

                    Express.js is a web application framework for Node.js. It provides a set of tools and utilities for building web applications, including routing, middleware, and HTTP utilities. Express.js is built on top of Node.js and provides a thin layer of features to make it easier to build web applications.</p>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">4. What is a custom hook, and why will you create a custom hook?</h2>
                    <p>A custom hook is a reusable piece of stateful logic that can be shared between multiple components in a React application. They are created to reduce code duplication, improve modularity and maintainability, and can help with testing and performance optimization.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;