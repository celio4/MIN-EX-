import type { HttpContext } from '@adonisjs/core/http'

export default class HealthController {
  async check({ response }: HttpContext) {
    return response.ok({
      status: 'ok',
      timestamp: new Date().toISOString()
    })
  }
}

