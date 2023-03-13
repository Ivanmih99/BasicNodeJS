import { EventEmitter } from "node:events";

export const emitter = new EventEmitter();
emitter.on("login", (data) => console.log("Hello", `${data.firstName} ${data.lastName}!`));
