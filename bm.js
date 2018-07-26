const bot = require('./bot/bot');
const help = require('./bot/commands/help');
const d20 = require('./bot/commands/d20');

bot.start([
    help, d20
]);