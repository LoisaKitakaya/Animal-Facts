$(document).ready(function () {
  var fact = $("#fact-container");
  var navbar = $(".navbar");
  var menu = $("#menu");
  var fetchfact = $("#fetch-fact");
  var loadingbtn = $("#loading");

  navbar.hide();
  loadingbtn.hide();

  menu.click(function () {
    navbar.slideToggle();
  });

  fetchfact.click(function () {
    $.ajax({
      url: "https://animalfactsapi.herokuapp.com/random-fact/",
      method: "GET",
      crossDomain: true,
      async: true,
      dataType: "json",
      beforeSend: function () {
        fetchfact.hide();
        loadingbtn.show();
      },
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.log(error);
      },
      complete: function () {
        loadingbtn.hide();
        fetchfact.show();
      },
    });
  });
});
