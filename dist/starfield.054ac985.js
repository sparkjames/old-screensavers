const t=document.querySelector(".the-void");function l(t,l){let e=Math.ceil(t);return Math.floor(Math.random()*(Math.floor(l)-e+1)+e)}(function(){let t=[];document.querySelector(".starpoint").style.perspective="15in";for(let e=0;e<100;e++){let e=document.createElement("div");e.classList.add("star"),e.innerHTML=`<svg viewBox="0 0 173 142" xmlns="http://www.w3.org/2000/svg"><path style="display:inline;fill:${function(){let t=[];return t.push("#FFFFFF"),t.push("#C0C0C0"),t.push("#808080"),t.push("#FF0000"),t.push("#00FF00"),t.push("#0000FF"),t.push("#00FFFF"),t.push("#FF00FF"),t.push("#FFFF00"),t.push("#008080"),t.push("#800080"),t.push("#808000"),t.push("#800000"),t.push("#008000"),t.push("#000080"),t[l(0,14)]}()};stroke-width:0" d="M194-32.5c-14 .1-28 3.5-39 9v16.9c9-4.5 16-7.9 28-8.9v40.2c-11 0-20 3-28 7v68c22-13 48-17 83 0V-22.2c-15-7.2-29-10.3-43-10.3zm5 16.1c8 0 14 .8 21 4.5v39.6c-10-4-18-5-27-4v-40c2-.1 4-.1 6-.1zm-16 51.1v39c-10 1-21 4-28 9v-40c9-5 16-7 28-8zm10 0c10 0 18 0 28 4v39c-9-4-18-5-28-4zM152-22.2v14.3L138 .6V-15ZM152-4.7V9.6l-14 8.9v-16zM152 13.5v14l-15 9 1-16zM152 30.5v15l-14 8v-15zM152 48.5v14l-15 8 1-15zM152 66.5v14l-14 8v-15zM152 84.5v14l-14 8.5V91.5ZM134-16.9v13.8l-14 7.4v-14zM134 1.1v13.4l-14 8V8.4ZM134 18.5v13l-14 8v-14zM134 36.5v14l-14 7v-14zM134 53.5v14l-14 8v-14zM134 70.5v14l-14 7v-14zM134 87.5V102l-14 8V95.5ZM117-16.1v12.5l-12 5.8v-12.5ZM117 2v12.5l-12 6V7.8ZM117 18.5v13l-12 6v-13zM117 36.5v12l-12 6v-12zM117 54.5v13l-12 5v-12zM117 71.5v12l-12 6v-12zM117 88.5V102l-12 6V94.5ZM100-14.2V-5l-9.4 4v-8.5zM100 3.6v8.9l-9.5 4V8.3ZM100 20.5v9l-9.4 4v-8zM100 38.5v9l-9.5 4v-9zM100 56.5v9l-9.5 4v-8zM100 73.5v9l-9.4 4v-8zM101 91.5v9.5l-10.3 4v-8.5zM84.2-19.5v7.1l-7.1 4.3v-7.5zM84.3-1.7v7.1l-7.1 4.3V2.2ZM84.3 15.5v7l-7.1 4v-7zM84.3 33.5v7l-7.1 4v-7zM84.3 51.5v7l-7.1 4v-8zM84.5 67.5v8l-7.1 4v-8zM84.4 85.5v7l-7.1 4v-7zM64.9 91.5l-.1-5 5.5-3 .1 5zM65.2 73.5l-.1-5 5.5-3 .1 5zM65 56.5l-.1-5 5.5-3 .1 5zM64.9 38.5l-.1-5 5.5-3 .1 5zM65.1 20.5l-.2-5 5.5-3 .2 5zM65.1 3.4l-.1-5 5.5-3 .1 5zM65-14.7l-.1-5 5.5-3 .1 5z" transform="translate(-64.8 32.5)"/></svg>`,document.querySelector(".starpoint").appendChild(e),t.push(e)}return t})().map(t=>t=function t(e){let s=function(){let t=.75*window.innerWidth/2;return l(0-t,t)}(),n=function(){let t=.75*window.innerHeight/2;return l(0-t,t)}();return e.style.left=`${s}px`,e.style.top=`${n}px`,e.style.transform="translate3d(0px, 0px, 0px)",e.style.opacity="0",e.style.transition="none",setTimeout(()=>{var s;s=e,transition_seconds=l(7,30),s.style.transition=`transform ${transition_seconds}s linear, opacity ${transition_seconds/2}s linear`,s.style.transform=s.style.transform.replace(", 0px)",", 16in)"),s.style.opacity="1",setTimeout(()=>{s=t(s)},1e3*transition_seconds)},star_appear_timeout=l(10,4e3)),e}(t));const e=l=>{let e=l.target;console.log("radioEl = ",e),["windows","stars"].indexOf(e.value)>-1&&(t.classList.remove("graphic--windows","graphic--stars"),t.classList.add(`graphic--${e.value}`))};document.querySelectorAll(".controls-radio--graphic").forEach(t=>{t.addEventListener("change",e)});
//# sourceMappingURL=starfield.054ac985.js.map