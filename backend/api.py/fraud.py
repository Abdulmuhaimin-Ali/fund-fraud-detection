"""
Name: fraud.py
Author: Shahob Zekria
Purpose: Does API calls to ChatGPT in order to evaluate if a transaction is fraudulent or not.
"""

from openai import OpenAI
from dotenv import load_dotenv, dotenv_values
import os
import json
import ast
load_dotenv()

file = open("backend\data\EducationCharity.json", "r")
data = file.readlines()
file.close()

prompt="""You are an expert fraud analyst. Your task is to analyze financial transactions and identify fraudulent activities based on the following criteria:

Potential Instances of Fraud:
Sudden Large Withdrawals:
Large, unusual transactions being paid out from the charity to individuals.
Compare transaction amounts to historical patterns for anomalies.
Transactions of $50,000 or more may be deemed suspicious.

Duplicate Payments:
The same amount being paid to the same recipient multiple times in quick succession (e.g., within a few days).
Ghost Employees/Vendors:

Non-existent or fake entities receiving payments from the charity:
Cross-check payroll transactions against official employee records.


Tracking and Reporting Requirements:
Keep track of:

The total transaction amount for each charity.
The total non-fraudulent transaction amount for each charity.
A list of fraudulent transactions along with the reasons for classification.
Accuracy Requirements:

Ensure that all monetary calculations are precise and correctly summed.
Fraud detection must strictly follow the provided criteria—do not create additional guidelines.
When a transaction is labeled as fraudulent, provide a clear reason based on the criteria above.
Date Format:
Use YYYY-MM-DD format for all dates.
Output Format (Strictly Follow This JSON Structure):
json
Copy
Edit
{
  "charity": "<charity_id>",
  "data": {
    "total": <total_value_of_transactions>,
    "total_non_fraud": <total_value_of_non_fraudulent_transactions>,
    "reasons": [
      "<reason_for_fraudulent_transaction_1>",
      "<reason_for_fraudulent_transaction_2>"
    ]
  }
}
Do not return any additional information outside this format. Do not return any text formatting and only return the JSON file."""

client = OpenAI(
  api_key=os.getenv("OPENAI_API_KEY")
)

completion = client.chat.completions.create(
    model="gpt-4o-mini",
    store=True,
    messages=[
        {"role": "system", "content": f"{prompt}"},
        {"role": "user", "content": f"Evaluate the transactions of this charity: {data}"}
    ]
)

response = completion.choices[0].message.content
file = open("output.json", "w")
file.write(response)
file.close()
