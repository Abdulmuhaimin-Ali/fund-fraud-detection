"""
Name: fraud.py
Author: Shahob Zekria, Abdul Hamdan
Purpose: Does API calls to ChatGPT in order to evaluate if a transaction is fraudulent or not.
"""

from openai import OpenAI
from dotenv import load_dotenv, dotenv_values
import os
import json
import ast
load_dotenv()

transactions = open("backend\data\Modified_Charity_Transactions_Dataset.csv", "r")
transaction_data = transactions.readlines()
transactions.close()

employees = open("backend\data\employees.csv", "r")
employee_data = employees.readlines()
employees.close()

vendors = open("backend\data\\vendors.csv", "r")
vendor_data = vendors.readlines()
vendors.close()

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
Cross-check payroll transactions against official employee records and official vendor records.

Payments in Other Currencies:
Payments in other currencies are also suspicious as these are not international organizations.


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
{
  "charity": "<fund_id>",
  "data": {
    "total": <total_value_of_transactions>,
    "total_non_fraud": <total_value_of_non_fraudulent_transactions>,
    "non_fraud_ratio": <total_non_fraud/total>,
    "reasons": [
      "<reason_for_fraudulent_transaction_1>",
      "<reason_for_fraudulent_transaction_2>"
    ]
  }
}
When listing reasons, state the transaction ID and be somewhat specific as to what is wrong with the transaction.
Do not return any additional information outside this format. Do not return any text formatting and only return the JSON file.
Do not perform evaluations until the transaction data has been sent.
ONLY OUTPUT THE DATA PROMPTED FOR. DO NOT OUTPUT ANY TEXT"""

client = OpenAI(
  api_key=os.getenv("OPENAI_API_KEY")
)

completion = client.chat.completions.create(
    model="o1-mini",
    store=True,
    messages=[
        {"role": "user", "content": f"{prompt}"},
        {"role": "user", "content": f"The employees of this charity are here:{employee_data}\n\n"},
        {"role": "user", "content": f"The vendors of this charity are here:{vendor_data}"},
        {"role": "user", "content": f"Evaluate the transactions of this charity: {transaction_data}\n\n"}
    ]
)

response = completion.choices[0].message.content
file = open("output_again_again.json", "w")
file.write(response)
file.close()


