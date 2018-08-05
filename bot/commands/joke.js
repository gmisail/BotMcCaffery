var Command = require('../command');
var axios = require('axios');

class Joke extends Command
{
    constructor()
    {
        super("joke");
    }

    execute(message, args)
    {
        super.execute(message, args);

        var joke = axios.get("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke").then(res => {
            message.channel.send(res.setup);
            message.channel.send(res.punchline);
        });
    }
}

module.exports = new Joke();