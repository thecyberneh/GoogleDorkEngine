# GoogleDorkEngine
Introducing "Google Dork Engine" - your ultimate bug bounty tool! Discover vulnerabilities and sensitive information effortlessly. This website revolutionizes the process by allowing you to open multiple Google Dorks with just one click. Unleash the power of efficient bug hunting and secure your target with ease


# Description for Dorks

Dork 1: Directory listing vulnerabilities
```intitle:index.of```

Dork 2: Exposed Configuration files
```ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini```

Dork 3: Exposed Database files
```ext:sql | ext:dbf | ext:mdb```

Dork 4: Exposed log files
```ext:log```

Dork 5: Backup and old files
```ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup```

Dork 6: Login pages
```inurl:login```

Dork 7: SQL errors
```intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"```

Dork 8: Publicly exposed documents
```ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv```

Dork 9: phpinfo()
```ext:php intitle:phpinfo "published by the PHP Group"```

Dork 10: Find WordPress
```inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download```

Dork 11: Install / Setup files
```inurl:readme | inurl:license | inurl:install | inurl:setup | inurl:config```

Dork 12: Open Redirects
```inurl:redir | inurl:url | inurl:redirect | inurl:return | inurl:src=http | inurl:r=http```

Dork 13: Apache STRUTS RCE
```ext:action | ext:struts | ext:do```

Dork 14: .htaccess sensitive files
```inurl:"/phpinfo.php" | inurl:".htaccess" | inurl:"/.git" ' + targetDomain + ' -github```

Dork 15: Find Subdomains
```site:*.' + targetDomain```

Dork 16: Find Sub-Subdomains
```site:*.*.' + targetDomain```

Dork 17: Find WordPress #2
```inurl:wp-content | inurl:wp-includes ' + targetDomain```

Dork 18: Test CrossDomain
```'http://' + targetDomain + '/crossdomain.xml'```

Dork 19: Check in ThreatCrowd
```'http://threatcrowd.org/domain.php?domain=' + targetDomain```

Dork 20: Search in Web Archive #1
```'.' + targetDomain```
 
Dork 21: Search in Web Archive #2
```site:*.' + encodeURIComponent(site) + ')'```

Dork 22: Certificate Transparency
```'https://crt.sh/?q=%25.' + targetDomain```

Dork 23: Search OpenBugBounty
```'https://www.openbugbounty.org/search/?search=' + encodeURIComponent(site) + '&type=host'```

Dork 24: Search WP Config Backup
```'http://wwwb-dedup.us.archive.org:8083/cdx/search?url=' + encodeURIComponent(site) + '/&matchType=domain&collapse=digest&output=text&fl=original,timestamp&filter=urlkey:.*wp[-].*&limit=1000000&xx='```

Dork 25: Search in Censys (IPv4)
```'https://censys.io/ipv4?q=' + targetDomain```

Dork 26: Search in Censys (Domain)
```'https://censys.io/domain?q=' + targetDomain```

Dork 27: Search in Censys (Certificates)
```'https://censys.io/certificates?q=' + targetDomain```

Dork 28: Search in SHODAN
```'https://www.shodan.io/search?query=' + targetDomain```

Dork 29: Vulnerable Servers
```inurl:"/geoserver/ows?service=wfs"```

Dork 30: ArcGIS REST Services Directory
```intext:"ArcGIS REST Services Directory" intitle:"Folder: /"```

Dork 31: wp-content Juicy Info
```inurl:/wp-content/uploads/wpo_wcpdf```

Dork 32: main.yml file
```intitle:"index of "main.yml"```

Dork 33: Admin Portal
```inurl:/admin.aspx```

Dork 34: Wordpress Juicy file 1
```inurl:/wp-content/uploads/wpo_wcpdf```

Dork 35: File Upload
```inurl:uploadimage.php```

Dork 36: Vulnerable Wordpress Plugin
```inurl:*/wp-content/plugins/contact-form-7/```

Dork 37: Sensitive File
```intitle:index.of conf.php```

Dork 38: Sharing API Info
```intitle:"Sharing API Info"```

Dork 39: Sensitive Admin Backup
```intitle:"Index of" inurl:/backup/ "admin.zip"```

Dork 40: Github API
```intitle:"index of" github-api```

Dork 41: Wordpress Juicy file 2
```inurl:wp-content/uploads/wcpa_uploads```

Dork 42: Drupal Login
```inurl:user intitle:"Drupal" intext:"Log in" -"powered by"```

Dork 43: Joomla Database/
```inurl: /libraries/joomla/database/```

Dork 44: Sql File
```inurl:"php?sql=select" ext:php```

Dork 45:  Wordpress Juicy file 3
```inurl:"wp-content" intitle:"index.of" intext:wp-config.php```

Dork 46: Remote procedure call protocol
```intext:"index of" inurl:json-rpc```

Dork 47: Sensitive File
```intitle:"index of" "download.php?file="```

Dork 48: jwks-rsa file
```intext:"index of" inurl:jwks-rsa```

Dork 49: Wordpress Backup
```inurl:"wp-content" intitle:"index.of" intext:backup"```

Dork 50: Mysql file
```intitle:index.of conf.mysql```

Dork 51: Sensitive File
```intitle:"index of" "users.yml" | "admin.yml" | "config.yml"```

Dork 52: Sensitive File
```intext:pom.xml intitle:"index of /"```

Dork 53: Sensitive File
```intext:"Index of" intext:"/etc"```

Dork 54: Sensitive File
```"sql" "parent" intitle:index.of -injection```
