import * as React from 'react';
import Toast from './components/toast';

enum ToastPosition {
    TOP = "position_top",
    BOTTOM = "position_bottom",
    LEFT = "position_left",
    RIGHT = "position_right"
}
export default class Index extends React.Component {

    state = { 
            show : false ,
            backgroundColor : "red" , 
            text : "this is toast test" ,
            position : ToastPosition.RIGHT,
            time : 1 /**seconds */
        }
  
    render(){
        const { show, backgroundColor , text , position, time} = this.state;
        return (
            <div>
                <Toast backgroundColor={backgroundColor} text={text} position={position} duration={time}/>
            </div> 
        )
    }
} 