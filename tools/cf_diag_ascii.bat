@echo off
setlocal enabledelayedexpansion
REM CF Pages 部署诊断（ASCII 版）
set DOMAIN=sukaijun.dpdns.org
set LOG=%~dp0cf_diag_ascii.log
echo CF 部署诊断（ASCII 版） > "%LOG%"
echo 域名: %DOMAIN% >> "%LOG%"
echo. >> "%LOG%"

echo 1) DNS 查询 >> "%LOG%"
nslookup %DOMAIN% >> "%LOG%" 2>&1

echo 2) 测试域名可访问性 >> "%LOG%"
powershell -NoProfile -Command "try { (Invoke-WebRequest -Uri 'https://%DOMAIN%' -Method Head -TimeoutSec 5 -UseBasicParsing).StatusCode } catch { 0 }" >> "%LOG%" 2>&1

echo 3) Hitokoto API 状态 >> "%LOG%"
powershell -NoProfile -Command "try { (Invoke-WebRequest -Uri 'https://v1.hitokoto.cn/?encode=json' -TimeoutSec 5 -UseBasicParsing).StatusCode } catch { 0 }" >> "%LOG%" 2>&1

echo 4) Final check >> "%LOG%"
echo Open domain in browser and verify subtitle cycling. >> "%LOG%"

echo 日志生成完成，日志路径："%LOG%"
pause
