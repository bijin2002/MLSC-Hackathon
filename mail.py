import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.base import MIMEBase
from email import encoders
import json

import requests

def mail(location, delivery_number, img_link):
    url = "https://v1.genr.ai/api/circuit-element/prompt-to-text"
    payload = {
        "prompt": f'write a business mail with catchy and good paras and apacing to customer to inform them about their order with  delivery_id {delivery_number}and location {location} with image of shipment attached with mail with proper indentation and spacing',
        "max_tokens": 1000,
        "temperature": 0.5
    }
    headers = {"Content-Type": "application/json"}

    response = requests.request("POST", url, json=payload, headers=headers)
    mail_body = response.text
    parsed_output = json.loads(mail_body)
    text = parsed_output["output"]
    text = text.replace("\n\n", "\n")

    url1 = "https://v1.genr.ai/api/circuit-element/generate-captions"

    payload_img = {
        "img_url": img_link,
        "n_words": 10
    }
    headers1 = {"Content-Type": "application/json"}

    response1 = requests.request("POST", url1, json=payload_img, headers=headers1)
    mail_body1 = response1.text
    parsed_output1 = json.loads(mail_body1)
    text1 = parsed_output1["output"]
    text1= text1.replace("\n\n", "\n")
    # email content
    mail_content = f'''
    <head>
        <p>Your Order Status :</p>
        <p>{text}</p>
        <p> Product Description :{text1}</p>
    </head>
    <img src="{img_link}" width="200" height="200">
    '''

    # email details
    sender_address = 'trackmyorder15@gmail.com'
    sender_pass = 'edfdvhlfnryjhxsm'
    receiver_address = 'arunav014.ac@gmail.com'
    subject = f"Order Statuse for : Delivery Number: {delivery_number}"

    # create message object
    message = MIMEMultipart()
    message['From'] = sender_address
    message['To'] = receiver_address
    message['Subject'] = subject
    message.attach(MIMEText(mail_content, 'html'))

    # create SMTP session for sending the mail
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as session:
        session.ehlo()
        session.login(sender_address, sender_pass)
        session.sendmail(sender_address, receiver_address, message.as_string())

    print('Mail Sent Successfully')
