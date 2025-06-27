@echo off
set DIR=%~dp0
@REM Resolve the JAVA_HOME variable
set JAVA_CMD=java
"%JAVA_CMD%" -Dorg.gradle.appname=%~nx0 -cp "%DIR%gradle\wrapper\gradle-wrapper.jar" org.gradle.wrapper.GradleWrapperMain %*