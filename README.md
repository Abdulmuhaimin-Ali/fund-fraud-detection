# 🚀 Fund-Fraud-Detection  

**Fund-Fraud-Detection** is a full-stack fraud detection system developed using **Next.js, TypeScript, and Python**. It integrates the **OpenAI API** to analyze transactions and detect potential fraud cases. The system processes CSV datasets, validates financial records, and ensures high accuracy in fraud detection.  

## 📌 Features  
- 🕵️‍♂️ **AI-Powered Fraud Detection** – Utilizes OpenAI API to analyze financial transactions.  
- 📊 **Data Visualization** – Interactive charts to explore transaction trends.  
- 🔍 **Anomaly Detection** – Identifies suspicious patterns in transaction data.  
- 📁 **CSV Data Processing** – Automates financial record validation for 90% accuracy.  
- 📡 **Real-Time Alerts** – Notifies users of potential fraud in real time.  

---

## ⚙️ Installation  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Abdulmuhaimin-Ali/fund-fraud-detection.git
cd fund-fraud-detection
```

### 2️⃣ Install Dependencies  
#### Backend (Python)  
```bash
pip install
```

#### Frontend (Next.js, TypeScript)  
```bash
cd frontend
npm install
```

---

## 🚀 Running the Application  

### 1️⃣ Run the Backend API (Python)  
```bash
cd backend
python app.py
```

### 2️⃣ Run the Frontend (Next.js)  
```bash
cd frontend
npm run dev
```

---

## 🛠 Configuration  

Modify the **config.yaml** file to set database credentials, OpenAI API keys, and model parameters.  

Example **config.yaml**:  
```yaml
database:
  host: localhost
  user: admin
  password: yourpassword
openai:
  api_key: YOUR_OPENAI_API_KEY
model:
  threshold: 0.85
  algorithm: RandomForest
```

---


## 📂 Project Structure  

```
fund-fraud-detection/
│── backend/            # Python API for fraud detection
│   ├── data/           # Sample transaction datasets
│   ├── scripts
│   ├── app.py          # Main backend API
│── frontend/           # Next.js frontend
│   ├── public/         # Static assets
│   ├── src/            # Frontend source code
│       ├── components/ # UI Components
│       │   ├── CartItem.tsx
│       │   ├── Category.tsx
│       │   ├── DonationForm.tsx
│       │   ├── Footer.tsx
│       │   ├── Hero.tsx
│       │   ├── Nav.tsx
│       │   ├── PaymentForm.tsx
│       │   ├── Rating.tsx
│       │   ├── Trust.tsx
│       │   ├── charity.tsx
│       ├── app/        # Application logic
│   ├── next.config.js  # Next.js configuration
│   ├── package.json    # Dependencies
│── README.md           # Project documentation
```

---



