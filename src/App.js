import React from 'react';
import './App.css';



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
        <h1>Hello, Links</h1>
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