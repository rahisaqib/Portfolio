# Portfolio Customization Guide - Quick Start

## 🎯 What You Need To Do NOW

Your portfolio website is **100% built and production-ready**. You just need to customize it with YOUR information.

---

## 📋 Step-by-Step Customization

### 1️⃣ YOUR CONTACT INFORMATION
**File:** `src/data/profile.ts`

```typescript
export const profile = {
  name: 'CHANGE THIS TO YOUR NAME',                    // Your full name
  title: 'YOUR JOB TITLE',                             // Your professional title
  tagline: 'YOUR SHORT PROFESSIONAL SUMMARY',          // 1-2 lines about you
  email: 'your.email@example.com',                     // Your email
  phone: '+92-XXX-XXXXXXX',                            // Your phone number
  location: 'Your City/Country',                       // Your location
  bio: 'YOUR LONGER BIO HERE',                         // Full professional bio
  profileImage: '/assets/profile/profile-photo.svg',   // Change to .jpg, .png, or .webp
  resume: '/assets/resume/YOUR_RESUME.pdf',            // Change filename to match your file
  social: {
    github: 'https://github.com/YOUR_USERNAME',        // Your GitHub URL
    linkedin: 'https://www.linkedin.com/in/YOUR_PROFILE/',  // Your LinkedIn URL
    email: 'your.email@example.com'                    // Your email address
  }
}
```

**Action:** Edit this file with YOUR information NOW.

---

### 2️⃣ YOUR WORK EXPERIENCE
**File:** `src/data/experience.ts`

Add your work history here. Template:

```typescript
{
  id: 1,
  role: 'Your Job Title',
  company: 'Company Name',
  duration: '2023 - Present',
  location: 'City/Remote',
  description: 'What you do in this role',
  responsibilities: [
    'Major responsibility 1',
    'Major responsibility 2',
    'Major responsibility 3'
  ],
  technologies: ['Tool1', 'Tool2', 'Tool3']
}
```

**Action:** Replace the placeholder experience with YOUR actual jobs.

---

### 3️⃣ YOUR PROJECTS
**File:** `src/data/projects.ts`

Add your best projects:

```typescript
{
  id: 1,
  name: 'Project Name',
  description: 'What the project does and why it matters',
  shortDescription: 'One-line description',
  focus: 'Security Focus Area (e.g., Web App Security)',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  github: 'https://github.com/yourname/project-name',
  demo: 'https://live-demo-link.com',  // Optional
  featured: true,
  order: 1
}
```

**Action:** Replace with YOUR actual projects. Add as many as you want!

---

### 4️⃣ YOUR SKILLS
**File:** `src/data/skills.ts`

Skills are organized by category:

```typescript
export const skills = {
  'Cybersecurity': [
    'Your Skill 1',
    'Your Skill 2'
  ],
  'Your Category': [
    'Skill A',
    'Skill B'
  ]
}
```

**Action:** Update categories and skills with YOUR abilities.

---

### 5️⃣ YOUR CERTIFICATIONS
**File:** `src/data/certifications.ts`

Add your credentials:

```typescript
{
  id: 1,
  name: 'Certification Name',
  issuer: 'Organization (e.g., EC-Council)',
  date: '2023',
  credentialId: 'CREDENTIAL ID',
  verificationLink: 'https://verify-link.com',
  featured: true  // Set to true for top certifications
}
```

**Action:** Add YOUR actual certifications.

---

### 6️⃣ YOUR EDUCATION
**File:** `src/data/education.ts`

Add your education:

```typescript
{
  id: 1,
  degree: "Bachelor's in Computer Science",
  institution: 'University Name',
  field: 'Cybersecurity',
  dates: '2020 - 2024',
  specialization: 'Your specialization if any'
}
```

**Action:** Update with YOUR education.

---

## 📸 YOUR PROFILE PHOTO

### Current Setup
- Location: `public/assets/profile/profile-photo.svg`
- Currently: Placeholder SVG image

### How to Replace
1. **Take a professional photo** (headshot, 300x300px minimum)
2. **Convert to WebP format** (best performance) OR use JPG/PNG
3. **Rename to:** `profile-photo.webp` (or .jpg/.png)
4. **Place in:** `public/assets/profile/`
5. **Update profile.ts** if you changed the filename:
   ```typescript
   profileImage: '/assets/profile/profile-photo.webp'  // or .jpg / .png
   ```

### Best Practices
- Size: 300x300px
- Format: WebP (preferred), PNG, or JPG
- Quality: Professional headshot
- Background: Simple, neutral
- No filters or excessive edits

---

## 📄 YOUR RESUME

### Current Setup
- Location: `public/assets/resume/`
- Currently: Placeholder text file

### How to Add Your Resume
1. **Create/update your resume** as PDF
2. **Name it:** `Saqib_Rahi_Resume.pdf` (or your name)
3. **Place in:** `public/assets/resume/`
4. **Update profile.ts** if you changed the filename:
   ```typescript
   resume: '/assets/resume/YOUR_NAME_Resume.pdf'
   ```

### The "Download Resume" Button
- Automatically appears in the Hero section
- Links to your PDF
- Works on GitHub Pages

---

