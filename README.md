# Nesmes bot
A Telegram bot

## Get bot token
Firt you need the bot token from _BotFather_

### Start in develop mode
``` npm start <bot_token>```

## Run the image
### Download image
Get nesmes-bot image from registry
```shell
docker pull ghcr.io/brulks107/nesmes-bot:<version>
```
### Run the image
Run the image with the bot token

```shell
docker run -d bghcr.io/brulks107/nesmes-bot:<version> node index <bot_token>
```
