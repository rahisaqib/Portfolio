# Saqib Rahi - Cybersecurity Professional Portfolio

A modern, premium personal portfolio website built with React + Vite showcasing cybersecurity expertise in VAPT, vulnerability assessment, and penetration testing.

## ✨ Features

- **Premium Design**: Dark-themed cybersecurity aesthetic inspired by modern companies like Linear, Vercel, and Raycast
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **SEO Optimized**: Complete meta tags, structured data, and semantic HTML
- **Accessible**: WCAG compliant with keyboard navigation and reduced-motion support
- **Smooth Animations**: Subtle, professional transitions and micro-interactions
- **Theme Toggle**: Light/dark mode with localStorage persistence
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🛠 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with CSS variables
- **Vanilla JS** - No unnecessary dependencies

## 📋 Sections

- **Home/Hero** - Professional introduction with profile photo and CTA buttons
- **About** - Professional bio and key statistics
- **Expertise** - Cybersecurity specializations (Vulnerability Assessment, Penetration Testing, Web App Security, API Security, etc.)
- **Experience** - Professional timeline with responsibilities and technologies
- **Projects** - Featured cybersecurity projects with GitHub links
- **Skills** - Technical skills organized by category
- **Certifications** - Professional certifications and credentials
- **Education** - Academic background and specializations
- **Contact** - Multiple ways to get in touch
- **Footer** - Navigation and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/rahisaqib/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Edit Profile Information

Update `src/data/profile.ts`:
```typescript
export const profile = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your-email@example.com',
  social: {
    github: 'https://github.com/yourname',
    linkedin: 'https://linkedin.com/in/yourname',
    email: 'your-email@example.com'
  }
}
```

### Update Experience

Edit `src/data/experience.ts` to add/modify work experience entries.

### Add/Update Projects

Modify `src/data/projects.ts` to showcase your projects:
```typescript
{
  name: 'Project Name',
  description: 'Description',
  focus: 'Security Focus Area',
  technologies: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
  featured: true
}
```

### Update Skills

Edit `src/data/skills.ts` - skills are organized by category.

### Update Certifications

Modify `src/data/certifications.ts`:
```typescript
{
  name: 'Certification Name',
  issuer: 'Organization',
  date: '2023',
  credentialId: 'ID',
  verificationLink: 'https://...',
  featured: true
}
```

### Update Education

Edit `src/data/education.ts` for education entries.

### Profile Photo

1. Replace photo at: `public/assets/profile/profile-photo.webp`
2. Use WebP format for best performance (recommended: 300x300px, optimized size)
3. To use a different name, update the path in `src/data/profile.ts`

### Resume

1. Place your resume at: `public/assets/resume/Saqib_Rahi_Resume.pdf`
2. The "Download Resume" button uses this path
3. To use a different filename, update `src/data/profile.ts`

### Contact Information

Update in `src/data/profile.ts`:
```typescript
email: 'your-email@example.com',
phone: '+92-300-XXXXXXX',
location: 'Your Location',
social: {
  github: 'https://github.com/yourname',
  linkedin: 'https://linkedin.com/in/yourname',
  email: 'your-email@example.com'
}
```

## 🌐 GitHub Pages Deployment

### First-time Setup

1. **Create a GitHub repository** named `Portfolio` (or your preferred name)

2. **Configure Vite base URL**:
   - Update `vite.config.ts` if your repo isn't at `username.github.io`
   - For `username/Portfolio`: set `base: '/Portfolio/'`
   - For `username.github.io`: set `base: '/'`

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` (or your default branch) and `/root` folder

### Deployment Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Commit and push**
   ```bash
   git add .
   git commit -m "Build portfolio"
   git push origin main
   ```

3. **View your site**
   - Wait 1-2 minutes for GitHub Pages to build
   - Visit: `https://username.github.io/Portfolio`

### Automated Deployment (Optional)

Use the included GitHub Actions workflow for automatic deployment:
- Located at `.github/workflows/deploy.yml`
- Automatically builds and deploys on push to main
- Commits the `dist/` folder to `gh-pages` branch

```bash
# Just push code and it deploys automatically!
git push origin main
```

## 🎨 Customizing Design

### Colors

Edit CSS variables in `src/index.css`:
```css
:root {
  --accent: #10b981;  /* Primary accent color */
  --bg-primary: #0f1419;  /* Main background */
  --text-primary: #e8eaed;  /* Main text color */
  /* ... more variables */
}
```

### Fonts

Default uses system fonts. To add custom fonts:
1. Add Google Fonts link to `index.html` `<head>`
2. Update font-family in `src/index.css`

### Animations

Adjust animation speeds and effects in component CSS files.

### Dark/Light Mode

The site detects system preference and allows manual toggling:
- Theme is saved to localStorage
- CSS variables automatically adapt

## 📊 SEO

The site includes:
- Meta descriptions and Open Graph tags
- Structured data (JSON-LD Person schema)
- Semantic HTML
- Proper heading hierarchy
- Image alt text
- Mobile-friendly responsive design
- sitemap potential (can be added)

## ♿ Accessibility

Features include:
- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Reduced motion support
- Proper color contrast
- Alt text for images

## 📱 Mobile Optimization

The site is fully responsive:
- Mobile-first design approach
- Touch-friendly interactions
- Optimized for all screen sizes
- Premium experience on iPhone/iPad

## ⚡ Performance

- Optimized images (WebP format recommended)
- Minimal JavaScript
- CSS optimizations
- No unnecessary dependencies
- Vite's fast build system
- Target Lighthouse score: 90+

## 🔒 Security

- No sensitive data in frontend code
- No API keys or secrets exposed
- Safe external links (rel="noopener noreferrer")
- Content Security Policy ready

## 📄 License

Free to use and modify for your personal portfolio.

## 💡 Tips

- Keep data files (`src/data/*`) updated as your experience grows
- Regularly update projects to showcase latest work
- Use high-quality, optimized images
- Test on mobile devices before sharing
- Get feedback from peers in cybersecurity community
- Share on LinkedIn, GitHub, and in job applications

## 🤝 Support

For issues or improvements:
1. Check existing documentation
2. Review component comments
3. Refer to Vite documentation
4. Test in different browsers

---

Built with ❤️ for showcasing cybersecurity excellence.