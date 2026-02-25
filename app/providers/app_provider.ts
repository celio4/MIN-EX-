import type { ApplicationService } from '@adonisjs/core/types'
import { LucidProvider } from '@adonisjs/lucid/database'

export default class AppProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    this.app.container.registerBinding({
      binding: 'prisma:client',
      implementation: () => {},
    })
  }

  async boot() {
    //
  }

  async ready() {
    //
  }

  async shutdown() {
    //
  }
}

