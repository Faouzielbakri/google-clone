import React from 'react'
import './Home.css';
import { Link } from "react-router-dom";
import  AppsIcon  from "@material-ui/icons/Apps";
import { Avatar } from '@material-ui/core';
import Search from '../components/Search';
import logo from '../media/googlelogo.png';
import avatar from '../media/avatar.jpeg';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <div >
            <Helmet>
                <title>Faouzi's Google</title>
            </Helmet>
            <div className="home__header">
                <div className="home__headerleft">
                    <Link to='about'>About</Link>
                </div>
                <div className="home__headerright">
                    <a href='https://mail.google.com/mail/u/0/#inbox'>Gmail</a>
                    <a href='https://www.google.com/search?tbm=isch'>Images</a>
                    <a href='https://about.google/intl/en/products/'><AppsIcon /></a>
                    
                    <Avatar src={avatar} />
                </div>
            </div>
            <div className="home__body">
                <img alt="Google" src={logo}  />
            <div className="home__input_Container">
                <Search/>
            </div>
            </div>
            
            
        </div>
    )
}

export default Home
