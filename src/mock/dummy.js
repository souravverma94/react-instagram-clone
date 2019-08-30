module.exports = SetupEndpoint({
    name: 'User',
    urls: [{
        params: '/vermazz',
        requests: [{
            method: 'GET',
            response: './user.json'
        }]
    },]
});
