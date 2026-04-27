const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configure email transporter
// You'll need to set these in Firebase Functions config
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

/**
 * Send welcome email when a new user signs up
 */
exports.sendWelcomeEmail = functions.auth.user().onCreate(async (user) => {
  const email = user.email;
  const displayName = user.displayName || 'Valued User';
  
  const mailOptions = {
    from: '"FinSight AI" <noreply@finsight-ai.com>',
    to: email,
    subject: '🎉 Welcome to FinSight AI - Your Financial Intelligence Journey Begins',
    html: generateWelcomeEmailHTML(displayName, email)
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent to:', email);
    return null;
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return null;
  }
});

/**
 * Send email when user completes behavioral assessment
 */
exports.sendOnboardingCompleteEmail = functions.firestore
  .document('users/{userId}')
  .onUpdate(async (change, context) => {
    const before = change.before.data();
    const after = change.after.data();
    
    // Check if behavioral assessment was just completed
    if (!before.behavioral?.completed && after.behavioral?.completed) {
      const email = after.email;
      const displayName = after.displayName || 'Valued User';
      
      const mailOptions = {
        from: '"FinSight AI" <noreply@finsight-ai.com>',
        to: email,
        subject: '✅ Your Financial Profile is Ready - FinSight AI',
        html: generateOnboardingCompleteEmailHTML(displayName, after)
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log('Onboarding complete email sent to:', email);
      } catch (error) {
        console.error('Error sending onboarding email:', error);
      }
    }
    
    return null;
  });

/**
 * Generate welcome email HTML
 */
function generateWelcomeEmailHTML(displayName, email) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to FinSight AI</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #0A0A0A;
      color: #ffffff;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #111111;
      border-radius: 20px;
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #14B8A6 0%, #0D9488 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .logo {
      font-size: 32px;
      font-weight: 900;
      letter-spacing: 0.3em;
      color: #000000;
      text-transform: uppercase;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 28px;
      font-weight: 800;
      font-style: italic;
      margin-bottom: 20px;
      color: #14B8A6;
    }
    .message {
      font-size: 16px;
      line-height: 1.8;
      color: #cccccc;
      margin-bottom: 30px;
    }
    .features {
      background-color: #1a1a1a;
      border-radius: 15px;
      padding: 30px;
      margin: 30px 0;
    }
    .feature {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
    }
    .feature:last-child {
      margin-bottom: 0;
    }
    .feature-icon {
      width: 40px;
      height: 40px;
      background-color: #14B8A6;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      margin-right: 15px;
      flex-shrink: 0;
    }
    .feature-content h3 {
      margin: 0 0 5px 0;
      font-size: 18px;
      font-weight: 700;
      color: #ffffff;
    }
    .feature-content p {
      margin: 0;
      font-size: 14px;
      color: #999999;
      line-height: 1.6;
    }
    .cta-button {
      display: inline-block;
      background-color: #14B8A6;
      color: #000000;
      text-decoration: none;
      padding: 18px 40px;
      border-radius: 15px;
      font-weight: 800;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin: 20px 0;
      transition: all 0.3s;
    }
    .cta-button:hover {
      background-color: #0D9488;
      transform: scale(1.05);
    }
    .stats {
      display: flex;
      justify-content: space-around;
      margin: 30px 0;
      padding: 20px;
      background-color: #1a1a1a;
      border-radius: 15px;
    }
    .stat {
      text-align: center;
    }
    .stat-number {
      font-size: 32px;
      font-weight: 900;
      color: #14B8A6;
      font-style: italic;
    }
    .stat-label {
      font-size: 12px;
      color: #666666;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-top: 5px;
    }
    .footer {
      background-color: #0A0A0A;
      padding: 30px;
      text-align: center;
      border-top: 1px solid #222222;
    }
    .footer-text {
      font-size: 12px;
      color: #666666;
      line-height: 1.6;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-link {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-color: #1a1a1a;
      border-radius: 10px;
      margin: 0 5px;
      line-height: 40px;
      text-decoration: none;
      color: #14B8A6;
      font-size: 18px;
    }
    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, #14B8A6, transparent);
      margin: 30px 0;
    }
    .highlight {
      color: #14B8A6;
      font-weight: 700;
    }
    .quote {
      border-left: 4px solid #14B8A6;
      padding-left: 20px;
      margin: 30px 0;
      font-style: italic;
      color: #999999;
    }
  </style>
