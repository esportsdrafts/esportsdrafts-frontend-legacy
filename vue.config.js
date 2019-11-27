
module.exports = {
    productionSourceMap: false,
    chainWebpack: config => {
        config.devServer
            .host('0.0.0.0')
            .port(443)
            .disableHostCheck(true)
    }
}

