(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{204:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),s=a(7),i=(a(0),a(363)),r={id:"index-chatapp",title:"How to Build a Real Time Chat application on Amazon Web Services using Python and Redis",sidebar_label:"Building a Real-Time Chat application on AWS using Python and Redis",slug:"/create/aws/chatapp",authors:["ajeet"]},o={unversionedId:"create/aws/chatapp/index-chatapp",id:"create/aws/chatapp/index-chatapp",isDocsHomePage:!1,title:"How to Build a Real Time Chat application on Amazon Web Services using Python and Redis",description:"Real time chat messaging apps are surging in popularity exponentially. Mobile apps like WhatsApp, Facebook, Telegram, Slack, Discord have become \u201ca part and parcel\u201d of our life. Users are addicted to these live chat mobile app conversations as they bring a personal touch and offer a real-time interaction",source:"@site/docs/create/aws/chatapp/index-chatapp.mdx",slug:"/create/aws/chatapp",permalink:"/create/aws/chatapp",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/aws/chatapp/index-chatapp.mdx",version:"current",lastUpdatedAt:1651753305,sidebar_label:"Building a Real-Time Chat application on AWS using Python and Redis",sidebar:"docs",previous:{title:"How to migrate your database from AWS ElastiCache to Redis without any downtime",permalink:"/create/aws/import/database-migration-aws-elasticache-redis-enterprise-cloud/"},next:{title:"How to Build and Deploy Your Own Analytics Dashboard using NodeJS and Redis on the AWS Platform",permalink:"/create/aws/analytics-using-aws"}},c=[{value:"1. What will you build?",id:"1-what-will-you-build",children:[]},{value:"2. What will you need?",id:"2-what-will-you-need",children:[]},{value:"3. Getting Started",id:"3-getting-started",children:[]},{value:"Step 1. Sign up for a Free Redis Enterprise Cloud Account",id:"step-1-sign-up-for-a-free-redis-enterprise-cloud-account",children:[]},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository",children:[]},{value:"Step 3. Installing the required packages",id:"step-3-installing-the-required-packages",children:[]},{value:"Step 4. Starting the frontend",id:"step-4-starting-the-frontend",children:[]},{value:"Step 5. Installing the required Python modules",id:"step-5-installing-the-required-python-modules",children:[]},{value:"Step 6: Running  Backend",id:"step-6-running--backend",children:[]},{value:"Step 7. How does it work?",id:"step-7-how-does-it-work",children:[]},{value:"Populate the &quot;General&quot; room with messages",id:"populate-the-general-room-with-messages",children:[]},{value:"Step 8. How the data is stored?",id:"step-8-how-the-data-is-stored",children:[]},{value:"Step 9. How the data is accessed?",id:"step-9-how-the-data-is-accessed",children:[]},{value:"Further References",id:"further-references",children:[]}],l={toc:c};function d(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Real time chat messaging apps are surging in popularity exponentially. Mobile apps like WhatsApp, Facebook, Telegram, Slack, Discord have become \u201ca part and parcel\u201d of our life. Users are addicted to these live chat mobile app conversations as they bring a personal touch and offer a real-time interaction"),Object(i.b)("p",null,Object(i.b)("img",{alt:"chatapp",src:a(851).default})),Object(i.b)("p",null,"There\u2019s been a rise in the number of social media apps that bring social elements to enable activities like collaboration, messaging, social interaction and commenting. Such activities require a real-time capability to automatically present updated information to users. More and more developers are tapping into the power of Redis as it is extremely fast & its support for a variety of rich data structures such as Lists, Sets, Sorted Sets, Hashes etc. Redis comes along with a Pub/Sub messaging functionality that allows developers to scale the backend by spawning multiple server instances."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"What will you build?"),Object(i.b)("li",{parentName:"ul"},"What will you need?"),Object(i.b)("li",{parentName:"ul"},"Getting started"),Object(i.b)("li",{parentName:"ul"},"How it works?"),Object(i.b)("li",{parentName:"ul"},"How is the data stored?"),Object(i.b)("li",{parentName:"ul"},"How is the data accessed?")),Object(i.b)("h3",{id:"1-what-will-you-build"},"1. What will you build?"),Object(i.b)("p",null,"In this tutorial, we will see how to build a realtime chat app built with Flask, Socket.IO and Redis Enterprise Cloud running on Amazon Web Services. This example uses pub/sub features combined with web-sockets for implementing the message communication between client and server."),Object(i.b)("p",null,Object(i.b)("img",{alt:"image",src:a(852).default})),Object(i.b)("h3",{id:"2-what-will-you-need"},"2. What will you need?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Frontend - React, Socket.IO"),Object(i.b)("li",{parentName:"ul"},"Backend - Python(Flask), Redis Enterprise Cloud hosted on AWS")),Object(i.b)("h3",{id:"3-getting-started"},"3. Getting Started"),Object(i.b)("h3",{id:"step-1-sign-up-for-a-free-redis-enterprise-cloud-account"},"Step 1. Sign up for a Free Redis Enterprise Cloud Account"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.redis.com/create/aws/redis-on-aws"}),"Follow this tutorial")," to sign up for a free Redis Enterprise Cloud account.\nIf you already have an existing account, then all you need are your login credentials to access your subscription."),Object(i.b)("p",null,Object(i.b)("img",{alt:"image",src:a(853).default})),Object(i.b)("p",null,"Choose AWS as the Cloud vendor while creating your new subscription. While creating a new database, ensure that you set your own password. At the end of the database creation process, you will get a Redis Enterprise Cloud database endpoint and port. Save these, you will need them later."),Object(i.b)("p",null,Object(i.b)("img",{alt:"image",src:a(854).default})),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"TIP")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You don't need to create an AWS account for setting up your Redis database. Redis Enterprise Cloud on AWS is a fully managed database-as-a-service trusted by thousands of customers for high performance, infinite scalability, true high availability, and best-in-class support."))),Object(i.b)("h3",{id:"step-2-clone-the-repository"},"Step 2. Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/redis-developer/basic-redis-chat-app-demo-python\n")),Object(i.b)("h3",{id:"step-3-installing-the-required-packages"},"Step 3. Installing the required packages"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"cd client\nyarn install\n")),Object(i.b)("h3",{id:"step-4-starting-the-frontend"},"Step 4. Starting the frontend"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn start\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"You can now view client in the browser.\n\n  Local:            http://localhost:3000\n  On Your Network:  http://192.168.1.9:3000\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"chatapp",src:a(855).default})),Object(i.b)("h3",{id:"step-5-installing-the-required-python-modules"},"Step 5. Installing the required Python modules"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"cd ..\npip3 install -r requirements.txt\n")),Object(i.b)("h3",{id:"step-6-running--backend"},"Step 6: Running  Backend"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"python3 -m venv venv/\nsource venv/bin/activate\npython3 app.py\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"python3 app.py                  \n * Restarting with stat\n * Debugger is active!\n * Debugger PIN: 220-696-610\n(8122) wsgi starting up on http://127.0.0.1:5000\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Chatapp",src:a(856).default})),Object(i.b)("h3",{id:"step-7-how-does-it-work"},"Step 7. How does it work?"),Object(i.b)("p",null,"The chat app server works as a basic REST API which involves keeping the session and handling the user state in the chat rooms (besides the WebSocket/real-time part).\nWhen the server starts, the initialization step occurs. At first, a new Redis connection is established and it's checked whether it's needed to load the demo data."),Object(i.b)("h4",{id:"initialization"},"Initialization"),Object(i.b)("p",null,"For simplicity, a key with total_users value is checked: if it does not exist, we fill the Redis database with initial data. EXISTS total_users (checks if the key exists)\nThe demo data initialization is handled in multiple steps:"),Object(i.b)("h4",{id:"creating-demo-users"},"Creating demo users"),Object(i.b)("p",null,"We create a new user id: INCR total_users. Then we set a user ID lookup key by user name: e.g. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"SET username:nick user:1\n")),Object(i.b)("p",null,"And finally, the rest of the data is written to the hash set: "),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'  HSET user:1 username "nick" password "bcrypt_hashed_password".\n')),Object(i.b)("p",null,'Additionally, each user is added to the default "General" room.\nFor handling rooms for each user, we have a set that holds the room ids. Here\'s an example command of how to add the room: '),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' SADD user:1:rooms "0"\n')),Object(i.b)("h4",{id:"populating-private-messages-between-users"},"Populating private messages between users"),Object(i.b)("p",null,"First, private rooms are created: if a private room needs to be established, for each user a room id: room:1:2 is generated, where numbers correspond to the user ids in ascending order."),Object(i.b)("p",null,"E.g. Create a private room between 2 users: "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," SADD user:1:rooms 1:2 and SADD user:2:rooms 1:2\n")),Object(i.b)("p",null,"Then we add messages for each conversation to this room by writing to a sorted set: "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," ZADD room:1:2 1615480369 \"{'from': 1, 'date': 1615480369, 'message': 'Hello', 'roomId': '1:2'}\"\n")),Object(i.b)("p",null,"We are using a stringified JSON to keep the message structure and simplify the implementation details for this demo-app. You may choose to use a Hash or RedisJSON"),Object(i.b)("h3",{id:"populate-the-general-room-with-messages"},'Populate the "General" room with messages'),Object(i.b)("p",null,'Messages are added to the sorted set with id of the "General" room: room:0'),Object(i.b)("h4",{id:"pubsub"},"Pub/sub"),Object(i.b)("p",null,"After initialization, a pub/sub subscription is created: SUBSCRIBE MESSAGES. At the same time, each server instance will run a listener on a message on this channel to receive real-time updates."),Object(i.b)("p",null,"Again, for simplicity, each message is serialized to JSON, which we parse and then handle in the same manner, as WebSocket messages."),Object(i.b)("p",null,"Pub/sub allows connecting multiple servers written in different platforms without taking into consideration the implementation detail of each server."),Object(i.b)("h4",{id:"real-time-chat-and-session-handling"},"Real-time chat and session handling"),Object(i.b)("p",null,"When a WebSocket connection is established, we can start to listen for events:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Connection. A new user is connected. At this point, a user ID is captured and saved to the session (which is cached in Redis). Note, that session caching is language/library-specific and it's used here purely for persistence and maintaining the state between server reloads.")),Object(i.b)("p",null,"A global set with online_users key is used for keeping the online state for each user. So on a new connection, a user ID is written to that set:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," SADD online_users 1\n")),Object(i.b)("p",null,"Here we  have added user with id 1 to the set online_users"),Object(i.b)("p",null,"After that, a message is broadcasted to the clients to notify them that a new user is joined the chat."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Disconnect. It works similarly to the connection event, except we need to remove the user for online_users set and notify the clients: SREM online_users 1 (makes user with id 1 offline).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Message. A user sends a message, and it needs to be broadcasted to the other clients. The pub/sub allows us also to broadcast this message to all server instances which are connected to this Redis:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{})," PUBLISH message \"{'serverId': 4132, 'type':'message', 'data': {'from': 1, 'date': 1615480369, 'message': 'Hello', 'roomId': '1:2'}}\"\n")))),Object(i.b)("p",null,"Note we send additional data related to the type of the message and the server id. Server id is used to discard the messages by the server instance which sends them since it is connected to the same MESSAGES channel."),Object(i.b)("p",null,"The type field of the serialized JSON corresponds to the real-time method we use for real-time communication (connect/disconnect/message)."),Object(i.b)("p",null,"The data is method-specific information. In the example above it's related to the new message."),Object(i.b)("h3",{id:"step-8-how-the-data-is-stored"},"Step 8. How the data is stored?"),Object(i.b)("p",null,"Redis is used mainly as a database to keep the user/messages data and for sending messages between connected servers."),Object(i.b)("p",null,"The real-time functionality is handled by Socket.IO for server-client messaging. Additionally each server instance subscribes to the MESSAGES channel of pub/sub and dispatches messages once they arrive. Note that, the server transports pub/sub messages with a separate event stream (handled by Server Sent Events), this is due to the need of running pub/sub message loop apart from socket.io signals."),Object(i.b)("p",null,"The chat data is stored in various keys and various data types.\nUser data is stored in a hash set where each user entry contains the next values:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"username: unique user name;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"password: hashed password")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Additionally a set of rooms is associated with user")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Rooms are sorted sets which contains messages where score is the timestamp for each message")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Each room has a name associated with it")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Online set is global for all users is used for keeping track on which user is online.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"User hash set is accessed by key user:{userId}. The data for it stored with HSET key field data. User id is calculated by incrementing the total_users key (INCR total_users)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Username is stored as a separate key (username:{username}) which returns the userId for quicker access and stored with SET username:{username} {userId}.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Rooms which user belongs too are stored at user:{userId}:rooms as a set of room ids. A room is added by SADD user:{userId}:rooms {roomId} command.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Messages are stored at room:{roomId} key in a sorted set (as mentioned above). They are added with ZADD room:{roomId} {timestamp} {message} command. Message is serialized to an app-specific JSON string."))),Object(i.b)("h3",{id:"step-9-how-the-data-is-accessed"},"Step 9. How the data is accessed?"),Object(i.b)("p",null,"Get User HGETALL user:{id}. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," HGETALL user:2\n")),Object(i.b)("p",null,"where we get data for the user with id: 2."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Online users: SMEMBERS online_users. This will return ids of users which are online")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get room ids of a user: SMEMBERS user:{id}:rooms.\nExample: "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{})," SMEMBERS user:2:rooms\n")))),Object(i.b)("p",null,"This will return IDs of rooms for user with ID: 2"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get list of messages ZREVRANGE room:{roomId} {offset_start} {offset_end}.\nExample: "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{})," ZREVRANGE room:1:2 0 50\n")),Object(i.b)("p",{parentName:"li"},"It will return 50 messages with 0 offsets for the private room between users with IDs 1 and 2."))),Object(i.b)("h3",{id:"further-references"},"Further References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redis-developer/basic-redis-chat-app-demo-dotnet"}),"Building a realtime chat app demo in .Net")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redis-developer/basic-redis-chat-app-demo-java"}),"Building a realtime chat app demo in Java")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redis-developer/basic-redis-chat-app-demo-nodejs"}),"Building a realtime chat demo in NodeJS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redis-developer/basic-redis-chat-demo-go"}),"Building a realtime chat app demo in Go")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redis-developer/basic-redis-chat-demo-ruby"}),"Building a Redis chat application demo in Ruby"))))}d.isMDXComponent=!0},363:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),s=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=s.a.createContext({}),d=function(e){var t=s.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,h=p["".concat(r,".").concat(u)]||p[u]||b[u]||i;return a?s.a.createElement(h,o(o({ref:t},l),{},{components:a})):s.a.createElement(h,o({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var l=2;l<i;l++)r[l]=a[l];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},851:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image_chatapp1-08d90176c6de8ce821202c7f31febd26.png"},852:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/chatapp2-d71b1990f1616679d259b26cc593608f.png"},853:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/chatapp3-9a428204431aac509f3184c2657ac28d.png"},854:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/chatapp4-d785c79e98ea87d71658c1a79c554d90.png"},855:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/chatapp_server-5bee233da218811142ccb0a536639640.png"},856:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/chatapp_homepage-e18893a7fe583a1dbda4c15347ee9d52.png"}}]);