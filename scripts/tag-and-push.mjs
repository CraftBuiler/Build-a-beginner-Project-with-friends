import { execSync } from 'child_process'
import { readFileSync } from 'fs'

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'))
const tag = `v${pkg.version}`

const run = (cmd) => execSync(cmd, { stdio: 'inherit' })

try {
    execSync(`git ls-remote --tags origin ${tag}`, { stdio: 'pipe' })
    const existing = execSync(`git ls-remote --tags origin ${tag}`, {
        encoding: 'utf8',
    }).trim()

    if (existing) {
        console.log(`Tag ${tag} already exists remotely, skipping.`)
        process.exit(0)
    }
} catch (_) {}

run(`git tag ${tag}`)
run(`git push origin ${tag}`)

console.log(`Tagged and pushed: ${tag}`)
