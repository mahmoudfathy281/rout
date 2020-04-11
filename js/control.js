// $(function () {
//     'use strict';
      
//     function hideOrShow(){
//     var value = $('#itemselector').val();
//     //var value = this.value;
//     if (value == "1") {
//         $("#item").show('slow');
//     } else {
//         $("#item").hide('slow'); 
//     }
//     }
    
//     $("#itemselector").change(hideOrShow);
    
//     hideOrShow();
   
//     $('.toggle-info').click(function () {
//         $(this).parent().next('.card-body').toggleClass('hide');
//         if($(this).parent().next('.card-body').hasClass('hide')){
//             $(this).html('<i class="fas fa-minus"></i>');
//         }else{
//             $(this).html('<i class="fas fa-plus"></i>');
//         }
//     });
//     var pas1 = document.getElementById("psw"),
//         pas2 = document.getElementById("psw2"),
//         mes  = document.getElementById("message");
//     if(pas1 !== pas2){
//         mes.innerHTML = "not match password dplecate";
//     }
//     $("select").selectBoxIt({
//         autoWidth: false
//     });
//     $('[placeholder]').focus(function () {
//         $(this).attr('data-text', $(this).attr('placeholder'));
//         $(this).attr('placeholder', '');
//     }).blur(function () {
//         $(this).attr('placeholder', $(this).attr('data-text'));
//     });
//     $('.confirm').click(function (){
//         return confirm('هل تريد بالفعل حذف الشكوي');
//     });
//     $('.cat h3').click(function(){
//         $(this).next('.full-viwe').fadeToggle(200);
//     });
//     $('.option span').click(function(){
//         $(this).addClass('active').siblings('span').removeClass('active');
//         if($(this).data ('viwe') == 'full'){
//             $('.cat .full-viwe').fadeIn();
//         }else{
//             $('.cat .full-viwe').fadeOut();
//         }
//     });
//     new NiceCountryInput($("#testinput")).init();
    
//     $('#complain_info').printThis();
//         $.ajax({ //create an ajax request to load_page.php
//             type: "POST",
//             url: "php/complain.php",             
//             success: function(response) {
//                 var data = $.parseJSON(response);
//                 console.log(data);
//             }
//         });
// });


// function age(age1 , age2){
//     return(age1 - age2)/2;
// }
// function year(x , y){
//     var result = x - y;
//     return age(result , 20);
// }

// var x = year(2020 , 1994);

// console.log(x);
var productName = document.getElementById("productNameInput");
var productPrice = document.getElementById("productPriceInput");
var productCat = document.getElementById("productCatInput");
var productDesc = document.getElementById("productdescInput");
var addBtn = document.getElementById("addBtn");

var productList;
if(localStorage.getItem("myProduct") == null){
    productList = [];
}
else{
    productList = JSON.parse(localStorage.getItem("myProduct"));
    displayProduct()
}

function addProduct(){
    var product = {
        name: productName.value,
        price: productPrice.value,
        category: productCat.value,
        discrption: productDesc.value
    }
    productList.push(product);
    localStorage.setItem("myProduct", JSON.stringify(productList));
    
}

function displayProduct(){
    var content = "";
    for(var i = 0; i < productList.length; i ++){
        content += "<h2>"+productList[i].name+"</h2><p>"+productList[i].price+"</p><p>"+productList[i].category+"</p><p>"+productList[i].discrption+"</p>";
    }
    document.getElementById('get').innerHTML = content;
}