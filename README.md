# Telegram Bot for Order Tracking
This is a Telegram bot that allows drivers to track orders and confirm delivery using GPS location and picture confirmation. It also uses Genr API to generate product descriptions and emails to customers.

## Usage
To use this bot, follow these steps:

1)Start a conversation with the bot by searching for it on Telegram and clicking on the "start" button.
2)Provide your GPS location to the bot, which will be used to verify that the shipment has been delivered to the correct location.
3)Share the delivery number with the bot.
4)Share a picture of the shipment with the bot.
5)The bot will automatically send an email to your logistics team with the delivery confirmation.

## Genr API
This project uses two endpoints of the Genr API:

/api/circuit-element/generate-captions: This is used to generate product descriptions for the shipments.

/api/circuit-element/prompt-to-text: This is used to generate emails to customers.

To use the Genr API, you will need to sign up for an API key and provide it in the appropriate fields in the project files.

## Project Structure and Flow
The project is structured as follows:

new.py: This is the main file that contains the code for the Telegram bot.

mail.py: This file contains the code for sending confirmation emails and product description and mail generation using the Genr API.


## The flow of the project is as follows:

1)The driver shares their GPS location with the bot.
2)The driver shares the delivery number with the bot.
3)The driver shares a picture of the shipment with the bot.
4)The bot generates a product description and mail for the shipment using the Genr API.
5)The bot generates an email to the customer using prompt-to-text API  and product description using generate-captions API of the Genr API.
6)The bot sends the email to the customer.

## Conclusion
This Telegram bot is a useful tool for tracking orders and confirming delivery. By integrating GPS location and picture confirmation with Genr API, it streamlines the logistics process and provides accurate delivery confirmation to customers.