</head>
<body>
  <div style="padding: 40px 20px;">
    <div class="container">
      <!-- Header -->
      <div class="header">
        <div class="logo">⚡ FINSIGHT.AI</div>
        <p style="margin: 10px 0 0 0; color: #000000; font-size: 14px; font-weight: 600; letter-spacing: 0.2em;">FINANCIAL INTELLIGENCE ENGINE</p>
      </div>

      <!-- Content -->
      <div class="content">
        <div class="greeting">Welcome Aboard, ${displayName}! 🚀</div>
        
        <p class="message">
          Thank you for joining <span class="highlight">FinSight AI</span> – your personal financial intelligence platform. 
          We're thrilled to have you as part of our community of forward-thinking individuals who are taking control 
          of their financial future with the power of AI.
        </p>

        <div class="divider"></div>

        <h2 style="font-size: 22px; font-weight: 800; color: #ffffff; margin-bottom: 20px;">🎯 What's Next?</h2>
        
        <div class="features">
          <div class="feature">
            <div class="feature-icon">1️⃣</div>
            <div class="feature-content">
              <h3>Complete Your Behavioral Profile</h3>
              <p>Answer 10 quick questions to help our AI understand your financial personality and spending patterns.</p>
            </div>
          </div>
          
          <div class="feature">
            <div class="feature-icon">2️⃣</div>
            <div class="feature-content">
              <h3>Get Your Financial Health Score</h3>
              <p>Receive an instant AI-powered analysis of your financial wellness with personalized insights.</p>
            </div>
          </div>
          
          <div class="feature">
            <div class="feature-icon">3️⃣</div>
            <div class="feature-content">
              <h3>Discover Hidden Savings</h3>
              <p>Our Waste Recovery AI identifies subscriptions and expenses you can optimize or eliminate.</p>
            </div>
          </div>
          
          <div class="feature">
            <div class="feature-icon">4️⃣</div>
            <div class="feature-content">
              <h3>Set & Achieve Goals</h3>
              <p>Use our Goal Intelligence system to create realistic financial goals and track your progress.</p>
            </div>
          </div>
        </div>

        <div style="text-align: center; margin: 40px 0;">
          <a href="https://finsight-ai-app.web.app/onboarding/step1" class="cta-button">
            Start Your Journey →
          </a>
        </div>

        <div class="divider"></div>

        <h2 style="font-size: 22px; font-weight: 800; color: #ffffff; margin-bottom: 20px;">💡 Why FinSight AI?</h2>
        
        <div class="stats">
          <div class="stat">
            <div class="stat-number">4</div>
            <div class="stat-label">AI Models</div>
          </div>
          <div class="stat">
            <div class="stat-number">10</div>
            <div class="stat-label">Behavioral Factors</div>
          </div>
          <div class="stat">
            <div class="stat-number">24/7</div>
            <div class="stat-label">AI Insights</div>
          </div>
        </div>

        <p class="message">
          Our platform combines <span class="highlight">cutting-edge AI technology</span> with behavioral science 
          to provide you with personalized financial insights that adapt to your unique situation. Unlike traditional 
          financial tools, we understand that money management is as much about psychology as it is about numbers.
        </p>

        <div class="quote">
          "Financial freedom is available to those who learn about it and work for it." 
          <br>– Robert Kiyosaki
        </div>

        <div class="divider"></div>

        <h2 style="font-size: 22px; font-weight: 800; color: #ffffff; margin-bottom: 20px;">🛡️ Your Data is Secure</h2>
        
        <p class="message">
          We take your privacy seriously. All your data is encrypted and stored securely using Firebase's 
          enterprise-grade infrastructure. You have complete control over your information, and we never 
          share your personal data with third parties.
        </p>

        <div style="background-color: #1a1a1a; border-radius: 15px; padding: 20px; margin: 20px 0;">
          <p style="margin: 0; font-size: 14px; color: #999999;">
            <strong style="color: #14B8A6;">Your Account Details:</strong><br>
            Email: ${email}<br>
            Account Created: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br>
            Status: Active ✅
          </p>
        </div>

        <div class="divider"></div>

        <h2 style="font-size: 22px; font-weight: 800; color: #ffffff; margin-bottom: 20px;">📚 Need Help?</h2>
        
        <p class="message">
          Our support team is here to help you every step of the way. If you have any questions or need 
          assistance, don't hesitate to reach out:
        </p>

        <ul style="color: #999999; line-height: 2;">
          <li>📧 Email: <a href="mailto:support@finsight-ai.com" style="color: #14B8A6; text-decoration: none;">support@finsight-ai.com</a></li>
          <li>💬 Live Chat: Available in your dashboard</li>
          <li>📖 Help Center: <a href="https://finsight-ai-app.web.app/help" style="color: #14B8A6; text-decoration: none;">Visit Help Center</a></li>
        </ul>

        <div style="text-align: center; margin: 40px 0;">
          <p style="font-size: 18px; font-weight: 700; color: #ffffff; margin-bottom: 10px;">
            Ready to transform your financial future?
          </p>
          <a href="https://finsight-ai-app.web.app/dashboard" class="cta-button">
            Go to Dashboard →
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <div class="social-links">
          <a href="#" class="social-link">𝕏</a>
          <a href="#" class="social-link">in</a>
          <a href="#" class="social-link">f</a>
          <a href="#" class="social-link">📧</a>
        </div>
        
        <p class="footer-text">
          © ${new Date().getFullYear()} FinSight AI. All rights reserved.<br>
          Powered by AI • Built for Your Financial Success<br><br>
          
          You're receiving this email because you created an account at FinSight AI.<br>
          <a href="#" style="color: #14B8A6; text-decoration: none;">Unsubscribe</a> | 
          <a href="#" style="color: #14B8A6; text-decoration: none;">Privacy Policy</a> | 
          <a href="#" style="color: #14B8A6; text-decoration: none;">Terms of Service</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Generate onboarding complete email HTML
 */
