import router from '@adonisjs/core/services/router'

const HealthController = () => import('#controllers/health_controller')

router.get('/', async () => {
  return {
    name: 'MINEX RDC API',
    version: '1.0.0',
    status: 'running'
  }
})

router.get('/health', [HealthController, 'check'])

