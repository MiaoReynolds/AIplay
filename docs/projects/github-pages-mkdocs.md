# GitHub Pages MkDocs Site — AI Agent Managed

This guide documents the complete workflow for deploying a **MkDocs** static website on **GitHub Pages**, using **SSH authentication** and **AI Agent automation** for ongoing content management.

The architecture is simple and reliable:

```
Local Machine (AI Agent) → Git (SSH Push) → GitHub Repository → GitHub Pages
```

---

## Overview

### Why This Stack?

| Layer | Choice | Reason |
|---|---|---|
| Static Site Generator | MkDocs (Material theme) | Clean docs-style layout, Markdown-native |
| Hosting | GitHub Pages | Free, reliable, zero infrastructure |
| Auth | SSH key | No token expiry, agent-friendly |
| Automation | AI Agent (local) | Handles edits, commits, pushes autonomously |

### Deployment Model — Mode A (Direct Branch)

We use **direct branch deployment**:

- **Branch:** `main`
- **Folder:** `/docs` (MkDocs source) or `/site` (built output, depending on your setup)
- The agent modifies Markdown files → commits → pushes → GitHub Pages auto-updates

---

## 1. Prerequisites

- Git installed locally
- Python 3.8+ with `pip`
- A GitHub account with a repository created for the site
- An AI Agent (e.g. Antigravity, Codex, or any tool-calling LLM) with filesystem + shell access

---

## 2. Install MkDocs

```bash
pip install mkdocs mkdocs-material
```

Initialize a new site (if starting from scratch):

```bash
mkdocs new my-site
cd my-site
```

Your project structure will look like:

```
my-site/
├─ docs/
│   └─ index.md
├─ mkdocs.yml
```

---

## 3. SSH Authentication Setup (One-Time, Human Step)

This only needs to be done once per machine.

### 3.1 Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Default location: `~/.ssh/id_ed25519`

### 3.2 Start SSH Agent and Add Key

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

On Windows (PowerShell):

```powershell
Start-Service ssh-agent
ssh-add $env:USERPROFILE\.ssh\id_ed25519
```

### 3.3 Add Public Key to GitHub

Copy your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Then on GitHub: **Settings → SSH and GPG Keys → New SSH Key** → paste and save.

### 3.4 Test the Connection

```bash
ssh -T git@github.com
# Expected: Hi USERNAME! You've successfully authenticated...
```

---

## 4. Configure Repository Remote (SSH)

Check your current remote:

```bash
git remote -v
```

If it shows HTTPS, switch to SSH:

```bash
git remote set-url origin git@github.com:USERNAME/REPO.git
```

---

## 5. GitHub Pages Settings

In your GitHub repository:

1. Go to **Settings → Pages**
2. Set **Source:** `Deploy from a branch`
3. Set **Branch:** `main` / **Folder:** `/ (root)` or `/docs`
4. Save — GitHub will publish your site at `https://USERNAME.github.io/REPO`

!!! tip "Using MkDocs `gh-deploy`"
    If you prefer to keep your source on `main` and publish the **built** site to `gh-pages` branch automatically, run:
    ```bash
    mkdocs gh-deploy
    ```
    This builds the site and force-pushes to the `gh-pages` branch in one command. The agent can run this as part of its update routine.

---

## 6. Agent Operational Rules

Once SSH is configured, the AI Agent can autonomously manage the site. Define clear rules:

### ✅ Allowed

- Modify `.md` files under `docs/`
- Add new images under `docs/assets/`
- Update `mkdocs.yml` navigation (`nav:` section)
- Run `git add . && git commit -m "..." && git push origin main`
- Run `mkdocs gh-deploy` to publish

### ❌ Forbidden

- Delete or modify `.git/` or `.ssh/` folders
- Change repository settings or branch protection rules
- Remove `CNAME` (if using a custom domain)
- Force-push to `main` without a backup

---

## 7. Automation Script (Windows)

Save this as `deploy_site.bat` in the project root:

```batch
@echo off
cd /d C:\Users\YourName\mkdocs-site
git add .
git commit -m "update site content"
git pull --rebase origin main
git push origin main
echo Deployment complete.
pause
```

Or use `mkdocs gh-deploy` as the publish step:

```batch
@echo off
cd /d C:\Users\YourName\mkdocs-site
mkdocs gh-deploy --clean
echo Site published to GitHub Pages.
pause
```

---

## 8. Typical Agent Workflow

A standard content update session looks like this:

```
1. Agent receives task: "Add a new project page about X"
2. Agent creates: docs/projects/x.md
3. Agent updates: mkdocs.yml  (adds entry under nav)
4. Agent runs:    git add .
5. Agent runs:    git commit -m "add project page: X"
6. Agent runs:    git push origin main  (or mkdocs gh-deploy)
7. GitHub Pages rebuilds and publishes automatically
```

No human intervention is needed after the initial SSH setup.

---

## 9. Recommended Project Structure

```
mkdocs-site/
├─ docs/
│   ├─ index.md
│   ├─ about.md
│   ├─ projects/
│   │   ├─ project-a.md
│   │   └─ project-b.md
│   └─ assets/
│       └─ images/
├─ mkdocs.yml
├─ deploy_site.bat
└─ README_AGENT.md     ← agent rules & context file
```

### `README_AGENT.md` — Rules File for the Agent

Create this file to give the agent persistent context:

```markdown
# Agent Rules for mkdocs-site

- All content pages live under docs/
- Navigation is controlled by mkdocs.yml (nav: section)
- Images go to docs/assets/images/
- After any change, run: git add . && git commit -m "..." && git push origin main
- Never modify .git/ or .ssh/
- Site URL: https://USERNAME.github.io/REPO
```

---

## 10. Troubleshooting

| Issue | Likely Cause | Fix |
|---|---|---|
| `Permission denied (publickey)` | SSH key not added to agent | Run `ssh-add ~/.ssh/id_ed25519` |
| Push rejected | Remote has changes not in local | Run `git pull --rebase origin main` first |
| Site not updating | GitHub Pages propagation delay | Wait 1–2 min; check Actions tab |
| `mkdocs gh-deploy` fails | Not in project root, or missing dependencies | `cd` to project root, `pip install mkdocs-material` |

---

## Conclusion

With a one-time SSH setup, the AI Agent can autonomously manage your MkDocs site indefinitely — adding pages, updating navigation, pushing changes — without ever needing a password or token. The entire workflow is transparent, version-controlled, and runs entirely on your local machine.
