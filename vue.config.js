module.exports = {
    devServer: {
        host: "127.0.0.1",
        port: 8080,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}