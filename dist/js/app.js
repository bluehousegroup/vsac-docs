// Security picture highlight selection
$('.security-picture-select input[type=radio]').on('change', function() {
  $(this).parents('.security-picture-select').find('label').removeClass('active');
  $('label[for='+ this.id +']').addClass('active');
});

// Hide payment modal when showing bounce modal
$('#bounce-modal').on('show.bs.modal', function() {
  $('#payment-modal').modal('hide');
});

// Hide account select submit button
$('.account-select button').hide();

// Auto-trigger account select on change
$('#select-account').on('change', function() {
  $(this).parents('form').trigger('submit');
});

// Change loan detail button label on toggle
$('.loan-collapse, .block-collapse').on('show.bs.collapse', function() {
  $(this).siblings('.loan-block__toggle, .block__toggle').html('Hide Details');
}).on('hide.bs.collapse', function() {
  $(this).siblings('.loan-block__toggle, .block__toggle').html('Show Details');
});

// Toggle open class on payment/award detail to trigger chevron indicator rotation
$('.payment-collapse,.award-collapse').on('show.bs.collapse', function() {
  $(this).siblings('.payment__summary,.award__summary').find('.payment__toggle,.award__toggle').addClass('open');
}).on('hide.bs.collapse', function() {
  $(this).siblings('.payment__summary,.award__summary').find('.payment__toggle,.award__toggle').removeClass('open');
});

// Toggle open class on card to trigger chevron indicator rotation
$('.card-collapse').on('show.bs.collapse', function() {
  $(this).siblings('.card-header').addClass('open');
}).on('hide.bs.collapse', function() {
  $(this).siblings('.card-header').removeClass('open');
});


$('#remove-school-modal').on('show.bs.modal', function(e) {
  var button = $(e.relatedTarget);
  var school = button.data('school');
  var modal = $(this);
  modal.find('.modal-title').text('Remove ' + school);
  modal.find('.modal-body').html('<p>Are you sure you want to remove <strong>' + school + '</strong> from your list of schools?</p>');
});

$('#add-school-modal').on('show.bs.modal', function(e) {
  var button = $(e.relatedTarget);
  var school = button.data('school');
  var modal = $(this);
  modal.find('.modal-title').text('Add ' + school);
  modal.find('.modal-body .intro').html('<p>Please indicate what type of program you are enrolling in at <strong>' + school + '</strong>.</p>');
});

// Form input formatting with Cleave.js
// Phone number
document.querySelectorAll('.input-phone').forEach(function(el) {
  new Cleave(el, {
    phone: true,
    phoneRegionCode: 'US'
  });
});

// SSN
document.querySelectorAll('.input-ssn').forEach(function(el) {
  new Cleave(el, {
    blocks: [3, 2, 4],
    delimiter: '-',
    numericOnly: true
  });
});

// Nine digit zip
document.querySelectorAll('.input-zipcode').forEach(function(el) {
  new Cleave(el, {
    blocks: [5, 4],
    delimiter: '-',
    numericOnly: true,
    delimiterlazyshow: true
  });
});

// MM/YYYY date
document.querySelectorAll('.input-date-my').forEach(function(el) {
  new Cleave(el, {
    date: true,
    datePattern: ['m', 'Y']
  });
});

// MM/DD/YYY date
document.querySelectorAll('.input-date-mdy').forEach(function(el) {
  new Cleave(el, {
    date: true,
    datePattern: ['m', 'd', 'Y']
  });
});
