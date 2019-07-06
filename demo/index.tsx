import * as React from 'react';
import * as ReactDOM from "react-dom";
import Index from './../src/index';
class IndexApp extends React.Component {
  showToast = () => {

  }
  render() {
    return (
    <div>
      <button onClick={this.showToast}>open toast</button>
      <Index/>
     </div>
     )
  }
}
ReactDOM.render(<IndexApp/>, document.getElementById("app"));