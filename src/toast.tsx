import * as React from 'react';
// by baraka larbi :laridev@gmail.com:
//facebook : https://www.facebook.com/laridevBl
export default class Toast extends React.Component {
    
    state  = {
        show : this.props.show ,
        duration : this.props.duration

    }
    componentDidMount = () =>{
       const {duration} = this.state;  
       const timeInterval =  setInterval(() => {
            this.setState({
                show : false
            })
            clearInterval(timeInterval);
       }, duration * 1000);
    }

    render(){
        const { backgroundColor , text , position} = this.props;
        const {show}  = this.state;
        let className = (show ? "show" : "hide") + " " + position;
        console.log(show)
        return (
            <div>
                 <div id="snackbar" className={className} style={{backgroundColor : backgroundColor }}>{text}</div>
            </div> 
        )
       
    }
} 