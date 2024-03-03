let count = 1;

/*Hamburger Button Actions Define*/
$('.hamburger').click(function(){
    console.log('Clicked hamburger');
    if($('#options').css('visibility') === 'visible'){
        console.log('hidden');
        $('#options').css('visibility','hidden');
    }else{
        console.log('visible');
        $('#options').css('visibility','visible');
    }
});

/*Options Button Actions Define*/
$('.homebtn').click(function(){
    $('.homepage').css('display','block');
    $('.customerpage').css('display','none');
    $('.itempage').css('display','none');
    $('.placeorderpage').css('display','none');
});

$('.customerbtn').click(function(){
    $('.customerpage').css('display','block');
    $('.homepage').css('display','none');
    $('.itempage').css('display','none');
    $('.placeorderpage').css('display','none');
});

$('.itembtn').click(function(){
    $('.itempage').css('display','block');
    $('.homepage').css('display','none');
    $('.customerpage').css('display','none');
    $('.placeorderpage').css('display','none');
});

$('.orderbtn').click(function(){
    console.log('income');
    $('.placeorderpage').css('display','block');
    $('.homepage').css('display','none');
    $('.customerpage').css('display','none');
    $('.itempage').css('display','none');
});

$('.orderdetailsbtn').click(function(){});

/*Line Chart Define*/
const xValues = ['Jan','Feb','March','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];

const pointColors = [
    "rgba(255, 0, 72, 1)",
    "rgba(0, 255, 0, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(255, 255, 0, 1)",
    "rgba(255, 0, 255, 1)",
    "rgba(0, 255, 255, 1)",
    "rgba(128, 0, 0, 1)",
    "rgba(0, 128, 0, 1)",
    "rgba(0, 0, 128, 1)",
    "rgba(128, 128, 0, 1)",
    "rgba(128, 0, 128, 1)",
  ];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: pointColors,
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});

//Customer Form Action
//This Action For Clear All Input Field
$('.CustomerInputsClear').click(function(){
  $('.customerID').val('');
  $('.customerName').val('');
  $('.customerAddress').val('');
  $('.CustomerSalary').val('');
});

$('.customersearchbtn').click(function(){
  SearchID();
});

$('.customerremovebtn').click(function(){
  console.log('Customer Removed !');
});

function SearchID(){
  var i;
  for(i = 0; i < CustomerArray.length; i++){
    if($('.SearchID').val() === CustomerArray[i].CustomerID){
      $('.customerdetailtable td').parent().remove();
      datarow(
        CustomerArray[i].CustomerID,
        CustomerArray[i].Name,
        CustomerArray[i].Address,
        CustomerArray[i].Salary
      );
    }
  }
}

function datarow(ID,NAME,ADDRESS,SALARY){
  let row = `<tr>
              <th scope="row">${ID}</th>
              <td>${NAME}</td>
              <td>${ADDRESS}</td>
              <td>${SALARY}</td>
              <td>
                <button class="customerremovebtn">
                    <img src="asstes/img/bin.png" alt="">
                </button>
              </td>
            </tr>`;

  $(".customerdetailtable tbody").append(row);
  $('.customerremovebtn').click(function (event) {
    let idFromRow = $(this).closest('tr').find('th').text();
    console.log(idFromRow);
    $(this).closest('tr').remove();
  });
  setClickeventForTable();
}

function setClickeventForTable(){
  $('.customerdetailtable tr').click(function () {
    
    let id = $(this).children().eq(0).text();
    let name = $(this).children().eq(1).text();
    let address = $(this).children().eq(2).text();
    let salary = $(this).children().eq(3).text();

    $('.customerID').val(id);
    $('.customerName').val(name);
    $('.customerAddress').val(address);
    $('.CustomerSalary').val(salary);
  });
}

/*-************************************************-*/

//Item Form Action
$('.ItemInputsClear').click(function(){
  $('.itemCode').val('');
  $('.itemName').val('');
  $('.itemQTY').val('');
  $('.itemPrice').val('');
});

$('.itemsearchbtn').click(function(){
  SearchCODE();
});

function SearchCODE(){
  var items;
  for(items = 0; items < ItemsArray.length; items++){
    if($('.itemssearchbar').val() === ItemsArray[items].ItemCode){
      $('.itemdetailtable td').parent().remove();
      itemsdatarow(
        ItemsArray[items].ItemCode,
        ItemsArray[items].ItemName,
        ItemsArray[items].ItemQTY,
        ItemsArray[items].ItemPrice
      );
    }
  }
}

function itemsdatarow(CODE,NAME,QTY,PRICE){
  let row = `<tr>
              <th scope="row">${CODE}</th>
              <td>${NAME}</td>
              <td>${QTY}</td>
              <td>${PRICE}</td>
              <td>
                <button class="itemsremovebtn">
                    <img src="asstes/img/bin.png" alt="">
                </button>
              </td>
            </tr>`;

  $(".itemdetailtable tbody").append(row);
  $('.itemsremovebtn').click(function (event) {
    let itemIdFromRow = $(this).closest('tr').find('th').text();
    console.log(itemIdFromRow);
    $(this).closest('tr').remove();
  });
  setClickeventForItemsTable();
}

