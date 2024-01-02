import "./styles/main.scss";
import lemoncodeLogo from "./img/lemoncode.png";

const greetingMessage: string = "Hello Lemoncoders";

console.log(greetingMessage);

const container = document.getElementsByClassName("logo-container")[0];
const img = document.createElement("img");
img.src = lemoncodeLogo;

container.appendChild(img);