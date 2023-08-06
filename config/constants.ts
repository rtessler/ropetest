const isProd = process.env.NODE_ENV === 'production'

export default {
    baseUrl: isProd ? 'https://www.creekroadauto.com.au/ropetest.com.au/api/index.php' : 'http://localhost/ropetest-api/index.php'
}