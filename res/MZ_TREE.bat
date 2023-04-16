:: ASSUMED to run from parent folder where .exe will be generated
:: will NOT work when run from current folder
@echo off
Title Interactive Mazzawi Family Tree
echo.
color 0A
echo - - - - - - - - - - - - - -
echo  Interactive
echo     Mazzawi Family
echo                  Tree
echo - - - - - - - - - - - - - -
echo.
echo.
echo  select number of browser type [1,2,3] to load tree in full-screen / app mode
echo  or select number 4 to load into your default browser window (normal mode)
echo.
echo.
echo  1. Mozilla Firefox
echo  2. Google Chrome
echo  3. Microsoft Edge
echo  4. Your Default Browser Window
echo.
echo.
SET /p choice="   Enter your choice [1,2,3,4]: "
for /f "delims=" %%a in ('dir /b /s index.html') do @set ppp=%%a 
IF %choice%==1 (
	start firefox --kiosk=file://%ppp%
	exit
)
IF %choice%==2 (
	start chrome --app=file://%ppp% --new-window --start-fullscreen
	exit
)
IF %choice%==3 (
	start msedge --kiosk file:///%ppp% --edge-kiosk-type=fullscreen
	exit
)
IF %choice%==4 (
	%COMSPEC% /c start %ppp%
)
