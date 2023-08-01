# GoogleDorkEngine
Introducing "Google Dork Engine" - your ultimate bug bounty tool! Discover vulnerabilities and sensitive information effortlessly. This website revolutionizes the process by allowing you to open multiple Google Dorks with just one click. Unleash the power of efficient bug hunting and secure your target with ease


# Description for Dorks

Dork 1:
```intitle:index.of```

Dork 2:
```ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini```

Dork 3:
```ext:sql | ext:dbf | ext:mdb```

Dork 4:
```ext:log```

Dork 5:
```ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup```

Dork 6:
```inurl:login```

Dork 7:
```intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"```

Dork 8:
```ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv```

Dork 9:
```ext:php intitle:phpinfo "published by the PHP Group"```

Dork 10:
```inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download```

Dork 11:
```inurl:readme | inurl:license | inurl:install | inurl:setup | inurl:config```

Dork 12:
```inurl:redir | inurl:url | inurl:redirect | inurl:return | inurl:src=http | inurl:r=http```

Dork 13:
```ext:action | ext:struts | ext:do```

Dork 14:
```inurl:"/phpinfo.php" | inurl:".htaccess" | inurl:"/.git" ' + targetDomain + ' -github```

Dork 15:
```site:*.' + targetDomain```

Dork 16:
```site:*.*.' + targetDomain```

Dork 17:
```inurl:wp-content | inurl:wp-includes ' + targetDomain```

Dork 18:
```'http://' + targetDomain + '/crossdomain.xml'```

Dork 19:
```'http://threatcrowd.org/domain.php?domain=' + targetDomain```

Dork 20:
```'.' + targetDomain```

Dork 21:
```site:*.' + encodeURIComponent(site) + ')'```

Dork 22:
```site:*.' + encodeURIComponent(site) + ')'```

Dork 23:
```'https://crt.sh/?q=%25.' + targetDomain```

Dork 24:
```'https://www.openbugbounty.org/search/?search=' + encodeURIComponent(site) + '&type=host'```

Dork 25:
```'http://wwwb-dedup.us.archive.org:8083/cdx/search?url=' + encodeURIComponent(site) + '/&matchType=domain&collapse=digest&output=text&fl=original,timestamp&filter=urlkey:.*wp[-].*&limit=1000000&xx='```

Dork 26:
```'https://censys.io/ipv4?q=' + targetDomain```

Dork 27:
```'https://censys.io/domain?q=' + targetDomain```

Dork 28:
```'https://censys.io/certificates?q=' + targetDomain```

Dork 29:
```'https://www.shodan.io/search?query=' + targetDomain```

Dork 30:
```inurl:"/geoserver/ows?service=wfs"```

Dork 31:
```intext:"ArcGIS REST Services Directory" intitle:"Folder: /"```

Dork 32:
```inurl:/wp-content/uploads/wpo_wcpdf```

Dork 33:
```intitle:"index of "main.yml"```

Dork 34:
```inurl:/admin.aspx```

Dork 35:
```inurl:/wp-content/uploads/wpo_wcpdf```

Dork 36:
```inurl:uploadimage.php```

Dork 37:
```inurl:*/wp-content/plugins/contact-form-7/```

Dork 38:
```intitle:index.of conf.php```

Dork 39:
```intitle:"Sharing API Info"```

Dork 40:
```intitle:"Index of" inurl:/backup/ "admin.zip"```

Dork 41:
```intitle:"index of" github-api```

Dork 42:
```inurl:wp-content/uploads/wcpa_uploads```

Dork 43:
```inurl:user intitle:"Drupal" intext:"Log in" -"powered by"```

Dork 44:
```inurl: /libraries/joomla/database/```

Dork 45:
```inurl:"php?sql=select" ext:php```

Dork 46:
```inurl:"wp-content" intitle:"index.of" intext:wp-config.php```

Dork 47:
```intext:"index of" inurl:json-rpc```

Dork 48:
```intitle:"index of" "download.php?file="```

Dork 49:
```intext:"index of" inurl:jwks-rsa```

Dork 50:
```inurl:"wp-content" intitle:"index.of" intext:backup"```

Dork 51:
```intitle:index.of conf.mysql```

Dork 52:
```intitle:"index of" "users.yml" | "admin.yml" | "config.yml"```

Dork 53:
```intext:pom.xml intitle:"index of /"```

Dork 54:
```intext:"Index of" intext:"/etc"```

Dork 55:
```"sql" "parent" intitle:index.of -injection```
