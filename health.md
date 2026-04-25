---
layout: page
title: 部署诊断
subtitle: Cloudflare Pages 与自定义域名的快速排错指南
---

# 部署诊断

本页面用于快速排查 Cloudflare Pages 部署与自定义域名在静态站点上的常见问题。

- 域名绑定与解析
  - 确认域名已在 Cloudflare Pages 项目中绑定并处于启用状态。
  - 使用以下命令确认 DNS 解析是否指向 CF 的服务地址：
    - nslookup sukaijun.dpdns.org
    - dig +trace sukaijun.dpdns.org
- 证书与 TLS 设置
  - CF Pages 通常使用 Cloudflare 的 TLS，确保域名证书处于有效状态。
- 清理缓存
  - 在 CF Pages 控制台执行 Purge Cache，确保新设置生效。
- 生产域名访问诊断
  - 使用浏览器的开发者工具查看控制台与网络请求，重点关注对 Hitokoto 的外部请求是否被阻止，以及是否有 CORS/404/500 的错误。
- 本地快速自检脚本
  - 可以在页面中嵌入一个简单的 health check 脚本，测试从页面发出的外部请求是否被阻断，以及页面资源是否全部加载完成。

如果你愿意，我也可以把这个诊断清单整理成一个更规范的工作流文档，并将关键步骤自动化脚本附在仓库中。你希望这样做吗？

附加：新增一个域名健康状态区域，帮助快速判断 CF Pages 的域名绑定、DNS、TLS、缓存等状态。页面中已添加一个简单的健康区域：<span class="domain-status">未检测</span>，并提供 quick check 脚本。 
