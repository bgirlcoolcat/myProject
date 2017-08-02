$(document).ready(function() {
  $('button').mouseenter(function() {
    $(this).fadeTo('slow', 0.5);
  });
  $('button').mouseleave(function() {
    $(this).fadeTo('slow', 1);
  });
});