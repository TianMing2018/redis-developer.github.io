(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(202)),s=(a(207),a(208),a(203),a(204),{id:"index-hackernews",title:"HackerNews Clone using RedisJSON",sidebar_label:"How to build a HackerNews Clone using RedisJSON",slug:"/howtos/hackernews"}),c={unversionedId:"howtos/hackernews/index-hackernews",id:"howtos/hackernews/index-hackernews",isDocsHomePage:!1,title:"HackerNews Clone using RedisJSON",description:"Hacker News (sometimes abbreviated as HN) is a social news website focusing on computer science and entrepreneurship.",source:"@site/docs/howtos/hackernews/index-hackernews.mdx",slug:"/howtos/hackernews",permalink:"/howtos/hackernews",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/hackernews/index-hackernews.mdx",version:"current",sidebar_label:"How to build a HackerNews Clone using RedisJSON",sidebar:"docs",previous:{title:"Building a Pipeline for Natural Language Processing using RedisGears",permalink:"/howtos/nlp"},next:{title:"How to Use SSL/TLS With Redis Enterprise",permalink:"/howtos/security/"}},l=[{value:"Step 1. Install the prerequisites",id:"step-1-install-the-prerequisites",children:[]},{value:"Step 2. Create Redis Enterprise Cloud database",id:"step-2-create-redis-enterprise-cloud-database",children:[]},{value:"Step 3. Clone the repository",id:"step-3-clone-the-repository",children:[]},{value:"Step 4. Setting up environmental variable",id:"step-4-setting-up-environmental-variable",children:[]},{value:"Step 5. Run the developer environment",id:"step-5-run-the-developer-environment",children:[]},{value:"Step 6.  Pull Hacker News API to seed database",id:"step-6--pull-hacker-news-api-to-seed-database",children:[]},{value:"Step 7. Access the HackerNews URL",id:"step-7-access-the-hackernews-url",children:[]},{value:"How it works",id:"how-it-works",children:[]}],o={toc:l};function d(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hacker News (sometimes abbreviated as HN) is a social news website focusing on computer science and entrepreneurship.\nThis is a HackerNews clone built upon React, NextJS as a frontend and NodeJS, ExpressJS & Redis as a backend.\nThis application uses RedisJSON module for storing the data and RediSearch module for searching."),Object(i.b)("p",null,Object(i.b)("img",{alt:"hackernews",src:a(617).default})),Object(i.b)("h3",{id:"step-1-install-the-prerequisites"},"Step 1. Install the prerequisites"),Object(i.b)("h4",{id:"install-the-below-packages"},"Install the below packages"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"NPM v7.8.0"),Object(i.b)("li",{parentName:"ul"},"NODE v15.10.0")),Object(i.b)("h3",{id:"step-2-create-redis-enterprise-cloud-database"},"Step 2. Create Redis Enterprise Cloud database"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../create/rediscloud"}),"Follow this link")," to create Redis Enterprise Cloud account with 2 databases - one with RedisJSON module and other with RediSearch module enabled\nSave the database endpoint URL and password for our future reference"),Object(i.b)("h3",{id:"step-3-clone-the-repository"},"Step 3. Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/redis-hacker-news-demo\n cd redis-hacker-news-demo\n")),Object(i.b)("h3",{id:"step-4-setting-up-environmental-variable"},"Step 4. Setting up environmental variable"),Object(i.b)("p",null,"Copy .env.sample to .env and provide the values as shown below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," MAILGUN_API_KEY=YOUR_VALUE_HERE\n SEARCH_REDIS_SERVER_URL=redis://redis-XXXXX.c10.us-east-1-2.ec2.cloud.redislabs.com:10292\n SEARCH_REDIS_PASSWORD=ABCDXYZbPXHWsC\n JSON_REDIS_SERVER_URL=redis://redis-XXXXX.c14.us-east-1-2.ec2.cloud.redislabs.com:14054\n JSON_REDIS_PASSWORD=ABCDXYZA3tzw2XYMPi2P8UPm19D\n LOG_LEVEL=1\n USE_REDIS=1\n REDIS_REINDEX=\n PRODUCTION_WEBSITE_URL=i\n")),Object(i.b)("h3",{id:"step-5-run-the-developer-environment"},"Step 5. Run the developer environment"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," npm run dev\n")),Object(i.b)("h3",{id:"step-6--pull-hacker-news-api-to-seed-database"},"Step 6.  Pull Hacker News API to seed database"),Object(i.b)("p",null,"Using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/HackerNews/API"}),"API"),", it pulls the latest hackernews data.\nNext, you need to seed top stories from hacker news. First create a moderator with moderator:password123"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," node ./backend/scripts/seed.js\n")),Object(i.b)("h3",{id:"step-7-access-the-hackernews-url"},"Step 7. Access the HackerNews URL"),Object(i.b)("p",null,"Open https://localhost:3001 and you should be able to access the HackerNews login screen as shown below:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"hackernews",src:a(270).default})),Object(i.b)("h3",{id:"how-it-works"},"How it works"),Object(i.b)("h4",{id:"by-screens"},"By Screens"),Object(i.b)("h4",{id:"signup"},"Signup"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Signup Screen",src:a(270).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Make sure user(where username is andy1) does not exist."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:user  (@username:"andy1") NOCONTENT LIMIT 0 1 SORTBY _id DESC\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get and increase the next id in users collection."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," GET user:id-indicator // 63\n INCR user:id-indicator  // 64 will be next user id, 63 is current user id\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Create user:63 hash and json.(json also collects authToken and password hash etc)"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' HSET user:63 username andy1 email  created 1615569194 karma 0 about  showDead false isModerator false shadowBanned false banned false _id 63\n JSON.SET user:63 . \'{"username":"andy1","password":"$2a$10$zy8tsCske8MfmDX5CcWMce5S1U7PJbPI7CfaqQ7Bo1PORDeqJxqhe","authToken":"AAV07FIwTiEkNrPj0x1yj6BPJQSGIPzV0sICw2u0","authTokenExpiration":1647105194,"email":"","created":1615569194,"karma":0,"showDead":false,"isModerator":false,"shadowBanned":false,"banned":false,"_id":63}\'\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Gernerate cookie with expiration time."))),Object(i.b)("h4",{id:"login"},"Login"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Login Screen",src:a(618).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Find user"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' FT.SEARCH idx:user  (@username:"andy1") NOCONTENT LIMIT 0 1 SORTBY _id DESC\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Make sure password is correct"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{})," JSON.MGET user:63 .\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Compare password and new password hash and create cookie if it's successful"))),Object(i.b)("h4",{id:"item-list-page"},"Item list page"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Newest Screen",src:a(619).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Check if user has toggled hidden attribute on a specific item."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' FT.SEARCH idx:user-hidden  (@username:"andy1") NOCONTENT LIMIT 0 10000 SORTBY _id DESC\n // Result - [0, "item:4"]\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If that is not null"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' FT.SEARCH idx:item  (-(@id:"item:4")) (@dead:"false") NOCONTENT LIMIT 0 30 SORTBY _id ASC\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If it's empty array"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' FT.SEARCH idx:item (@dead:"false") NOCONTENT LIMIT 0 30 SORTBY _id ASC\n // Result - [3,"item:1","item:2","item:3"]\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get all items from RedisJSON"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' JSON.MGET item:1 item:2 item:3 .\n // Result - [{"id":"bkWCjcyJu5WT","by":"todsacerdoti","title":"Total Cookie Protection","type":"news","url":"https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/","domain":"mozilla.org","points":1,"score":1514,"commentCount":0,"created":1614089461,"dead":false,"_id":3}]]\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get items posted within last 1 week"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' FT.SEARCH idx:item  (@created:[(1615652598 +inf]) (@dead:"false") NOCONTENT LIMIT 0 0 SORTBY _id DESC\n // Result - [13,"item:19","item:17","item:16","item:15","item:14","item:13","item:12","item:11","item:8","item:5","item:4","item:3","item:1"]\n')))),Object(i.b)("p",null,"Note that 1615652598 is timestamp of 1 week ealier than current timestamp"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{})," JSON.MGET item:19 item:17 item:16 item:15 item:14 item:13 item:12 item:11 item:8 item:5 item:4 item:3 item:1 .\n // Result - the JSON of selected items\n")),Object(i.b)("h4",{id:"item-detail"},"Item Detail"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Item Detail Screen",src:a(620).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get the item object first"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{})," JSON.MGET item:1 .\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Find item:1 's root comments"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' FT.SEARCH idx:comment  (@parentItemId:"kDiN0RhTivmJ") (@isParent:"true") (@dead:"false") NOCONTENT LIMIT 0 30 SORTBY points ASC\n // Result - [3,"comment:1","comment:2","comment:12"]\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get those comments"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' JSON.MGET comment:1 comment:2 comment:12 .\n // one comment example result - {"id":"jnGWS8TTOecC","by":"ploxiln","parentItemId":"kDiN0RhTivmJ","parentItemTitle":"The Framework Laptop","isParent":true,"parentCommentId":"","children":[13,17,20],"text":"I don&#x27;t see any mention of the firmware and drivers efforts for this. Firmware and drivers always end up more difficult to deal with than expected.<p>The Fairphone company was surprised by difficulties upgrading and patching android without support from their BSP vendor, causing many months delays of updates _and_ years shorter support life than they were planning for their earlier models.<p>I purchased the Purism Librem 13 laptop from their kickstarter, and they had great plans for firmware and drivers, but also great difficulty following through. The trackpad chosen for the first models took much longer than expected to get upstream linux support, and it was never great (it turned out to be impossible to reliably detect their variant automatically). They finally hired someone with sufficient skill to do the coreboot port _months_ after initial units were delivered, and delivered polished coreboot firmware for their initial laptops _years_ after they started the kickstarter.<p>So, why should we have confidence in the firmware and drivers that Framework will deliver :)","points":1,"created":1614274058,"dead":false,"_id":12}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Using children of each comment, fetch children comments"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' FT.SEARCH idx:comment  (@dead:"false") (@_id:("3"|"7"|"11")) NOCONTENT LIMIT 0 10000 SORTBY _id DESC\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Iterate this over until all comments are resolved"))),Object(i.b)("h4",{id:"submit"},"Submit"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Submit Screen",src:a(621).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get next item's id and increase it"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{})," GET item:id-indicator\n // Result - 4\n SET item:id-indicator 5\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Create hash and RedisJSON index"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' HSET item:4 id iBi8sU4HRcZ2 by andy1 title Firebase trends type ask url  domain  text Firebase Performance Monitoring is a service that helps you to gain insight into the performance characteristics of your iOS, Android, and web apps. points 1 score 0 created 1615571392 dead false _id 4\n JSON.SET item:4 . \'{"id":"iBi8sU4HRcZ2","by":"andy1","title":"Firebase trends","type":"ask","url":"","domain":"","text":"Firebase Performance Monitoring is a service that helps you to gain insight into the performance characteristics of your iOS, Android, and web apps.","points":1,"score":0,"commentCount":0,"created":1615571392,"dead":false,"_id":4}\'\n')))),Object(i.b)("h4",{id:"update-profile"},"Update Profile"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Update Profile Screen",src:a(622).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get the user"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' FT.SEARCH idx:user  (@username:"andy1") NOCONTENT LIMIT 0 1 SORTBY _id DESC\n JSON.MGET user:63 .\n')))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n- Update new user\n\n")),Object(i.b)("p",null,'  HSET user:63 username andy1 email  created 1615569194 karma 1 about I am a software engineer. showDead false isModerator false shadowBanned false banned false _id 63\nJSON.SET user:63 . \'{"username":"andy1","password":"$2a$10$zy8tsCske8MfmDX5CcWMce5S1U7PJbPI7CfaqQ7Bo1PORDeqJxqhe","authToken":"KJwPLN1idyQrMp5qEY5hR3VhoPFTKRcC8Npxxoju","authTokenExpiration":1647106257,"email":"","created":1615569194,"karma":1,"about":"I am a software engineer.","showDead":false,"isModerator":false,"shadowBanned":false,"banned":false,"_id":63}\''),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n#### Moderation Logs screen\n\n![Moderation Logs](moderation-logs.png)\n\n- Find all moderation logs\n\n")),Object(i.b)("p",null,"  FT.SEARCH idx:moderation-log * NOCONTENT LIMIT 0 0 SORTBY _id DESC\n// Result - ",'[1,"moderation-log:1"]'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n- Get that moderation logs\n\n")),Object(i.b)("p",null,"  JSON.MGET moderation-log:1 ."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'\n#### Search\n\n![Search Screen](screenshot-search.png)\n\n- Get items that contains "fa"\n\n')),Object(i.b)("p",null,'  FT.SEARCH idx:item  (@title:fa*) (-(@id:"aaaaaaaaa")) (@dead:"false") NOCONTENT LIMIT 0 30 SORTBY score ASC\n// Result - ','[2,"item:18","item:16"]'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"- Get those items via json\n\n")),Object(i.b)("p",null,"  JSON.MGET item:18 item:16 ."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n## Example commands\n#### There are 2 type of fields, indexed and non-indexed.\n1. Indexed fields will be stored in hash using HSET/HGET.\n2. Non-indexed fields will be stored in RedisJSON.\n\n\n- Create RediSearch Index\n\nWhen schema is created, it should created index.\n\n")),Object(i.b)("p",null,'  FT.CREATE idx:user ON hash PREFIX 1 "user:" SCHEMA username TEXT SORTABLE email TEXT SORTABLE karma NUMERIC SORTABLE'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n- Drop RediSearch Index\n\nShould drop/update index if the schema has changed\n\n")),Object(i.b)("p",null,"  FT.DROPINDEX idx:user"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n- Get RediSearch Info\n\nValidate if the fields are indexed properly. If not, it will update the index fields or drop/recreate.\n\n")),Object(i.b)("p",null,"  FT.INFO idx:user"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n\n- Create a new user\n\nIt will require new hash and new JSON record\n\n")),Object(i.b)("p",null,'  HSET user:andy username "andy" email "',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:andy@gmail.com"}),"andy@gmail.com"),'" karma 0\nJSON.SET user:andy \'{"passoword": "hashed_password", "settings": "{ \\"showDead\\": true }" }\''),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n\n- Update a user\n\n")),Object(i.b)("p",null,'  HSET user:1 username "newusername"\nJSON.SET user:andy username "newusername"'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n- Find user with username 'andy'\n\n1. Find  the user's hash first\n\n")),Object(i.b)("p",null,"  FT.SEARCH idx:user '@username:{andy}'"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n2. Fetch the JSON object to get the related JSON object\n\n")),Object(i.b)("p",null,"  JSON.GET user:andy"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n- Find user whose id is andy1 or andy2\n\n")),Object(i.b)("p",null,'  FT.SEARCH idx:user \'@id:("andy1"|"andy2")\''),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n- Find user whose id is not andy1 or andy2\n\n")),Object(i.b)("p",null,'  FT.SEARCH idx:user \'(-(@id:("andy1"|"andy2")))\''),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n- Find user whose id is andy1 or username is andy\n\n")),Object(i.b)("p",null,'  FT.SEARCH idx:user \'(@id:"andy1") | (@username:"andy")\''),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n- Find user whose id is andy1 and username is andy\n\n")),Object(i.b)("p",null,'  FT.SEARCH idx:user \'(@id:"andy1") (@username:"andy")\''),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n- Find first 10 users order by username\n\n")),Object(i.b)("p",null,"  FT.SEARCH idx:user '*' LIMIT 0 10 SORTBY username ASC"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n- Find next 10 users\n\n")),Object(i.b)("p",null,"  FT.SEARCH idx:user '*' LIMIT 10 20 SORTBY username ASC"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n- Get from RedisJson from multiple keys\n\n")),Object(i.b)("p",null,'  JSON.MGET idx:user "andy1" "andy2" "andy3"'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n\n\n")))}d.isMDXComponent=!0},204:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(202),s=a(210);a(203),a(55);t.a=function(e){var t=r.a.useState(!1),a=t[0],n=t[1];return r.a.createElement("div",{className:"ri-container"},r.a.createElement("div",{className:"ri-description-short"},r.a.createElement("div",{className:"ri-icon"},r.a.createElement("span",{className:"fe fe-zap"})),r.a.createElement("div",{className:"ri-detail"},r.a.createElement("div",{className:"ri-title"},r.a.createElement("a",{href:e.page},e.title)),r.a.createElement("div",{className:"ri-description"},e.description,r.a.Children.count(e.children)>0&&r.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&r.a.createElement("div",{className:"ri-description-long"},r.a.createElement(i.a,{components:s.a},e.children)))}},205:function(e,t,a){"use strict";var n=a(0),r=a(206);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},206:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(205),s=a(209),c=a(56),l=a.n(c),o=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,b=e.values,p=e.groupId,u=e.className,m=Object(i.a)(),O=m.tabGroupChoices,h=m.setTabGroupChoices,j=Object(n.useState)(c),N=j[0],f=j[1],S=n.Children.toArray(e.children);if(null!=p){var w=O[p];null!=w&&w!==N&&b.some((function(e){return e.value===w}))&&f(w)}var T=function(e){f(e),null!=p&&h(p,e)},E=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},u)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return T(t)},onClick:function(){T(t)}},a)}))),t?Object(n.cloneElement)(S.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},S.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},208:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},270:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/screenshot-signup-8caa71d43eb218ac98130e6e5114b1bd.png"},617:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/hackernews-974e3026a35651a1790714fa7f947184.png"},618:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/screenshot-login-2b5a07f61355ab0dfc9a8d3f1dcec528.png"},619:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/screenshot-newest-776786b42d1ae7703a3fde07205bb331.png"},620:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/screenshot-item-detail-a9ebbf8ae72d8af6b48c45163f524ce8.png"},621:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/screenshot-submit-12e6b9a754af39610ac2d543d20eb095.png"},622:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/screenshot-update-profile-1e16d2b9d87668fac47f2bf8f621fba0.png"}}]);