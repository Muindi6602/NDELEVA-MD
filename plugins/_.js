

const {
    Alpha,
    broadcast
} = require('../lib');


Alpha({
    pattern: 'bcgc ?(.*)',
    fromMe: true,
    desc: 'broadcast to all user in a specified group',
    type: 'others',
    onlyGroup: true
}, async (message, match) => {
if(!message.reply_message.i) return await message.send("*_please reply to a message you want to broadcast_*");
return await broadcast(message, match, "group");
});

Alpha({
    pattern: 'bcpm ?(.*)',
    fromMe: true,
    desc: 'broadcast to all your pm messages',
    type: 'others'
}, async (message, match) => {
if(!message.reply_message.i) return await message.send("*_please reply to a message you want to broadcast_*");
return await broadcast(message, match, "pm");
});
