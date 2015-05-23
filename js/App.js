/* This Application is Designed and Developed by 
 * Mirza Shareque shareque@outlook.com 
 * Softmaque Consultant
 * 20/05/2015
 */

var url = 'http://192.168.140.99/ajax/index.html';
//var url = 'http://192.168.0.232/cgi-bin/login_page.tcl';
$(function () {
    $('#errorbox').hide();
    BindDashboard();
    var timer = setInterval(BindDashboard, 10000);
});

BindDashboard = function () {
    $.ajax({
        url: url,
        crossDomain: true,
        success: function (data) {
            innerD = $(data).find('#loginForm');
            var TotalBags = innerD.find('.circleCo2 .circleDesc label').text().replace(/[^0-9\.]/gi, '');
            $('#lblTotalBags').text(TotalBags);
        },
        error: function (xhr, status, error) {
            $('#lblTotalBags').text(xhr.responseText + ':' + status + ':' + error);
        }
    });/*
    $.get(url, function (data) {

        $('#errorbox').hide();
        innerD = $(data).find('#loginForm');
        //Production
        var TotalPro = innerD.find('.circleTotalProd .circleValue label').text().replace(/[^0-9\.]/gi, '');
        var TodayPro = innerD.find('.circleTotalProd .circleDesc label').text().replace(/[^0-9\.]/gi, '');
        //Co2 comsuption
        var TotalCO2 = innerD.find('.circleCo2 .circleValue label').text().replace(/[^0-9\.]/gi, '');
        var TotalBags = innerD.find('.circleCo2 .circleDesc label').text().replace(/[^0-9\.]/gi, '');
        //Power output
        var PowerOutput = innerD.find('.circlePwrOutput .circleValue label').text().replace(/[^0-9\.]/gi, '');

        $('#lblTotalPro').text(TotalPro)
        $('#lblTodayPro').text(TodayPro);
        $('#lblTotalCO2').text(TotalCO2)
        $('#lblTotalBags').text(TotalBags);
        $('#lblPowerOutput').text(PowerOutput);
    }).fail(function (erre) {
        alert(erre);
        $('#errorbox').show();
*/
}