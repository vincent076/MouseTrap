var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-73159092-1']);
_gaq.push(['_trackPageview']);

(function () {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

const facebook_clickbait = function (node) {

  const images = [...node.getElementsByClassName('mbs _6m6 _2cnj _5s6c')];  
  
  images.forEach(function (el) {
    var links = el.getElementsByTagName('a');
    var link = "";
	  var text = "";
      for (var i = 0; i < links.length; i++) {		
		  const matches = links[i].href.match(/facebook\.com\/l.php\?u=(.*?)&/);
		  if (matches) {
			  {
				  link = decodeURIComponent(matches[1]);
				  console.log("Passed: " + link);
				  text = escape(links[i].innerHTML);
			  }
		  }
  }

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          var data = JSON.parse(request.responseText);
		  var robot = data.robot;
		  var chance = 0;
		  var first = false;
		  
		  for (var i = 0; i < robot.length; i++)
		  {
				chance += robot[i].chance;
				console.log(chance);
		  }

		  var clickbait = chance / robot.length;
		  console.log("Clickbait number:" + clickbait);
          var clickbait_banner = el.appendChild(document.createElement("div"));    
          if (clickbait < 0.52) {
            clickbait_banner.style.fontFamily = "Arial"
            clickbait_banner.style.fontStyle = "bold"
            clickbait_banner.style.fontSize = "20px"
            clickbait_banner.style.width = "80%";
            clickbait_banner.style.textDecoration = "none";
            clickbait_banner.style.textAlign = "left";
            clickbait_banner.textContent = "🖱 🧀 🧀";
          }            
            
           else if (clickbait < 0.54) {
            clickbait_banner.style.fontFamily = "Arial"
            clickbait_banner.style.fontStyle = "bold"
            clickbait_banner.style.fontSize = "20px"
            clickbait_banner.style.width = "80%";
            clickbait_banner.style.textDecoration = "none";
            clickbait_banner.style.textAlign = "left";
            clickbait_banner.textContent = "🖱 🧀 🧀 🧀";
            
          }

          else if (clickbait < 0.56) {
            clickbait_banner.style.fontFamily = "Arial"
            clickbait_banner.style.fontStyle = "bold"
            clickbait_banner.style.fontSize = "20px"
            clickbait_banner.style.width = "80%";
            clickbait_banner.style.textDecoration = "none";
            clickbait_banner.style.textAlign = "left";
            clickbait_banner.textContent = "🖱 🧀 🧀 🧀 🧀";
            
          }

          else if (clickbait < 0.58) {
            clickbait_banner.style.fontFamily = "Arial"
            clickbait_banner.style.fontStyle = "bold"
            clickbait_banner.style.fontSize = "20px"
            clickbait_banner.style.width = "80%";
            clickbait_banner.style.textDecoration = "none";
            clickbait_banner.style.textAlign = "left";
            clickbait_banner.textContent = "🖱 🧀 🧀 🧀 🧀 🧀";
            
          }

          else if (clickbait < 0.60) {
            clickbait_banner.style.fontFamily = "Arial"
            clickbait_banner.style.fontStyle = "bold"
            clickbait_banner.style.fontSize = "20px"
            clickbait_banner.style.width = "80%";
            clickbait_banner.style.textDecoration = "none";
            clickbait_banner.style.textAlign = "left";
            clickbait_banner.textContent = "🖱 🧀 🧀 🧀 🧀 🧀 🧀";
            
          }

          else if (clickbait < 0.62) {
            clickbait_banner.style.fontFamily = "Arial"
            clickbait_banner.style.fontStyle = "bold"
            clickbait_banner.style.fontSize = "20px"
            clickbait_banner.style.width = "80%";
            clickbait_banner.style.textDecoration = "none";
            clickbait_banner.style.textAlign = "left";
            clickbait_banner.textContent = "🖱 🧀 🧀 🧀 🧀 🧀 🧀 🧀";
            
          }

          else if (clickbait < 0.64) {
            clickbait_banner.style.fontFamily = "Arial"
            clickbait_banner.style.fontStyle = "bold"
            clickbait_banner.style.fontSize = "20px"
            clickbait_banner.style.width = "80%";
            clickbait_banner.style.textDecoration = "none";
            clickbait_banner.style.textAlign = "left";
            clickbait_banner.textContent = "🖱 🧀 🧀 🧀 🧀 🧀 🧀 🧀 🧀";
            
          }

          else if (clickbait < 0.68) {
            clickbait_banner.style.fontFamily = "Arial"
            clickbait_banner.style.fontStyle = "bold"
            clickbait_banner.style.fontSize = "20px"
            clickbait_banner.style.width = "80%";
            clickbait_banner.style.textDecoration = "none";
            clickbait_banner.style.textAlign = "left";
            clickbait_banner.textContent = "🖱 🧀 🧀 🧀 🧀 🧀 🧀 🧀 🧀 🧀";
            
          }

          else if (clickbait < 0.70) {
            clickbait_banner.style.fontFamily = "Arial"
            clickbait_banner.style.fontStyle = "bold"
            clickbait_banner.style.fontSize = "20px"
            clickbait_banner.style.width = "80%";
            clickbait_banner.style.textDecoration = "none";
            clickbait_banner.style.textAlign = "left";
            clickbait_banner.textContent = "🖱 🧀 🧀 🧀 🧀 🧀 🧀 🧀 🧀 🧀 🧀";
            
          }

          console.log(clickbait_banner);
          console.log(el);
        }
      }
    };
	  console.log("https://fake-news-detector-api.herokuapp.com/votes?url=" + link + "&title=" + text);
    request.open("GET", "https://fake-news-detector-api.herokuapp.com/votes?url=" + link + "&title=" + text, true);
    request.send();
  });

};

// const facebook_voter = function (node) {
//   const images = [...node.getElementsByClassName('_42nr')];
//   var clickbait_voter = el.appendChild(document.createElement("div"));    
//   clickbait_voter.style.innerHTML = "<button>vote</button>";
// }




const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    mutation.addedNodes.forEach(function (node) {
      if (node.nodeType === 1) { // ELEMENT_NODE
        facebook_clickbait(node);
        // facebook_voter(node);
      }
    });
  });
});

const config = {
  attributes: false,
  childList: true,
  characterData: false,
  subtree: true
};

observer.observe(document.body, config);

facebook_clickbait(document.body);
facebook_voter(document.body);