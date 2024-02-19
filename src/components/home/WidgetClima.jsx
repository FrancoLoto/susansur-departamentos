
function WidgetClima() {
    const widgetStyle = {
        width: '378px',
        height: '420px',
    };

    return(
        <>
            <div className="bg-primario">
                <div className="flex flex-col items-center justify-center pt-10 pb-10">
                    <iframe 
                    title="widget"
                    src="https://www.meteoblue.com/es/tiempo/widget/daily/las-grutas_argentina_7646573?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=monochrome&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&winddirection=1&uv=0&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&layout=light"  
                    frameborder="0" 
                    scrolling="NO" 
                    allowtransparency="true" 
                    sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" 
                    style={widgetStyle}
                    >
                    </iframe>
                    <div>
                        <a href="https://www.meteoblue.com/es/tiempo/semana/las-grutas_argentina_7646573?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget" target="_blank" rel="noreferrer" className="text-primario">meteoblue</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WidgetClima