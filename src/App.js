import React from 'react';
import image from './me.jpg'
import zuriLogo from './zuri_logo.svg'
import i4g from './i4g_logo.svg'
import slack from './slack.svg'
import github from './github.svg'
import './App.css';

function Button(props) {
    return <a className='btn' href={ props.link } id={ props.id } title={ props.title} type='button'>{ props.text }</a>
}

function Profile(props) {
    const displaySlack = props.displaySlack
    return (
        <div className='Profile'>
            <img src={ image } id='profile_img' alt='Martin'/>
            <h2 id='name'>Martin Isonguyo</h2>
            <div className='usernames'>
            <span id='twitter'><b>Twitter: </b>IsonguyoM</span>
            {displaySlack === true &&
      <span id='slack'><b>Slack: </b>Isonguyom</span>
      }
            </div>
        </div>
    );
};



function Links() {
    return (
        <div className='Links'>
        <Button link='https://training.zuri.team/' id='btn__zuri' text='Zuri team' />
        <Button link='http://books.zuri.team' id='books' title='
We have amazing books on design and coding that will enhance your learning.' text='Zuri Books' />
        <Button link='https://books.zuri.team/python-for-beginners' id='book__python' text='Order our top-selling Python books' />
        <Button link='https://background.zuri.team' id='pitch' text='Do you want a coder background check? We are all you need.' />
        <Button link='https://books.zuri.team/design-rules' id='book__design' text='Get our free design books' />
        <div className='links_footer'>
            <a className='social_link' href='https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U049CQ9T03A'><img src={ slack } alt='slack'/></a>
            <a className='social_link' href='https://github.com/isonguyom'><img src={ github } alt='github' /></a>
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