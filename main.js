const DiscordRPC = require('discord-rpc');
const config = require('./config.json');

DiscordRPC.register(config.appID);
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

const startAt;

const updateRPC = () => {
    const rpcActivity = {
        state: 'まったり中😁',
        largeImageKey: 'nyan',
        largeImageText: 'こんなところ読んでないで勉強しなさい',
        startTimestamp: startAt,
        partySize: 1,
        partyMax: 1,
    };
    rpc.setActivity(rpcActivity);
}

rpc.on('ready', () => {
    console.log('準備完了')
    setInterval(updateRPC, 500);
})

setTimeout(() => {
    rpc.login({ clientId: config.appID });
    startAt = Math.floor(Date.now() / 1e3);
}, 60000);