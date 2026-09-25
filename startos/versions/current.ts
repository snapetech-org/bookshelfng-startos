import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.4.21:1',
  releaseNotes: {
    en_US: 'Initial BookshelfNG StartOS package.',
    es_ES: 'Actualizaciones internas (start-sdk 2.0.x)',
    de_DE: 'Interne Aktualisierungen (start-sdk 2.0.x)',
    pl_PL: 'Aktualizacje wewnętrzne (start-sdk 2.0.x)',
    fr_FR: 'Mises à jour internes (start-sdk 2.0.x)',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
