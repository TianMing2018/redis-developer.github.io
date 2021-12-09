(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{1e3:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/redisgraph_python-b0de555be6299cf2ab450150845ae405.png"},1001:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/redisgraph_redisinsight_1-a150b80ff2498134be318e1036aa5604.png"},1002:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/redisgraph_redisinsight_2-d7f9e5aa68f559b9c2e20ccb29dc2d48.png"},288:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),i=(n(0),n(304)),s={id:"index-usingpython",title:"How to query Graph data in Redis using Python",sidebar_label:"RedisGraph and Python",slug:"/howtos/redisgraph/using-python",authors:["ajeet"]},p={unversionedId:"howtos/redisgraph/using-python/index-usingpython",id:"howtos/redisgraph/using-python/index-usingpython",isDocsHomePage:!1,title:"How to query Graph data in Redis using Python",description:"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code.",source:"@site/docs/howtos/redisgraph/using-python/index-usingpython.mdx",slug:"/howtos/redisgraph/using-python",permalink:"/howtos/redisgraph/using-python",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/using-python/index-usingpython.mdx",version:"current",sidebar_label:"RedisGraph and Python",sidebar:"docs",previous:{title:"How to query Graph data in Redis using .NET",permalink:"/howtos/redisgraph/using-dotnet"},next:{title:"How to query Graph data in Redis using Ruby",permalink:"/howtos/redisgraph/using-ruby"}},o=[{value:"RedisGraph Python Client",id:"redisgraph-python-client",children:[{value:"Step 1. Run RedisMod Docker container",id:"step-1-run-redismod-docker-container",children:[]},{value:"Step 2. Verify if RedisGraph module is loaded",id:"step-2-verify-if-redisgraph-module-is-loaded",children:[]},{value:"Step 3. Loading the Python Module",id:"step-3-loading-the-python-module",children:[]},{value:"Step 4. Write a python code",id:"step-4-write-a-python-code",children:[]},{value:"Step 5. Execute the Python Script",id:"step-5-execute-the-python-script",children:[]},{value:"Step 6. Monitor the Graph query",id:"step-6-monitor-the-graph-query",children:[]},{value:"Step 7. Install RedisInsight",id:"step-7-install-redisinsight",children:[]},{value:"Step 8. Accessing RedisInsight",id:"step-8-accessing-redisinsight",children:[]},{value:"Step 9. Run the Graph Query",id:"step-9-run-the-graph-query",children:[]},{value:"Step 10. Run the Graph Query with no LIMIT",id:"step-10-run-the-graph-query-with-no-limit",children:[]},{value:"References",id:"references",children:[]}]}],u={toc:o};function c(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code."),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:n(1e3).default})),Object(i.b)("h2",{id:"redisgraph-python-client"},"RedisGraph Python Client"),Object(i.b)("p",null,"The 'redisgraph-py' is a package that allows querying Graph data in a Redis database that is extended with the RedisGraph module. The package extends redisgraph-py's interface with RedisGraph's API"),Object(i.b)("p",null,"Follow the steps below to get started with RedisGraph with Python:"),Object(i.b)("h3",{id:"step-1-run-redismod-docker-container"},"Step 1. Run RedisMod Docker container"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," docker run -p 6379:6379 --name redislabs/redismodCopy\n")),Object(i.b)("h3",{id:"step-2-verify-if-redisgraph-module-is-loaded"},"Step 2. Verify if RedisGraph module is loaded"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," info modules\n # Modules\n module:name=graph,ver=20405,api=1,filters=0,usedby=[],using=[],options=[]\n")),Object(i.b)("h3",{id:"step-3-loading-the-python-module"},"Step 3. Loading the Python Module"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," pip install redisgraph\n")),Object(i.b)("h3",{id:"step-4-write-a-python-code"},"Step 4. Write a python code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"})," import redis\n from redisgraph import Node, Edge, Graph, Path\n\n r = redis.Redis(host='localhost', port=6379)\n\n redis_graph = Graph('social', r)\n\n john = Node(label='person', properties={'name': 'John Doe', 'age': 33, 'gender': 'male', 'status': 'single'})\n redis_graph.add_node(john)\n\n japan = Node(label='country', properties={'name': 'Japan'})\n redis_graph.add_node(japan)\n\n edge = Edge(john, 'visited', japan, properties={'purpose': 'pleasure'})\n redis_graph.add_edge(edge)\n\n redis_graph.commit()\n\n query = \"\"\"MATCH (p:person)-[v:visited {purpose:\"pleasure\"}]->(c:country)\n           RETURN p.name, p.age, v.purpose, c.name\"\"\"\n\n result = redis_graph.query(query)\n\n # Print resultset\n result.pretty_print()\n\n # Use parameters\n params = {'purpose':\"pleasure\"}\n query = \"\"\"MATCH (p:person)-[v:visited {purpose:$purpose}]->(c:country)\n           RETURN p.name, p.age, v.purpose, c.name\"\"\"\n\n result = redis_graph.query(query, params)\n\n # Print resultset\n result.pretty_print()\n\n # Use query timeout to raise an exception if the query takes over 10 milliseconds\n result = redis_graph.query(query, params, timeout=10)\n\n # Iterate through resultset\n for record in result.result_set:\n    person_name = record[0]\n    person_age = record[1]\n    visit_purpose = record[2]\n    country_name = record[3]\n\n query = \"\"\"MATCH p = (:person)-[:visited {purpose:\"pleasure\"}]->(:country) RETURN p\"\"\"\n\n result = redis_graph.query(query)\n\n # Iterate through resultset\n for record in result.result_set:\n   path = record[0]\n   print(path)\n\n\n # All done, remove graph.\n redis_graph.delete()\n")),Object(i.b)("h3",{id:"step-5-execute-the-python-script"},"Step 5. Execute the Python Script"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"  python3 test.py \n +-----------+----------+--------------+-----------+\n | b'p.name' | b'p.age' | b'v.purpose' | b'c.name' |\n +-----------+----------+--------------+-----------+\n |  John Doe |    33    |   pleasure   |   Japan   |\n +-----------+----------+--------------+-----------+\n\n Cached execution 0.0\n internal execution time 3.3023\n +-----------+----------+--------------+-----------+\n | b'p.name' | b'p.age' | b'v.purpose' | b'c.name' |\n +-----------+----------+--------------+-----------+\n |    John Doe |    33    |   pleasure   |   Japan   |\n +-----------+----------+--------------+-----------+\n\n Cached execution 0.0\n internal execution time 0.2475\n <(0)-[0]->(1)>\n")),Object(i.b)("h3",{id:"step-6-monitor-the-graph-query"},"Step 6. Monitor the Graph query"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),' 127.0.0.1:6379> monitor\n OK\n 1632661901.024018 [0 172.17.0.1:61908] "GRAPH.QUERY" "social" "CREATE (youkjweasb:person{age:33,gender:\\"male\\",name:\\"John Doe\\",status:\\"single\\"}),(jilbktlmgw:country{name:\\"Japan\\"}),(youkjweasb:person{age:33,gender:\\"male\\",name:\\"John Doe\\",status:\\"single\\"})-[:visited{purpose:\\"pleasure\\"}]->(jilbktlmgw:country{name:\\"Japan\\"})" "--compact"\n 1632661901.025810 [0 172.17.0.1:61908] "GRAPH.QUERY" "social" "MATCH (p:person)-[v:visited {purpose:\\"pleasure\\"}]->(c:country)\\n\\t\\t   RETURN p.name, p.age, v.purpose, c.name" "--compact"\n 1632661901.027485 [0 172.17.0.1:61908] "GRAPH.QUERY" "social" "CYPHER purpose=\\"pleasure\\" MATCH (p:person)-[v:visited {purpose:$purpose}]->(c:country)\\n\\t\\t   RETURN p.name, p.age, v.purpose, c.name" "--compact"\n 1632661901.029539 [0 172.17.0.1:61908] "GRAPH.QUERY" "social" "CYPHER purpose=\\"pleasure\\" MATCH (p:person)-[v:visited {purpose:$purpose}]->(c:country)\\n\\t\\t   RETURN p.name, p.age, v.purpose, c.name" "--compact" "timeout" "10"\n 1632661901.030965 [0 172.17.0.1:61908] "GRAPH.QUERY" "social" "MATCH p = (:person)-[:visited {purpose:\\"pleasure\\"}]->(:country) RETURN p" "--compact"\n 1632661901.032250 [0 172.17.0.1:61908] "GRAPH.RO_QUERY" "social" "CALL db.labels()" "--compact"\n 1632661901.033323 [0 172.17.0.1:61908] "GRAPH.RO_QUERY" "social" "CALL db.propertyKeys()" "--compact"\n 1632661901.034589 [0 172.17.0.1:61908] "GRAPH.RO_QUERY" "social" "CALL db.relationshipTypes()" "--compact"\n 1632661901.035625 [0 172.17.0.1:61908] "GRAPH.DELETE" "social"\n')),Object(i.b)("p",null,"Let us comment out the last line. Try to query Graph data over over RedisInsight."),Object(i.b)("h3",{id:"step-7-install-redisinsight"},"Step 7. Install RedisInsight"),Object(i.b)("p",null,"Run the RedisInsight container. The easiest way is to run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),Object(i.b)("h3",{id:"step-8-accessing-redisinsight"},"Step 8. Accessing RedisInsight"),Object(i.b)("p",null,"Next, point your browser to http://localhost:8001."),Object(i.b)("h3",{id:"step-9-run-the-graph-query"},"Step 9. Run the Graph Query"),Object(i.b)("p",null,"You can use the limit clause to limit the number of records returned by a query:"),Object(i.b)("p",null,"MATCH (n) RETURN n  LIMIT 1"),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:n(1001).default})),Object(i.b)("h3",{id:"step-10-run-the-graph-query-with-no-limit"},"Step 10. Run the Graph Query with no LIMIT"),Object(i.b)("p",null,"MATCH (n) RETURN n"),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:n(1002).default})),Object(i.b)("h3",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/howtos/redisgraphmovies/"}),"Building Movies database app using RedisGraph and NodeJS")),Object(i.b)("li",{parentName:"ul"},"Learn more about RedisGraph in the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://oss.redis.com/redisgraph/"}),"Quickstart")," tutorial."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/explore/redisinsight/redisgraph"}),"Query, Visualize and Manipulate Graphs using RedisGraph Browser Tool"))),Object(i.b)("h2",{id:""}),Object(i.b)("div",null,Object(i.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(i.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}c.isMDXComponent=!0},304:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,b=d["".concat(s,".").concat(h)]||d[h]||l[h]||i;return n?a.a.createElement(b,p(p({ref:t},u),{},{components:n})):a.a.createElement(b,p({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var u=2;u<i;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);