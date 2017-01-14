$(document).ready(function(){
  $("label.btn").on('click', function() {
    if ($(this).hasClass('btn-default')) {
      $(this).siblings('.btn-primary').removeClass('btn-primary').addClass('btn-default');
      $(this).removeClass('btn-default').addClass('btn-primary');
    }
  });
});
