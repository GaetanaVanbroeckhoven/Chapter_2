function main() {
      var logo = document.getElementById("logo");
      var home = document.getElementById("home");
      var concept = document.getElementById("concept");
      var applicatie = document.getElementById("applicatie");
      var fotogallerij = document.getElementById("fotogallerij");
      var steunen = document.getElementById("steunen");
      var contact = document.getElementById("contact");

      var page1 = document.getElementById("slider-wrapper");
      var page2 = document.getElementById("page2");
      var page3 = document.getElementById("page3");
      var page4 = document.getElementById("page4");
      var page5 = document.getElementById("page5");
      var page6 = document.getElementById("page6");

      home.style.color="rgba(86, 220, 205,1)";
      page1.style.visibility = "visible";
      page2.style.visibility = "hidden";
      page3.style.visibility = "hidden";
      page4.style.visibility = "hidden";
      page5.style.visibility = "hidden";
      page6.style.visibility = "hidden";

      logo.onclick = function tonenHome(){
        page1.style.visibility = "visible";
        page2.style.visibility = "hidden";
        page3.style.visibility = "hidden";
        page4.style.visibility = "hidden";
        page5.style.visibility = "hidden";
        page6.style.visibility = "hidden";
        home.style.color="rgba(86, 220, 205,1)";
      }

      home.onclick = function tonenHome(){
        page1.style.visibility = "visible";
        page2.style.visibility = "hidden";
        page3.style.visibility = "hidden";
        page4.style.visibility = "hidden";
        page5.style.visibility = "hidden";
        page6.style.visibility = "hidden";
        home.style.color="rgba(86, 220, 205,1)";
      }

      concept.onclick = function tonenConcept(){
        page1.style.visibility = "hidden";
        page2.style.visibility = "visible";
        page3.style.visibility = "hidden";
        page4.style.visibility = "hidden";
        page5.style.visibility = "hidden";
        page6.style.visibility = "hidden";
        home.style.color="";
      }

      applicatie.onclick = function tonenApp(){
        page1.style.visibility = "hidden";
        page2.style.visibility = "hidden";
        page3.style.visibility = "visible";
        page4.style.visibility = "hidden";
        page5.style.visibility = "hidden";
        page6.style.visibility = "hidden";
        home.style.color="";
      }

      fotogallerij.onclick = function tonenFotogallerij(){
        page1.style.visibility = "hidden";
        page2.style.visibility = "hidden";
        page3.style.visibility = "hidden";
        page4.style.visibility = "visible";
        page5.style.visibility = "hidden";
        page6.style.visibility = "hidden";
        home.style.color="";
      }

      steunen.onclick = function tonenSteunen(){
        page1.style.visibility = "hidden";
        page2.style.visibility = "hidden";
        page3.style.visibility = "hidden";
        page4.style.visibility = "hidden";
        page5.style.visibility = "visible";
        page6.style.visibility = "hidden";
        home.style.color="";
      }

      contact.onclick = function tonenContact(){
        page1.style.visibility = "hidden";
        page2.style.visibility = "hidden";
        page3.style.visibility = "hidden";
        page4.style.visibility = "hidden";
        page5.style.visibility = "hidden";
        page6.style.visibility = "visible";
        home.style.color="white";
      }
}

window.onload = function() {
      main();
}
