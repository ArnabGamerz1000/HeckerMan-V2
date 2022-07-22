const { Telegraf } = require('telegraf');
const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const fullPageScreenshot = require("puppeteer-full-page-screenshot").default;
const http = require('https');
var request = require('request');
var config = require('./config.json');
const fs = require('fs');
const bot = new Telegraf(config.telegram_token);
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
let version = "0.1.1";


bot.command('start', ctx => {
  console.log(ctx.from)
bot.telegram.sendMessage(ctx.chat.id, 'Hello! Welcome to Heckerman V2 Bot!\n I can help you for making azure accounts!\nPlease do /cmds for my commands', {
})
})

bot.command('cmds', ctx => {
  console.log(ctx.from)
bot.telegram.sendMessage(ctx.chat.id, 'Following Commands Are Currently Supported By the bot.\n/devplan - Azure Developer Plan SingUP.\n/trial - Azure $200 SingUP\n/payg - Azure Pay As You Go SingUP\n/status - for bot status.', {
})
})

bot.command('status', ctx => {
  console.log(ctx.from)
bot.telegram.sendMessage(ctx.chat.id, 'Heckerman V2.\n STATUS ￫ Alive ✅\n Proxy ￫ Connected ✅\n Bandwidth Left ￫ 1.69GB ⚠️', { 
})
})

bot.command('devplan', ctx => {
  console.log(ctx.from)
  let userpass = ctx.message.text.substring(9);
  let logininfo = userpass.split(":");
  if (userpass == ""){
    bot.telegram.sendMessage(ctx.chat.id, "Email:Pass cannot be empty!")
}
  else
      bot.telegram.sendMessage(ctx.chat.id,'SingUP Request Accepted✅\nThis might take a while. I will let you know when its done!');
        let url = "https://signup.azure.com/signup?offer=MS-AZR-0043P&appId=IbizaCatalogBlade";  
   (async () => {
          try{
const browser = await puppeteer.launch();
const page = await browser.newPage();
const recorder = new PuppeteerScreenRecorder(page);
const SavePath = './videos/' + ctx.from.username + '.mp4';  
await recorder.start(SavePath);
console.log("Singup Process Started");    
await page.goto(url);
await delay(9000);    
await page.type('input[id=i0116]', `${logininfo[0]}`, {delay: 30})     
console.log("Entering Email");
await page.screenshot({ path: './images/' + ctx.from.username + '.png' });
await page.click('[id="idSIButton9"]');
await delay(9000);
console.log("Entering Password");
await page.screenshot({ path: './images/' + ctx.from.username + '.png' });
await page.type('input[id=i0118]', `${logininfo[1]}`, {delay: 30})
await page.click('[id="idSIButton9"]')
await delay(5000);
console.log("Pressing Yes")
await page.screenshot({ path: './images//' + ctx.from.username + '.png' });
await page.click('[id="idSIButton9"]')
console.log("Wait for 30 sec");
await delay(30000);
await page.screenshot({ path: './images//' + ctx.from.username + '.png' });
console.log("Pressing Agreed to terms and conditions")
await page.click('[id="accept-terms"]')
await page.screenshot({ path: './images//' + ctx.from.username + '.png' });
console.log("Pressing Next")
await page.click('[id="accept-terms-submit-button"]')
await page.screenshot({ path: './images//' + ctx.from.username + '.png' });
 await page.evaluate(() => {
            document.getElementById("accept-terms").click();
            document.getElementById("accept-terms-submit-button").click();
        });
await page.screenshot({ path: './images//' + ctx.from.username + '.png' });
          await delay(9000);
          await page.click('[id="signup-button"')
          console.log("Clicking Submit")
          await page.evaluate(() => {
            document.getElementById("signup-button").click();
});

            console.log("Sleep for 60 sec")
          await delay(60000);
          console.log("Success.")
          await page.screenshot({ path: './images//' + ctx.from.username + '.png' });
          ctx.replyWithPhoto({source: './images//' + ctx.from.username + '.png'})
          await recorder.stop();
          await browser.close();
          ctx.replyWithVideo({ source: './videos/' + ctx.from.username + '.mp4' }, {caption: "Request Succeed✅\nHost: " + url + "\n\nRequest By: @" + ctx.from.username + "\nDeveloper: @fakehecker"});
      }
catch(e){
        console.error(e);
        bot.telegram.sendMessage(ctx.chat.id,"Filed!Error: " + e)
        bot.telegram.sendPhoto(ctx.chat.id, {source: './images/' + ctx.from.username + '.png'});
    }
      })();
})

