let inputValue;
let bool = false;

let lag = [],
  us = [],
  data = [];

let locations = [
  "nigeria",
  "lagos",
  "india",
  "new york",
  "usa",
  "abuja",
  "kano",
];

class Weather extends React.Component {
  state = {
    data: [],
    preData: [],
    anim: "",
    location,
  };

  fetchWeather = (e) => {
    e.preventDefault();
    if (bool) {
      fetch(`/weather?address=${inputValue}`).then((response) => {
        response.json().then((data) => {
          if (data.error) {
            this.setState({ data: [], anim: [data.error, "err"] });
          } else {
            this.setState({
              data,
              anim: [],
            });
          }
        });
      });
    }
  };
  handleChange = (e) => {
    if (e.target.value === "" || e.target.value === null) {
      bool = false;
      this.setState({ anim: ["Search a Location!", ""] });
    } else {
      inputValue = e.target.value;
      bool = true;
    }
  };
  show = () => {
    if (bool) {
      this.setState({ anim: ["Loading!", "msg-one"] });
    }
  };
  render() {
    return (
      <React.Fragment>
        <p>Use This site to Get your weather</p>

        <form onSubmit={this.fetchWeather}>
          <input
            class="input"
            list="list"
            onChange={this.handleChange}
            type="search"
            id="search"
            placeholder="type a Location"
          />
          <datalist id="list">
            {locations.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </datalist>
          <button class="button" type="submit" onClick={this.show}>
            search
          </button>
        </form>

        <p className={this.state.anim[1] || "p"}>{this.state.anim[0] || ""}</p>

        <ul>
          {this.state.data.map((d) => {
            return this.state.data !== [] ? (
              <li>
                <img
                  className="image center"
                  src={d.forecast.current.weather_icons[0]}
                />
                <article className="container center">
                  Location: {d.forecast.request.query}
                  <br />
                  Temperature: {d.forecast.current.temperature} degress celsius.
                  <br />
                  Weather-desciptions:{" "}
                  {d.forecast.current.weather_descriptions[0]}
                  <br />
                  Summary: {d.forecast.current.weather_descriptions} ,at{" "}
                  {d.forecast.current.temperature} degrees celsius
                  <br />
                  <button
                    type="button"
                    class="btn btn-primary bbtn center"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    more info
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModalCenter"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5
                            class="modal-title center"
                            id="exampleModalLongTitle"
                          >
                            More info about {inputValue}
                          </h5>

                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <li class="li">
                            <img
                              className="image"
                              src={d.forecast.current.weather_icons[0]}
                            />
                            <article className="container center">
                              Location: {d.forecast.request.query}
                              <br />
                              Temperature: {d.forecast.current.temperature}{" "}
                              degress celsius.
                              <br />
                              Weather-desciptions:{" "}
                              {d.forecast.current.weather_descriptions[0]}
                              <br />
                              Summary: {
                                d.forecast.current.weather_descriptions
                              }{" "}
                              ,at {d.forecast.current.temperature} degrees
                              celsius
                              <br />
                              Cloud-Cover:{d.forecast.current.cloudcover}
                              <br />
                              humidity:{d.forecast.current.humidity}
                            </article>
                          </li>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          {/* <button type="button" class="btn btn-primary">
                            Save changes
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            ) : (
              ""
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Weather />, document.querySelector("#root"));
