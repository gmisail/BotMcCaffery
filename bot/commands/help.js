var Command = require("../command");

class Help extends Command
{
    constructor()
    {
        super("help");
    }

    execute(message, args)
    {
        super.execute(message, args);

        var response = 'Available commands:\n* help - displays this interface\n* d20 - generates a random d20 value';

        message.channel.send(response);
    }
}

module.exports = new Help();