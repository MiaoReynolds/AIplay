@echo off
setlocal

rem Run from the folder containing this script, even when launched elsewhere.
cd /d "%~dp0"
if errorlevel 1 goto :failed

rem Use the project's existing Conda environment without activating Conda.
set "MKDOCS_PYTHON=C:\ProgramData\Anaconda3\envs\mkdocs-env\python.exe"
if not exist "%MKDOCS_PYTHON%" (
    echo MkDocs environment not found: "%MKDOCS_PYTHON%"
    echo Update MKDOCS_PYTHON in this file to your MkDocs Python path.
    goto :failed
)

echo Building and serving AIone Lab at http://127.0.0.1:8000/
echo The browser will open after the first build finishes.
echo Press Ctrl+C to stop the server.
echo.
"%MKDOCS_PYTHON%" -m mkdocs serve --open --dev-addr 127.0.0.1:8000
if errorlevel 1 goto :failed
exit /b 0

:failed
echo.
echo Local preview could not start. See the message above.
pause
exit /b 1
