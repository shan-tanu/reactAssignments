import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; 
import App from './App';
import Employee from "./Employee.js";
import Counter from './Counter';
import Update from './Update';
import EmployeeList from './EmployeeList';
import AutoCounter from './AutoCounter';
import IncrementCounter from './classComponent/IncrementCounter';
import DataBinding from './classComponent/DataBinding';
// import ProductListComponent from './productAPI/ProductListComponent';
import ProductListComponent from './productHooks/ProductListComponent';
import StockComponent from './stockAPI/StockComponent';
import UseStateCounter from './hooksImplementation/UseStateCounter';
import ProductDetailsComponent from './productHooks/ProductDetailsComponent';
import GrandGrandParent from './hierarchy/GrandGrandParent';
import MainComponent from './SPA/MainComponent';
// import reportWebVitals from './reportWebVitals';

const example = [1, 2, 3];

var emplist = [{
  name: "Mayank",
  avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
  createdAt: "Today",
  id: 1
}, {
  name: "Aman",
  avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
  createdAt: "Today",
  id: 2
}, {
  name: "Varun",
  avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
  createdAt: "Today",
  id: 3
}]

var val = 0;




ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyComponent></MyComponent> */}
    {/* <Employee details={details}></Employee>  */}
    {/* <Counter /> */}
    {/* <Update user='Shantanu'/> */}
    {/* <EmployeeList emplist={emplist}/> */}

    {/* {setInterval(() => {
      console.log(val);
      val += 1;      
    }, 1000)} */}
    {/* <AutoCounter val={val} /> */}
    {/* <IncrementCounter/> */}
    {/* <DataBinding/> */}
    {/* <ProductListComponent/> */}
    {/* <StockComponent/> */}
    {/* <UseStateCounter/> */}
    {/* <ProductListComponent/> useState */}
    {/* <GrandGrandParent/> */}
    <MainComponent/>

  </React.StrictMode>,
  document.getElementById('root')
);

function MyComponent() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "This is the first Header component"),
    React.createElement("p", {}, "This is the paragraph element."),
    // React.createElement("a",[href="www.google.com"],"Click")
  ]);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
