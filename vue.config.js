module.exports = {
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'personal',
      region: 'us-east-1',
      bucket: 'front-dbp',
      createBucket: true,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: true,
      cloudfrontId: '12435465',
      cloudfrontMatchers: '/*',
      uploadConcurrency: 5,
      pluginVersion: '3.0.0'
    }
  }
}
