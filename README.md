# Ecommerce website for Sneaker Design and Order:

For this application, we have designed an ecommerce website where you can design your very own sneakers, specifying input fields like Body color, sneaker style, and much more. We have used the text to image Genr API along side the dall-e model to generate realistic images that you can send to your local vendors. 

## We have also incorporated a Telegram bot for order tracking and delivery:

# Telegram Bot for Order Tracking:


This is a Telegram bot that allows drivers to track orders and confirm delivery using GPS location and picture confirmation. It also uses Genr API to generate product descriptions and emails to customers.

## Usage
To use this bot, follow these steps:

-Start a conversation with the bot by searching for it on Telegram and clicking on the "start" button.
-Provide your GPS location to the bot, which will be used to verify that the shipment has been delivered to the correct location.
-Share the delivery number with the bot.
-Share a picture of the shipment with the bot.
-The bot will automatically send an email to your logistics team with the delivery confirmation.

## Genr API
This project uses two endpoints of the Genr API:

/api/circuit-element/generate-captions: This is used to generate product descriptions for the shipments.

/api/circuit-element/prompt-to-text: This is used to generate emails to customers.

To use the Genr API, you will need to sign up for an API key and provide it in the appropriate fields in the project files.

## Project Structure and Flow
The project is structured as follows:

new.py: This is the main file that contains the code for the Telegram bot.

mail.py: This file contains the code for sending confirmation emails and product description and mail generation using the Genr API.

<img width="212" alt="image" src="https://user-images.githubusercontent.com/80200174/221349238-e0355314-b0b1-4294-b471-4029a7a3b6eb.png">
<img width="203" alt="image" src="https://user-images.githubusercontent.com/80200174/221349267-25759b3b-9bd6-4d01-92c5-24919035fbda.png">

## Results
<img width="187" alt="image" src="https://user-images.githubusercontent.com/80200174/221349337-5e901a14-c48b-45f3-8fa3-90a5f2157955.png">


## The flow of the project is as follows:

- The driver shares their GPS location with the bot.
- The driver shares the delivery number with the bot.
- The driver shares a picture of the shipment with the bot.
- The bot generates a product description and mail for the shipment using the Genr API.
- The bot generates an email to the customer using prompt-to-text API  and product description using generate-captions API of the Genr API.
- The bot sends the email to the customer.


## Conclusion
This Telegram bot is a useful tool for tracking orders and confirming delivery. By integrating GPS location and picture confirmation with Genr API, it streamlines the logistics process and provides accurate delivery confirmation to customers.



