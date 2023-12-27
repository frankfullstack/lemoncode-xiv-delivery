import "./styles/main.scss";

const greetingMessage: string = "Hello Lemoncoders";

console.log(greetingMessage);

const API_REST = `${process.env.API_HOST}:${process.env.API_PORT}/${process.env.API_PREFIX}/${process.env.API_VERSION}`;

console.log(`Serving from ${API_REST}`);