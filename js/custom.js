// Password
// function buzzfeed() {
//     var testV = 1;
//     var pass1 = prompt('Please Enter the Project Password','');

//     while (testV < 3) {
//         if (!pass1)
//             return;
//         if (pass1.toLowerCase() == "lovewins") {
//             // window.open("portfolio/BuzzFeed/buzzfeed.html", "_self");
//             // document.location.replace("http://www.w3schools.com");
//             window.location.href= "portfolio/BuzzFeed/buzzfeed.html";
//             break;
//         }

//         testV+=1;
        
//         var pass1 = 
//         prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
//     }

//     if (pass1.toLowerCase()!="password" & testV ==3)
//         return "";
// };

// // Fade-In
//     $(document).ready(function(){        
//             $("#top.hidden").fadeIn(300).removeClass('hidden');
//             $("#content.hidden").fadeIn(1000).removeClass('hidden');
//         }
//     );

// //Fade-Out
//     $(document).on("click", ".project a, #header a", function () {
//         // get the href attribute
//         var newUrl = $(this).attr("href");
//         // veryfy if the new url exists or is a hash
//         if (!newUrl || newUrl[0] === "#") {
//             // set that hash
//             location.hash = newUrl;
//             return;
//         }
//         // now, fadeout the html (whole page)
//         $("html").fadeOut(function () {
//             // when the animation is complete, set the new location
//             location = newUrl;
//         });
//         // prevent the default browser behavior.
//         return false;
//     });

// Table of Contents Generator
    window.addEventListener('load', 
        // Table of Contents Generator
        function() {
            var h1s = document.getElementsByTagName("h1");
            for (var i = 0; i < h1s.length; i++) {
                var h1 = h1s[i];
                if (!h1.id) {
                    h1.id = h1.firstChild.id;
                }
            }

            var ul = document.getElementById('legend');

            for(var i = 0; i < h1s.length; i++) {
                var o = h1s[i];
                var innertext = document.createTextNode(o.innerText);
                var id = o.id;

                var li = document.createElement('li');
                var a = document.createElement('a');
                a.href = ('#' + id);
                a.appendChild(li);
                li.appendChild(innertext);
                a.className = "py-0";
                li.className = "size-1 nav-link pb-0";
                
                ul.appendChild(a);
            }
        }
    ,false);
