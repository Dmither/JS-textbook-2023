console.log("  < outer ============================= >")

console.log("Hi from outer");

export let config = { };

export function sayHi() {
  console.log(`Ready to serve, ${config.user}!`);
}

console.log("  </ outer ============================ >")