function handleSearch() {
  var targetDomain = document.getElementById('target').value;
  console.log("xx");

  if (!targetDomain) {
      alert('Please enter a target domain.');
      return;
  }

  googleSearch(1, targetDomain);
  googleSearch(2, targetDomain);
  googleSearch(3, targetDomain);
  googleSearch(4, targetDomain);
  googleSearch(5, targetDomain);
  googleSearch(6, targetDomain);
  googleSearch(7, targetDomain);
  googleSearch(8, targetDomain);
  googleSearch(9, targetDomain);
  googleSearch(10, targetDomain);
  googleSearch(12, targetDomain);
  googleSearch(13, targetDomain);
  googleSearch(14, targetDomain);
  googleSearch(17, targetDomain);
  googleSearch(18, targetDomain);
  googleSearch(19, targetDomain);
  googleSearch(20, targetDomain);
  googleSearch(22, targetDomain);
  googleSearch(23, targetDomain);
  googleSearch(28, targetDomain);
  googleSearch(29, targetDomain);
  googleSearch(30, targetDomain);
  googleSearch(31, targetDomain);
  googleSearch(33, targetDomain);
  googleSearch(34, targetDomain);
  googleSearch(35, targetDomain);
  googleSearch(36, targetDomain);
  googleSearch(37, targetDomain);
  googleSearch(38, targetDomain);
  googleSearch(39, targetDomain);
  googleSearch(40, targetDomain);
  googleSearch(41, targetDomain);
  googleSearch(42, targetDomain);
  googleSearch(43, targetDomain);
  googleSearch(44, targetDomain);
  googleSearch(45, targetDomain);
  googleSearch(46, targetDomain);
  googleSearch(47, targetDomain);
  googleSearch(48, targetDomain);
  googleSearch(49, targetDomain);
  googleSearch(50, targetDomain);
  googleSearch(51, targetDomain);
  googleSearch(52, targetDomain);
  googleSearch(53, targetDomain);
  googleSearch(54, targetDomain);
  googleSearch(55, targetDomain);
  googleSearch(56, targetDomain);
  googleSearch(57, targetDomain);
  googleSearch(58, targetDomain);
  googleSearch(59, targetDomain);
  googleSearch(60, targetDomain);
  googleSearch(61, targetDomain);
  googleSearch(62, targetDomain);
  googleSearch(63, targetDomain);
  googleSearch(64, targetDomain)
}

