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