(this.webpackJsonpbridgearek=this.webpackJsonpbridgearek||[]).push([[0],{121:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),l=c.n(n),s=c(40),r=c.n(s),i=(c(48),c(5)),o=c(3);function d(){return Object(a.jsx)("main",{children:Object(a.jsxs)("div",{className:"p-5 mt-12 sm:mt-48 lg:mt-24 container mx-auto",children:[Object(a.jsx)("section",{className:"bg-black opacity-80 rounded-lg shadow-2xl lg:flex p-10",children:Object(a.jsxs)("div",{className:"text-lg flex flex-col justify-center",children:[Object(a.jsx)("h1",{className:"cursive text-4xl lg:text-6xl text-green-300 mb-4 pb-4",children:"Regionalne Turnieje Wtorkowe"}),Object(a.jsxs)("div",{className:"prose lg:prose-xl text-white",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Kiedy?"}),"  W ka\u017cdy powszedni wtorek *",Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:"O kt\xf3rej?"}),"  17:30",Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:"Ilo\u015b\u0107 rozda\u0144:"}),"  28-30",Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:"Gdzie?"})," ",Object(a.jsxs)("a",{href:"https://azswratislavia.pl/kontakt/",target:"_blank",children:[" ",Object(a.jsx)("i",{className:"wo-text-decoration text-green-300",children:"Klub AZS Wratislavia Na Grobli 30-32"})]}),", drugie pi\u0119tro",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("i",{children:"* w drugi poniedzia\u0142ek miesi\u0105ca rozgrywamy turniej KMP, w tym tygodniu nie ma turnieju we wtorek."})]})," "]})]})}),Object(a.jsx)("section",{className:"mt-20 bg-black opacity-80 rounded-lg shadow-2xl lg:flex p-10",children:Object(a.jsxs)("div",{className:"text-lg flex flex-col justify-center",children:[Object(a.jsx)("h1",{className:"cursive text-4xl lg:text-6xl text-green-300 mb-4 pb-4",children:"Cennik"}),Object(a.jsx)("div",{className:"prose lg:prose-xl text-white",children:Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Ulgowe (juniorzy + seniorzy, w PZBS)"}),"  -  15z\u0142",Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:"Normalne"}),"  -  20z\u0142"]})})]})})]})})}var m=c(8),j=c(41),x=c.n(j)()({projectId:"096pgk60",dataset:"production"}),b=(c.p,c(11)),u=c.n(b),h=c(15),g=c.n(h),p=u()(x);function O(){var e,t=Object(n.useState)(null),c=Object(m.a)(t,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){x.fetch('*[_type == "author"]{\n         name, \n         bio,\n         "authorImage": image.asset->url    \n        }').then((function(e){return s(e[0])})).catch(console.error)}),[]),l?Object(a.jsx)("main",{className:"mt-12 sm:mt-48 lg:mt-24",children:Object(a.jsx)("div",{className:"p-5 pt-150 lg:pt-200 container mx-auto relative",children:Object(a.jsxs)("section",{className:"bg-black bg-opacity-80 rounded-lg shadow-2xl md:flex p-10",children:[Object(a.jsx)("img",{src:(e=l.authorImage,p.image(e)).url(),className:"rounded md-8 w-32 h-40 m-auto md:w-80 md:h-96 md:mr-4",alt:l.name}),Object(a.jsxs)("div",{className:"text-lg flex flex-col justify-center ml-1 mr-1 lg:ml-48 lg:mr-12 md:ml-12",children:[Object(a.jsxs)("h1",{className:"text-2xl cursive text-green-300 mb-4 md:text-6xl",children:["Cze\u015b\u0107! Jestem",Object(a.jsx)("span",{className:"text-green-100",children:" Arek"})]}),Object(a.jsxs)("div",{className:"prose lg:prose-xl text-white",children:[Object(a.jsx)("p",{children:"Jestem s\u0119dzi\u0105, organizatorem oraz graczem w bryd\u017ca sportowego. S\u0119dziowa\u0142em zar\xf3wno w zawodach og\xf3lnopolskich m.in w finale MP Par, fina\u0142owym kryterium Kadry Junior\xf3w, zawodach regionalnych jako s\u0119dzia g\u0142\xf3wny m.in. Liga Okr\u0119gowa Wroc\u0142awska, w internecie na BBO i RealBridge, a na co dzie\u0144 prowadz\u0119 niniejsze turnieje. Jako gracz jestem multimedalist\u0105 mistrzostw akademickich i junior\xf3w, a w sezonie 2020/2021 gra\u0142em w og\xf3lnopolskiej I lidze. "}),Object(a.jsx)("p",{children:"Poza bryd\u017cem moje pasje i zainteresowania to: bieganie, w\u0119dr\xf3wki g\xf3rskie, finanse i psychologia. "}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Zapraszam do kontaktu!"})," "]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"email:"})," arkadiusz.poziemski@gmail.com "]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"telefon: "}),"697-970-556"]})]})]})]})})}):Object(a.jsx)("div",{children:"Loading..."})}var f=u()(x);function y(){var e,t=Object(n.useState)(null),c=Object(m.a)(t,2),l=c[0],s=c[1],r=Object(o.f)().slug;return Object(n.useEffect)((function(){x.fetch('*[slug.current == "'.concat(r,'"]{\n            title,\n            _id,\n            slug,\n            mainImage{\n                asset->{\n                    _id,\n                    url\n                }\n            },\n            body,\n            "name": author->name,\n            "authorImage": author->image,\n            "placeName": place->name,\n        }')).then((function(e){return s(e[0])})).catch(console.error)}),[r]),l?Object(a.jsx)("main",{className:"bg-gray-200 min-h-screen p-12 mt-12 sm:mt-48 lg:mt-24",children:Object(a.jsxs)("article",{className:"container shadow-lg mx-auto bg-black opacity-80 rounded-lg",children:[Object(a.jsxs)("header",{className:"relative",children:[Object(a.jsx)("div",{className:"absolute h-full w-full flex items-center justify-center p-8",children:Object(a.jsxs)("div",{className:"bg-white bg-opacity-95 rounded p-12",children:[Object(a.jsx)("h1",{className:"cursive text-3xl lg:text-6xl mb-4",children:l.title}),Object(a.jsx)("span",{className:"block relative h-full flex justify-end items-end pb-4",children:Object(a.jsx)("p",{className:"bold flex items-center pl-2 text-1xl bg-red-500 font-bold text-red-100 pr-2 rounded",children:l.placeName})}),Object(a.jsxs)("div",{className:"flex mr-10 text-gray-800",children:[Object(a.jsx)("img",{src:(e=l.authorImage,f.image(e)).url(),alt:l.name,className:"w-10 h-10 rounded-full"}),Object(a.jsx)("p",{className:"bold flex items-center pl-2 text-2xl",children:l.name})]})]})}),Object(a.jsx)("img",{src:l.mainImage.asset.url,alt:l.name,className:"w-full object-cover rounded-t",style:{height:"400px"}})]}),Object(a.jsx)("div",{className:"px-16 text-white lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full",children:Object(a.jsx)(g.a,{blocks:l.body,projectId:"096pgk60",dataset:"production"})})]})}):Object(a.jsx)("div",{children:"\u0141adowanie..."})}var w=u()(x);function N(){var e,t=Object(n.useState)(null),c=Object(m.a)(t,2),l=c[0],s=c[1],r=Object(o.f)().slug;return Object(n.useEffect)((function(){x.fetch('*[slug.current == "'.concat(r,'"]{\n            title,\n            date,\n            _id,\n            slug,\n            mainImage{\n                asset->{\n                    _id,\n                    url\n                }\n            },\n            body,\n            "name": author->name,\n            "authorImage": author->image,\n            "placeName": place->name,\n        }')).then((function(e){return s(e[0])})).catch(console.error)}),[r]),l?Object(a.jsx)("main",{className:"bg-gray-200 min-h-screen p-12 mt-12 sm:mt-48 lg:mt-24",children:Object(a.jsxs)("article",{className:"container shadow-lg mx-auto bg-black opacity-80 rounded-lg",children:[Object(a.jsxs)("header",{className:"relative",children:[Object(a.jsx)("div",{className:"absolute h-full w-full flex items-center justify-center p-8",children:Object(a.jsxs)("div",{className:"bg-white bg-opacity-95 rounded p-12",children:[Object(a.jsx)("h1",{className:"cursive text-3xl lg:text-6xl mb-4",children:l.title}),Object(a.jsxs)("span",{className:"block relative h-full flex justify-end items-end pb-4",children:[Object(a.jsx)("p",{className:"bold flex items-center pl-2 text-1xl bg-yellow-500 font-bold text-white pr-2 mr-2 rounded",children:l.date}),Object(a.jsx)("p",{className:"bold flex items-center pl-2 text-1xl bg-red-500 font-bold text-red-100 pr-2 rounded",children:l.placeName})]}),Object(a.jsxs)("div",{className:"flex mr-10 text-gray-800",children:[Object(a.jsx)("img",{src:(e=l.authorImage,w.image(e)).url(),alt:l.name,className:"w-10 h-10 rounded-full"}),Object(a.jsx)("p",{className:"bold flex items-center pl-2 text-2xl",children:l.name})]})]})}),Object(a.jsx)("img",{src:l.mainImage.asset.url,alt:l.name,className:"w-full object-cover rounded-t",style:{height:"400px"}})]}),Object(a.jsx)("div",{className:"px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full text-white",children:Object(a.jsx)(g.a,{blocks:l.body,projectId:"096pgk60",dataset:"production"})})]})}):Object(a.jsx)("div",{children:"\u0141adowanie..."})}function k(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){x.fetch('*[_type == "post"]{\n            title, \n            slug,\n            mainImage{\n                asset->{\n                    _id,\n                    url\n                },\n                alt\n            }\n        }').then((function(e){return l(e)})).catch(console.error)}),[]),Object(a.jsx)("main",{className:"bg-white min-h-screen p-12 mt-12 sm:mt-48 lg:mt-24",children:Object(a.jsxs)("section",{className:"container mx-auto",children:[Object(a.jsx)("h1",{className:"text-5xl flex justify-center cursive mb-12 my-primary-text",children:"Turnieje wtorkowe - wyniki"}),Object(a.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:c&&c.sort((function(e,t){return e.title<t.title?1:-1})).map((function(e,t){return Object(a.jsx)("article",{children:Object(a.jsx)(i.b,{to:"/wtorkowe/"+e.slug.current,children:Object(a.jsxs)("span",{className:"block h-64 relative rounded shadow leading-snug bg-white border-l-8 my-primary-border",children:[Object(a.jsx)("img",{src:e.mainImage.asset.url,alt:e.mainImage.alt,className:"w-full h-full rounded-r object-cover absolute"}),Object(a.jsx)("span",{className:"block relative h-full flex justify-end items-end pr-4 pb-4",children:Object(a.jsx)("h3",{className:"text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded",children:e.title})})]},t)},e.slug.current)})}))})]})})}function v(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){x.fetch('*[_type == "occasional"]{\n            title, \n            slug,\n            mainImage{\n                asset->{\n                    _id,\n                    url\n                },\n                alt\n            }\n        }').then((function(e){return l(e)})).catch(console.error)}),[]),Object(a.jsx)("main",{className:"bg-white min-h-screen p-12 mt-12 sm:mt-48 lg:mt-24",children:Object(a.jsxs)("section",{className:"container mx-auto",children:[Object(a.jsx)("h1",{className:"text-5xl flex justify-center cursive mb-12 my-primary-text",children:"Turnieje okazjonale - wyniki"}),Object(a.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:c&&c.sort((function(e,t){return e.date<t.date?1:-1})).map((function(e,t){return Object(a.jsx)("article",{children:Object(a.jsx)(i.b,{to:"/okazjonalne/"+e.slug.current,children:Object(a.jsxs)("span",{className:"block h-64 relative rounded shadow leading-snug bg-white border-l-8 my-primary-border",children:[Object(a.jsx)("img",{src:e.mainImage.asset.url,alt:e.mainImage.alt,className:"w-full h-full rounded-r object-cover absolute"}),Object(a.jsx)("span",{className:"block relative h-full flex justify-end items-end pr-4 pb-4",children:Object(a.jsx)("h3",{className:"text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded",children:e.title})})]},t)},e.slug.current)})}))})]})})}function z(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){x.fetch('*[_type == "project"]{\n            title, \n            date,\n            place,\n            description,\n            projectType,\n            link, \n            tags\n        }').then((function(e){return l(e)})).catch(console.error)}),[]),Object(a.jsx)("main",{className:"bg-gray-100 min-h-screen p-5 pt-12 mt-12 sm:mt-48 lg:mt-24",children:Object(a.jsxs)("section",{className:"container mx-auto",children:[Object(a.jsx)("h1",{className:"text-5xl flex justify-center cursive my-primary-text",children:"Og\u0142oszenia"}),Object(a.jsx)("section",{className:"grid md:grid-cols-2 grid-cols-1 gap-8 p-4 md:p-12",children:c&&c.sort((function(e,t){return e.date<t.date?1:-1})).map((function(e,t){return Object(a.jsxs)("article",{className:"relative rounded-lgt shadow-xl bg-white p-16",children:[Object(a.jsx)("h3",{className:"text-gray-800 text-3xl font-bold mb-2 hover:text-red-700",children:Object(a.jsx)("a",{href:e.link,alt:e.title,target:"_blank",rel:"noopener norefeerer",children:e.title})}),Object(a.jsxs)("div",{className:"text-gray-500 text-xs space-x-4",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("strong",{className:"font-bold",children:"Opublikowano"}),":"," ",new Date(e.date).toLocaleString()]}),Object(a.jsx)("p",{className:"my-6 text-lg text-gray-700 leading-relaxed",children:e.description}),Object(a.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener norefeerer",className:"text-red-500 font-bold hover:underline hover:text-red-400",children:["Zobacz"," ",Object(a.jsx)("span",{role:"img","aria-label":"right pointer"})]})]})]})}))})]})})}function I(){return Object(a.jsx)("header",{className:"bg-black bg-opacity-90 sm:fixed w-full z-40 top-0",children:Object(a.jsx)("div",{className:"container mx-auto flex justify-between",children:Object(a.jsxs)("nav",{className:"md:flex text-lg my-primary-text",children:[Object(a.jsx)(i.c,{className:"text-3xl md:text-4xl inline-flex items-center text-green-300 py-2 pt-4 md:py-8 px-3 md:mr-6 text-red-50 hover:text-blue-100 font-bold cursive tracking-widest",activeClassName:"text-white",to:"/",exact:!0,children:"Bryd\u017c nad Odr\u0105"}),Object(a.jsx)(i.c,{className:"block px-auto md:inline-flex items-center md:py-3 px-3 mt-2 md:my-6 hover:text-blue-100 text-base md:text-xl",activeClassName:"text-blue-100",to:"/ogloszenia",children:"Og\u0142oszenia"}),Object(a.jsx)(i.c,{className:"block px-auto md:inline-flex items-center md:py-3 px-3 mt-2 md:my-6 hover:text-blue-100 text-base md:text-xl",activeClassName:"block text-blue-100",to:"/wtorkowe",children:"Wtorkowe"}),Object(a.jsx)(i.c,{className:"block px-auto md:inline-flex items-center md:py-3 px-3 mt-2 md:my-6 hover:text-blue-100 text-base md:text-xl",activeClassName:"block text-blue-100",to:"/okazjonalne",children:"Okazjonalne"}),Object(a.jsx)(i.c,{className:"block px-auto md:inline-flex items-center pb-4 md:py-3 px-3 mt-2 md:my-6 hover:text-blue-100 text-base md:text-xl",activeClassName:"text-blue-100",to:"/info",children:"Informacje"})]})})})}var _=function(){return Object(a.jsxs)(i.a,{children:[Object(a.jsx)(I,{}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{component:d,path:"/",exact:!0}),Object(a.jsx)(o.a,{component:O,path:"/info"}),Object(a.jsx)(o.a,{component:y,path:"/wtorkowe/:slug"}),Object(a.jsx)(o.a,{component:k,path:"/wtorkowe"}),Object(a.jsx)(o.a,{component:N,path:"/okazjonalne/:slug"}),Object(a.jsx)(o.a,{component:v,path:"/okazjonalne"}),Object(a.jsx)(o.a,{component:z,path:"/ogloszenia"})]})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,122)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,l=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),l(e),s(e)}))};r.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root")),S()},48:function(e,t,c){}},[[121,1,2]]]);
//# sourceMappingURL=main.e4f76e32.chunk.js.map