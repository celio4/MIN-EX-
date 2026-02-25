/*
|--------------------------------------------------------------------------
| Entry point for running the REPL console
|--------------------------------------------------------------------------
*/
import { Ignitor } from '@adonisjs/core/services/ignitor'
import { dotEnvAdapter } from '@adonisjs/core/services/dot_env'
import { Repl } from '@adonisjs/repl'

await new Ignitor(dotEnvAdapter)
  .repl((app) => {
    const repl = new Repl(app)
    repl.start()
  })

