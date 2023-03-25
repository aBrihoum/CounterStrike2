import { render } from "preact";
import { App } from "./components/App/App";
import "./global.scss";

render(<App />, document.getElementById("app") as HTMLElement);
