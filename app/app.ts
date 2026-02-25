import app from '@adonisjs/core/services/app'
import { Logger } from '@adonisjs/core/services/logger'

/**
 * The application is bootstrapped with the following providers
 * and their imports.
 */
await app.bootProviders()

/**
 * The application is ready. We can import the
 * start files to perform initialization
 * tasks.
 */
await app.ready(() => {
  /**
   * Initialize logger
   */
  app.logger = new Logger(app.config.get('app.logger'))
})

/**
 * The application is shutting down. We will call the
 * shutdown hooks to cleanup
 */
await app.terminate(() => {})
