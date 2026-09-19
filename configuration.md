I have configured and pushed the automated GitHub Release and Deployment workflow to your repository on branch main.

🚀 What Was Added: 

.github/workflows/release.yml
On every git push or commit merged to the main branch, GitHub Actions will automatically:

Build the Application: Compiles the Angular production bundle (npm run build -- --configuration production).
Package the Distribution: Compresses the built production files into tj-food-website-build-v1.0.<run_number>.zip.
Publish an Automated GitHub Release:
Tag: v1.0.<run_number> (e.g., v1.0.1, v1.0.2, etc.)
Title: Release v1.0.<run_number> - TJ Homemade Products
Release Notes: Automatically generated from commit history (generate_release_notes: true)
Attached Asset: Production build .zip ready for download
Deploy to GitHub Pages: Automatically deploys the live website to GitHub Pages.
⚙️ One-Time GitHub Setting to Verify:
To ensure GitHub allows GitHub Actions to publish releases and deploy:

Go to your repository Settings → Actions → General
Scroll down to Workflow permissions
Select "Read and write permissions" and click Save.
(Optional, for live website on GitHub Pages) Go to Settings → Pages:
Under Build and deployment → Source, select "GitHub Actions".

You can monitor the active workflow runs under the Actions tab in your GitHub repository.