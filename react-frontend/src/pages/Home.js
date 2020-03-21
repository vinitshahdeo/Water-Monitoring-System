import React, { Component } from 'react'
import {TankCircle, TankWaterValue} from '../components/Tank';
import {Sticker} from '../components/Sticker'
import { connect } from 'react-redux';
import { fetchTanks } from '../actions/tankActions';
import {overflowAlarm} from '../actions/alarms';

class Home extends Component {
  componentWillMount(){
    this.props.fetchTanks()
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row m-3">
            <center>
              <h1 className="title">Water Monitoring System</h1>
              <p>Water Monitoring System is an IOT based Liquid Level Monitoring system that has
                mechanisms to keep the user alerted in case of liquid overflow or when tank depletes.</p>
            </center>
          </div>
          <div className="row m-5 d-flex justify-content-center align-items-center">
            {this.props.tanks.map(tank=> (
              <div>
                <div className="col-lg-3 d-flex align-items-center" id={tank.id}>
                  <center>
                    <TankCircle>
                      <TankWaterValue>{tank.value}%</TankWaterValue> 
                    </TankCircle>
                    <div className="d-flex justify-content-center">
                      <span className="tank-title">Tank{ tank.id}</span>
                    </div>
                  </center>
                  {this.props.overflowAlarm(tank.value, tank.id)}
                </div>
              </div>
            
            ))}
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4">
              <Sticker backgroundColor="#fe5e21"><h1>Danger Zone</h1></Sticker>
            </div>
            <div className="col-lg-4">
              <Sticker backgroundColor="#ffb30c"><h1>Warning Zone</h1></Sticker>
            </div>
            <div className="col-lg-4">
              <Sticker backgroundColor="#2ed351"><h1>Safe Zone</h1></Sticker>
            </div>
          </div>
          <hr/>
          <p>
            <center><strong>Made by Vinit Shahdeo</strong></center>
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tanks: state.tanks.tanks,
});

export default connect(mapStateToProps, { fetchTanks })(Home);




