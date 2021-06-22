(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(202)),s={id:"how-to-use-ssl-tls-with-redis-enterprise",title:"How to Use SSL/TLS With Redis Enterprise",slug:"/guide/security/how-to-use-ssl-tls-with-redis-enterprise/",description:"Learn how to secure your Redis databases using SSL",keywords:["java","node.js","python","ssl","tls"]},c={unversionedId:"guides/security/how-to-use-tls-with-redis-enterprise/how-to-use-ssl-tls-with-redis-enterprise",id:"guides/security/how-to-use-tls-with-redis-enterprise/how-to-use-ssl-tls-with-redis-enterprise",isDocsHomePage:!1,title:"How to Use SSL/TLS With Redis Enterprise",description:"Learn how to secure your Redis databases using SSL",source:"@site/docs/guides/security/how-to-use-tls-with-redis-enterprise/how-to-use-ssl-tls-with-redis-enterprise.mdx",slug:"/guide/security/how-to-use-ssl-tls-with-redis-enterprise/",permalink:"/guide/security/how-to-use-ssl-tls-with-redis-enterprise/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/guides/security/how-to-use-tls-with-redis-enterprise/how-to-use-ssl-tls-with-redis-enterprise.mdx",version:"current"},o=[{value:"1- Get the Certificate from Redis Cluster",id:"1--get-the-certificate-from-redis-cluster",children:[]},{value:"2- Generate a New Client Certificate",id:"2--generate-a-new-client-certificate",children:[]},{value:"3- Configure the Redis Database",id:"3--configure-the-redis-database",children:[]},{value:"4- Connect to the Database using the Certificate",id:"4--connect-to-the-database-using-the-certificate",children:[{value:"4.1 Using Redis-CLI",id:"41-using-redis-cli",children:[]},{value:"4.2 Using Python",id:"42-using-python",children:[]},{value:"4.3 Using Node.JS",id:"43-using-nodejs",children:[]},{value:"4.4 Using Java",id:"44-using-java",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],l={toc:o};function p(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{alt:"Header",src:n(615).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Date: 19-JAN-2021"),Object(i.b)("li",{parentName:"ul"},"Author: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://twitter.com/tgrall"}),"Tug Grall"))),Object(i.b)("p",null,"In this article, I will explain how to secure your Redis databases using SSL (Secure Sockets Layer). In production, it is a good practice to use SSL to protect the data that are moving between various computers (client applications and Redis servers). Transport Level Security (TLS) guarantees that only allowed applications/computers are connected to the database, and also that data is not viewed or altered by a middle man process."),Object(i.b)("p",null,"You can secure the connections between your client applications and Redis cluster using:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"One-Way SSL: the client (your application) get the certificate from the server (Redis cluster), validate it, and then all communications are encrypted"),Object(i.b)("li",{parentName:"ul"},"Two-Way SSL: (aka mutual SSL) here both the client and the server authenticate each other and validate that both ends are trusted.")),Object(i.b)("p",null,"In this article, I will focus on the Two-Way SSL, and using Redis Enterprise."),Object(i.b)("p",null,"Prerequisites:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A Redis Enterprise 6.0.x database, (my database is protected by the password ",Object(i.b)("inlineCode",{parentName:"li"},"secretdb01"),", and listening on port ",Object(i.b)("inlineCode",{parentName:"li"},"12000"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"redis-cli")," to run basic commands"),Object(i.b)("li",{parentName:"ul"},"Python, Node, and Java installed if you want to test various languages.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Simple  Test")),Object(i.b)("p",null,"Let's make sure that the database is available:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"redis-cli -p 12000 -a secretdb01 INFO SERVER\n")),Object(i.b)("p",null,"This should print the Server information."),Object(i.b)("h2",{id:"1--get-the-certificate-from-redis-cluster"},"1- Get the Certificate from Redis Cluster"),Object(i.b)("p",null,"You have access to the Redis Enterprise Cluster, you go to one of the nodes to retrieve the certificate (that is a self-generated one by default)."),Object(i.b)("p",null,"The cluster certificate is located at: ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/opt/redislabs/proxy_cert.pem"),"."),Object(i.b)("p",null,'You have to copy it on each client machine; note that once it is done you can use this certificate to connect using "One-Way SSL", but not the purpose of this article.'),Object(i.b)("p",null,"In my demonstration I am using Docker and copy the certificate using this command from my host:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker cp redis-node1:/etc/opt/redislabs/proxy_cert.pem ./certificates\n")),Object(i.b)("h2",{id:"2--generate-a-new-client-certificate"},"2- Generate a New Client Certificate"),Object(i.b)("p",null,"Using the Two-Way SSL you need to have a certificate for the client that will be used by Redis database proxy to trust the client."),Object(i.b)("p",null,"In this article I will use a self-signed certificate using OpenSSL, in this example, we are creating a certificate for an application named ",Object(i.b)("inlineCode",{parentName:"p"},"app_001"),"."),Object(i.b)("p",null,"You can create as many certificates as you want, or reuse this one for all servers/applications."),Object(i.b)("p",null,"Open a terminal and run the following commands:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"\nopenssl req \\\n  -nodes \\\n -newkey rsa:2048 \\\n -keyout client_key_app_001.pem \\\n -x509 \\\n -days 36500 \\\n -out client_cert_app_001.pem\n\n")),Object(i.b)("p",null,"This command generate a new client key (",Object(i.b)("inlineCode",{parentName:"p"},"client_key_001.pem"),") and certificate (",Object(i.b)("inlineCode",{parentName:"p"},"client_cert_001.pem"),") with no passphrase."),Object(i.b)("h2",{id:"3--configure-the-redis-database"},"3- Configure the Redis Database"),Object(i.b)("p",null,"The next step is to take the certificate and add it to the database you want to protect. "),Object(i.b)("p",null,"Let's copy the certificate and paste it into the Redis Enterprise Web Console."),Object(i.b)("p",null,"Copy the certificate in your clipboard:"),Object(i.b)("p",null,"Mac:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pbcopy < client_cert_app_001.pem\n")),Object(i.b)("p",null,"Linux:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," xclip -sel clip < client_cert_app_001.pem\n")),Object(i.b)("p",null,"Windows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"clip < client_cert_app_001.pem\n")),Object(i.b)("p",null,"Go to the Redis Enterprise Admin Web Console and enable TLS on your database:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Edit the database configuration"),Object(i.b)("li",{parentName:"ol"},"Check TLS"),Object(i.b)("li",{parentName:"ol"},'Select "Require TLS for All communications"'),Object(i.b)("li",{parentName:"ol"},'Check "Enforce client authentication"'),Object(i.b)("li",{parentName:"ol"},"Paste the certificate in the text area"),Object(i.b)("li",{parentName:"ol"},"Click the Save button to save the certificate"),Object(i.b)("li",{parentName:"ol"},"Click the Update button to save the configuration.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Security Configuration",src:n(616).default})),Object(i.b)("p",null,"The database is now protected, and it is mandatory to use the SSL certificate to connect to it."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"redis-cli -p 12000 -a secretdb01 INFO SERVER\n(error) ERR unencrypted connection is prohibited\n")),Object(i.b)("h2",{id:"4--connect-to-the-database-using-the-certificate"},"4- Connect to the Database using the Certificate"),Object(i.b)("p",null,'In all following examples, I am using a "self-signed" certificate, so I do not check the validity of the hostname.\nYou should adapt the connections/TLS information based on your certificate configuration.'),Object(i.b)("h3",{id:"41-using-redis-cli"},"4.1 Using Redis-CLI"),Object(i.b)("p",null,"To connect to a SSL protected database using ",Object(i.b)("inlineCode",{parentName:"p"},"redis-cli")," you have to use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.stunnel.org/index.html"}),Object(i.b)("inlineCode",{parentName:"a"},"stunnel")),"."),Object(i.b)("p",null,"Create a ",Object(i.b)("inlineCode",{parentName:"p"},"stunnel.conf")," file with the following content:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"cert = /path_to/certificates/client_cert_app_001.pem\nkey = /path_to/certificates/client_key_app_001.pem\ncafile = /path_to/certificates/proxy_cert.pem\nclient = yes\n\n[redislabs]\naccept = 127.0.0.1:6380\nconnect = 127.0.0.1:12000\n\n")),Object(i.b)("p",null,"Start stunnel using the command"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"stunnel ./stunnel.conf\n")),Object(i.b)("p",null,"This will start a process that listen to port ",Object(i.b)("inlineCode",{parentName:"p"},"6380")," and used as a proxy to the Redis Enterprise database on port ",Object(i.b)("inlineCode",{parentName:"p"},"12000"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"redis-cli -p 6380 -a secretdb01 INFO SERVER\n")),Object(i.b)("h3",{id:"42-using-python"},"4.2 Using Python"),Object(i.b)("p",null,"Using Python, you have to set the SSL connection parameters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"#!/usr/local/bin/python3\n\nimport redis\nimport pprint\n\ntry:\n  r = redis.StrictRedis(\n    password='secretdb01',\n    decode_responses=True,\n    host='localhost',\n    port=12000,\n    ssl=True, \n    ssl_keyfile='./client_key_app_001.pem', \n    ssl_certfile='./client_cert_app_001.pem', \n    ssl_cert_reqs='required', \n    ssl_ca_certs='./proxy_cert.pem',\n    )\n\n  info = r.info()\n  pprint.pprint(info)\n\nexcept Exception as err:\n  print(\"Error connecting to Redis: {}\".format(err))\n")),Object(i.b)("p",null,'More information in the documentation "',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redislabs.com/lp/python-redis/"}),"Using Redis with Python"),'".'),Object(i.b)("h3",{id:"43-using-nodejs"},"4.3 Using Node.JS"),Object(i.b)("p",null,"For ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://redis.js.org/"}),"Node Redis"),", use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/api/tls.html"}),"TLS")," library to configure the client connection:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var redis = require(\"redis\");\nvar tls = require('tls');\nvar fs = require('fs');\n\nvar ssl = {\n    key: fs.readFileSync('../certificates/client_key_app_001.pem',encoding='ascii'),\n    cert: fs.readFileSync('../certificates/client_cert_app_001.pem',encoding='ascii'),\n    ca: [ fs.readFileSync('../certificates/proxy_cert.pem',encoding='ascii') ],\n    checkServerIdentity: () => { return null; },\n};\n\nvar client = redis.createClient(12000,'127.0.0.1', \n    {\n      password : 'secretdb01',\n      tls: ssl\n    }\n);\n        \nclient.info( \"SERVER\", function (err, reply) {\n    console.log(reply);\n} );\n\n")),Object(i.b)("p",null,'More information in the documentation "',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redislabs.com/lp/node-js-redis/"}),"Using Redis with Node.js"),'".'),Object(i.b)("h3",{id:"44-using-java"},"4.4 Using Java"),Object(i.b)("p",null,"In Java, to be able to connect using SSL, you have to install all the certificates in the Java environment using the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.oracle.com/en/java/javase/11/tools/keytool.html"}),"keytool")," utility."),Object(i.b)("p",null,"Create a ",Object(i.b)("strong",{parentName:"p"},"keystore")," file that stores the key and certificate you have created earlier:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'openssl pkcs12 -export \\\n  -in ./client_cert_app_001.pem \\\n  -inkey ./client_key_app_001.pem \\\n  -out client-keystore.p12 \\\n  -name "APP_01_P12"\n')),Object(i.b)("p",null,"As you can see the keystore is used to store the credentials associated with you client; it will be used later with the ",Object(i.b)("inlineCode",{parentName:"p"},"-javax.net.ssl.keyStore")," system property in the Java application."),Object(i.b)("p",null,"In addition to the keys tore, you also have to create a trust store, that is used to store other credentials for example in our case the redis cluster certificate."),Object(i.b)("p",null,"Create a ",Object(i.b)("strong",{parentName:"p"},"trust store")," file and add the Redis cluster certificate to it"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'keytool -genkey \\\n  -dname "cn=CLIENT_APP_01" \\\n  -alias truststorekey \\\n  -keyalg RSA \\\n  -keystore ./client-truststore.p12 \\\n  -keypass secret\n  -storepass secret\n  -storetype pkcs12\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"keytool -import \\\n  -keystore ./client-truststore.p12 \\\n  -file ./proxy_cert.pem \\\n  -alias redis-cluster-crt\n")),Object(i.b)("p",null,"The trustore will be used later with the ",Object(i.b)("inlineCode",{parentName:"p"},"-javax.net.ssl.trustStore")," system property in the Java application."),Object(i.b)("p",null,"You can now run the Java application with the following environment variables:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"java -Djavax.net.ssl.keyStore=/path_to/certificates/java/client-keystore.p12 \\\n-Djavax.net.ssl.keyStorePassword=secret \\\n-Djavax.net.ssl.trustStore=/path_to/certificates/java/client-truststore.p12 \\\n-Djavax.net.ssl.trustStorePassword=secret \\\n-jar MyApp.jar\n")),Object(i.b)("p",null,"For this example and simplicity, I will hard code these property in the Java code itself:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'\nimport redis.clients.jedis.Jedis;\nimport java.net.URI;\n\npublic class SSLTest {\n\n    public static void main(String[] args) {\n\n        System.setProperty("javax.net.ssl.keyStore", "/path_to/certificates/client-keystore.p12");\n        System.setProperty("javax.net.ssl.keyStorePassword", "secret");\n\n        System.setProperty("javax.net.ssl.trustStore","/path_to/certificates/client-truststore.p12");\n        System.setProperty("javax.net.ssl.trustStorePassword","secret");\n\n        URI uri = URI.create("rediss://127.0.0.1:12000");\n\n        Jedis jedis = new Jedis(uri);\n        jedis.auth("secretdb01");\n\n\n        System.out.println(jedis.info("SERVER"));\n        jedis.close();\n    }\n\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"line 8-12, the system environment variables are set to point to the keystore and trust store (this should be externalized)"),Object(i.b)("li",{parentName:"ul"},"line 14, the Redis URL start with ",Object(i.b)("inlineCode",{parentName:"li"},"rediss")," with 2 s to indicate that the connection should be encrypted"),Object(i.b)("li",{parentName:"ul"},"line 17, set the database password")),Object(i.b)("p",null,'More information in the documentation "',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redislabs.com/lp/redis-java/"}),"Using Redis with Java"),'".'),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"In this article, you have learned how to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"retrieve the Redis Server certificate"),Object(i.b)("li",{parentName:"ul"},"generate a client certificate"),Object(i.b)("li",{parentName:"ul"},"protect your database to enforce transport level security (TLS) with 2 ways authentication"),Object(i.b)("li",{parentName:"ul"},"connect to the database from ",Object(i.b)("inlineCode",{parentName:"li"},"redis-cli"),", Python, Node and Java")))}p.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(s,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},615:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/000_header-1e7e2d24525b6d38705cdbca9b008b78.jpeg"},616:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/001-tls-configuration-503f00085716901e3134c38734c1c920.png"}}]);