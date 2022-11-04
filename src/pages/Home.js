import { React, useRef } from 'react';
import image from '../assets/me.jpg'
import zuriLogo from '../assets/zuri_logo.svg'
import i4g from '../assets/i4g_logo.svg'
import slack from '../assets/slack.svg'
import github from '../assets/github.svg'

function Button(props) {
    return <a className='btn' href={ props.link } id={ props.id } title={ props.title} ref={ props.ref_id } type='button'>{ props.text }</a>
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
    const refValue = useRef("Martin Isonguyo")
    return (
        <div className='Links'>
        <Button link='https://training.zuri.team/' id='btn__zuri' text='Zuri team' />
        <Button link='http://books.zuri.team' id='books' title='
We have amazing books on design and coding that will enhance your learning.' text='Zuri design and coding books' />
        <Button link='https://books.zuri.team/python-for-beginners' id='book__python' ref_id={ refValue } text='Purchase the best-selling Python books' />
        <Button link='https://background.zuri.team' id='pitch' text='Do you want a coder background check? Zuri is all you need.' />
        <Button link='https://books.zuri.team/design-rules' id='book__design' text='Get free design books' />
        <Button link='contact' id='contact' text='contact' />
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

function Home() {
    return (
        <div>
        <Profile/>
        <Links/>
        <Footer />
        </div>
    );
}


export default Home;