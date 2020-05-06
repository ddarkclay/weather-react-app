import React from 'react'

const Weather = ({ city, icon, temp, minTemp, maxTemp, desc }) => {
    const minMaxTemp = (min, max) => (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )
    return (
        <div className="container">
            <div className="cards">
                <h1>{city}</h1>
                <h5 className="py-4">
                    <i className={`wi ${icon} display-1`}></i>
                </h5>
                <h1 className="py-2">{temp}&deg;</h1>
                {minMaxTemp(minTemp, maxTemp)}

                <h4 className="py-4">{desc}</h4>
            </div>
        </div>
    )
}

export default Weather
