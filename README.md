# 📊 Instagram Follow Analyzer (React)

👉 **Live App:** https://claude.ai/public/artifacts/fbac1509-364c-4620-a713-6d37be835fc7

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
followers_and_following/

Inside this folder, you will find:

followers_1.json
following.json


These are the **only two files** required by the app.

Do not rename or edit them.

---

## 🖥 Using the App

1. Open the app in your browser
2. Upload:
   - `followers_1.json` using **Upload Followers**
   - `following.json` using **Upload Following**
3. The analysis runs automatically
4. Explore the results using the tabs:
   - **Not Following Back**
   - **You Don’t Follow Back**
5. Click a username to open their Instagram profile

---

## 🛠 Tech Stack

- React
- JavaScript (ES6+)
- FileReader API
- Client-side only (no backend)

---

## 🚫 What This App Does NOT Do

- ❌ Does not log into Instagram
- ❌ Does not use Instagram or Meta APIs
- ❌ Does not store user data
- ❌ Does not track users
- ❌ Does not upload files to any server

---

## 📁 Project Structure

```
instagram-follow-analyzer/
├── InstagramAnalyzer.jsx
├── README.md
└── .gitignore
```


Never upload your personal Instagram data to GitHub.

---

## ⚠️ Disclaimer

This project is for **educational and entertainment purposes only**.

- Not affiliated with Instagram or Meta
- Uses only data you explicitly download and provide
- Use responsibly and respectfully

---

## ✨ Why This Project Exists

Because sometimes analytics should be:
- Simple
- Visual
- Private
- A little ironic
- And actually fun 😌

Built for curiosity, not judgment.

---

## 🌱 Possible Extensions

- Export results to CSV
- Add search and filters
- Add dark mode
- Deploy to GitHub Pages
- Convert to a Python CLI version

---

## ⭐ Final Note

If this project made you curious, amused, or slightly uncomfortable —
then it worked exactly as intended.

Happy analyzing 💫


