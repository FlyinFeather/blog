#!/usr/bin/env bash
set -euo pipefail
DOMAIN="sukaijun.dpdns.org"
LOG="cf_deploy_diag.log"
HITOKOTO_URL="https://v1.hitokoto.cn/?encode=json"
echo "CF 部署诊断脚本" > "$LOG" 2>&1
echo "域名: $DOMAIN" >> "$LOG" 2>&1

echo "\n1) DNS 查询" >> "$LOG" 2>&1
if command -v nslookup >/dev/null 2>&1; then
  nslookup "$DOMAIN" | sed 's/^/  /' >> "$LOG" 2>&1
else
  echo "nslookup 未安装，跳过 DNS 查询" >> "$LOG" 2>&1
fi

echo "\n2) 站点根域名可访问性测试" >> "$LOG" 2>&1
if command -v curl >/dev/null 2>&1; then
  curl -Is "https://$DOMAIN" | head -n 5 | sed 's/^/  /' >> "$LOG" 2>&1 || true
else
  echo "curl 未安装，跳过头部测试" >> "$LOG" 2>&1
fi

echo "\n3) Hitokoto API 状态" >> "$LOG" 2>&1
if command -v curl >/dev/null 2>&1; then
  RES=$(curl -sS --max-time 5 "$HITOKOTO_URL" || true)
  if [[ -n "$RES" && "$RES" != "{}" && "$RES" != "[]" ]]; then
    echo "$RES" | head -n 1 | sed 's/^/  /' >> "$LOG" 2>&1
  else
    echo "Hitokoto API 请求失败，使用兜底文本" | sed 's/^/  /' >> "$LOG" 2>&1
  fi
else
  echo "curl 不可用，无法检测 Hitokoto" >> "$LOG" 2>&1
fi

echo "\n4) 兜底与前端状态" >> "$LOG" 2>&1
echo "请在浏览器中检查域名页面的副标题轮播状态。" >> "$LOG" 2>&1

echo "诊断完成，日志位于 $LOG" | tee -a "$LOG" >&2
