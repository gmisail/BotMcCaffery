const discord = require('discord.js');

class Bot
{
    constructor()
    {

    }

    start(commands)
    {
        console.log("on");

        this.COMMAND_INDICATOR = "?";

        this.commands = commands;
        console.log(this.commands);

        this.client = new discord.Client();

        this.client.on('ready', () => {
            this.onReady();
        });

        this.client.on('message', (message) => {
            this.onMessage(message);
        });

        this.client.login(process.env.BOT_TOKEN || "MzY3Nzk4NjM5MDk3MTUxNDk4.DMAq2A.8i5ce1mOjoag24i0TslZK0ZrMMg");
    }

    split(message)
    {
        return message.split("");
    }

    onReady()
    {
        console.log("ready");
    }

    onMessage(message)
    {
        const channel = message.channel;

        var text = message.content.toLowerCase();
        const keys = this.split(text);

        if(keys[0] == this.COMMAND_INDICATOR)
        {
            text = text.substr(1);
            const args = text.split(" ");

            for(var i = 0; i < this.commands.length; i++)
            {
                if(this.commands[i].name == args[0]) this.commands[i].execute(message);
            }
        }
    }
}

module.exports = new Bot();