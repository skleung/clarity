var $window = $(window);
var $loginPage = $('.login.page'); // The login page
var $mainPage = $('.main.page'); // The chatroom page
var $enter = $('.enter');
var $video = $('#video');

function showMainPage() {
  $loginPage.fadeOut();
  $mainPage.show();
  $loginPage.off('click');
  $window.off('keyup');
}

$loginPage.click(function() {
  showMainPage();
});

$enter.click(function() {
  showMainPage();
});

$window.on('keydown', function() {
  showMainPage();
})

$video.click(function () {
  event.preventDefault();
})