bot.command('trial', ctx => {
  console.log(ctx.from)
  let userpass = ctx.message.text.substring(9);
  let hackinginfo = userpass.split(":");
  if (userpass == ""){
    bot.telegram.sendMessage(ctx.chat.id, "Email:Pass cannot be empty!")
}
  else
      bot.telegram.sendMessage(ctx.chat.id,'Azure $200 SingUP Request Accepted✅\nThis might take a while. I will let you know when its done!');
        let url = "https://signup.azure.com/signup?offer=ms-azr-0044p&appId=102&experimentId=175739&experimentGroup=variation&ref=azureplat-generic&redirectURL=https%3A%2F%2Fazure.microsoft.com%2Fen-us%2Fget-started%2Fwelcome-to-azure%3FexperimentId%3D175739%26experimentGroup%3Dvariation%0A";  
   (async () => {
          try{
const browser = await puppeteer.launch();
const page = await browser.newPage();
const recorder = new PuppeteerScreenRecorder(page);
const SavePath = './videos/' + ctx.from.username + '.mp4';  
await recorder.start(SavePath);
console.log("Singup Process Started");    
await page.goto(url);
await delay(9000);    
await page.type('input[id=i0116]', `${hackinginfo[0]}`, {delay: 30})     
console.log("Entering Email");
await page.screenshot({ path: './images/' + ctx.from.username + '.png' });
await page.click('[id="idSIButton9"]');
await delay(9000);
console.log("Entering Password");
await page.screenshot({ path: './images/' + ctx.from.username + '.png' });
await page.type('input[id=i0118]', `${hackinginfo[1]}`, {delay: 30})
await page.click('[id="idSIButton9"]')
await delay(5000);
console.log("Pressing Yes")
await page.screenshot({ path: './images//' + ctx.from.username + '.png' });
await page.click('[id="idSIButton9"]')
console.log("Wait for 30 sec");
await delay(30000);
await page.screenshot({ path: './images//' + ctx.from.username + '.png' });
console.log("Pressing Agreed to terms and conditions")
await page.click('[id="accept-terms"]')
await page.screenshot({ path: './images//' + ctx.from.username + '.png' });
console.log("Pressing Next")
await page.click('[id="accept-terms-submit-button"]')
await page.screenshot({ path: './images//' + ctx.from.username + '.png' });
 await page.evaluate(() => {
            document.getElementById("accept-terms").click();
            document.getElementById("accept-terms-submit-button").click();
        });
await page.screenshot({ path: './images//' + ctx.from.username + '.png' });
          await delay(9000);
          await page.click('[id="signup-button"')
          console.log("Clicking Submit")
          await page.evaluate(() => {
            document.getElementById("signup-button").click();
});

            console.log("Sleep for 60 sec")
          await delay(60000);
          console.log("Success.")
          await page.screenshot({ path: './images//' + ctx.from.username + '.png' });
          ctx.replyWithPhoto({source: './images//' + ctx.from.username + '.png'})
          await recorder.stop();
          await browser.close();
          ctx.replyWithVideo({ source: './videos/' + ctx.from.username + '.mp4' }, {caption: "Request Succeed✅\nHost: " + url + "\n\nRequest By: @" + ctx.from.username + "\nDeveloper: @fakehecker"});
      }
catch(e){
        console.error(e);
        bot.telegram.sendMessage(ctx.chat.id,"Filed!Error: " + e)
        bot.telegram.sendPhoto(ctx.chat.id, {source: './images/' + ctx.from.username + '.png'});
    }
      })();
})

bot.command('payg', ctx => {
  console.log(ctx.from)
bot.telegram.sendMessage(ctx.chat.id, 'Currently Unavailable⚠️', {
})
})

try{
    bot.launch();
}
catch(e){
    console.error("Bot unable to start with error: " + e)
}
finally{
    console.log("Bot has sprinted.")
}
