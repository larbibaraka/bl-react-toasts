declare module 'toast' {
'import * as React from 'react';
'export default class Toast extends React.Component {
'    state: {
'        show: any;
'        duration: any;
'    };
'    componentDidMount: () => void;
'    render(): JSX.Element;
'}

}
