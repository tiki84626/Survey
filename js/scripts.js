$(document).ready(function() {
  $("form").submit(function(event) {
    var name = $("#name").val();
    var dob = $("#dob").val();
    var favFood = $("#fav-food").val();
    var color = $("#color").val();
    var favMusic = $("input:radio[name=fav-music]:checked").val();

    event.preventDefault();
    $(".output").show();
    $(".output").css("background-color", color);
    $("#result-name").text(name);
    $("#result-dob").text(dob);
    $("form").css("display", "none");
    $(".page-header").css("display", "none");

    function show_pic(src) {
      var img = document.createElement("img");
      img.src = src;
      $("#food").append(img);
    }

    if (favFood == 1) {
      show_pic("img/american.jpg");
    } else if (favFood == 2) {
      show_pic("img/french.jpg");
    } else if (favFood == 3) {
      show_pic("img/italian.jpg");
    } else {
      show_pic("img/indian.jpg");
    }

    function show_image(src) {
      var img = document.createElement("img");
      img.src = src;
      $("#music").append(img);
    }

    if (favMusic == "rock") {
      show_image("img/rock.jpg");
    } else if (favMusic == "jazz") {
      show_image("img/jazz.jpg");
    } else if (favMusic == "hip-hop") {
      show_image("img/hip-hop.jpg");
    } else if (favMusic == "country") {
      show_image("img/country.jpeg");
    } else {
      show_image("img/blues.jpg")
    }

  });
});
