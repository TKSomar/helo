import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import home from './home.png';
import new_post from './new.png';
import logout from './logout.png';

export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="nav_profile_container">
                    <div className="nav_profile_pic"></div>
                    <p>Username</p>
                </div>

                <div className="nav_links">
                    <Link to='/dashboard' >
                        <img className="home_icon" src={home} alt="home"></img>
                    </Link>
                    <Link to='/new-post'>
                        <img className="new_icon" src={new_post} alt="new post"></img>
                    </Link>
                    <Link to='/'>
                        <img className="logout_icon" src={logout} alt="logout"></img>
                    </Link>
                </div>
            </div>
        )
    }
}