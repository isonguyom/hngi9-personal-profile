import zuriLogo from '../assets/zuri_logo.svg'
import i4g from '../assets/i4g_logo.svg' 

function Footer() {
    return (
        <div className='Footer'>
            <a href='https://internship.zuri.team/'><img src={ zuriLogo } alt='Zuri Internship'/></a>
            <p>HNG Internship 9 Front-end Task</p>
            <a href='https://ingressive.org/'><img src={ i4g } alt='I4G'/></a>
        </div>
    );
};


export default Footer;