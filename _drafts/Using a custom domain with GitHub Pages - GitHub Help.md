---
title: github pages info
---

# Using a custom domain with GitHub Pages



Modified from "Using a custom domain with GitHub Pages" [GitHub Help]()



GitHub Pages is available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see "[GitHub's products](https://help.github.com/articles/github-s-products)."

You can customize the domain name of your GitHub Pages site.

### ["Quick start: Setting up a custom domain"](https://help.github.com/en/articles/quick-start-setting-up-a-custom-domain)

To set up a custom domain for your GitHub Pages site, you'll need to choose your custom domain and register it with a DNS provider, configure your domain with your DNS provider, and add your custom domain to your GitHub Pages site on GitHub.

### [About supported custom domains](https://help.github.com/en/articles/about-supported-custom-domains)

If you're setting up a custom domain for your GitHub Pages site, choose a *supported* custom domain for the easiest setup and more support. GitHub Pages is designed to work with two types of custom domains: *apex domains* and *subdomains*.

### [Custom domain redirects for GitHub Pages sites](https://help.github.com/en/articles/custom-domain-redirects-for-github-pages-sites)

The type of pages site you're using determines how your site redirects custom domains.

### [Adding or removing a custom domain for your GitHub Pages site](https://help.github.com/en/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site)

Before setting up or modifying your custom domain with your DNS provider, you should add or remove the custom domain on GitHub.

### [Setting up an apex domain](https://help.github.com/en/articles/setting-up-an-apex-domain)

To set up an [apex domain](https://help.github.com/en/articles/about-supported-custom-domains/#apex-domains), such as `example.com`, you must configure an `ALIAS`, `ANAME`, or `A` record with your DNS provider.

### [Setting up a www subdomain](https://help.github.com/en/articles/setting-up-a-www-subdomain)

To set up a [`www` subdomain](https://help.github.com/en/articles/about-supported-custom-domains/#www-subdomains), such as `www.example.com` you must configure a `CNAME` record with your DNS provider.

### [Setting up an apex domain and www subdomain](https://help.github.com/en/articles/setting-up-an-apex-domain-and-www-subdomain)

You can set up an apex domain and a `www` subdomain through your DNS provider and GitHub Pages' servers will automatically create redirects between them. For example, your site can be found at `www.example.com` or `example.com`.

### [Setting up a custom subdomain](https://help.github.com/en/articles/setting-up-a-custom-subdomain)

You can set up a custom subdomain, such as `blog.example.com`, by creating a `CNAME` record through your DNS provider.

### [Troubleshooting custom domains](https://help.github.com/en/articles/troubleshooting-custom-domains)

If your GitHub Pages site isn't loading at your custom domain or HTTPS isn't working, you can troubleshoot by reviewing common setup and configuration problems.