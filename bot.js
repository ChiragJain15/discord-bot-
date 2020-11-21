const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const ytdl = require('ytdl-core');

const x = [
    'teri bua',
    'teri behan',
    'teri maa',
    'tere baap',
    'tere dada',
    'teri dadi',
    'tere nana',
    'teri nani',
    'tere foofa',
    'tere mausa',
    'teri mausi',
    'tere bhai',
    'tere chacha',
    'tere tau',
    'teri chachi',
    'teri tai'
]
const y = [
    'ka lund',
    'ke lawda',
    'ka bhosda',
    'ki chut',
    'ki gand',
    'ke gote',
    'ki jhate',
    'ke sthan'
]

client.login('Nzc1NTg3ODkyMzcwMjEwODI2.X6oggw.bfg1pqFP03OHE5z3dH6aNYOhWUg');

client.on('ready', () => {
    console.log(`I am Awake :smiley:`);
});

client.on('message', onMessage);

function onMessage(msg) {
    
    if (msg.content.includes('!cj roast'))
    {   
        request('https://evilinsult.com/generate_insult.php?lang=en&type=json',{json: true}, (err, res, body) =>{
        if (err) {return console.log(err);}
        msg.channel.send(body.insult);
        })
    }
    if (msg.content.includes('!cj insult'))
    {   
        request('https://insult.mattbas.org/api/insult',{json: true}, (err, res, body) =>{
        if (err) {return console.log(err);}
        msg.channel.send(body);
        })
    }
    if (msg.content.includes('!cj joke'))
    {   
          request('https://joke3.p.rapidapi.com/v1/joke?rapidapi-key=2475519c5amshdecf9e59ef7b06bp1edf2ajsncd4f6e529d35',{json: true}, function (error, response, body) {
              if (error) throw new Error(error);
              msg.channel.send(body["content"]);
          });
    }
    if (msg.content.includes('!gali'))
    {   
          msg.channel.send(`${x[Math.floor(Math.random() * x.length)]} ${y[Math.floor(Math.random() * y.length)]}`);
    }
}