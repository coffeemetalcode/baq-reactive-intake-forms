$(document).ready(() => {
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

  // if isLoggedIn
  // populate Personal / Mailing info from customer object

  // set all state abbreviations
  const stateAbbreviations = [ 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY' ]; // 50 united states plus district of columbia
  
  // populate state select box with options
  populateSelectBox('state', stateAbbreviations);

  // set value of customer state
  $('#state').change(() => {
    customer.state = $('#state').val();
    console.log(customer);
  });

  // set value of customer name
  $('#name').change(() => {
    customer.name = $('#name').val();
    console.log(customer);
  });

  // devise a way to do this dynamically
  
  const stitchPatterns = [
    {
      name: 'Blustery Breeze',
      imgUrl: './assets/images/blustery-breeze.jpg'
    },
    {
      name: 'Clover Edge to Edge',
      imgUrl: './assets/images/clover-edge-to-edge.jpg'
    },
    {
      name: 'Feather Delight',
      imgUrl: './assets/images/feather-delight.jpg'
    },
    {
      name: 'Field of Flowers',
      imgUrl: './assets/images/field-of-flowers.jpg'
    }
  ];
  
  // populate stitch pattern select dialog
  populateSelectDialog('stitch-select-options', stitchPatterns);

  // abstract function to populate selection modals with options from an input array
  function populateSelectDialog(id, inputArr) {
    for (item of inputArr) {
      $(`#${id}`)
      .append(`<div class="col-sm-4">
        <div class="card bg-light mb-4">
          <div class="card-body">
            <div class="card-title">${item.name}</div>
            <img src="${item.imgUrl}" class="card-img-top img-fluid" alt="">
          </div>
        </div>
      </div>`);
    }
  }

  // populate thread color select modal
  const threadColors = [];

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

  // abstract function to populate select boxes with options from an input array
  function populateSelectBox(id, inputArr) {
    for (item of inputArr) {
      $(`#${id}`)
        .append($('<option></option>')
          .attr('value', item)
          .text(item));
    }
  }
});