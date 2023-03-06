import React from "react";

function Weather(props) {
    return (
        <div>
            {props.city &&
                <div>
                    <p>Местоположение: {props.city}, {props.contry}</p>
                    <p>Температура: {props.temp}</p>
                    <p>Давление: {props.pressure}</p>
                    <p>Заход солнца: {props.sunset}</p>
                </div>
            }
        </div>
    );
};

export default Weather;
