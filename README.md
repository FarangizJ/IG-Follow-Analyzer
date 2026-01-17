# 📊 Instagram Follow Analyzer (React)

A fun, client-side React application that helps you understand your Instagram connections:
- Who doesn’t follow you back
- Who you don’t follow back
- How many mutual follows you have

Built for curiosity, clarity, and a little bit of Saturday-night fun ✨

---

## 🚀 What This App Does

This app analyzes **your own Instagram data** (exported directly from Instagram) and shows:

- ❌ Accounts you follow that don’t follow you back  
- ➕ Accounts that follow you but you don’t follow back  
- 🤝 Mutual followers  
- 📈 Summary statistics (followers, following, mutuals)

No login.  
No Instagram API.  
No backend.  
No data storage.

Everything runs **locally in your browser**.

---

## 🧠 How It Works (High Level)

1. Instagram lets you download your personal data in **JSON format**
2. You upload:
   - `followers_1.json`
   - `following.json`
3. The app:
   - Reads the files in your browser
   - Extracts usernames
   - Compares followers vs following
4. Results are displayed instantly

Your data **never leaves your device**.

---

## 🔐 Privacy & Security

This project is designed with privacy first:

- ✅ No API usage
- ✅ No authentication
- ✅ No servers
- ✅ No analytics
- ✅ No data storage
- ✅ Files stay on your computer

You choose the files.  
You upload them manually.  
Nothing is saved or sent anywhere.

---

## 📥 How to Download Your Instagram Data (Step-by-Step)

> Screenshots in this guide are from the author’s own Instagram account and are used for educational purposes only.

### 1️⃣ Open Accounts Center

1. Open **Instagram**
2. Go to **Profile → Settings**
3. Tap **Accounts Center**
4. Select **Your information and permissions**

---

### 2️⃣ Create an Export

1. Tap **Export your information**
2. Choose **Create export**
3. Select your Instagram profile

---

### 3️⃣ Choose What to Download

Under **Connections**, select:

- ✅ **Followers and following**

⚠️ You do NOT need:
- Messages
- Media
- Ads
- Insights
- Contacts

Only **Followers and following**.

---

### 4️⃣ Export Settings (Important)

Set the following options:

- **Export to:** Device  
- **Format:** JSON  
- **Date range:**  
  - Last year ✅ or  
  - All time ✅ (both work)

Then tap **Start export**.

---

### 5️⃣ Download the Files

- Instagram will notify you when the export is ready
- You’ll have **4 days** to download it
- Download the **ZIP file** to your computer

---

## 📂 Finding the Right Files

After extracting the ZIP file, navigate to:

