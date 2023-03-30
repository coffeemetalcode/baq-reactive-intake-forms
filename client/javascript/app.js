$(document).ready(function() {
  console.log('connected');

  /* variables */
  let customer = {
    name: '',
    phone: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  };

  let job1 = {
    length: 0,
    width: 0,
    stitch: '',
    thread: '',
    batting: 0,
    seams: 0,
    binding: 0,
    comment: ''
  }

  // if isLoggedIn
  // populate Personal / Mailing info from customer object

  // set all state abbreviations
  // make this the result of an API request
  const stateAbbreviations = [ 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY' ]; // 50 united states plus district of columbia
  
  // populate state select box with options
  populateSelectBox('state', stateAbbreviations);

  $('#customer-details').change(function() {
    customer = updateCustomer();
  });

  $('#job-1-details').change(function() {
    console.log('job 1 state change');
    job1 = updateJob();
    updatePrice(job1.length, job1.width);
  });
  
  // populate stitch pattern select dialog
  let stitchPatterns = [];

  // populate thread color select modal
  let threadColors = [];

  $.when(getLongarmOptions()).done((result) => {
    stitchPatterns = result.options.pantographs;
    threadColors = result.options.threads;
    populateSelectDialog('stitch-select-options', stitchPatterns);
    populateSelectDialog('thread-select-options', threadColors);
  });

  // populate batting options select modal
  const battingOptions = [];

  // populate backing options select modal
  const backingOptions = [];

  // populate binding options select modal
  const bindingOptions = [];

  // calculate area on field blur

  // calculate e2e price on field blur

  // calculate batting price on field blur

  // calculate backing price on field blur

  // calculate binding price on field blur

  // calculate total on field blur

  // onSubmit -> create and populate confirmation modal
  let order = {};
  
  /* functions */

  // abstract function to populate selection modals with options from an input array
  function populateSelectDialog(dialogId, inputArr) {
    for (item of inputArr) {
      $(`#${dialogId}`)
      .append(`<div class="col-sm-4">
        <div class="card bg-light mb-4">
          <div id=${item.id} class="card-body radio">
            <div class="card-title">${item.name}</div>
            <img src="${item.imgUrl}" class="card-img-top img-fluid" alt="">
          </div>
        </div>
      </div>`);
    }

    $('.card-body').click(function() {
      let id = $(this).attr('id');
      console.log(id);
      $('.selected .fa').removeClass('fa-check');
      $('.radio').removeClass('selected');
      $(this).addClass('selected');
    });
  }
  
  // abstract function to populate select boxes with options from an input array
  function populateSelectBox(id, inputArr) {
    for (item of inputArr) {
      $(`#${id}`)
        .append($('<option></option>')
          .attr('value', item)
          .text(item));
    }
  }

  // update customer information from form
  function updateCustomer() {
    let c = {
      name: $('#name').val(),
      phone: $('#phone').val(),
      email: $('#email').val(),
      address1: $('#address-1').val(),
      address2: $('#address-2').val(),
      city: $('#city').val(),
      state: $('#state').val(),
      zip: $('#postal').val()
    };
    console.log('customer object', c);
    return c;
  }

  function updateJob() { 
    let j = {
      length: $('#job-1-length').val(),
      width: $('#job-1-width').val(),
      stitch: $('#job-1-stitch').val(),
      thread: $('#job-1-thread').val(),
    };
    console.log('job object', j);
    return j;
  }

  function updatePrice(length, width) {
    let area = length * width;
    let charge = area * 0.025;
    let price = charge <= 50 ? 50 : charge;
    let currencyFormattedPrice = `$${price.toFixed(2)}`;
    $('#job-1-area').attr('value', area);
    $('#job-1-price').attr('value', currencyFormattedPrice);
  }

  // GET longarm options
  function getLongarmOptions() {
    return $.ajax({
      url: 'http://localhost:8085/api/longarm/options',
      success: (data) => {
        console.log(data);
      }
    })
  }

});