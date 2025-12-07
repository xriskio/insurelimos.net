# InsureLimos Migration Guide: Replit to Hostinger

## Pre-Migration Checklist

- [ ] Hostinger hosting plan purchased (Business Web Hosting or higher for Node.js support)
- [ ] Domain access available (insurelimos.com / insurelimos.net)
- [ ] All API keys documented
- [ ] Database backup completed
- [ ] Object storage files downloaded

---

## Phase 1: Gather Information & Backup

### Step 1.1: Document Your Environment Variables

Collect all your current secrets and environment variables. You'll need these on Hostinger:

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `DATABASE_URL` | New Hostinger PostgreSQL URL | Hostinger hPanel after DB creation |
| `ADMIN_PASSWORD` | Admin portal password | Your current Replit Secrets |
| `RESEND_API_KEY` | Email sending API | resend.com dashboard |
| `BING_WEBMASTER_API_KEY` | SEO indexing | Bing Webmaster Tools |
| `PERPLEXITY_API_KEY` | AI content generation | perplexity.ai dashboard |

### Step 1.2: Export Database

1. Open Replit Shell and run:
```bash
pg_dump $DATABASE_URL --no-owner --no-acl > database_backup.sql
```

2. Download `database_backup.sql` to your computer:
   - Click on the file in the Files panel
   - Click the three dots menu
   - Select "Download"

### Step 1.3: Download Project Files

1. In Replit, click the three dots menu next to your project name
2. Select "Download as zip"
3. Save to your computer
4. Extract the zip file

### Step 1.4: Download Object Storage Files

1. Go to Replit's Object Storage panel
2. Download all files from the `public` folder
3. Download all files from the `.private` folder
4. Keep these organized for later upload

---

## Phase 2: Set Up Hostinger

### Step 2.1: Purchase Hosting

1. Go to hostinger.com
2. Choose **Business Web Hosting** or **Cloud Hosting** (required for Node.js)
3. Complete purchase with your domain

### Step 2.2: Access hPanel

