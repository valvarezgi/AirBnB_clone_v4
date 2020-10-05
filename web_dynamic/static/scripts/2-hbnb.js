const $ = window.$;
window.onload = function () {
  const checkAmenities = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      checkAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete checkAmenities[$(this).data('id')];
    }
    const listAmenities = Object.values(checkAmenities);
    if (listAmenities.length > 0) {
      $('div.amenities h4').text(Object.values(listAmenities).join(', '));
    } else {
      $('div.amenities h4').html('&nbsp;');
    }
  });
  $.get('http://127.0.0.1:5001/api/v1/status/', function (data, status) {
    console.log(data.status);
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
};
