/* This Application is Designed and Developed by 
* Mirza Shareque shareque@outlook.com 
* Softmaque Consultant
* 01/06/2015
*/
$.support.cors = true;
$.ajaxSetup({
    crossOrigin: true
});
//var url = 'http://192.168.140.99/ajax/index.html';
var url = 'http://192.168.0.232/cgi-bin/login_page.tcl';

var clock;
$(function () {
    $('#errorbox').hide();
    startTime();
    BindDashboard();
    var dashboardpanel = setInterval(reload, 30000);
});
reload = function () {
    startTime();
    BindDashboard();
}
function startTime() {
    var date = new Date();
    var prettyDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    $('#lblDate').text(prettyDate);
    $('#lblClock').text(hours + ':' + minutes + ' ' + ampm);
}

BindDashboard = function () {
    try {
        $.ajax({
            crossDomain: true,
            crossOrigin: true,
            url: url,
            success: function (data) {
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
                $('#lblPowerOutput').text(PowerOutput);
                // $('#lblTotalBags').text('Type1:' + TotalBags);
            },
            error: function (xhr, status, error) {

                if (xhr.responseText == '') {
                    xhr.responseText = 'Time Out ';
                }
                $('#lblError').text('Error:' + xhr.responseText + ':' + status + ':' + error);
                $('#errorbox').show();
            }
        });
    } catch (e) {
        $('#lblError').text('Error:' + e.message);
        $('#errorbox').show();
    }
}