function googleSearch(type, targetDomain) {
  var searchQuery = 'site:' + targetDomain;

  switch (type) {
      case 1:
          searchQuery += ' intitle:index.of';
          break;
      case 2:
          searchQuery += ' ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini';
          break;
      case 3:
          searchQuery += ' ext:sql | ext:dbf | ext:mdb';
          break;
      case 4:
          searchQuery += ' ext:log';
          break;
      case 5:
          searchQuery += ' ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup';
          break;
      case 6:
          searchQuery += ' inurl:login';
          break;
      case 7:
          searchQuery += ' intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"';
          break;
      case 8:
          searchQuery += ' ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv';
          break;
      case 9:
          searchQuery += ' ext:php intitle:phpinfo "published by the PHP Group"';
          break;
      case 10:
          searchQuery += ' inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download';
          break;
      case 12:
          searchQuery += ' inurl:readme | inurl:license | inurl:install | inurl:setup | inurl:config';
          break;
      case 13:
          searchQuery += ' inurl:redir | inurl:url | inurl:redirect | inurl:return | inurl:src=http | inurl:r=http';
          break;
      case 14:
          searchQuery += ' ext:action | ext:struts | ext:do';
          break;
      case 17:
          var site = 'inurl:"/phpinfo.php" | inurl:".htaccess" | inurl:"/.git" ' + targetDomain + ' -github';
          var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
          window.open(url, '_blank');
          return;
      case 18:
          var site = 'site:*.' + targetDomain;
          var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
          window.open(url, '_blank');
          return;
      case 19:
          var site = 'site:*.*.' + targetDomain;
          var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
          window.open(url, '_blank');
          return;
      case 20:
          var site = 'inurl:wp-content | inurl:wp-includes ' + targetDomain;
          var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
          window.open(url, '_blank');
          return;
      case 22:
          var url = 'http://' + targetDomain + '/crossdomain.xml';
          window.open(url, '_blank');
          return;
      case 23:
          var url = 'http://threatcrowd.org/domain.php?domain=' + targetDomain;
          window.open(url, '_blank');
          return;
      case 28:
          var site = '.' + targetDomain;
          var url = 'https://web.archive.org/web/*/(.' + encodeURIComponent(site) + ')';
          window.open(url, '_blank');
          return;
      case 29:
          var site = targetDomain;
          var url = 'https://web.archive.org/web/*/' + encodeURIComponent(site) + '/*';
          window.open(url, '_blank');
          return;
      case 30:
          var url = 'https://crt.sh/?q=%25.' + targetDomain;
          window.open(url, '_blank');
          return;
      case 31:
          var site = targetDomain;
          var url = 'https://www.openbugbounty.org/search/?search=' + encodeURIComponent(site) + '&type=host';
          window.open(url, '_blank');
          return;
      case 33:
          var site = '+inurl:' + targetDomain + ' +ext:wp- | +inurl:' + targetDomain + ' +ext:wp-content';
          var url = 'http://wwwb-dedup.us.archive.org:8083/cdx/search?url=' + encodeURIComponent(site) + '/&matchType=domain&collapse=digest&output=text&fl=original,timestamp&filter=urlkey:.*wp[-].*&limit=1000000&xx=';
          window.open(url, '_blank');
          return;
      case 34:
          var url = 'https://censys.io/ipv4?q=' + targetDomain;
          window.open(url, '_blank');
          return;
      case 35:
          var url = 'https://censys.io/domain?q=' + targetDomain;
          window.open(url, '_blank');
          return;
      case 36:
          var url = 'https://censys.io/certificates?q=' + targetDomain;
          window.open(url, '_blank');
          return;
      case 37:
          var url = 'https://www.shodan.io/search?query=' + targetDomain;
          window.open(url, '_blank');
          return;
      case 38:
          searchQuery += ' inurl:"/geoserver/ows?service=wfs"';
          break;
      case 39:
          searchQuery += ' intext:"ArcGIS REST Services Directory" intitle:"Folder: /"';
          break;
      case 40:
          searchQuery += ' inurl:/wp-content/uploads/wpo_wcpdf';
          break;
      case 41:
          searchQuery += ' intitle:"index of "main.yml"';
          break;
      case 42:
          searchQuery += ' inurl:/admin.aspx'
          break
      case 43:
          searchQuery += ' inurl:/wp-content/uploads/wpo_wcpdf'
          break
      case 44:
          searchQuery += ' inurl:uploadimage.php'
          break
      case 45:
          searchQuery += ' inurl:*/wp-content/plugins/contact-form-7/'
          break
      case 46:
          searchQuery += ' intitle:index.of conf.php'
          break
      case 47:
          searchQuery += ' intitle:"Sharing API Info"'
          break
      case 48:
          searchQuery += ' intitle:"Index of" inurl:/backup/ "admin.zip"'
          break
      case 49:
          searchQuery += ' intitle:"index of" github-api'
          break
      case 50:
          searchQuery += ' inurl:wp-content/uploads/wcpa_uploads'
          break
      case 51:
          searchQuery += ' inurl:user intitle:"Drupal" intext:"Log in" -"powered by"'
          break
      case 52:
          searchQuery += ' inurl: /libraries/joomla/database/'
          break
      case 53:
          searchQuery += ' inurl:"php?sql=select" ext:php'
          break
      case 54:
          searchQuery += ' inurl:"wp-content" intitle:"index.of" intext:wp-config.php'
          break
      case 55:
          searchQuery += ' intext:"index of" inurl:json-rpc'
          break
      case 56:
          searchQuery += ' intitle:"index of" "download.php?file="'
          break
      case 57:
          searchQuery += ' intext:"index of" inurl:jwks-rsa'
          break
      case 58:
          searchQuery += ' inurl:"wp-content" intitle:"index.of" intext:backup"'
          break
      case 59:
          searchQuery += ' intitle:index.of conf.mysql'
          break
      case 60:
          searchQuery += ' intitle:"index of" "users.yml" | "admin.yml" | "config.yml"'
          break
      case 61:
          searchQuery += ' intitle:"index of" "docker-compose.yml"'
          break
      case 62:
          searchQuery += ' intext:pom.xml intitle:"index of /"'
          break
      case 63:
          searchQuery += ' intext:"Index of" intext:"/etc"'
          break
      case 64:
          searchQuery += ' "sql" "parent" intitle:index.of -injection'
          break
      default:
          alert('Invalid option.');
          return;
  }

  var url = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);
  window.open(url, '_blank');
}