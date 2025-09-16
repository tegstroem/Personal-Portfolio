<script>

  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  let tablinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";

  elm.style.backgroundColor = color; 

</script>

