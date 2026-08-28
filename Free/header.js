document.querySelectorAll('.nav-item.has-submenu > a')
  .forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentElement.classList.toggle('open');
    });
  });


// Mở sidebar
document.getElementById("openCategories").onclick = function() {
    document.getElementById("categorySidebar").style.width = "250px";
}

// Đóng sidebar
document.getElementById("closeSidebar").onclick = function() {
    document.getElementById("categorySidebar").style.width = "0";
}
