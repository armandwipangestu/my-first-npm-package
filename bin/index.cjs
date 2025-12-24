#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

const pkgPath = path.join(__dirname, "../package.json")
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"))

const args = process.argv.slice(2)

if (args.includes("--version") || args.includes("-v")) {
    console.log(`v${pkg.version}`)
    process.exit(0)
}

console.log(`${pkg.name} is running...`)
console.log(`Current Version: ${pkg.version}`)