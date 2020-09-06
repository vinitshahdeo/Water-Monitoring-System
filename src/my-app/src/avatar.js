import React from 'react';
import Avatar from 'react-avatar';
import {
    Button
} from 'reactstrap';

import './styles.css';
class Avatarlogo extends React.Component {
    render() {
        return (<div>
                        <div>

            <
            Avatar className = "avatar"
            name = "Nainika"
            googleId = "118096717852922241760"
            size = "100"
            title = "Nainika"
            round = {
                true
            }/> 
            </div > < div >
                        <label className = "mystyle" > Nainika Baliga < /label> < /div >
                        < div >
                        <label className = "mystyle2" > #123, 2nd block. Jayanagar Bangalore -560078</label> <
                        /div>  <
                        div >
                        <Button className= "buttonstyle"
                color = "info" > Edit Profile < /Button> { ' ' } < /
                div >
                </div>

        );
    }
}
export default Avatarlogo;