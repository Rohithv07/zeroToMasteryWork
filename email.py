import smtplib
from email.message import EmailMessage

email = EmailMessage()
email['from'] = #your email id
email['to'] = #receivers email id
email['subject'] = "Using python"
email.set_content("I Love You")

with smtplib.SMTP(host="smtp.andyes.net", port="25") as smtp:
    smtp.ehlo()  #for connection to server
    smtp.starttls()  #for connection to server
    smtp.login('#your email id', "your password")
    smtp.send_message(email)
    print("Message sent")
