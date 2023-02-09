(document).ready(function () {
    const lista = {};
    $(document).on('change', "input[type='checkbox']",
      function () {
        if (this.checked) {
          lista[($(this).attr('data-id'))] = $(this).attr('data-name');
        } else {
          delete lista[($(this).attr('data-id'))];
        }
        $('div.amenities h4').html(Object.values(lista).join(', ') || '&nbsp;');
      });
  });