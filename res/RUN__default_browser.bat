@echo off
cd..
for /f "delims=" %%a in ('dir /b /s index.html') do @set ppp=%%a 
%COMSPEC% /c start %ppp%