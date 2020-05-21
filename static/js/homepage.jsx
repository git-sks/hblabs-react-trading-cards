"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <p>Hi there!</p>
        <p><a href="/cards">Check out the trading cards.</a></p>
        <img src="/static/img/balloonicorn.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
