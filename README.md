# Nesmes bot
A Telegram bot

## Get bot token
Firt you need the bot token from _BotFather_

## Start in develop mode
``` npm start <bot_token>```

## Build container
Build `dist` folder in the root of the project
```shell
npm run build
```

Build the image in the root of the project
```shell
docker build -t ghcr.io/brulks107/nesmes-bot:<version> .
```

## Run the container
### Download image
Get nesmes-bot image from registry
```shell
docker pull ghcr.io/brulks107/nesmes-bot:<version>
```
### Run the container
Run the image with the bot token

```shell
docker run -d bghcr.io/brulks107/nesmes-bot:<version> node index <bot_token>
```
