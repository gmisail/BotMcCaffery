var Command = require("../command");

class D20 extends Command
{
    constructor()
    {
        super("d20");
    }

    execute(message, args)
    {
        super.execute(message, args);

        var response = Math.floor(Math.random() * (20 - 1)) + 1;
        message.channel.send(response);
    }
}

module.exports = new D20();