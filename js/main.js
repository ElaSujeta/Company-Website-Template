var menuElements = document.getElementById('main_menu').getElementsByTagName('li');
var checkbox = document.getElementById('show');
for (var i = 0; i < menuElements.length; i++) {
  menuElements[i].addEventListener('click', function(){
    checkbox.checked = false;
  });
}
