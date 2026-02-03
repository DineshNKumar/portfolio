# 📊 Portfolio Visitor Tracking Setup Guide

## Overview

This system tracks visitor information (IP address, location, device details) and automatically stores it in Google Sheets.

## 🎯 What Data is Collected?

- **Timestamp**: When the visitor accessed your portfolio
- **IP Address**: Visitor's IP address
- **Location**: City, Region, Country
- **Geographic Coordinates**: Latitude & Longitude
- **Timezone**: Visitor's timezone
- **ISP**: Internet Service Provider
- **Device Info**: Browser, OS, Screen Resolution
- **Language**: Browser language
- **Referrer**: Where they came from
- **Page URL**: Which page they viewed

## 🚀 Step-by-Step Setup

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Name it: "Portfolio Visitor Analytics" (or any name you prefer)
4. Keep this tab open - we'll come back to it

### Step 2: Set Up Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. You'll see a code editor with some default code
3. **Delete all the default code**
4. Open the file `google-apps-script.js` from your portfolio folder
5. **Copy all the code** from that file
6. **Paste it** into the Google Apps Script editor
7. Click the **💾 Save** icon (or Ctrl+S / Cmd+S)
8. Give your project a name: "Visitor Tracker"

### Step 3: Deploy the Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Portfolio Visitor Tracker"
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone**
5. Click **Deploy**
6. **Authorize the app** when prompted:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" if you see a warning
   - Click "Go to Visitor Tracker (unsafe)" - it's safe, it's your own script
   - Click "Allow"
7. **Copy the Web App URL** that appears - it looks like:
   ```
   https://script.google.com/macros/s/XXXXXXXX.../exec
   ```

### Step 4: Update Your Portfolio Code

1. Open `scripts/analytics.js` in your portfolio folder
2. Find this line at the top:
   ```javascript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the URL you copied
4. Example:
   ```javascript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby.../exec";
   ```
5. Save the file

### Step 5: Test It!

1. Open your portfolio in a browser (even locally)
2. Wait a few seconds
3. Go back to your Google Sheet
4. You should see a new row with your visit data! 🎉

## 📊 Your Analytics Dashboard

Your Google Sheet will automatically:

- Add headers with nice formatting (blue background)
- Auto-resize columns for readability
- Track all visitors in real-time

### Example of What You'll See:

| Timestamp           | IP Address      | City       | Region     | Country       | ... |
| ------------------- | --------------- | ---------- | ---------- | ------------- | --- |
| 2026-01-12 10:30:15 | 103.xxx.xxx.xxx | Chandigarh | Chandigarh | India         | ... |
| 2026-01-12 11:45:22 | 45.xxx.xxx.xxx  | New York   | New York   | United States | ... |

## 🔧 Troubleshooting

### Not Tracking Visits?

1. **Check the Console**:
   - Open browser DevTools (F12)
   - Look for errors in the Console tab
2. **Verify the URL**:
   - Make sure you copied the complete Web App URL
   - It should end with `/exec`

3. **Re-deploy**:
   - Go back to Apps Script
   - Click **Deploy** → **Manage deployments**
   - Click **Edit** (pencil icon)
   - Change version to "New version"
   - Click **Deploy**
   - Update the URL in `analytics.js`

4. **Check Permissions**:
   - The script needs "Anyone" access
   - You might need to re-authorize

### Testing Locally

The tracker works even when testing locally (file:// protocol) because:

- It uses a free IP location API (ipapi.co)
- Google Apps Script accepts requests from any origin
- No CORS issues

## 🌟 Features

### Privacy-Friendly

- Only public information is collected
- No cookies or personal data storage
- IP addresses are visible to track unique visitors

### Real-Time Tracking

- Instant data logging
- No delays or batch processing
- See visitors as they arrive

### Free Forever

- Uses free APIs
- No API keys needed
- No usage limits for normal traffic

## 📈 Analyzing Your Data

### In Google Sheets:

1. **Total Visitors**: Count of rows - 1 (excluding header)
2. **Unique Visitors**: Count unique IP addresses
3. **Top Countries**: Use COUNTIF for country column
4. **Peak Times**: Analyze timestamp patterns
5. **Referrer Sources**: See where traffic comes from

### Create Charts:

- Select your data
- Click **Insert** → **Chart**
- Choose chart type (pie, bar, line)

## 🔐 Security Notes

- The IP location API (ipapi.co) is legitimate and widely used
- Your Google Apps Script is private to your account
- Visitor data is stored only in your Google Sheet
- No third-party tracking or data sharing

## 📝 Important Notes

1. **Rate Limits**: The free IP API has a limit of ~1000 requests/day
   - Perfect for portfolio sites
   - If you exceed, upgrade to a paid API

2. **Privacy Compliance**:
   - Consider adding a privacy policy
   - Mention data collection in your footer
   - Comply with GDPR if you have EU visitors

3. **Data Retention**:
   - Regularly review and clean old data
   - Keep only what you need

## 🎨 Optional Enhancements

Want to add more features? You can:

- Add visitor counter display on your site
- Create a dashboard with charts
- Set up email notifications for new visitors
- Track page views and time spent
- Add geographic heat maps

## 💡 Need Help?

If something isn't working:

1. Check the browser console for errors
2. Verify your Google Apps Script URL
3. Make sure the script is deployed as "Anyone" access
4. Try incognito mode to test
5. Re-deploy the script with a new version

---

## ✅ Quick Checklist

- [ ] Created Google Sheet
- [ ] Set up Google Apps Script
- [ ] Deployed as Web App
- [ ] Copied Web App URL
- [ ] Updated analytics.js with URL
- [ ] Added analytics.js to index.html
- [ ] Tested and seeing data in Google Sheet

🎉 **Congratulations!** Your portfolio now tracks visitor analytics!
