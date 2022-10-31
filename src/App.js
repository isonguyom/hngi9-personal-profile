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

function Footer() {
    return (
        <div className='Footer'>
            <Button link='Zuri.com' text='Zuri'/>
            <p>HNG Internship 9 Front-end Task</p>
            <Button link='Zuri.com' text='I4G'/>
        </div>
    )
}

function Links() {
    return (
        <div className='Links'>
        <Button link='react.org' text='React' />
        <Button link='react.org' text='React' />
        <Button link='react.org' text='React' />
        <Footer />
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