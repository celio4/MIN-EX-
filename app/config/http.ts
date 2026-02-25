import { defineConfig } from '@adonisjs/core/app'

const httpConfig = defineConfig({
  /*
  |--------------------------------------------------------------------------
  | Allow method spoofing
  |--------------------------------------------------------------------------
  |
  | Method spoofing allows you to make requests using other HTTP methods
  | other than GET and POST by adding a `_method` query string to the
  | request.
  |
  */
  methodSpoofingEnabled: true,

  /*
  |--------------------------------------------------------------------------
  | Cookie settings
  |--------------------------------------------------------------------------
  */
  cookie: {
    domain: '',
    path: '/',
    maxAge: '2h',
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
  },

  /*
  |--------------------------------------------------------------------------
  | Session driver
  |--------------------------------------------------------------------------
  |
  | The session driver to use. Available options are "cookie", "file", and
  | "memory". The "file" driver persists sessions to the `tmp/sessions`
  | directory.
  |
  */
  session: {
    driver: 'cookie',
  },
})

export default httpConfig

