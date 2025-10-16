@echo off
REM 🚀 Olerum Engineering Deployment Script for Windows
REM This script builds and prepares your project for production deployment

echo 🌱 Olerum Engineering - Building for Production...
echo ==============================================

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Please run this script from the olerum-engineering directory.
    pause
    exit /b 1
)

REM Clean previous builds
echo 🧹 Cleaning previous builds...
if exist ".next" rmdir /s /q ".next"
if exist "out" rmdir /s /q "out"
if exist "*.zip" del "*.zip"

REM Install dependencies (if needed)
echo 📦 Installing dependencies...
call npm install

REM Build the project
echo 🔨 Building project...
call npm run build

REM Check if build was successful
if %errorlevel% equ 0 (
    echo ✅ Build completed successfully!
    
    REM Check if out directory exists
    if exist "out" (
        echo 📁 Static export generated successfully!
        
        REM Create production package
        echo 📦 Creating production package...
        cd out
        powershell -command "Compress-Archive -Path * -DestinationPath ..\olerum-engineering-production.zip -Force"
        cd ..
        
        REM Get file size
        for %%A in (olerum-engineering-production.zip) do set SIZE=%%~zA
        
        echo 🎉 Deployment package ready!
        echo 📁 File: olerum-engineering-production.zip
        echo 📏 Size: %SIZE% bytes
        echo 📍 Location: %cd%\olerum-engineering-production.zip
        echo.
        echo 🚀 Ready to upload to your hosting provider!
        echo 📖 See DEPLOYMENT_GUIDE.md for detailed instructions.
        
    ) else (
        echo ❌ Error: out directory not found. Build may have failed.
        pause
        exit /b 1
    )
    
) else (
    echo ❌ Build failed! Please check the error messages above.
    pause
    exit /b 1
)

echo.
echo ✨ Deployment preparation complete!
pause 