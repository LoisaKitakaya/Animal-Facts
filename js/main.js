$(document).ready(function () {
  var fact = $("#fact-container");
  var welcome = $("#welcome-container");
  var imageurl = $("#fact-image");
  var animal = $("#fact-animal");
  var setup = $("#fact-setup");
  var delivery = $("#fact-delivery");
  var navbar = $(".navbar");
  var menu = $("#menu");
  var fetchfact = $("#fetch-fact");
  var loadingbtn = $("#loading");

  navbar.hide();
  loadingbtn.hide();
  fact.hide();

  menu.click(function () {
    navbar.slideToggle();
  });

  fetchfact.click(function () {
    $.ajax({
      url: "https://animalfactsapi.herokuapp.com/api-v1/random-fact/",
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
        imageurl.attr("src", response.image_url);
        animal.html(response.animal);
        setup.html(response.setup);
        delivery.html(response.delivery);
      },
      error: function (error) {
        console.log(error);
      },
      complete: function () {
        welcome.hide();
        fact.show();
        loadingbtn.hide();
        fetchfact.show();
      },
    });
  });
});
