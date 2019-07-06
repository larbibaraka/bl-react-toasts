import * as React from 'react';
import * as ReactDOM from "react-dom";

import Toast from './../lib/toast';
  enum ToastPosition {
    TOP = "position_top",
    BOTTOM = "position_bottom",
    LEFT = "position_left",
    RIGHT = "position_right"
  }
class IndexApp extends React.Component {
   state = {
     show : true
   }
  showToast = () => {
    let show = this.state ? false : true;
    this.setState({
      show
    })
  }
  render() {
  return (
    <div>
      <button onClick={this.showToast}>open toast</button>
        <Toast show={this.state.show} backgroundColor={"red"} text={"this is a text of the toast"} position={"position_top"} duration={1}/>
     </div>
     )
  }
}
ReactDOM.render(<IndexApp/>, document.getElementById("app"));