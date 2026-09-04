# 🚀 GET STARTED - Quick Setup in 5 Minutes

Your cybersecurity portfolio website is **LIVE** and ready to customize!

## 🌐 Share Your Portfolio Now

**Send this URL to anyone:**
```
https://rahisaqib.github.io/Portfolio/
```

They can click it instantly and see your website!

---

## ✏️ Customize in 5 Minutes

### Step 1: Edit Your Name & Contact Info (2 min)

Open: `src/data/profile.ts`

Change these lines:
```typescript
name: 'SAQIB RAHI',              // Your name
title: 'Cybersecurity Specialist',  // Your job title
email: 'saqib@example.com',        // Your email
phone: '+92-300-1234567',          // Your phone
location: 'Lahore, Pakistan',      // Your location
bio: 'Your professional summary here',

// Social Links
social: {
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://linkedin.com/in/YOUR_PROFILE/',
  email: 'saqib@example.com'
}
```

**Save file** → Website updates automatically on next push!

---

### Step 2: Add Your Photo (1 min)

1. Get a professional headshot photo (300x300px recommended)
2. Save it as: `public/assets/profile/profile-photo.jpg`
3. In `src/data/profile.ts`, update:
   ```typescript
   profileImage: '/assets/profile/profile-photo.jpg',  // Change filename if needed
   ```

---

### Step 3: Add Your Resume (1 min)

1. Get your resume PDF
2. Save it as: `public/assets/resume/my-resume.pdf`
3. In `src/data/profile.ts`, update:
   ```typescript
   resume: '/assets/resume/my-resume.pdf',  // Change filename to match
   ```

---

### Step 4: Add Your Projects (1 min)

Open: `src/data/projects.ts`

Add your projects:
```typescript
{
  id: 1,
  name: 'Vulnerability Scanner',
  description: 'Automated penetration testing tool',
  focus: 'Penetration Testing',
  technologies: ['Python', 'Bash', 'Nmap'],
  github: 'https://github.com/yourname/project',
  featured: true,
  order: 1
}
```

---

## 🔄 Make Changes & Deploy

### Option A: Quick Local Test (Recommended)
```bash
npm run dev
# Opens at http://localhost:3000
# See live changes as you edit
```

### Option B: Push to Deploy
```bash
git add .
git commit -m "Update portfolio with my info"
git push
# Website updates automatically in 1-2 minutes!
```

---

## 📝 Other Files to Customize

| File | What to Edit |
|------|-------------|
| `src/data/experience.ts` | Your work history |
| `src/data/skills.ts` | Your technical skills |
| `src/data/certifications.ts` | Your certifications (OSCP, CEH, etc) |
| `src/data/education.ts` | Your education |
| `src/index.css` | Colors (search for `#1ec481` to change accent) |

---

## 💡 Tips

✅ **Professional Photo**: Use a headshot with professional background
✅ **Real Links**: Link to actual GitHub projects and LinkedIn profile
✅ **Specific Skills**: Don't use generic descriptions
✅ **Show Results**: Include metrics and achievements
✅ **Keep Updated**: Update projects and experience quarterly

---

## 🆘 Troubleshooting

**Changes not showing?**
- Wait 1-2 minutes for deployment
- Hard refresh browser (Ctrl+Shift+R)

**Website looks broken?**
- Run `npm run build` locally to check for errors
- Check browser console (F12) for errors

**Can't push code?**
- Make sure you have GitHub credentials configured
- Try: `gh auth login`

---

## ✨ You're Ready!

1. ✅ Website is live at: https://rahisaqib.github.io/Portfolio/
2. ✅ Make changes to `src/data/` files
3. ✅ Push to GitHub
4. ✅ Website updates automatically
5. ✅ Share URL with recruiters!

**Questions?** See `README.md` or `CUSTOMIZATION_GUIDE.md`

Happy networking! 🚀
