import app from '@adonisjs/core/services/app'
import { Ignitor } from '@adonisjs/core/services/ignitor'

const ignition = new Ignitor(app.httpApp)

await ignition.boot()

/**
 * The server is ready to run. We render the application
 * incase of SSR is enabled, otherwise send a dummy
 * response.
 */
await ignition.ready()

