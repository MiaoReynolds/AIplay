@echo off
setlocal

:: Load Anaconda environment
call "C:\ProgramData\Anaconda3\Scripts\activate.bat"
cd /d C:\Users\miao_PC\mkdocs-site
call conda activate mkdocs-env

:: Open browser
start http://127.0.0.1:8000

:: Serve MkDocs
echo Starting MkDocs local server...
mkdocs serve

pause