function setClickeventForItemsTable(){
  $('.itemdetailtable tr').click(function () {
    
    let code = $(this).children().eq(0).text();
    let name = $(this).children().eq(1).text();
    let qty = $(this).children().eq(2).text();
    let price = $(this).children().eq(3).text();

    $('.itemCode').val(code);
    $('.itemName').val(name);
    $('.itemQTY').val(qty);
    $('.itemPrice').val(price);
  });
}

/*-************************************************-*/

//Order Form Action
$('.ODcustomerID').keypress(function(event) {
  if (event.which === 13) {
    clearCustomerDetailsOD(false);
    getCustomerDetailsOD($('.ODcustomerID').val());
  }
});

$('.ODitemID').keypress(function(event) {
  if (event.which === 13) {
    clearItemsDetailsOD(false);
    getItemDetailsOD($('.ODitemID').val());
  }
});

$('.placeOrder').click(function(){
  let nextID = getNextOrderID();
  $('.orderID').text(nextID);
});

$('.ODitemsDetailsAddtoCart').click(function(){
  ODItemsdatarow(
    $('.ODitemID').val(),
    $('.ODitemName').text(),
    $('.ODitemQuantity').text(), 
    $('.ODitemPrice').text()
  );
});

$('.ODitemsDetailsclear').click(function(){
  clearItemsDetailsOD(true);
});

function getCustomerDetailsOD(CustomerIDOD){
  let IsgetCustomerDetailsOD = false;
  for(i = 0; i < CustomerArray.length; i++){
    if(CustomerArray[i].CustomerID === CustomerIDOD){
      console.log("ok")
      $('.ODcustomerName').text(CustomerArray[i].Name);
      $('.ODcustomerAddress').text(CustomerArray[i].Address);
      $('.ODcustomerSalary').text(CustomerArray[i].Salary);
      IsgetCustomerDetailsOD = true;
      break;
    }else {
      IsgetCustomerDetailsOD = false;
    }
  }
  if(IsgetCustomerDetailsOD==false){
    console.log('I m come to the print error');
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please check & enter correct ID!",
    });
  }
}

function getItemDetailsOD(ItemCODEOD){
  let IsgetItemDetailsOD = false;
  for(i = 0; i < ItemsArray.length; i++){
    if(ItemsArray[i].ItemCode === ItemCODEOD){
      console.log("ok")
      $('.ODitemName').text(ItemsArray[i].ItemName);
      $('.ODitemQuantity').text(ItemsArray[i].ItemQTY);
      $('.ODitemPrice').text(ItemsArray[i].ItemPrice);
      IsgetItemDetailsOD = true;
      break;
    }else {
      IsgetItemDetailsOD = false;
    }
  }
  if(IsgetItemDetailsOD==false){
    console.log('I m come to the print error');
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please check & enter correct ID!",
    });
  }
}

function getNextOrderID(){
  if(OrdersArray.length > 0){
    let orderIDText = OrdersArray[OrdersArray.length-1].OrderID;
    let result = parseInt(orderIDText.substring(2).replace('-', ''), 10);
    let resulttostring = result+1;
    for(i = 0; i<(5-result.toString().length); i++){
      resulttostring = '0'+''+resulttostring;
    }
    resulttostring = 'OR'+''+(resulttostring.substring(0, 2) + '-' + resulttostring.substring(2));
    return resulttostring;
  }else{
    return 'OR00-001';
  }
}

function clearCustomerDetailsOD(Isvalued){
  if(Isvalued){
    $('.ODcustomerID').val('');
  }
  $('.ODcustomerName').text('');
  $('.ODcustomerAddress').text('');
  $('.ODcustomerSalary').text('');
}

function clearItemsDetailsOD(Isvalued){
  if(Isvalued){
    $('.ODitemID').val('');
  }
  $('.ODitemName').text('');
  $('.ODitemQuantity').text('');
  $('.ODitemPrice').text('');
}

function ODItemsdatarow(CODE,NAME,QTY,PRICE){
  let row = `<tr>
              <th scope="row">${CODE}</th>
              <td>${NAME}</td>
              <td>${QTY}</td>
              <td>${PRICE}</td>
              <td>
                <button class="ODItemsremovebtn">
                    <img src="asstes/img/bin.png" alt="">
                </button>
              </td>
            </tr>`;

  $(".ordercartdetailtable tbody").append(row);
  $('.ODItemsremovebtn').click(function (event) {
    let idFromRow = $(this).closest('tr').find('th').text();
    console.log(idFromRow);
    $(this).closest('tr').remove();
  });
  setClickeventForCartTable();
}

function setClickeventForCartTable(){
  $('.ordercartdetailtable tr').click(function () {
    
    let code = $(this).children().eq(0).text();
    let name = $(this).children().eq(1).text();
    let qty = $(this).children().eq(2).text();
    let price = $(this).children().eq(3).text();

    $('.ODitemID').val(code);
    $('.ODitemName').text(name);
    $('.ODitemQuantity').text(qty);
    $('.ODitemPrice').text(price);
  });
}