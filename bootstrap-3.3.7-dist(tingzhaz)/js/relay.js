;(function(){var e=["https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js","https://external-production.codecademy.com/assets/jquery.expect.js"],t=document.currentScript.parentNode,n=function(e,r){if(r<e.length){var i=e[r],s=document.querySelector('[src="'+i+'"]');if(!s){var o=document.createElement("script");o.type="text/javascript",t.appendChild(o),o.onload=function(){n(e,r+1)},o.src=i}else n(e,r+1)}else window.parent.postMessage({location:window.location.href},"*")};n(e,0),window.addEventListener("message",function(e){if(e.data.event==="webSCT:request"){var t;try{window.eval(e.data.code)}catch(n){t=n.message}window.top.postMessage({event:"webSCT:response",error:t},"*")}})})()