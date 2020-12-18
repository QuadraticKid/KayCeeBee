var mineflayer = require('mineflayer')


var bot = mineflayer.createBot({
    host:"kaboom.pw",
    port:25565,
    username:"<<KFC>>"
})

bot.chat = (m)=>{
    bot.write('chat', {message:m})
}

bot.on('login', ()=>{
    console.log("login")
    bot.chat("<<KFC>> A utilitybot byqUAD!")
})

bot.on('chat', ()=>{
    bot.chat("hey there you should join the OFFICAIL KFC DISCORD AT DISCORD.GG/SANDERS ")
})

bot.on('exist', ()=>{
    bot.advertise();
})
