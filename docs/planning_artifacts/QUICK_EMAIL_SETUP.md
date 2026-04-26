# Quick Email Setup - 3 Steps

## 🚀 Setup in 5 Minutes

### Step 1: Install Dependencies
```bash
cd functions
npm install
```

### Step 2: Configure Gmail
```bash
firebase functions:config:set email.user="your-email@gmail.com"
firebase functions:config:set email.password="your-app-password"
```

**Get Gmail App Password:**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Go to "App passwords"
4. Generate password for "Mail"
5. Copy the 16-character password

### Step 3: Deploy
```bash
firebase deploy --only functions
```

## ✅ Test It

1. Create a new account in your app
2. Check your email inbox
3. You should receive a beautiful welcome email!

## 📧 What You Get

### Email 1: Welcome (On Signup)
- Personalized greeting
- Onboarding guide
- Platform benefits
- Support information

### Email 2: Profile Complete (After Onboarding)
- Congratulations message
- Behavioral score display
- Dashboard link

## 🎨 Email Design

- **Theme**: Futuristic (black + green)
- **Responsive**: Works on all devices
- **Professional**: Beautiful HTML design
- **Branded**: Matches your app

## 💰 Cost

- **Free Tier**: 2M emails/month
- **Gmail**: Free (500/day limit)
- **SendGrid**: Free (100/day)

## 🐛 Troubleshooting

### Email not sending?
```bash
# Check logs
firebase functions:log

# Test locally
firebase emulators:start --only functions
```

### Email in spam?
- Use a verified domain
- Add SPF/DKIM records
- Use SendGrid for production

## 📚 Full Documentation

- **EMAIL_SETUP_GUIDE.md** - Complete guide
- **WELCOME_EMAIL_PREVIEW.md** - Visual preview
- **EMAIL_INTEGRATION_SUMMARY.md** - Full summary

---

**That's it! Your welcome emails are ready to go!** 📧✨
