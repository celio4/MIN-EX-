import globals from 'globals'
import adapter from '@adonisjs/eslint-config'

export default adapter({
  files: ['**/*.js', '**/*.ts'],
  globals: {
    ...globals.node,
  },
  rules: {
    'no-useless-constructor': 'off',
  },
})

