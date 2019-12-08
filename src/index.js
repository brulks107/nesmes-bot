const TelegramBot = require('node-telegram-bot-api');

const token = process.argv.slice(2)[0];
const tricornioURL = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.disfrazmania.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fimage%2F9df78eab33525d08d6e5fb8d27136e95%2Fs%2Fo%2Fsombrero_guardia_civil_adulto_30814.jpg&f=1&nofb=1';
const codereURL = 'http://www.paxinasgalegas.es/imagenes/codere-apuestas-deportivas_img279443t0.jpg';

console.log(token);
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/start/, msg => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'a ver estudiao!! ka ka ka');
    console.log('start command received');
});

bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toString().toLowerCase().includes('centro'))
        bot.sendMessage(chatId, '¿¿Dentro de la M-30?? Tu puta madre!');
    if (msg.text.toString().toLowerCase().includes('haces'))
        bot.sendPhoto(msg.chat.id, codereURL, { caption: '\nAquí, currando' });
});

bot.onText(/\/honor/, (msg) => {

    bot.sendPhoto(msg.chat.id, tricornioURL, { caption: '\nMi principal divisa' });
});