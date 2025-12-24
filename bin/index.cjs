#!/usr/bin/env node

const { Command } = require("commander")
const fs = require("fs")
const path = require("path")

const pkgPath = path.join(__dirname, "../package.json")
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"))

const program = new Command()

program
    .name(pkg.name)
    .description(`A professional CLI tool managed by semantic-release`)
    .version(pkg.version, '-v, --version', 'output the current version')

// Define a simple command
program
    .command('greet')
    .description("Greet the user")
    .argument('<name>', 'user to greet') // Mandatory argument
    .option('-u, --uppercase', 'display greeting in uppercase') // Optional flag
    .action((name, options) => {
        let message = `Hello, ${name}`;
        if (options.uppercase) message = message.toUpperCase()
        console.log(message)
    })

// The default action if no command is provided
program.action(() => {
    console.log(`Usage: ${pkg.name} [options]`)
    console.log(`Options:`)
    console.log(`  -v, --version  Output the version number`)
    console.log(`  -h, --help     Display help information`)
    process.exit(0)
})

// Parse the arguments from process.argv
program.parse(process.argv)