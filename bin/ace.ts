/*
|--------------------------------------------------------------------------
| Entry point for running ace commands
|--------------------------------------------------------------------------
*/
import { Ignitor } from '@adonisjs/core'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const appRoot = new URL('./', `file://${__dirname}/`)

const ignitor = new Ignitor(appRoot)

await ignitor.initApp()
await ignitor.bootProviders()

const ace = await ignitor.ace()

await ace.handle(process.argv.slice(2))
