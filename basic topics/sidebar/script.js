function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementsByClassName("content")[0].style.marginleft = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementsByClassName("content")[0].style.marginleft = "0";
}
