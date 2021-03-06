const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
    basePath: isProd ? '/next-github-action-practice' : '',
    assetPrefix: isProd ? '/next-github-action-practice/' : '',
}