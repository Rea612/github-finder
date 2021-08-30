import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const element = <div>
    <span>Hello, </span>
    <span>Jane</span>
    </div>;

const user = {
 	firstName: 'Summer',
 	lastName: 'Zou'
 }

const element1 = <p>Hello, {user.firstName} {user.lastName}</p>;
// ReactDOM.render(element1, document.getElementById('root'));

ReactDOM.render(<App/>, document.getElementById('root'));
