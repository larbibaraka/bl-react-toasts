import * as React from 'react';

export default class Toast extends React.Component {

    render(){
        const {backgroundColor , text , position , time} = this.props;
        return (
            <div id="snackbar" className={position} style={{backgroundColor : backgroundColor }}>{text}</div>
        )
    }
} 