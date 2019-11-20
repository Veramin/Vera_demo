#### 陈瑶瑶的React学习记录
##   Q1: How to create a react project?
    There are two methods to create the react application.
+ NPM
+ NPX

### Npm

    1. Step1: npm install create-react-app -g
    2. Step2: create-react-app <project-name>


### Npx

    1. npx create-react-app <project-name>



## Q2: Components Summary

+ Components describe a part of the user interface.
+ They are re-usable and can be nested inside other components.
+ Two Types
    - Stateless Functional Components
    - Stateful Class Components

#### About Stateful Class Components
<!-- If you want to look this example, you need to find the welcome.js(./components/welcome.js) -->

Now, I will create a stateful class component. I define the class. Let's call the class Welcome. For this class, if you want it becomes a react component, there are two simple steps.

1. The first step is it should extend the components class from react. So the class welcome extends component.
2. The second step is the class has to implement a render methods which return null or some Html 

## Q3: How to create the components?

#### Method1: Stateless Functional Components
```javascript

    /* greet.js */
    // import React
    import React from 'react'

    // ES5
    // function Greet() {
    //     return <h1>Hello, vera.</h1>
    // }

    // ES6
    const Greet = () => <h1>Hello, vera.............</h1>

    // export component
    export default Greet;

```

```javascript

    /* App.js */
    // import component
    import Greet from './components/greet'

    // using component
    function App() {
        return (
            <div className="App">
                <Greet></Greet>
            </div>
        )
    }

```


#### Method2: Stateful Class Components
```javascript
    /* welcome.js */
    // import React & Component
    import React, { Component } from './react'

    class Welcome extends Component {
        render() {
            return <h1>Welcome to the react's world.</h1>
        }
    }

    // export component
    export default Welcome;
```

```javascript
    /* App.js */
    // import component
    import Welcome from './components/welcome'

    // using component
    function App() {
        return (
            <div className="App">
                <Welcome />
            </div>
        )
    }
```




## Q4: What are the features between SFC and SCC?

+ 1.The features of SFC are :
    - Simple function
    - Use function component
    - Absence of 'this' keyword
    - Solution without using state
    - Mainly responsible for the UI
    - Stateless / Dumb /Presentational

+ 2.The features of SCC are:
    - More feature rich
    - Maintain their own private data state
    - Complex UI logic
    - Provide lifecycle hooks
    - Stateful / Smart / Container