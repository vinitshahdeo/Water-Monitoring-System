import React from 'react'
import pic from '../assets/signin3.jpg'
import '../stylesheets/Info.css'

function Info() {
    return (
        <>
            <img src={pic} alt="CoverPage" id='img' />
            <div className='text-block'>
                <section className="first-section">
                    <h3><u>About Us:</u></h3>
                    <p>
                        Water Monitoring System is an IOT based Liquid Level Monitoring system that has mechanisms to
                        keep the user alerted in case of liquid overflow or when tank depletes. The water tanks can be fixed with
                        ultrasonic sensors that is placed over the container. Ultrasonic sensor is used to measure, compare container
                        depth and liquid level.
                    </p>
                </section>
                <section className="second-section">
                    <h3><u>Features:</u></h3>
                    <ul>
                        <li>The status of the system could be monitored by our web page that provides a brilliant 
                            graphical representation.</li>
                        <li>Colours are used to depict various scenarios with respect to the amount of liquid in the tanks or 
                            container. This allows to easily monitor.</li>
                        <li>The buzzer buzzes when the limit exceeds the permissible quantity of fill.</li>
                    </ul>
                </section>
            </div>
        </>

    )
}

export default Info
