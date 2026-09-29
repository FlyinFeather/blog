param([string]$Url)

# 1. 解析路径
$path = $Url -replace '^openfile://', ''
$path = $path -replace '^[/\\]', ''
$path = $path -replace '/', '\'

# 2. 🔑 URL 解码（正确处理 + 号）
# 将字面 + 转义为 %2B，然后用 HttpUtility.UrlDecode 解码
$path = $path -replace '\+', '%2B'
Add-Type -AssemblyName System.Web
$path = [System.Web.HttpUtility]::UrlDecode($path)
$path = $path.Trim('"')

# 3. 安全检查（D盘限制）
$normalized = $path.ToLower()
if (-not ($normalized -like "d:\*")) {
    [System.Windows.MessageBox]::Show("Access denied: Only D: drive allowed.`nPath: $path", "Error", "OK", "Error")
    exit 1
}

if (-not (Test-Path $path)) {
    [System.Windows.MessageBox]::Show("File not found:`n$path", "Error", "OK", "Error")
    exit 1
}

# 4. 打开文件
Start-Process -FilePath $path