1. Log into Hostinger
2. Go to **Hosting** → Select your plan
3. This opens hPanel (Hostinger's control panel)

### Step 2.3: Create PostgreSQL Database

1. In hPanel, go to **Databases** → **PostgreSQL Databases**
2. Create a new database:
   - Database name: `insurelimos_db`
   - Username: `insurelimos_user`
   - Password: (generate a strong password)
3. **Save these credentials!**

Your new DATABASE_URL will be:
```
postgresql://insurelimos_user:YOUR_PASSWORD@localhost:5432/insurelimos_db
```

Note: The host might be different - check hPanel for the exact hostname.

### Step 2.4: Import Database

**Option A: Using phpPgAdmin (if available)**
1. In hPanel, go to **Databases** → **phpPgAdmin**
2. Select your database
3. Go to **SQL** tab
4. Upload and execute `database_backup.sql`

**Option B: Using SSH**
1. In hPanel, go to **Advanced** → **SSH Access**
2. Enable SSH and note the credentials
3. Connect via terminal:
```bash
ssh u123456789@your-server.hostinger.com
```
4. Upload backup file via SFTP first, then:
```bash
psql -h localhost -U insurelimos_user -d insurelimos_db < database_backup.sql
```

---

## Phase 3: Prepare Application Code

### Step 3.1: Update Package.json

Open `package.json` and ensure the start script works for production:
```json
{
  "scripts": {
    "start": "node dist/index.cjs",
    "build": "npm run build:client && npm run build:server",
    "build:client": "vite build",
    "build:server": "tsx script/build.ts"
  }
}
```

### Step 3.2: Update Object Storage Code

Since Hostinger doesn't have Replit's object storage, you have two options:

**Option A: Use Local File Storage**

Create/update `server/storage-local.ts`:
```typescript
import fs from 'fs';
import path from 'path';

const UPLOAD_DIR = './uploads';

// Ensure upload directories exist
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}
if (!fs.existsSync(`${UPLOAD_DIR}/public`)) {
  fs.mkdirSync(`${UPLOAD_DIR}/public`, { recursive: true });
}
if (!fs.existsSync(`${UPLOAD_DIR}/private`)) {
  fs.mkdirSync(`${UPLOAD_DIR}/private`, { recursive: true });
}

export function saveFile(filename: string, buffer: Buffer, isPublic: boolean = false) {
  const dir = isPublic ? 'public' : 'private';
  const filepath = path.join(UPLOAD_DIR, dir, filename);
  fs.writeFileSync(filepath, buffer);
  return `/uploads/${dir}/${filename}`;
}

export function getFile(filepath: string): Buffer | null {
  const fullPath = path.join(UPLOAD_DIR, filepath);
  if (fs.existsSync(fullPath)) {
    return fs.readFileSync(fullPath);
  }
  return null;
}
```

**Option B: Use AWS S3 or Cloudflare R2**

Install the AWS SDK:
```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

Add these environment variables:
- `S3_BUCKET_NAME`
- `S3_REGION`
- `S3_ACCESS_KEY_ID`
- `S3_SECRET_ACCESS_KEY`

### Step 3.3: Update Server Configuration

In `server/index.ts`, ensure it binds to the correct port:
```typescript
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Step 3.4: Create .env File

Create a `.env` file (DO NOT commit this to git):
```env
DATABASE_URL=postgresql://insurelimos_user:YOUR_PASSWORD@localhost:5432/insurelimos_db
ADMIN_PASSWORD=your_secure_admin_password
RESEND_API_KEY=re_xxxxxxxxxxxx
BING_WEBMASTER_API_KEY=your_bing_key
PERPLEXITY_API_KEY=pplx-xxxxxxxxxxxx
NODE_ENV=production
PORT=5000
```

### Step 3.5: Install dotenv Package

```bash
npm install dotenv
```

Update `server/index.ts` to load environment variables:
```typescript
import 'dotenv/config';
// ... rest of your code
```

---

## Phase 4: Deploy to Hostinger

### Step 4.1: Upload Files via File Manager or FTP

**Option A: File Manager**
1. In hPanel, go to **Files** → **File Manager**
2. Navigate to `public_html` or create a subdirectory
3. Upload your project files (exclude `node_modules`)

**Option B: FTP**
1. In hPanel, go to **Files** → **FTP Accounts**
2. Create an FTP account or use the main one
3. Use FileZilla or similar:
   - Host: ftp.your-domain.com
   - Username: from hPanel
   - Password: from hPanel
   - Port: 21

**Option C: Git (Recommended)**
1. In hPanel, go to **Advanced** → **Git**
2. Clone your repository or push to Hostinger's Git

### Step 4.2: Install Dependencies via SSH

1. SSH into your server:
```bash
ssh u123456789@your-server.hostinger.com
```

2. Navigate to your project:
```bash
cd public_html/insurelimos
```

3. Install dependencies:
```bash
npm install --production
```

4. Build the application:
```bash
npm run build
```

### Step 4.3: Configure Node.js Application

1. In hPanel, go to **Advanced** → **Node.js**
2. Click **Create Application**
3. Configure:
   - Node.js version: **20.x** (or latest LTS)
   - Application mode: **Production**
   - Application root: `/public_html/insurelimos` (or your path)
   - Application URL: your domain
   - Application startup file: `dist/index.cjs`

4. Add environment variables in the same panel:
   - Click "Environment variables"
   - Add each variable from your `.env` file

5. Click **Create** then **Run NPM Install**

### Step 4.4: Start the Application

1. In the Node.js panel, click **Restart**
2. Check the application logs for any errors
3. Visit your domain to verify it's working

---

## Phase 5: Domain & SSL Configuration

### Step 5.1: Point Domain to Hostinger

**If domain is registered elsewhere:**
1. Get Hostinger's nameservers from hPanel → **DNS / Nameservers**
2. Go to your domain registrar
3. Update nameservers to Hostinger's

**If domain is at Hostinger:**
- It should already be configured

### Step 5.2: Enable SSL Certificate

1. In hPanel, go to **Security** → **SSL**
2. Select **Let's Encrypt** (free)
3. Click **Install**
4. Enable **Force HTTPS**

### Step 5.3: Configure Both Domains

Repeat SSL setup for both:
- insurelimos.com
- insurelimos.net

Set up redirect from .net to .com (or vice versa):
1. In hPanel, go to **Domains** → **Redirects**
2. Add redirect from insurelimos.net to insurelimos.com

---

## Phase 6: Post-Migration Testing

### Step 6.1: Test All Features

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Quote forms submit successfully
- [ ] Admin portal login works (/admin)
- [ ] Database queries return data
- [ ] Email notifications send (test a quote submission)
- [ ] File uploads work (if using local storage or S3)
- [ ] Blog/News pages load
- [ ] Contact form works
- [ ] Service request form works

### Step 6.2: Test SEO Features

- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] IndexNow submissions work
- [ ] Bing URL Submission works

