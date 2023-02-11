//list active scripet//
const list = document.querySelectorAll('.list');
    function activeLink(){
      list.forEach((item) =>
      item.classList.remove('active'));
      this.classList.add('active')
    }
  list.forEach((item) => 
  item.addEventListener('click' , activeLink));

//User-img scripet//
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myDropup").classList.toggle("show2");
    document.getElementById("myDropsett").classList.toggle("show3");
    document.getElementById("myDropchat").classList.toggle("show4");
  }  
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn img')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    if (!event.target.matches('.dropup-btn i')) {
      var dropdowns = document.getElementsByClassName("dropup-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show2')) {
          openDropdown.classList.remove('show2');
        }
      }
    }
    if (!event.target.matches('.sett-btn ion-icon')) {
      var dropdowns = document.getElementsByClassName("sett-nav");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show3')) {
          openDropdown.classList.remove('show3');
        }
      }
    }
    if (!event.target.matches('.chat-btn i')) {
      var dropdowns = document.getElementsByClassName("chat-nav");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show4')) {
          openDropdown.classList.remove('show4');
        }
      }
    }
  }

//It is for dark-mode script//
function Darkfunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
