# Chrome-Extension---GrabTabTitle
This Chrome Extension allows you to quickly get the **title of the currently active tab** with a single button click.  
It is built using **Manifest V3**, HTML, CSS, and JavaScript.

---

## 🚀 Features

- Popup with a clean UI  
- A button that fetches the **current tab’s title**  
- Displays the tab title instantly in the popup  
- Uses Chrome's `chrome.tabs.query()` API  
- Lightweight and beginner-friendly

---

## 📂 Project Structure

Grab-Tab-Title/
│── manifest.json
│── popup.html
│── popup.js
│── icon.png

---

## 🧠 How It Works

1. When the user clicks the extension icon, a popup opens.
2. The popup contains a button labelled **"Get Title"**.
3. On clicking the button:
   - The extension calls `chrome.tabs.query()`  
   - Chrome returns the active tab  
   - The extension extracts `tab.title`  
   - The title is displayed in the popup

---

🛠 Installation (Load Unpacked)

1.Open Chrome → go to: chrome://extensions/

2.Enable Developer Mode

3.Click Load Unpacked

4.Select the project folder

5.The extension will appear in your Chrome toolbar

📸 Demo

<img width="512" height="404" alt="Screenshot 2025-11-20 165616" src="https://github.com/user-attachments/assets/40fe5ae2-1c64-41b4-828d-2c6aa7a59eeb" />

<img width="531" height="384" alt="Screenshot 2025-11-20 165600" src="https://github.com/user-attachments/assets/122de3fd-497b-402e-a11f-9297ae7d44e2" />


📜 Manifest Version

Built using Manifest V3, the latest Chrome extension framework.
