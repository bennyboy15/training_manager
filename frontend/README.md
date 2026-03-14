# Power Apps Code App – App From Scratch

This project is a **Power Apps Code App** template.  
It allows you to build modern, extensible applications that integrate directly with the Power Platform.

---

## 🚀 Prerequisites

Before getting started, ensure you have:

- **Node.js** (LTS recommended)
- **Power Platform CLI (PAC CLI)**
- Access to a valid **Power Platform environment**
- Permission to create apps in that environment

### Install PAC CLI (if not installed)

```bash
npm install -g pac
```
OR
Install the Power Platform VS Code extension, that will install the PAC CLI as well.

---

## 📦 Project Setup

### 1️⃣ Create a New Project from Template

```bash
npx degit github:microsoft/PowerAppsCodeApps/templates/vite my-app
cd my-app
npm install
```

This pulls the official Vite-based Power Apps Code App template.

---

### 2️⃣ Authenticate with Power Platform

```bash
pac auth create
```

This will open a browser window for login.

To confirm authentication:

```bash
pac auth list
```

---

### 3️⃣ Select Environment

```bash
pac env list
pac env select --environment <YOUR_ENVIRONMENT_ID>
```

Replace `<YOUR_ENVIRONMENT_ID>` with your target environment.

---

### 4️⃣ Initialize the Code App

```bash
pac code init --displayname "App From Scratch"
```

This links your local project to a new Code App inside your selected environment.

---

## 🧪 Running the App Locally

Start the development server:

```bash
npm run dev
```

This launches the Vite development server with hot reload enabled.

---

## 📤 Build for Production

```bash
npm run build
```

This generates the optimized production build inside the `/dist` folder.

---

## 🚢 Deploying Changes

Push local changes to your Power Apps environment:

```bash
pac code push
```

Pull the latest remote changes:

```bash
pac code pull
```

---

## 📁 Project Structure

```
my-app/
 ├── src/            # Application source code
 ├── public/         # Static assets
 ├── dist/           # Production build output
 ├── package.json    # Project configuration
 └── vite.config.ts  # Vite configuration
```

---

## 🔧 Useful PAC CLI Commands

| Command | Description |
|----------|------------|
| `pac auth list` | View authenticated profiles |
| `pac auth clear` | Remove authentication |
| `pac env list` | List available environments |
| `pac env select` | Switch environment |
| `pac code init` | Initialize a new Code App |
| `pac code push` | Deploy local changes |
| `pac code pull` | Retrieve latest remote changes |

---

## 🛠 Development Tips

- Use Git for version control.
- Keep environment-specific values in environment variables.
- Test in a sandbox environment before deploying to production.
- Keep PAC CLI updated:

```bash
pac install latest
```

---

## 📚 Additional Recommendations

For production or team-based projects, consider:

- CI/CD pipelines (GitHub Actions or Azure DevOps)
- Linting with ESLint
- Code formatting with Prettier
- Type safety improvements
- Environment-based configuration management

---

## 📌 Notes

- Ensure you are authenticated before running any `pac code` commands.
- Always confirm the selected environment before pushing changes.
- Avoid pushing directly to production without validation.

---