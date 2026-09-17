# Saqib Rahi — Cybersecurity Analyst | VAPT & Application Security

Personal portfolio website for **Saqib Rahi** — B.Tech Cybersecurity graduate, VAPT intern at CYBERSRA, builder of the Wolf Hunter security testing framework, and TryHackMe Top 10% global ranker.

🌐 **Live site:** [rahisaqib.github.io/Portfolio](https://rahisaqib.github.io/Portfolio/)

---

## 👤 About

| | |
|---|---|
| **Name** | Saqib Rahi |
| **Role** | Cybersecurity Analyst · VAPT & Application Security |
| **Location** | Saharanpur, Uttar Pradesh, India |
| **Email** | saqibrahi9058@gmail.com |
| **Phone** | +91-9058513227 |
| **LinkedIn** | [linkedin.com/in/saqib-rahi](https://www.linkedin.com/in/saqib-rahi/) |
| **GitHub** | [github.com/rahisaqib](https://github.com/rahisaqib) |
| **TryHackMe** | [tryhackme.com/p/bluewolf0364](https://tryhackme.com/p/bluewolf0364) — Top 10% Global |

---

## 📋 Portfolio Sections

- **Hero** — Introduction, contact details, and links
- **About** — Professional summary and key stats (TryHackMe rank, Wolf Hunter modules, VAPT internship)
- **Technical Skills** — Security testing, tools (Burp Suite, Nmap, Metasploit, Wireshark, Hydra…), programming, OS
- **Experience** — CYBERSRA VAPT internship (Jan 2026 – Jul 2026)
- **Projects** — Wolf Hunter framework + TryHackMe labs profile
- **Education** — DIT University B.Tech CSE (Cybersecurity), 2021–2025
- **Contact** — Email, phone, LinkedIn, GitHub, TryHackMe

---

## ⚙️ Tech Stack

This portfolio is a **single self-contained `index.html`** — no build step, no framework, no dependencies.

| | |
|---|---|
| **HTML/CSS/JS** | Vanilla, fully inlined |
| **Deployment** | GitHub Pages via GitHub Actions |
| **Build step** | None — files are deployed directly |

---

## 🚀 Deployment

The site deploys automatically on every push to `main` via `.github/workflows/deploy.yml`.

### Manual deploy steps

```bash
# 1. Clone the repo
git clone https://github.com/rahisaqib/Portfolio.git
cd Portfolio

# 2. Edit index.html with your changes

# 3. Commit and push — GitHub Actions handles the rest
git add index.html
git commit -m "Update portfolio"
git push origin main
```

### GitHub Pages setup (one-time)

1. Go to **Settings → Pages** in this repository
2. Under **Build and deployment → Source**, select **GitHub Actions**
3. Save — the workflow will deploy on the next push

---

## 🔧 Customisation

All content lives in a single file: [`index.html`](index.html)

| What to change | Where in `index.html` |
|---|---|
| Name / role / summary | `<!-- HERO -->` section |
| Contact details | `hero-meta` div + `<!-- CONTACT -->` section |
| Skills | `<!-- SKILLS -->` section |
| Work experience | `<!-- EXPERIENCE -->` section |
| Projects | `<!-- PROJECTS -->` section |
| Education | `<!-- EDUCATION -->` section |
| Colours / fonts | `<style>` block — CSS variables in `:root` |

### Key CSS variables

```css
:root {
  --accent:  #10b981;   /* green highlight colour */
  --bg:      #0d1117;   /* main background (dark) */
  --bg2:     #161b22;   /* secondary background */
  --text:    #e6edf3;   /* primary text */
  --muted:   #8b949e;   /* secondary text */
  --border:  #30363d;   /* card borders */
}
```

---

## 🌟 Highlights

- **Wolf Hunter** — Open-source web app security testing framework with ~30 modules (SQLi, XSS, CSRF, JWT, OWASP Top 10). Repo: [github.com/rahisaqib/Wolf-Hunter](https://github.com/rahisaqib/Wolf-Hunter)
- **TryHackMe** — Top 10% globally across 53+ hands-on labs in web, network, and Linux security
- **CYBERSRA Internship** — 6-month client-facing VAPT internship (Jan–Jul 2026), full lifecycle from scoping to reporting

---

## 📄 License

Free to fork and adapt for your own portfolio.
