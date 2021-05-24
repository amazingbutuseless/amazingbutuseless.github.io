/*! For license information please see component---src-pages-index-js-900b4ab7ed2a62a7ed85.js.LICENSE.txt */
(self.webpackChunkijustwannasee=self.webpackChunkijustwannasee||[]).push([[678],{7757:function(e,t,i){e.exports=i(5666)},1433:function(e,t,i){var r;!function(n,o){"use strict";var s="function",a="undefined",l="object",u="string",c="model",d="name",p="type",f="vendor",m="version",w="architecture",h="console",g="mobile",b="tablet",v="smarttv",y="wearable",x="embedded",k={extend:function(e,t){var i={};for(var r in e)t[r]&&t[r].length%2==0?i[r]=t[r].concat(e[r]):i[r]=e[r];return i},has:function(e,t){return typeof e===u&&-1!==t.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===u?e.replace(/[^\d\.]/g,"").split(".")[0]:o},trim:function(e,t){return e=e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),typeof t===a?e:e.substring(0,255)}},_={rgx:function(e,t){for(var i,r,n,a,u,c,d=0;d<t.length&&!u;){var p=t[d],f=t[d+1];for(i=r=0;i<p.length&&!u;)if(u=p[i++].exec(e))for(n=0;n<f.length;n++)c=u[++r],typeof(a=f[n])===l&&a.length>0?2==a.length?typeof a[1]==s?this[a[0]]=a[1].call(this,c):this[a[0]]=a[1]:3==a.length?typeof a[1]!==s||a[1].exec&&a[1].test?this[a[0]]=c?c.replace(a[1],a[2]):o:this[a[0]]=c?a[1].call(this,c,a[2]):o:4==a.length&&(this[a[0]]=c?a[3].call(this,c.replace(a[1],a[2])):o):this[a]=c||o;d+=2}},str:function(e,t){for(var i in t)if(typeof t[i]===l&&t[i].length>0){for(var r=0;r<t[i].length;r++)if(k.has(t[i][r],e))return"?"===i?o:i}else if(k.has(t[i],e))return"?"===i?o:i;return e}},S={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},Z={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[d,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[d,m],[/opios[\/\s]+([\w\.]+)/i],[m,[d,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[m,[d,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[d,m],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[m,[d,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[m,[d,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[d,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[m,[d,"IE"]],[/yabrowser\/([\w\.]+)/i],[m,[d,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure Browser"],m],[/focus\/([\w\.]+)/i],[m,[d,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[m,[d,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[m,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[d,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[m,[d,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[m,[d,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[d,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1 Browser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],m],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[d,m],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[d],[/;fbav\/([\w\.]+);/i],[m,[d,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[d,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[d,m],[/\bgsa\/([\w\.]+)\s.*safari\//i],[m,[d,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[m,[d,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[d,"Chrome WebView"],m],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[m,[d,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[d,m],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[m,[d,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[m,d],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[d,[m,_.str,S.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[d,m],[/(navigator|netscape)\/([\w\.-]+)/i],[[d,"Netscape"],m],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[m,[d,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[d,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[w,"amd64"]],[/(ia32(?=;))/i],[[w,k.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[w,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[w,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[w,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[w,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[w,/ower/,"",k.lowerize]],[/(sun4\w)[;\)]/i],[[w,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[w,k.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[c,[f,"Samsung"],[p,b]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[c,[f,"Samsung"],[p,g]],[/\((ip(?:hone|od)[\s\w]*);/i],[c,[f,"Apple"],[p,g]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[f,"Apple"],[p,b]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[c,[f,"Huawei"],[p,b]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[c,[f,"Huawei"],[p,g]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[c,/_/g," "],[f,"Xiaomi"],[p,g]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[c,/_/g," "],[f,"Xiaomi"],[p,b]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[c,[f,"OPPO"],[p,g]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[c,[f,"Vivo"],[p,g]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[c,[f,"Realme"],[p,g]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[c,[f,"Motorola"],[p,g]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[c,[f,"Motorola"],[p,b]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[c,[f,"LG"],[p,b]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[c,[f,"LG"],[p,g]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[c,[f,"Lenovo"],[p,b]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[c,/_/g," "],[f,"Nokia"],[p,g]],[/droid.+;\s(pixel\sc)[\s)]/i],[c,[f,"Google"],[p,b]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[c,[f,"Google"],[p,g]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[f,"Sony"],[p,g]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[c,"Xperia Tablet"],[f,"Sony"],[p,b]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[c,[f,"OnePlus"],[p,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[c,[f,"Amazon"],[p,b]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[c,"Fire Phone"],[f,"Amazon"],[p,g]],[/\((playbook);[\w\s\),;-]+(rim)/i],[c,f,[p,b]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[c,[f,"BlackBerry"],[p,g]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[c,[f,"ASUS"],[p,b]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[c,[f,"ASUS"],[p,g]],[/(nexus\s9)/i],[c,[f,"HTC"],[p,b]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[f,[c,/_/g," "],[p,g]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[c,[f,"Acer"],[p,b]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[c,[f,"Meizu"],[p,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[f,c,[p,g]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[f,c,[p,b]],[/\s(surface\sduo)\s/i],[c,[f,"Microsoft"],[p,b]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[c,[f,"Fairphone"],[p,g]],[/\s(u304aa)\sbuild/i],[c,[f,"AT&T"],[p,g]],[/sie-(\w*)/i],[c,[f,"Siemens"],[p,g]],[/[;\/]\s?(rct\w+)\sbuild/i],[c,[f,"RCA"],[p,b]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[c,[f,"Dell"],[p,b]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[c,[f,"Verizon"],[p,b]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[c,[f,"Barnes & Noble"],[p,b]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[c,[f,"NuVision"],[p,b]],[/;\s(k88)\sbuild/i],[c,[f,"ZTE"],[p,b]],[/;\s(nx\d{3}j)\sbuild/i],[c,[f,"ZTE"],[p,g]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[c,[f,"Swiss"],[p,g]],[/[;\/]\s?(zur\d{3})\sbuild/i],[c,[f,"Swiss"],[p,b]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[c,[f,"Zeki"],[p,b]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[f,"Dragon Touch"],c,[p,b]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[c,[f,"Insignia"],[p,b]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[c,[f,"NextBook"],[p,b]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[f,"Voice"],c,[p,g]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[f,"LvTel"],c,[p,g]],[/;\s(ph-1)\s/i],[c,[f,"Essential"],[p,g]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[c,[f,"Envizen"],[p,b]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[c,[f,"MachSpeed"],[p,b]],[/[;\/]\s?tu_(1491)\sbuild/i],[c,[f,"Rotor"],[p,b]],[/(shield[\w\s]+)\sbuild/i],[c,[f,"Nvidia"],[p,b]],[/(sprint)\s(\w+)/i],[f,c,[p,g]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[f,"Microsoft"],[p,g]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[f,"Zebra"],[p,b]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[f,"Zebra"],[p,g]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[f,c,[p,h]],[/droid.+;\s(shield)\sbuild/i],[c,[f,"Nvidia"],[p,h]],[/(playstation\s[345portablevi]+)/i],[c,[f,"Sony"],[p,h]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[c,[f,"Microsoft"],[p,h]],[/smart-tv.+(samsung)/i],[f,[p,v]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[f,"Samsung"],[p,v]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[f,"LG"],[p,v]],[/(apple)\s?tv/i],[f,[c,"Apple TV"],[p,v]],[/crkey/i],[[c,"Chromecast"],[f,"Google"],[p,v]],[/droid.+aft([\w])(\sbuild\/|\))/i],[c,[f,"Amazon"],[p,v]],[/\(dtv[\);].+(aquos)/i],[c,[f,"Sharp"],[p,v]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[f,k.trim],[c,k.trim],[p,v]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[p,v]],[/((pebble))app\/[\d\.]+\s/i],[f,c,[p,y]],[/droid.+;\s(glass)\s\d/i],[c,[f,"Google"],[p,y]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[c,[f,"Zebra"],[p,y]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[f,[p,x]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[c,[p,g]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[c,[p,b]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[p,k.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[c,[f,"Generic"]],[/(phone)/i],[[p,g]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[m,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[d,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,d]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[d,m],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[d,[m,_.str,S.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[d,"Windows"],[m,_.str,S.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[d,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[d,"Mac OS"],[m,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[d,m],[/\(bb(10);/i],[m,[d,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[m,[d,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[d,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[d,"webOS"]],[/crkey\/([\d\.]+)/i],[m,[d,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[d,"Chromium OS"],m],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[d,m],[/(sunos)\s?([\w\.\d]*)/i],[[d,"Solaris"],m],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[d,m]]},E=function e(t,i){if("object"==typeof t&&(i=t,t=o),!(this instanceof e))return new e(t,i).getResult();var r=t||(void 0!==n&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:""),s=i?k.extend(Z,i):Z;return this.getBrowser=function(){var e={name:o,version:o};return _.rgx.call(e,r,s.browser),e.major=k.major(e.version),e},this.getCPU=function(){var e={architecture:o};return _.rgx.call(e,r,s.cpu),e},this.getDevice=function(){var e={vendor:o,model:o,type:o};return _.rgx.call(e,r,s.device),e},this.getEngine=function(){var e={name:o,version:o};return _.rgx.call(e,r,s.engine),e},this.getOS=function(){var e={name:o,version:o};return _.rgx.call(e,r,s.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===u&&e.length>255?k.trim(e,255):e,this},this.setUA(r),this};E.VERSION="0.7.28",E.BROWSER={NAME:d,MAJOR:"major",VERSION:m},E.CPU={ARCHITECTURE:w},E.DEVICE={MODEL:c,VENDOR:f,TYPE:p,CONSOLE:h,MOBILE:g,SMARTTV:v,TABLET:b,WEARABLE:y,EMBEDDED:x},E.ENGINE={NAME:d,VERSION:m},E.OS={NAME:d,VERSION:m},typeof t!==a?(e.exports&&(t=e.exports=E),t.UAParser=E):(r=function(){return E}.call(t,i,t,e))===o||(e.exports=r);var L=void 0!==n&&(n.jQuery||n.Zepto);if(L&&!L.ua){var C=new E;L.ua=C.getResult(),L.ua.get=function(){return C.getUA()},L.ua.set=function(e){C.setUA(e);var t=C.getResult();for(var i in t)L.ua[i]=t[i]}}}("object"==typeof window?window:this)},714:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return J}});var r=i(7294),n=i(1433),o=i.n(n),s=i(2122),a=i(7548),l=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=(0,a.Z)((function(e){return l.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=i(8197),d=i(4660),p=i(4418),f=u,m=function(e){return"theme"!==e},w=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?f:m},h=function(e,t,i){var r;if(t){var n=t.shouldForwardProp;r=e.__emotion_forwardProp&&n?function(t){return e.__emotion_forwardProp(t)&&n(t)}:n}return"function"!=typeof r&&i&&(r=e.__emotion_forwardProp),r},g=function e(t,i){var n,o,a=t.__emotion_real===t,l=a&&t.__emotion_base||t;void 0!==i&&(n=i.label,o=i.target);var u=h(t,i,a),f=u||w(l),m=!f("as");return function(){var g=arguments,b=a&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&b.push("label:"+n+";"),null==g[0]||void 0===g[0].raw)b.push.apply(b,g);else{0,b.push(g[0][0]);for(var v=g.length,y=1;y<v;y++)b.push(g[y],g[0][y])}var x=(0,c.w)((function(e,t,i){var n=m&&e.as||l,s="",a=[],h=e;if(null==e.theme){for(var g in h={},e)h[g]=e[g];h.theme=(0,r.useContext)(c.T)}"string"==typeof e.className?s=(0,d.f)(t.registered,a,e.className):null!=e.className&&(s=e.className+" ");var v=(0,p.O)(b.concat(a),t.registered,h);(0,d.M)(t,v,"string"==typeof n);s+=t.key+"-"+v.name,void 0!==o&&(s+=" "+o);var y=m&&void 0===u?w(n):f,x={};for(var k in e)m&&"as"===k||y(k)&&(x[k]=e[k]);return x.className=s,x.ref=i,(0,r.createElement)(n,x)}));return x.displayName=void 0!==n?n:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=l,x.__emotion_styles=b,x.__emotion_forwardProp=u,Object.defineProperty(x,"toString",{value:function(){return"."+o}}),x.withComponent=function(t,r){return e(t,(0,s.Z)({},i,r,{shouldForwardProp:h(x,r,!0)})).apply(void 0,b)},x}},b=i.p+"static/logo-0db35f217e5b28982cd7ca6e22ed1c98.svg",v=i(3431);var y={name:"zu3xwj",styles:"position:fixed;left:1.6rem;top:50%;color:var(--primary-color);z-index:2;@media screen and (min-width: 1280px){left:6.4rem;top:50%;transform:translateY(-50%);}"},x={name:"1vxping",styles:"width:auto;height:4.8rem;@media screen and (min-width: 1280px){height:6rem;}"};function k(e){var t=e.style;return(0,v.tZ)("div",{css:y,style:t},(0,v.tZ)("h1",null,"늦덕이라도,"),(0,v.tZ)("img",{src:b,css:x,alt:"ijustwannasee"}))}var _=g("canvas",{target:"e1xg6ca90"})("position:sticky;top:50%;width:100vw;height:auto;z-index:1;transform:rotate(\n    ",(function(e){var t=e.degree;return t>0?t.toFixed(2):"0"}),"deg) translateY(-50%);@media screen and (min-width: 1280px){top:0;transform:rotate(\n      ",(function(e){var t=e.degree;return t>0?t.toFixed(2):"0"}),"deg) translateY(0);}");function S(e){var t=e.frame,i=e.degree,n=(0,r.useRef)(null),o=(0,r.useMemo)((function(){if(n.current)return n.current.getContext("2d")}),[n.current]);return o&&t&&o.drawImage(t,0,0),(0,v.tZ)(_,{width:2560,height:1440,degree:i,ref:n})}var Z=g("section",{target:"e9vpkxq2"})({name:"bjn8wh",styles:"position:relative"}),E=g("div",{target:"e9vpkxq1"})({name:"1cqpvuq",styles:"position:relative;height:200vh;@media screen and (min-width: 1280px){height:240vh;}"}),L={name:"6e417j",styles:"position:relative;margin-bottom:0.8rem;padding-top:56.25%"},C=g("video",{target:"e9vpkxq0"})({name:"1b4920d",styles:"position:absolute;top:0;left:0;width:100%;height:100%"});function A(){var e=186,t=(0,r.useRef)(null),i=(0,r.useState)(1),n=i[0],o=i[1],s=(0,r.useState)(null),a=s[0],l=s[1],u=(0,r.useState)(0),c=u[0],d=u[1],p=(0,r.useState)(1),f=p[0],m=p[1],w=function(e){return void 0===e&&(e=n),"./static/hero/desktop/hero"+e.toString().padStart(4,"0")+".jpg"};return(0,r.useEffect)((function(){var i=function(){var i=t.current;if(i){var r=document.documentElement.scrollTop/(i.scrollHeight-window.innerHeight),n=Math.min(185,Math.floor(r*e));document.body.style.backgroundColor=n>=62?"rgba(255, 255, 255, 1)":"",requestAnimationFrame((function(){return o(n)})),d(n>90?n/e:0);var s=n>=38?Math.max(0,1-n/62):1;m(s)}};return window.addEventListener("scroll",i),function(){for(var t=1;t<=e;t++)(new Image).src=w(t)}(),function(){window.removeEventListener("scroll",i)}}),[]),(0,r.useEffect)((function(){var e=new Image;e.src=w(),e.onload=function(){return l(e)}}),[n]),(0,v.tZ)(Z,null,(0,v.tZ)(E,{ref:t},(0,v.tZ)(S,{frame:a,degree:c})),(0,v.tZ)(k,{style:{opacity:f.toFixed(2)}}))}function z(){return(0,v.tZ)(Z,{css:L},(0,v.tZ)(C,{src:"./static/hero.mp4",playsInline:!0,muted:!0,autoPlay:!0}))}var T=g("h2",{target:"e1wa3f822"})({name:"m3gwwx",styles:"margin:0;margin-bottom:1.6rem;padding:0;font-size:2.4rem;line-height:1.3;letter-spacing:-1px;word-break:keep-all"}),O=g("section",{target:"e1wa3f821"})({name:"18fu5qy",styles:"position:relative;background-color:var(--primary-color)"}),N=g("div",{target:"e1wa3f820"})({name:"jsr53i",styles:"padding:2.4rem 1.6rem;color:#fff;p{margin:0.8rem 0;padding:0;font-size:1.4rem;line-height:1.5;word-break:keep-all;}@media screen and (min-width: 1280px){padding:3.2rem 4rem;}"}),j={name:"17g50ke",styles:"padding:0.4rem;background-color:#7b2cbf60;line-height:1.8"};var M=g("svg",{target:"ebmz8p91"})({name:"mguggn",styles:"position:absolute;left:0;z-index:1"}),R=g("div",{target:"ebmz8p90"})({name:"1gcb3u9",styles:"display:flex;flex-direction:column;align-items:flex-start;@media screen and (min-width: 768px){flex-direction:row;align-items:center;}"});function P(e){var t=e.children,i=(0,r.useState)(0),n=i[0],o=i[1];return(0,r.useEffect)((function(){var e=function(){o(document.documentElement.clientWidth)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),(0,v.tZ)(O,null,(0,v.tZ)(M,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",style:{top:"calc(-30.5rem * "+(n/1440).toFixed(2)+")"}},(0,v.tZ)("path",{fill:"#9d4edd",fillOpacity:"1",d:"M0,256L60,245.3C120,235,240,213,360,224C480,235,600,277,720,266.7C840,256,960,192,1080,170.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"})),(0,v.tZ)(R,null,(0,v.tZ)(N,null,(0,v.tZ)(T,null,"ijustwannaseewonwoo,",(0,v.tZ)("br",null),"원우가 나온 유튜브 비디오 장면 모아보기"),(0,v.tZ)("p",null,"늦은 입덕 때문에 앞으로 봐야 할 영상이 지금까지 본 영상보다 많다는 기쁨을 누린 것도 잠깐,",(0,v.tZ)("br",null),"매일매일 일에 치이고 돌아와 새벽까지 원우 영상을 보면서 힐링을 하던 덕후는 금세 체력 고갈때문에 광광 울게 되었어요.",(0,v.tZ)("br",null),"그리고 이런 생각을 하게 되었습니다."),(0,v.tZ)("p",null,'"내가 원우가 나온 장면을 보기 위해 모든 영상을 찾아 보지 않더라도,',(0,v.tZ)("br",null),'좀 더 쉽게 원우가 나온 영상, 장면을 볼 수 있는 방법이 있으면 좋겠다.어쩌면 AI의 도움을 받을 수 있지 않을까?"'),(0,v.tZ)("p",null,(0,v.tZ)("span",{css:j},'twannaseewonwoo는 이런 생각끝에 만든 "원우가 나온 유튜브 비디오 장면 모아보기" 프로젝트입니다.'))),t))}var F=g("div",{target:"em104wd1"})({name:"1ohzd92",styles:"margin-top:2.4rem;padding:2.4rem 1.6rem;padding-bottom:0;box-sizing:border-box;background-color:#fff;border-radius:4px;color:var(--background-color);h3{margin:0;padding:0;font-size:1.6rem;color:var(--primary-color);letter-spacing:-1px;word-break:keep-all;}img{display:block;width:100%;height:auto;max-width:100%;}"}),q=g("div",{target:"em104wd0"})("display:flex;flex-direction:column;justify-content:center;strong{color:var(--primary-color);font-weight:300;}",F,"{display:flex;padding:0;}@media screen and (min-width: 1024px){flex-direction:row;margin:0 -1.2rem;margin-top:2.4rem;",F,"{margin:0 1.2rem;width:50%;}}");function B(){return(0,v.tZ)(F,null,(0,v.tZ)("h3",null,"나온 장면을 보는 제일 쉬운 방법 - 플레이리스트 속 😻를 찾으세요."),(0,v.tZ)("p",null,"등록되면 플레이리스트 비디오 목록 속 섬네일 이미지 위에 고양이 이모지가 표시됩니다.",(0,v.tZ)("br",null),"바쁘다바빠현대사회, 도무지 비디오 전체를 볼 시간이 나지 않을 때, 봤던비디오또보고또보고하면서 원우가 나온 장면만 복습하고 싶을 때 - 고양이를 찾아 원우가 나온 장면을 확인해보세요."),(0,v.tZ)("picture",null,(0,v.tZ)("source",{srcSet:"./static/feature1_d.png",media:"(min-width: 1280px)"}),(0,v.tZ)("img",{src:"./static/feature1_m.png"})))}function I(){return(0,v.tZ)(F,{style:{alignItems:"center"}},(0,v.tZ)("img",{src:"./static/feature2.png",style:{width:"240px",height:"auto"},alt:""}),(0,v.tZ)("div",{style:{padding:"2.4rem",paddingLeft:"0"}},(0,v.tZ)("h3",null,"장면 자동 재생하기"),(0,v.tZ)("p",null,"등록된 비디오라면 기본적으로 등록된 장면만을 자동 재생합니다.",(0,v.tZ)("br",null),'장면 외에 비디오 전체 또는 특정 부분을 재생하고 싶다면 비디오를 보던 것처럼 플레이어에서 재생 지점을 선택하거나, "장면 자동 재생"을 비활성 시킬 수 있습니다.')))}function U(){return(0,v.tZ)(F,{style:{flexDirection:"column",justifyContent:"space-between"}},(0,v.tZ)("div",{style:{marginTop:"auto",padding:"2.4rem 1.6rem"}},(0,v.tZ)("h3",null,"장면 추가하기"),(0,v.tZ)("p",null,"록되지 않은 비디오라면, 또는 내가 알고 있는 장면이 등록되지 않은 경우라면 비디오에 장면을 추가할 수 있습니다."),(0,v.tZ)("p",null,"추가된 장면은 ijustwannaseewonwoo를 이용하는 다른 원우팬들에게 오를 볼 수 있게 도와줄 뿐만 아니라, 장면 등록 과정 얼굴 데이터 수집을 통해서 앞으로 많은 비디오에서 찾아내는데 도움을 주게 됩니다."),(0,v.tZ)("p",null,(0,v.tZ)("strong",null,"장면이 등록되지 않은 비디오, 빠진 장면들이 있는 비디오가 눈에 띈다면 부디 그냥 지나치지 마시고 장면을 등록해주세요.😽"))),(0,v.tZ)("img",{src:"./static/feature3.png",alt:""}))}function D(){return(0,v.tZ)(O,null,(0,v.tZ)(N,null,(0,v.tZ)(T,null,"Features."),(0,v.tZ)(B,null),(0,v.tZ)(q,null,(0,v.tZ)(I,null),(0,v.tZ)(U,null))))}var V=g(N,{target:"e10rxl460"})({name:"1w0hway",styles:"font-style:normal;text-align:right;a{display:inline-block;font-size:1.2rem;color:#fff;text-decoration:none;}svg{padding:0.8rem;cursor:pointer;}path{fill:#fff;}"});function G(){return(0,v.tZ)(O,null,(0,v.tZ)(V,null,(0,v.tZ)("p",null,"© amazingbutuseless 2021."),(0,v.tZ)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"}},(0,v.tZ)("a",{href:"mailto:cindian@amazingbutuseless.net"},"cindian@amazingbutuseless.net"),(0,v.tZ)("svg",{height:"24",viewBox:"0 0 16 16",version:"1.1",width:"24","aria-hidden":"true",onClick:function(){window.open("https://github.com/amazingbutuseless/ijustwannaseewonwoo")}},(0,v.tZ)("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})),(0,v.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",onClick:function(){window.open("https://twitter.com/i_canbe_nothing")}},(0,v.tZ)("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})))))}function H(e,t,i,r,n,o,s){try{var a=e[o](s),l=a.value}catch(u){return void i(u)}a.done?t(l):Promise.resolve(l).then(r,n)}function W(e){return function(){var t=this,i=arguments;return new Promise((function(r,n){var o=e.apply(t,i);function s(e){H(o,r,n,s,a,"next",e)}function a(e){H(o,r,n,s,a,"throw",e)}s(void 0)}))}}var Y=i(7757),X=i.n(Y);var $={name:"1j26kz8",styles:"margin-left:1.6rem;margin-bottom:4rem;color:#fff;strong{display:block;margin-bottom:0.8rem;font-size:1.4rem;}button{padding:1.6rem;background-color:#fff;border:0;outline:2px solid #fff;outline-offset:2px;font-size:1.4rem;color:var(--primary-color);cursor:pointer;}@media screen and (min-width: 768px){margin:0 8rem 0 auto;}"};function K(){var e=(0,r.useState)("Download"),t=e[0],i=e[1],n=(0,r.useState)(""),s=n[0],a=n[1],l=function(){return(new(o())).getOS()},u=function(e){if("Mac OS"===l().name){var t=e.find((function(e){return e.browser_download_url.endsWith(".dmg")}));return a(t.browser_download_url),void i(t.name)}};return(0,r.useEffect)((function(){function e(){return(e=W(X().mark((function e(){var t,i,r;return X().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/amazingbutuseless/ijustwannaseewonwoo/releases/latest");case 2:return t=e.sent,e.next=5,t.json();case 5:i=e.sent,r=i.assets,u(r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,v.tZ)("div",{css:$},s&&(0,v.tZ)(r.Fragment,null,(0,v.tZ)("strong",null,"다운로드 for ",l().name),(0,v.tZ)("button",{onClick:function(){window.open(s)}},t)))}var J=function(){var e=(new(o())).getDevice().type,t=["mobile","tablet"].includes(e);return(0,v.tZ)("main",null,(0,v.tZ)("title",null,"ijustwannaseewonwoo"),t?(0,v.tZ)(z,null):(0,v.tZ)(A,null),(0,v.tZ)(P,null,(0,v.tZ)(K,null)),(0,v.tZ)(D,null),(0,v.tZ)(G,null))}},5666:function(e){var t=function(e){"use strict";var t,i=Object.prototype,r=i.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",s=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function l(e,t,i){return Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(T){l=function(e,t,i){return e[t]=i}}function u(e,t,i,r){var n=t&&t.prototype instanceof h?t:h,o=Object.create(n.prototype),s=new C(r||[]);return o._invoke=function(e,t,i){var r=d;return function(n,o){if(r===f)throw new Error("Generator is already running");if(r===m){if("throw"===n)throw o;return z()}for(i.method=n,i.arg=o;;){var s=i.delegate;if(s){var a=Z(s,i);if(a){if(a===w)continue;return a}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===d)throw r=m,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=f;var l=c(e,t,i);if("normal"===l.type){if(r=i.done?m:p,l.arg===w)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(r=m,i.method="throw",i.arg=l.arg)}}}(e,i,s),o}function c(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(T){return{type:"throw",arg:T}}}e.wrap=u;var d="suspendedStart",p="suspendedYield",f="executing",m="completed",w={};function h(){}function g(){}function b(){}var v={};v[o]=function(){return this};var y=Object.getPrototypeOf,x=y&&y(y(A([])));x&&x!==i&&r.call(x,o)&&(v=x);var k=b.prototype=h.prototype=Object.create(v);function _(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function i(n,o,s,a){var l=c(e[n],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){i("next",e,s,a)}),(function(e){i("throw",e,s,a)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return i("throw",e,s,a)}))}a(l.arg)}var n;this._invoke=function(e,r){function o(){return new t((function(t,n){i(e,r,t,n)}))}return n=n?n.then(o,o):o()}}function Z(e,i){var r=e.iterator[i.method];if(r===t){if(i.delegate=null,"throw"===i.method){if(e.iterator.return&&(i.method="return",i.arg=t,Z(e,i),"throw"===i.method))return w;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return w}var n=c(r,e.iterator,i.arg);if("throw"===n.type)return i.method="throw",i.arg=n.arg,i.delegate=null,w;var o=n.arg;return o?o.done?(i[e.resultName]=o.value,i.next=e.nextLoc,"return"!==i.method&&(i.method="next",i.arg=t),i.delegate=null,w):o:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,w)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function A(e){if(e){var i=e[o];if(i)return i.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,s=function i(){for(;++n<e.length;)if(r.call(e,n))return i.value=e[n],i.done=!1,i;return i.value=t,i.done=!0,i};return s.next=s}}return{next:z}}function z(){return{value:t,done:!0}}return g.prototype=k.constructor=b,b.constructor=g,g.displayName=l(b,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,a,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},_(S.prototype),S.prototype[s]=function(){return this},e.AsyncIterator=S,e.async=function(t,i,r,n,o){void 0===o&&(o=Promise);var s=new S(u(t,i,r,n),o);return e.isGeneratorFunction(i)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},_(k),l(k,a,"Generator"),k[o]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var i in e)t.push(i);return t.reverse(),function i(){for(;t.length;){var r=t.pop();if(r in e)return i.value=r,i.done=!1,i}return i.done=!0,i}},e.values=A,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var i in this)"t"===i.charAt(0)&&r.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var i=this;function n(r,n){return a.type="throw",a.arg=e,i.next=r,n&&(i.method="next",i.arg=t),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var l=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(l&&u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,w):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),w},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),L(i),w}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var r=i.completion;if("throw"===r.type){var n=r.arg;L(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,i,r){return this.delegate={iterator:A(e),resultName:i,nextLoc:r},"next"===this.method&&(this.arg=t),w}},e}(e.exports);try{regeneratorRuntime=t}catch(i){Function("r","regeneratorRuntime = r")(t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-900b4ab7ed2a62a7ed85.js.map