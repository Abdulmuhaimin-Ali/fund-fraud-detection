"""
Name: fraud.py
Author: Shahob Zekria
Purpose: Does API calls to ChatGPT in order to evaluate if a transaction is fraudulent or not.
"""

from openai import OpenAI
from dotenv import load_dotenv, dotenv_values
import os
load_dotenv()

client = OpenAI(
  api_key=os.getenv("OPENAI_API_KEY")
)

completion = client.chat.completions.create(
    model="gpt-4o-mini",
    store=True,
    messages=[
        {"role": "system", "content": "You are an expert fraud analyst."},
        {"role": "user", "content": "Analyze this transaction: { 'id': 'TX12345', 'amount': 5000, 'currency': 'USD', 'location': 'Russia', 'device': 'New iPhone', 'previous_transactions': [] }"}
    ]
)

print(completion.choices[0].message.content)
