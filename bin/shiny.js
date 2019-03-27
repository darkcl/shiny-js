#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);

if (args.length !== 0) {
  if (args.length < 1) {
    console.log("Usage: shiny [pokemon name] [number (optional)]");
  } else {
    let inc = 1;

    if (args.length === 2) {
      try {
        inc = parseInt(args[1]);

        if (inc < 1) {
          console.error("Must be greater than 1");
          return;
        }
      } catch (e) {
        console.error("Not a number");

        console.error(e);
        return;
      }
    }

    let number = 0;

    const huntProgress = path.join(process.cwd(), args[0]);
    try {
      number = parseInt(fs.readFileSync(huntProgress).toString());
    } catch {}

    number = number + inc;

    console.log(`Hunting ${args[0]} for ${number} times`);

    fs.writeFileSync(huntProgress, `${number}`);
  }
} else {
  console.log("Usage: shiny [pokemon name]");
}