function generateOnboardingCompleteEmailHTML(displayName, userData) {
  const scores = userData.behavioral?.scores || {};
  const avgScore = Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length;
  const scorePercentage = ((avgScore / 10) * 100).toFixed(0);
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Financial Profile is Ready</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #0A0A0A;
      color: #ffffff;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #111111;
      border-radius: 20px;
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #14B8A6 0%, #0D9488 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .content {
      padding: 40px 30px;
    }
    .score-circle {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: conic-gradient(#14B8A6 ${scorePercentage}%, #1a1a1a ${scorePercentage}%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 30px auto;
      position: relative;
    }
    .score-inner {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: #111111;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .score-number {
      font-size: 36px;
      font-weight: 900;
      color: #14B8A6;
    }
    .score-label {
      font-size: 12px;
      color: #666666;
      text-transform: uppercase;
    }
    .cta-button {
      display: inline-block;
      background-color: #14B8A6;
      color: #000000;
      text-decoration: none;
      padding: 18px 40px;
      border-radius: 15px;
      font-weight: 800;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div style="padding: 40px 20px;">
    <div class="container">
      <div class="header">
        <h1 style="margin: 0; font-size: 32px; font-weight: 900; color: #000000;">🎉 Profile Complete!</h1>
      </div>
      
      <div class="content">
        <h2 style="font-size: 24px; font-weight: 800; color: #14B8A6;">Congratulations, ${displayName}!</h2>
        
        <p style="font-size: 16px; color: #cccccc; line-height: 1.8;">
          Your behavioral profile has been analyzed by our AI, and your personalized financial intelligence dashboard is now ready!
        </p>

        <div class="score-circle">
          <div class="score-inner">
            <div class="score-number">${avgScore.toFixed(1)}</div>
            <div class="score-label">Avg Score</div>
          </div>
        </div>

        <p style="font-size: 16px; color: #cccccc; line-height: 1.8; text-align: center;">
          Your behavioral score is <strong style="color: #14B8A6;">${scorePercentage}%</strong>
        </p>

        <div style="text-align: center; margin: 40px 0;">
          <a href="https://finsight-ai-app.web.app/dashboard" class="cta-button">
            View Your Dashboard →
          </a>
        </div>

        <p style="font-size: 14px; color: #999999; text-align: center;">
          Start exploring your personalized insights and recommendations now!
        </p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}
