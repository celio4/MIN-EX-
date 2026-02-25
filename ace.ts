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

await new Ignitor(appRoot)
  .ace()
  .handle(process.argv.slice(2))
