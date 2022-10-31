import React from 'react';
import './App.css';

function Button(props) {
    return <a href={ props.link }>{ props.text }</a>
}

function Profile() {
    return (
        <div className='Profile-section'>
            <img src='' id='profile_img' alt='profile'/>
            <p id='twitter'>@IsonguyoM</p>
            <p id='slack'>Isonguyom</p>
        </div>
    );
};

function Links() {
    return (
        <div className='Links'>
        <Button link='react.org' text='React' />
        </div>
    );
};


function App() {
    return (
        <div>
        <Profile/>
        <Links/>
        </div>
    );
};


export default App;