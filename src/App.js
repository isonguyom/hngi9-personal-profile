import React from 'react';
import image from './me.jpg'
import zuriLogo from './zuri_logo.svg'
import i4g from './i4g_logo.svg'
import slack from './slack.svg'
import github from './github.svg'
import './App.css';

function Button(props) {
    return <a className='btn' href={ props.link } id={ props.id } type='button'>{ props.text }</a>
}

function Profile() {
    return (
        <div className='Profile'>
            <img src={ image } id='profile_img' alt='Martin'/>
            <h2 id='name'>Martin Isonguyo</h2>
            <div className='usernames'>
            <span id='twitter'><b>Twitter: </b>IsonguyoM</span>
            <span id='slack'><b>Slack: </b>Isonguyom</span>
            </div>
        </div>
    );
};



function Links() {
    return (
        <div className='Links'>
        <Button link='https://training.zuri.team/' id='btn__zuri' text='Zuri Training' />
        <Button link='http://books.zuri.team' id='books' text='Zuri Books' />
        <Button link='https://books.zuri.team/python-for-beginners' id='book__python' text='Python Books' />
        <Button link='https://background.zuri.team' id='pitch' text='Background checks on coders' />
        <Button link='https://books.zuri.team/design-rules' id='book__design' text='Design Books' />
        <div className='links_footer'>
            <a className='social_link' href='https://ingressive.org/'><img src={ slack } alt='slack'/></a>
            <a className='social_link' href='https://ingressive.org/'><img src={ github } alt='github' /></a>
        </div>
        </div>
    );
};


function Footer() {
    return (
        <div className='Footer'>
            <a href='https://internship.zuri.team/'><img src={ zuriLogo } alt='Zuri Internship'/></a>
            <p>HNG Internship 9 Front-end Task</p>
            <a href='https://ingressive.org/'><img src={ i4g } alt='I4G'/></a>
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