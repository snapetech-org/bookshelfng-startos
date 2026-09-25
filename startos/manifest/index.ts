import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'bookshelfng',
  title: 'BookshelfNG',
  license: 'GPL-3.0-only',
  packageRepo: 'https://github.com/snapetech/bookshelfng-startos',
  upstreamRepo: 'https://github.com/snapetech/bookshelfng',
  marketingUrl: 'https://github.com/snapetech/bookshelfng',
  donationUrl: 'https://ko-fi.com/snapetech',
  description: { short, long },
  volumes: ['main', 'books', 'downloads'],
  images: {
    'bookshelfng': {
      source: { dockerTag: 'docker.io/snapetech/bookshelfng:hardcover-v0.4.21.37' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
