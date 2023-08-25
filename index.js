#!/usr/bin/env node

import chalk from "chalk"
import figlet from "figlet"

console.log(
  chalk.yellow(figlet.textSync("Alireza.js", { horizontalLayout: "full" }))
)

console.log(chalk.green("Hey there! 👋 Thanks for checking out Alireza.js!"))
console.log(chalk.blue("Here are some places you can find me online:"))
console.log(chalk.cyan("🐦 Twitter(X):"), "https://twitter.com/alihd_js")
console.log(chalk.cyan("📸 Instagram:"), "https://instagram.com/alirezahamidd")
console.log(chalk.cyan("👔 LinkedIn:"), "https://linkedin.com/in/alirezahamid")
console.log(chalk.cyan("✍️ Medium:"), "https://medium.com/@alirezahamid")
console.log(chalk.cyan("🌐 Website:"), "https://ahamid.me")

console.log(chalk.magenta("\nFeel free to connect, follow, or say hi!"))
console.log(chalk.red("Remember: Alireza.js - Where code meets fun! 🚀"))
