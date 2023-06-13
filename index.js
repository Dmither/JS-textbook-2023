async () => {
	let {one} = await import("./outer.js")
}
import { config, sayHi } from "./outer.js";

console.log("  < main ============================== >")

config.user = "Peter";

import { two } from "./outer2.js";
import User from "./User.js";
sayHi();


console.log("  </ main ============================= >")