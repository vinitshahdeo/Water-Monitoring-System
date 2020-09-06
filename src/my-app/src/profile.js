import React from 'react';

import Avatarlogo from "./avatar.js";
import Watertank from "./watertanks.js";

import Badge from "react-shields-badge";
import Growthlogo from './svgim/growth (1).svg';
import Calender from './svgim/calendar.svg';
import Logout from './svgim/logout (1).svg';

import "react-shields-badge/dist/react-shields-badge.css";

import './styles.css';

class Profile extends React.Component {
    render() {

        return ( <
            div className = "sidebar" >
            <Avatarlogo /> <
            Watertank / >
            <
            div > < img className = "growth"
            src = {
                Growthlogo
            }
            alt = "stats" / > < label className = "overall" > Overall stats < /label> < /
            div > <
            div > < img className = "cal"
            src = {
                Calender
            }
            alt = "Calender" / >
            <
            label className = "bills" > Water Bill < /label> <div className = "badgex" >  <
            Badge data = {
                ["DUE"]
            }
            backgroundColor = {
                ["red"]
            }
            /> < /div > < /div > <
            div > < img className = "logoutx"
            src = {
                Logout
            }
            alt = "Logout" / > < label className = "logout" > Logout < /label></div > <
            /div>

        );
    }
}

export default Profile;