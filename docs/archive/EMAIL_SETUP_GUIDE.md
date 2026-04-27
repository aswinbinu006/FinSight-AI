# Welcome Email Setup Guide

## Overview
Automated welcome emails are sent to users when they:
1. **Sign up** - Beautiful welcome email with onboarding instructions
2. **Complete onboarding** - Congratulations email with their behavioral score

## Email Features

### Welcome Email Includes:
- 🎉 Personalized greeting with user's name
- 📊 Overview of 4 AI models (Health, Waste, Goal, Cluster)
- 🎯 Step-by-step onboarding guide
- 💡 Platform benefits and statistics
- 🛡️ Security and privacy information
- 📧 Support contact information
- 🔗 Call-to-action buttons
- 📱 Social media links

### Onboarding Complete Email Includes:
- ✅ Congratulations message
- 📊 Visual behavioral score display
- 🎯 Average score calculation
- 🔗 Direct link to dashboard
- 🎨 Futuristic design matching app theme

## Setup Instructions

### Step 1: Install Dependencies
```bash
cd functions
npm install
```

### Step 2: Configure Email Service

#### Option A: Gmail (Recommended for Testing)
1. Create a Gmail account or use existing one
2. Enable "Less secure app access" or use App Password
3. Set Firebase config:
```bash
firebase functions:config:set email.user="your-email@gmail.com" email.password="your-app-password"
```

#### Option B: SendGrid (Recommended for Production)
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Get API key
3. Update `functions/index.js`:
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(functions.config().sendgrid.key);
```

#### Option C: Custom SMTP
Update the transporter in `functions/index.js`:
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.your-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.password
  }
});
```

### Step 3: Deploy Functions
```bash
firebase deploy --only functions
```

### Step 4: Test Email Sending
1. Create a new account in your app
2. Check your email inbox
3. Verify welcome email received
4. Complete onboarding
5. Check for onboarding complete email

## Email Templates

### Welcome Email Preview
```
┌─────────────────────────────────────┐
│   ⚡ FINSIGHT.AI                    │
│   FINANCIAL INTELLIGENCE ENGINE     │
├─────────────────────────────────────┤
│                                     │
│   Welcome Aboard, John! 🚀          │
│                                     │
│   Thank you for joining FinSight AI │
│   – your personal financial         │
│   intelligence platform...          │
│                                     │
│   🎯 What's Next?                   │
│   1️⃣ Complete Behavioral Profile    │
│   2️⃣ Get Financial Health Score     │
│   3️⃣ Discover Hidden Savings        │
│   4️⃣ Set & Achieve Goals            │
│                                     │
│   [Start Your Journey →]            │
│                                     │
│   💡 Why FinSight AI?               │
│   4 AI Models | 10 Factors | 24/7   │
│                                     │
└─────────────────────────────────────┘
```

### Onboarding Complete Email Preview
```
┌─────────────────────────────────────┐
│   🎉 Profile Complete!              │
├─────────────────────────────────────┤
│                                     │
│   Congratulations, John!            │
│                                     │
│   Your behavioral profile has been  │
│   analyzed by our AI...             │
│                                     │
│        ┌─────────┐                  │
│        │   7.5   │                  │
│        │ Avg Score│                 │
│        └─────────┘                  │
│                                     │
│   Your score is 75%                 │
│                                     │
│   [View Your Dashboard →]           │
│                                     │
└─────────────────────────────────────┘
```

## Customization

### Change Email Sender
Edit `functions/index.js`:
```javascript
from: '"Your Company" <noreply@yourcompany.com>'
```

### Customize Email Content
Edit the HTML templates in `functions/index.js`:
- `generateWelcomeEmailHTML()` - Welcome email
- `generateOnboardingCompleteEmailHTML()` - Onboarding complete email

