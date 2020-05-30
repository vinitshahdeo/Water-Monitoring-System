import React, { Component } from "react";
import { TankCircle, TankWaterValue } from "../components/Tank";
import { Sticker } from "../components/Sticker";
import { connect } from "react-redux";
import { fetchTanks } from "../actions/tankActions";

class Home extends Component {
  componentWillMount() {
    this.props.fetchTanks();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row m-3 justify-content-center">
              <h1 className="title">Water Monitoring System</h1>
              <p className="text-center">
                Water Monitoring System is an IOT based Liquid Level Monitoring
                system that has mechanisms to keep the user alerted in case of
                liquid overflow or when tank depletes.
              </p>
          </div>
          <div className="row mt-5 mb-5 pr-3 pl-3 d-flex justify-content-center align-items-center">
            {this.props.tanks.map((tank, index) => (
            <div key={index}
                  className="col d-flex row justify-content-center align-items-center"
                  id={tank.id}
                >
                    <TankCircle className="rounded-circle">
                      <TankWaterValue className="grey-color d-flex justify-content-center align-items-center w-100 h-100 position-relative">{tank.value}%</TankWaterValue>
                    </TankCircle>
                    <div className="col-12 mt-2 mb-4 mb-lg-0 text-center tank-title p-0">
                     Tank{tank.id}
                    </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4">
              <Sticker className="d-flex justify-content-center align-items-center mw-100 mh-100" backgroundColor="#fe5e21"><h1>Danger Zone</h1></Sticker>
            </div>
            <div className="col-lg-4">
              <Sticker className="d-flex justify-content-center align-items-center mw-100 mh-100" backgroundColor="#ffb30c"><h1>Warning Zone</h1></Sticker>
            </div>
            <div className="col-lg-4">
              <Sticker className="d-flex justify-content-center align-items-center mw-100 mh-100" backgroundColor="#2ed351"><h1>Safe Zone</h1></Sticker>
            </div>
          </div>
          <hr/>
          <p className="text-center">
            <strong>Made by Vinit Shahdeo</strong>
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tanks: state.tanks.tanks
});

export default connect(mapStateToProps, { fetchTanks })(Home);
