const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'stitch-html');
const outDir = path.join(__dirname, 'src', 'pages');

const componentMap = {
  'landing': 'Landing',
  'login': 'Login',
  'signup': 'Signup',
  'onboarding1': 'OnboardingStep1',
  'onboarding2': 'OnboardingStep2',
  'onboarding3': 'OnboardingStep3',
  'onboarding4': 'OnboardingStep4',
  'dashboard': 'Dashboard',
  'health': 'HealthDashboard',
  'health-intro': 'HealthIntro',
  'waste-intro': 'WasteIntro',
  'waste-monthly': 'WasteMonthly',
  'waste-yearly': 'WasteYearly',
  'sub-input': 'SubscriptionInput',
  'sub-plans': 'SubscriptionPlans',
  'goal-intro': 'GoalIntro',
  'goal-step1': 'GoalStep1',
  'goal-step2': 'GoalStep2',
  'goal-step3': 'GoalStep3',
  'goal-step4': 'GoalStep4',
  'goal-step5': 'GoalStep5',
  'goal-result': 'GoalResult',
  'copilot-intro': 'CopilotIntro',
  'copilot': 'CopilotDashboard',
  'profile': 'Profile',
  'settings': 'Settings',
  'help': 'Help',
  'notifications': 'Notifications',
  'notification-popup': 'NotificationPopup',
  'error-404': 'Error404',
  'error-500': 'Error500',
  'network-error': 'NetworkError',
};

function extractBodyContent(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) return html;
  return bodyMatch[1];
}

function extractStyles(html) {
  const styles = [];
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let match;
  while ((match = styleRegex.exec(html)) !== null) {
    styles.push(match[1]);
  }
  return styles.join('\n');
}

function extractScripts(html) {
  const scripts = [];
  const scriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = scriptRegex.exec(html)) !== null) {
    if (!match[1].includes('tailwind.config')) {
      let scriptCode = match[1];
      // Convert DOMContentLoaded to immediately invoke if inside useEffect
      scriptCode = scriptCode.replace(/document\.addEventListener\(['"`]DOMContentLoaded['"`]\s*,\s*(function\s*\(\)|\(\)\s*=>)\s*\{/g, '(() => {');
      scriptCode = scriptCode.replace(/document\.addEventListener\(['"`]DOMContentLoaded['"`]\s*,\s*(\w+)\)/g, '($1)()');
      scripts.push(scriptCode);
    }
  }
  return scripts.join('\n\n');
}

function convertHtmlToJsx(html) {
  let jsx = html;
  
  // Strip out all <script> tags to avoid parsing errors
  jsx = jsx.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  jsx = jsx.replace(/\bclass="/g, 'className="');
  jsx = jsx.replace(/\bclass='/g, "className='");
  jsx = jsx.replace(/\bfor="/g, 'htmlFor="');
  jsx = jsx.replace(/<(img|input|br|hr|meta|link)([^>]*?)(?<!\/)>/gi, '<$1$2 />');
  jsx = jsx.replace(/\/\s*\/>/g, '/>');
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  jsx = jsx.replace(/\btabindex="/g, 'tabIndex="');
  jsx = jsx.replace(/\bonclick="/g, 'onClick="');
  jsx = jsx.replace(/\bonchange="/g, 'onChange="');
  jsx = jsx.replace(/\bonsubmit="/g, 'onSubmit="');
  jsx = jsx.replace(/\bautocomplete="/g, 'autoComplete="');
  jsx = jsx.replace(/\bmaxlength="/g, 'maxLength="');
  jsx = jsx.replace(/\breadonly\b/g, 'readOnly');
  jsx = jsx.replace(/\bcolspan="/g, 'colSpan="');
  jsx = jsx.replace(/\browspan="/g, 'rowSpan="');
  jsx = jsx.replace(/\bcrossorigin\b/g, 'crossOrigin');
  jsx = jsx.replace(/\bcharset="/g, 'charSet="');
  
  jsx = jsx.replace(/\bstroke-width="/g, 'strokeWidth="');
  jsx = jsx.replace(/\bstroke-linecap="/g, 'strokeLinecap="');
  jsx = jsx.replace(/\bstroke-linejoin="/g, 'strokeLinejoin="');
  jsx = jsx.replace(/\bfill-rule="/g, 'fillRule="');
  jsx = jsx.replace(/\bclip-rule="/g, 'clipRule="');
  jsx = jsx.replace(/\bstroke-dasharray="/g, 'strokeDasharray="');
  jsx = jsx.replace(/\bstroke-dashoffset="/g, 'strokeDashoffset="');
  jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    // Basic inline style to React style object converter (naive)
    const styles = p1.split(';').filter(s => s.trim());
    const styleObj = {};
    styles.forEach(s => {
      let [key, val] = s.split(':');
      if (key && val) {
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[key] = val.trim();
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });

  return jsx;
}

function processFile(filename) {
  const baseName = path.basename(filename, '.html');
  const componentName = componentMap[baseName];
  
  if (!componentName) return;
  
  const html = fs.readFileSync(path.join(srcDir, filename), 'utf-8');
  const bodyContent = extractBodyContent(html);
  const styles = extractStyles(html);
  const scriptsToRun = extractScripts(html);
  const jsxContent = convertHtmlToJsx(bodyContent);
  
  const cssFileName = `${componentName}.css`;
  if (styles.trim()) {
    fs.writeFileSync(path.join(outDir, cssFileName), styles);
  }
  
  const hasScript = scriptsToRun.trim().length > 0;
  
  const component = `${hasScript ? "import { useEffect } from 'react';\n" : ""}import { Link } from 'react-router-dom';
${styles.trim() ? `import './${cssFileName}';` : ''}

export default function ${componentName}() {
${hasScript ? `  useEffect(() => {
    try {
      ${scriptsToRun}
    } catch (e) {
      console.error(e);
    }
  }, []);` : ""}

  return (
    <>
${jsxContent}
    </>
  );
}
`;
  
  fs.writeFileSync(path.join(outDir, `${componentName}.jsx`), component);
  console.log(`✅ Updated ${componentName}.jsx`);
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));
files.forEach(processFile);
console.log('✨ All conversions completed with script extraction!');
