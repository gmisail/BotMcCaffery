var Discord = require('discordie')

const Events = Discord.Events
const Client = new Discord()

Client.connect({
    token: process.env.BOT_ID
})

function on_message_recieved(e)
{
    var message = e.message.content.toLowerCase()
    if(message == "never gonna")
    {
        e.message.channel.sendMessage("give you up, never gonna let you down, Never gonna run around and desert you, Never gonna make you cry, never gonna say goodbye, Never gonna tell a lie and hurt you")
    }
    else if(message == "hey now")
    {
        e.message.channel.sendMessage("https://www.youtube.com/watch?v=L_jWHffIx5E")
    }
    else if(message == "rick")
    {
        e.message.channel.sendMessage("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
    else if(message == "$400")
    {
        e.message.channel.sendMessage("http://www.dryships.com/")
    }
    else if(message == "where is my money?")
    {
        e.message.channel.sendMessage(":flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: ")
    }
}

Client.Dispatcher.on(Events.MESSAGE_CREATE, on_message_recieved)
