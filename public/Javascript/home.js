

var containers = document.querySelectorAll(".post_content");

    containers.forEach(function (container) {
      var likebtn = container.querySelector("i");


      container.addEventListener("dblclick", function () {
        likebtn.style.transform = "translate(-50%, -50%) scale(1)";
        likebtn.style.opacity = 0.8;


        setTimeout(function () {
          likebtn.style.opacity = 0;
        }, 1000);

        setTimeout(function () {
          console.log("Hello brother");
          likebtn.style.transform = "translate(-50%, -50%) scale(0)";
        }, 2000);
      });
    });



    function reloadPage() {
      speakText('This page is in underdevelopement if you have some greate idea then please let me know...!')
      location.reload();
    }


    function speakText(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  }