## 🎨 OPTIONAL: CUSTOMIZE COLORS

If you want to change the color scheme:

**File:** `src/index.css`

Find the `:root` section and change:
```css
:root {
  --accent: #10b981;        /* Change this color */
  --bg-primary: #0f1419;    /* Dark background */
  --text-primary: #e8eaed;  /* Light text */
  /* ... other variables ... */
}
```

Popular colors:
- Blue: `#3b82f6` (professional)
- Purple: `#a855f7` (creative)
- Red: `#ef4444` (bold)
- Teal: `#14b8a6` (modern)
- Orange: `#f97316` (energetic)

---

## ✅ FINAL CHECKLIST

Before deploying, make sure you've updated:

- [ ] Profile name and title in `src/data/profile.ts`
- [ ] Email and phone in `src/data/profile.ts`
- [ ] GitHub and LinkedIn URLs in `src/data/profile.ts`
- [ ] Your professional photo in `public/assets/profile/`
- [ ] Your resume PDF in `public/assets/resume/`
- [ ] Your work experience in `src/data/experience.ts`
- [ ] Your projects in `src/data/projects.ts`
- [ ] Your skills in `src/data/skills.ts`
- [ ] Your certifications in `src/data/certifications.ts`
- [ ] Your education in `src/data/education.ts`

---

## 🚀 DEPLOYMENT STEPS

### Local Testing First
```bash
npm install        # Install dependencies (already done)
npm run dev        # Start local dev server
# Visit http://localhost:3000
# Check everything looks good
```

### Deploy to GitHub Pages

#### 1. Create GitHub Repository (if you haven't already)
```bash
git remote -v  # Check if remote exists
# If not:
# Create repo on GitHub named "Portfolio"
# Then:
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
git branch -M main
```

#### 2. Configure GitHub Pages
- Go to: https://github.com/YOUR_USERNAME/Portfolio/settings
- Click: "Pages" (left sidebar)
- Under "Build and deployment":
  - Select: "Deploy from a branch"
  - Branch: `main`
  - Folder: `/ (root)`
- Save

#### 3. Push Your Code
```bash
git add .
git commit -m "Customize portfolio with my information"
git push -u origin main
```

#### 4. GitHub Actions Will Auto-Deploy
- Wait 1-2 minutes
- GitHub Actions workflow runs automatically
- Website builds and deploys
- View at: `https://YOUR_USERNAME.github.io/Portfolio`

---

## 📊 YOUR WEBSITE WILL SHOW

When people visit your portfolio, they'll see:

1. **Hero Section** - Your name, title, photo, and buttons
2. **About** - Your professional bio and key stats
3. **Expertise** - Your cybersecurity specializations
4. **Experience** - Your work history timeline
5. **Projects** - Your best projects (with GitHub links)
6. **Skills** - Technical skills organized by category
7. **Certifications** - Your professional credentials
8. **Education** - Your academic background
9. **Contact** - How to reach you (email, LinkedIn, GitHub)

---

## 💡 RECRUITING TIPS

### What Recruiters Look For
1. **Clear Professional Identity** - They should know what you do in 10 seconds
2. **Real Projects** - Links to actual GitHub repositories
3. **Verifiable Skills** - Show actual work, not just claims
4. **Easy Contact** - Make it obvious how to reach you
5. **Mobile-Friendly** - 50% may visit on phone

### Your Portfolio Advantages
- ✅ Premium design (looks professional)
- ✅ Fast loading (shows you care about performance)
- ✅ SEO optimized (shows up in searches)
- ✅ Mobile perfect (works great on phones)
- ✅ Your GitHub projects (shows actual work)
- ✅ Direct contact methods (easy to reach you)

### Use It Everywhere
- **LinkedIn** - Add portfolio URL to your profile
- **Resume** - Include portfolio URL
- **Job Applications** - Share link with your resume
- **Email Signature** - Put link in your email
- **GitHub** - Link to it from your GitHub bio

---

## 🆘 TROUBLESHOOTING

### Website Not Showing After Push?
1. Wait 2-3 minutes (GitHub Pages needs time to build)
2. Check GitHub Actions: Settings → Actions tab
3. Look for any error messages in the workflow

### Changes Not Appearing?
1. Hard refresh browser: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
2. Clear browser cache
3. Wait a few seconds for GitHub Pages to rebuild

### Photo Not Showing?
1. Verify file is in `public/assets/profile/`
2. Check filename in `src/data/profile.ts` matches exactly
3. Ensure file is image format (.jpg, .png, .svg, .webp)

### Resume Download Not Working?
1. Verify PDF is in `public/assets/resume/`
2. Check filename in `src/data/profile.ts` matches exactly
3. Ensure it's a valid PDF file

---

## 📞 NEXT STEPS

1. **Today**: Update your information in the data files
2. **Tomorrow**: Add your photo and resume
3. **This week**: Test locally with `npm run dev`
4. **This week**: Push to GitHub for deployment
5. **Next week**: Share on LinkedIn and job applications!

---

## 🎉 YOU'RE DONE!

Your professional cybersecurity portfolio is ready. Now just personalize it with your information and deploy!

Good luck with your job search! 🚀
