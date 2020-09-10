const { bot } = require('./bot')
const { config } = require('./config')
const { setWebhook } = require('./setWebhook')
const express = require('express')

const app = express()

app.use(bot.webhookCallback('/callback'))

app.get('/', setWebhook)

if (config.isDevelopment) {
  console.log('listening local')
  bot.launch()
}

app.listen(config.appPort, () => {
  console.log(`listening on ${config.appPort}`)
})
