import React from 'react';
import Water from './svgim/water.svg';
import Tank from './svgim/water-tank.svg';
import Plus from './svgim/plus.svg';
import Trash from './svgim/trash.svg';
import './styles.css';

class Watertank extends React.Component {
    render() {
        return (


            <div>     <
            div > < img className = "watertank"
            src = {
                Tank
            }
            alt = "tank" / > < label className = "x" > My Tanks < /label> <img className="plus" src={Plus} alt="Plus" / > < /div> <
            div > < img className = "water1"
            src = {
                Water
            }
            alt = "drop1" / > < label className = "x1" > Tank 1 < /label> <img className="trash" src={Trash} alt="Trash" / >
            <
            /div> <
            div > < img className = "water2"
            src = {
                Water
            }
            alt = "drop2" / > < label className = "x2" > Tank 2 < /label>  < /
            div > <
            div > < img className = "water3"
            src = {
                Water
            }
            alt = "drop3" / > < label className = "x3" > Tank 3 < /label> < /
            div >
            </div>

        );
    }
}

export default Watertank;