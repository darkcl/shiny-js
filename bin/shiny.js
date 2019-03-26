#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);

if (args.length !== 0) {
  if (args.length !== 1) {
    console.log("Usage: shiny [pokemon name]");
  } else {
    let number = 0;

    const huntProgress = path.join(process.cwd(), args[0]);
    try {
      number = parseInt(fs.readFileSync(huntProgress).toString());
    } catch {}

    number++;

    console.log(`Hunting ${args[0]} for ${number} times`);

    fs.writeFileSync(huntProgress, `${number}`);
  }
} else {
  console.log("Usage: shiny [pokemon name]");
}
