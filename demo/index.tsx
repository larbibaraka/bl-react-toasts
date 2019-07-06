import * as React from 'react';
import * as ReactDOM from "react-dom";

class IndexApp extends React.Component {
  render() {
    return (<h1>Hello world</h1>)
  }
}
ReactDOM.render(<IndexApp/>, document.getElementById("app"));