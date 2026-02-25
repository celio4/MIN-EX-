/*
|--------------------------------------------------------------------------
| Entry point for running the server
|--------------------------------------------------------------------------
*/
import { Ignitor } from '@adonisjs/core/services/ignitor'
import { dotEnvAdapter } from '@adonisjs/core/services/dot_env'

await new Ignitor(dotEnvAdapter)
  .tap((app) => {
    app.config.set('app.http.methodSpoofingEnabled', true)
  })
  .httpServer()
  .start()

