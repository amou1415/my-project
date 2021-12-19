module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000/',
                port:8080,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}