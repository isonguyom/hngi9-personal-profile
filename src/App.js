import React from 'react';
import image from './me.jpg'
import zuriLogo from './zuri_logo.svg'
import i4g from './i4g_logo.png'
import './App.css';

function Button(props) {
    return <a href={ props.link } id={ props.id }>{ props.text }</a>
}

function Profile() {
    return (
        <div className='Profile-section'>
            <img src={ image } id='profile_img' alt='Martin'/>
            <p id='twitter'>@IsonguyoM</p>
            <p id='slack'>Isonguyom</p>
        </div>
    );
};

function Footer() {
    return (
        <div className='Footer'>
            <a href='https://internship.zuri.team/'><img src={ zuriLogo } alt='Zuri Internship'/></a>
            <p>HNG Internship 9 Front-end Task</p>
            <a href='https://internship.zuri.team/'><img src={ i4g } alt='I4G'/></a>
        </div>
    )
}

function Links() {
    return (
        <div className='Links'>
        <Button link='https://training.zuri.team/' id='btn__zuri' text='Zuri Training' />
        <Button link='http://books.zuri.team' id='books' text='Zuri Books' />
        <Button link='https://books.zuri.team/python-for-beginners' id='book__python' text='Python Books' />
        <Button link='https://background.zuri.team' id='pitch' text='Background checks on coders' />
        <Button link='https://books.zuri.team/design-rules' id='book__design' text='Design Books' />
        </div>
    );
};


function App() {
    return (
        <div>
        <Profile/>
        <Links/>
        <Footer />
        </div>
    );
};


export default App;