<#
CF 部署诊断（PowerShell 版本）
参数：-Domain 可选，用于覆盖域名
#>
param([string]$Domain = "sukaijun.dpdns.org")

Write-Host "CF 部署诊断 (PowerShell)" -ForegroundColor Cyan
Write-Host "Domain: $Domain" -ForegroundColor White

Write-Host "`n1) DNS 查询" -ForegroundColor Yellow
try {
  if (Get-Command Resolve-DnsName -ErrorAction SilentlyContinue) {
    Resolve-DnsName $Domain -Type A,AAAA | Format-Table -AutoSize
  } else {
    Write-Host "Resolve-DnsName 未可用，跳过 DNS 查询" -ForegroundColor Gray
  }
} catch {
  Write-Host "DNS 查询失败: $_" -ForegroundColor Red
}

Write-Host "`n2) 站点根域名可访问性测试" -ForegroundColor Yellow
try {
  $resp = Invoke-WebRequest -Uri "https://$Domain" -Method Head -UseBasicParsing -ErrorAction Stop
  Write-Host "HTTP 状态: $($resp.StatusCode)" -ForegroundColor Green
} catch {
  Write-Host "HTTP 请求失败: $_" -ForegroundColor Red
}

Write-Host "`n3) Hitokoto API status" -ForegroundColor Yellow
try {
  $r = Invoke-WebRequest -Uri "https://v1.hitokoto.cn/?encode=json" -UseBasicParsing -TimeoutSec 5
  if ($r.StatusCode -eq 200) {
    $json = $r.Content | ConvertFrom-Json
    if ($json.hitokoto) {
      Write-Host "Hitokoto: $($json.hitokoto)" -ForegroundColor Green
    } else {
      Write-Host "Hitokoto API 未返回文本" -ForegroundColor Yellow
    }
  }
} catch {
  Write-Host "Hitokoto API 请求失败: $_" -ForegroundColor Red
}

Write-Host "`n4) Final check" -ForegroundColor Yellow
Write-Host "Open domain in browser and verify subtitle cycling." -ForegroundColor Gray

Write-Host "Diagnostic complete." -ForegroundColor Cyan
