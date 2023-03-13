import { emitter } from "./side.js";

const ivan = {
  firstName: "Ivan",
  lastName: "Mihajlovski",
};

emitter.emit("login", ivan);
