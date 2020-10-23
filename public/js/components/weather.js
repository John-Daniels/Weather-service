class Weather extends React.Component {
  render() {
    return (
      <div>
        <p>Use This site to Get your weather</p>

        <form>
          <input type="search" id="search" placeholder="type a Location" />
          <button type="submit">search</button>
        </form>

        <p id="msg-1"></p>
        <p id="msg-2"></p>
      </div>
    );
  }
}

export default Weather;
