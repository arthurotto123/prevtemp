function Weatherinfo({ weather }) {
    return (
        <div>
            <h2>{weather.name}</h2>
            <div>
                <img  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                <p>
                    {Math.round(weather.main.temp)}°C
                </p>
            </div>
            <p>{weather.weather[0].descripion}</p>
            <div>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>

        </div>

    )
}

export default Weatherinfo;