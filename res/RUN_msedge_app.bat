@echo off
cd..
for /f "delims=" %%a in ('dir /b /s index.html') do @set ppp=%%a
start msedge --kiosk file:///%ppp% --edge-kiosk-type=fullscreen
