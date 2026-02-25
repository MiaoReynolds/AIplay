@echo off
setlocal

call "C:\ProgramData\Anaconda3\Scripts\activate.bat"
cd /d C:\Users\miao_PC\mkdocs-site
call conda activate mkdocs-env

git add .
git commit -m "update site content"
git push
mkdocs gh-deploy

pause
