import React from 'react';
import './App.css';



function Profile() {
    return (
        <div className='Profile-section'>
            <img src='' id='profile_img' alt='profile picture'/>
            <p id='twitter'>@IsonguyoM</p>
            <p id='slack'>Isonguyom</p>
        </div>
    );
};


function App() {
    return (
        <Profile/>
    );
};


export default App;