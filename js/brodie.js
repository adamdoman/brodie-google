function brodifyLogo() {
    if($("#lst-ib").val().toLowerCase().includes("brodie")){
      $("#hplogo").attr('src', 'images/brodielogo_color.png');
      document.title = 'Brodie';
    } else {
      $("#hplogo").attr('src', './Google_files/googlelogo_color_272x92dp.png');
      document.title = 'Google';
    }

}

$(document).ready(function() {
  $("#lst-ib").on("keyup", function(){
      brodifyLogo();
  });
});