### Step 6.3: Update DNS Records

If using external services, update:
- Google Search Console verification
- Bing Webmaster Tools verification
- Email DNS records (SPF, DKIM, DMARC for Resend)

---

## Phase 7: Monitoring & Maintenance

### Step 7.1: Set Up Monitoring

1. Use Hostinger's built-in monitoring
2. Or set up external monitoring (UptimeRobot, Better Uptime)

### Step 7.2: Configure Backups

1. In hPanel, go to **Files** → **Backups**
2. Enable automatic backups
3. Schedule regular database backups:
```bash
# Add to crontab
0 2 * * * pg_dump $DATABASE_URL > /backups/db_$(date +\%Y\%m\%d).sql
```

### Step 7.3: Keep Dependencies Updated

Periodically:
```bash
npm audit
npm update
```

---

## Troubleshooting

### Application won't start
- Check Node.js logs in hPanel
- Verify all environment variables are set
- Ensure `dist/index.cjs` exists (run `npm run build`)

### Database connection fails
- Verify DATABASE_URL is correct
- Check if PostgreSQL is running
- Ensure database user has proper permissions

### 502 Bad Gateway
- Application might have crashed - check logs
- Restart Node.js application in hPanel
- Check memory usage

### Static files not loading
- Ensure Vite build completed successfully
- Check that `dist/public` folder exists and contains files
- Verify static file serving in Express is configured

### Emails not sending
- Verify RESEND_API_KEY is correct
- Check Resend dashboard for errors
- Ensure domain is verified in Resend

---

## Quick Reference Commands

```bash
# SSH into server
ssh u123456789@your-server.hostinger.com

# Navigate to project
cd public_html/insurelimos

# Check Node.js version
node -v

# Install dependencies
npm install --production

# Build application
npm run build

# Check application logs
pm2 logs  # if using PM2

# Database backup
pg_dump $DATABASE_URL > backup.sql

# Database restore
psql $DATABASE_URL < backup.sql
```

---

## Timeline Estimate

| Phase | Estimated Time |
|-------|---------------|
| Phase 1: Backup & Gather Info | 1-2 hours |
| Phase 2: Set Up Hostinger | 1-2 hours |
| Phase 3: Prepare Code | 2-4 hours |
| Phase 4: Deploy | 1-2 hours |
| Phase 5: Domain & SSL | 30 min - 24 hours (DNS propagation) |
| Phase 6: Testing | 1-2 hours |
| Phase 7: Monitoring Setup | 30 min |

**Total: 1-2 days** (mostly waiting for DNS propagation)

---

## Support Resources

- Hostinger Knowledge Base: https://support.hostinger.com
- Hostinger Node.js Guide: https://support.hostinger.com/en/articles/4455931
- PostgreSQL Documentation: https://www.postgresql.org/docs/

---

*Last Updated: December 2024*
