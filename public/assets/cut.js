{
  /* 
        <hr />
        <ul>
          {this.state.preData.map((d) => {
            return this.state.preData !== [] ? (
              <li>
                <img
                  className="image"
                  src={d.forecast.current.weather_icons[0]}
                />
                <article className="container">
                  location: {d.forecast.request.query}
                  <br />
                  temperature: {d.forecast.current.temperature} degress celsius.
                  <br />
                  weather-desciptions:{" "}
                  {d.forecast.current.weather_descriptions[0]}
                  <br />
                  summary: {d.forecast.current.weather_descriptions} ,at{" "}
                  {d.forecast.current.temperature} degrees celsius
                </article>
                <button
                  id="btn"
                  onClick={() => {
                    console.log(this.state.preData);
                    console.log(this.state.data);
                  }}
                  className="btn btn-primary btn-small m-2 more"
                >
                  More Actions
                </button>
              </li>
            ) : (
              ""
            );
          })}
        </ul> */
}

//line 19 app.js
// constructor(props) {
//   super();
//   this.getDat();
// }

// line 30 app.js
// getDat = () => {
//   fetch(`/weather?address=usa`).then((res) =>
//     res.json().then((dat) => {
//       if (dat.error) {
//         us = [];
//       } else {
//         us = dat;
//       }
//     })
//   );
//   fetch(`/weather?address=lagos`).then((res) =>
//     res.json().then((dat) => {
//       if (dat.error) {
//         lag = [];
//       } else {
//         console.log(dat);
//         lag = dat;
//       }
//     })
//   );
//   setTimeout(() => {
//     if (lag !== [] && us !== []) {
//       data = [lag[0], us[0]];
//       this.setState({
//         preData: data,
//       });
//     }
//   }, 3000);
// };
