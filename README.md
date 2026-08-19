# Modern Responsive React.js Portfolio Website

A clean, modern, and fully responsive personal portfolio website built with **React.js**, **Bootstrap 5**, and custom **CSS3**.

---

## ✨ Features

- **⚡ Modern Tech Stack**: Built with React 18, Vite, and Bootstrap 5.
- **📱 Fully Responsive**: Seamless experience across mobile phones, tablets, and desktop screens.
- **🎨 Minimal & Professional Design**: Smooth gradients, subtle card lift hover animations, backdrop blurs, and clean typography.
- **🧭 Responsive Sticky Navbar**: Mobile collapsible menu with smooth scroll links and active section detection.
- **🚀 Hero Section**: Floating tech badges, status indicator, customizable intro, and action CTAs.
- **💡 About Me**: Personal bio, stats counter, education & experience timeline cards, and career goals.
- **🛠️ Interactive Skills**: Filterable skill categories with Bootstrap icons and progress bars.
- **💻 Projects Showcase**: 4 project cards with mockups, tech stack tags, Live Demo, and GitHub repository links.
- **📬 EmailJS Contact Form**: Real-time email delivery directly to your Gmail inbox when visitors submit the contact form.
- **⚙️ Easy 1-File Customization**: All portfolio text, projects, skills, and links can be updated in `src/data/portfolioData.js`.

---

## 📧 How to Setup EmailJS (Receive Form Submissions in your Gmail)

Follow these quick 3 steps to connect the contact form to your Gmail (100% Free):

1. **Sign up at [EmailJS.com](https://www.emailjs.com/)** (Free tier gives you 200 emails/month).
2. **Add Email Service**:
   - Go to **Email Services** -> **Add New Service** -> Choose **Gmail** -> Connect your `gauravdhumal8767@gmail.com` account.
   - Note down your **Service ID** (e.g. `service_abc123`).
3. **Create Email Template**:
   - Go to **Email Templates** -> **Create New Template**.
   - Set the template content to:
     ```
     From: {{from_name}} ({{from_email}})
     Subject: {{subject}}
     Message:
     {{message}}
     ```
   - Note down your **Template ID** (e.g. `template_xyz789`).
4. **Get Public Key**:
   - Go to **Account** -> **API Keys** -> Copy your **Public Key** (e.g. `user_123456789`).
5. **Paste into `src/data/portfolioData.js`**:
   ```javascript
   emailjs: {
     serviceId: "service_abc123",
     templateId: "template_xyz789",
     publicKey: "user_123456789"
   }
   ```
Done! Any message submitted on your website will now instantly arrive in your Gmail inbox!

---

## 📁 Project Structure

```
webapp/
├── index.html                     # HTML5 template with Google fonts & EmailJS SDK
├── package.json                   # Dependencies & build scripts
├── vite.config.js                 # Vite bundler configuration
├── public/
│   ├── favicon.svg                # Modern SVG favicon
│   └── profile.jpeg               # Profile photo
├── src/
│   ├── main.jsx                   # React root mount
│   ├── App.jsx                    # Root component connecting sections
│   ├── index.css                  # Global styles, variables & Bootstrap imports
│   ├── App.css                    # Custom component styles & animations
│   ├── data/
│   │   └── portfolioData.js       # 📝 Centralized customization file
│   └── components/
│       ├── Navbar.jsx             # Fixed responsive navbar
│       ├── Hero.jsx               # Hero landing section with photo
│       ├── About.jsx              # About, experience & education
│       ├── Skills.jsx             # Skills cards & progress bars
│       ├── Projects.jsx           # Project showcase cards
│       ├── Contact.jsx            # EmailJS contact form & social channels
│       └── Footer.jsx             # Footer & Back-to-top button
└── README.md
```

---

## 🚀 How to Run Locally

### Option 1: Instant Browser Preview (Zero Installation)
Simply double click or open **`index.html`** or **`preview.html`** in any web browser.

### Option 2: Local Web Server
```bash
python -m http.server 3000
```
Open `http://localhost:3000`.

### Option 3: Vite React Development
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.
