module.exports = {
    dev:{
        proxyTable:{
            '/api':{
                target:'http://127.0.0.1/3000/api/',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}