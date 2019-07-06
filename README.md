# Toast React Component made with typeScript and parcel 

a configurable toasts for react projects.

## Local setup

1. Clone the repo
2. Run `npm install`
3. Run `npm start` for demo and development
4. Run `npm run build` for production ready build (can be found in `lib`)

## Using component

1. Add component to your project via `npm install bxjs-react-component`
2. Import and use time like so:

```js
import Toast from 'bl-react-toast';
// TOP = "position_top",
 //BOTTOM = "position_bottom",
//LEFT = "position_left",
//RIGHT = "position_right"
//duration is in seconds 1=>1 second
export default () => <Toast show={true} backgroundColor={"red"} text={"this is a text of the toast"} position={"position_top"} duration={1} />;
```
## don't forget to copy this css into your css file
```css
/* The snackbar - position it at the bottom and in the middle of the screen */
#snackbar {
    visibility: hidden; /* Hidden by default. Visible on click */
    min-width: 250px; /* Set a default minimum width */
    margin-left: -125px; /* Divide value of min-width by 2 */
    background-color: #333; /* Black background color */
    color: #fff; /* White text color */
    text-align: center; /* Centered text */
    border-radius: 2px; /* Rounded borders */
    padding: 16px; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    left: 50%; /* Center the snackbar */
    bottom: 30px; /* 30px from the bottom */
  }
  #snackbar.hide {
    visibility: hidden; 
  }
   #snackbar.show {
    visibility: visible; 
  }
  #snackbar.position_right {
    left: 90%; /* Center the snackbar */
    top: 30px; /* 30px from the bottom */
    bottom: unset; /* 30px from the bottom */
  }
  #snackbar.position_left {
    left: 7%; /* Center the snackbar */
    top: 30px; /* 30px from the bottom */
    bottom: unset; /* 30px from the bottom */
  }
  #snackbar.position_top{
    left: 50%; /* Center the snackbar */
    top: 30px; /* 30px from the bottom */
    bottom: unset; /* 30px from the bottom */
  }
  #snackbar.position_bottom{
    left: 50%; /* Center the snackbar */
    top: unset; /* 30px from the bottom */
    bottom: 30px; /* 30px from the bottom */
  }
 
  /* Animations to fade the snackbar in and out */
  @-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
  }
  
  @keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
  }
  
  @-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
  }
  
  @keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
  }

```