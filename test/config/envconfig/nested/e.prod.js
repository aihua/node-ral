module.exports = {
    e: {
        unpack: 'json',
        pack: 'json',
        encoding: 'GBK',
        balance: 'random',
        protocol: 'http',
        query: {
            name: 'prod'
        },
        server: [{
            host: 'st.yd.baidu.com',
            port: 80,
            idc: 'st'
        }]
    }
};
