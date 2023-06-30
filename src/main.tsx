import { render } from "preact";
import { App } from "./app";
import "./global.scss";

render(<App />, document.getElementById("app") as HTMLElement);
