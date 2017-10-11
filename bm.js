var Discord = require('discord.js')

const Client = new Discord.Client()

function on_message_recieved(e)
{
    var message = e.content.toLowerCase()
    if(message == "never gonna")
    {
        e.sendMessage("give you up, never gonna let you down, Never gonna run around and desert you, Never gonna make you cry, never gonna say goodbye, Never gonna tell a lie and hurt you")
    }
    else if(message == "hey now")
    {
        e.sendMessage("https://www.youtube.com/watch?v=L_jWHffIx5E")
    }
    else if(message == "rick")
    {
        e.sendMessage("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
    else if(message == "$400")
    {
        e.sendMessage("http://www.dryships.com/")
    }
    else if(message == "where is my money?")
    {
        e.sendMessage(":flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: ")
    }
}

Client.on('message', on_message_recieved)

Client.login(process.env.BOT_TOKEN)