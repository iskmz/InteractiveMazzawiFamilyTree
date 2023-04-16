@echo off
cd..
for /f "delims=" %%a in ('dir /b /s index.html') do @set ppp=%%a 
start chrome --app=file://%ppp% --new-window --start-fullscreen
