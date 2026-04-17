---
title: "How to troubleshoot common errors"
category: troubleshooting
---

# Troubleshooting Common Errors

## Error: "Module not found"

**Problem:** You're getting import or module errors.

**Solution:**
1. Verify that all dependencies are installed: `npm install` or `pip install -r requirements.txt`
2. Check your `package.json` or `requirements.txt` for the correct package name
3. Clear cache: `npm cache clean --force` or `pip cache purge`
4. Reinstall node_modules or virtual environment

## Error: "Port already in use"

**Problem:** The development server can't start because the port is busy.

**Solution:**
1. Find the process using the port: `lsof -i :3000` (Mac/Linux) or `netstat -ano | findstr :3000` (Windows)
2. Kill the process or use a different port
3. Set custom port: `PORT=3001 npm start`

## Error: "Permission denied"

**Problem:** You don't have permission to execute or access a file.

**Solution:**
1. Check file permissions: `ls -la`
2. Add execute permission: `chmod +x filename`
3. Run with sudo (if appropriate): `sudo command`
4. Check folder ownership: `chown -R user:group folder`

## Database Connection Errors

**Problem:** Can't connect to database.

**Solution:**
1. Verify database is running
2. Check connection credentials in config
3. Ensure database host and port are correct
4. Check firewall settings
5. Verify database user permissions

For more help, visit our [community forum](https://community.aioverse.dev) or [open an issue](https://github.com/Aioverse-DEV/docx/issues).