### Add More Email Triggers
Add new Cloud Functions:
```javascript
// Example: Send email when health score is calculated
exports.sendHealthScoreEmail = functions.firestore
  .document('users/{userId}')
  .onUpdate(async (change, context) => {
    const after = change.after.data();
    if (after.health?.score) {
      // Send email with health score
    }
  });
```

## Email Design Features

### Responsive Design
- Mobile-friendly layout
- Adapts to screen size
- Readable on all devices

### Brand Consistency
- Matches app theme (black background, green primary)
- Uses same typography (bold, italic, uppercase)
- Consistent color scheme (#14B8A6)

### Accessibility
- High contrast text
- Clear call-to-action buttons
- Semantic HTML structure

## Testing

### Test Welcome Email
```bash
# Create test user
curl -X POST http://localhost:5001/finsight-ai-app/us-central1/sendWelcomeEmail \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "displayName": "Test User"}'
```

### Test in Firebase Emulator
```bash
firebase emulators:start --only functions
```

### Check Function Logs
```bash
firebase functions:log
```

## Troubleshooting

### Email not sending
- Check Firebase Functions logs: `firebase functions:log`
- Verify email config: `firebase functions:config:get`
- Check SMTP credentials
- Verify internet connectivity

### Email goes to spam
- Use verified sender domain
- Add SPF and DKIM records
- Use reputable email service (SendGrid, Mailgun)
- Avoid spam trigger words

### Function timeout
- Increase timeout in `functions/index.js`:
```javascript
exports.sendWelcomeEmail = functions
  .runWith({ timeoutSeconds: 300 })
  .auth.user().onCreate(...)
```

### Rate limiting
- Implement email queue
- Use batch sending
- Add retry logic

## Cost Estimation

### Firebase Functions
- Free tier: 2M invocations/month
- Paid: $0.40 per million invocations

### Email Service
- Gmail: Free (limited to 500/day)
- SendGrid: Free tier (100 emails/day)
- Mailgun: $0.80 per 1,000 emails

### Estimated Monthly Cost
- 1,000 signups: ~$0.40 (functions) + $0.80 (emails) = $1.20
- 10,000 signups: ~$4.00 (functions) + $8.00 (emails) = $12.00

## Security Best Practices

### Protect Email Credentials
- Never commit credentials to git
- Use Firebase Functions config
- Rotate passwords regularly

### Validate Email Addresses
- Check email format
- Verify domain exists
- Use email verification

### Rate Limiting
- Limit emails per user
- Implement cooldown periods
- Monitor for abuse

## Advanced Features

### Email Analytics
- Track open rates
- Monitor click-through rates
- A/B test subject lines

### Personalization
- Use user data for customization
- Dynamic content based on behavior
- Localization support

### Email Sequences
- Welcome series (Day 1, 3, 7)
- Re-engagement campaigns
- Feature announcements

## Environment Variables

### Local Development (.env)
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

### Firebase Functions Config
```bash
firebase functions:config:set email.user="your-email@gmail.com"
firebase functions:config:set email.password="your-app-password"
```

## Deployment Checklist

- [ ] Install dependencies: `cd functions && npm install`
- [ ] Configure email service
- [ ] Set Firebase Functions config
- [ ] Test locally with emulator
- [ ] Deploy functions: `firebase deploy --only functions`
- [ ] Test with real signup
- [ ] Monitor function logs
- [ ] Check email delivery
- [ ] Verify email design on mobile
- [ ] Set up email analytics (optional)

## Next Steps

1. **Immediate**: Deploy functions and test welcome email
2. **Short-term**: Add more email triggers (password reset, notifications)
3. **Long-term**: Implement email sequences and analytics

## Resources

- [Firebase Functions Docs](https://firebase.google.com/docs/functions)
- [Nodemailer Docs](https://nodemailer.com/)
- [SendGrid Docs](https://docs.sendgrid.com/)
- [Email Design Best Practices](https://www.campaignmonitor.com/resources/guides/email-design/)

---

**Status**: Email system ready for deployment! 📧
