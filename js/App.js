/* This Application is Designed and Developed by 
 * Mirza Shareque shareque@outlook.com 
 * Softmaque Consultant
 * 20/05/2015
 */

var url = 'http://192.168.140.99/ajax/index.html';
//var url = 'http://192.168.0.232/cgi-bin/login_page.tcl';

$(function () {
    //$('#errorbox').hide();
    // BindDashboard();
    //var timer = setInterval(BindDashboard, 10000);
    url = $('#txtUrl').val();
});

$.support.cors = true;
$.ajaxSetup({
    crossOrigin: true
});
BindDashboard = function (type) {
    if (type == 1) {
        try {
            $.ajax({
                crossDomain: true,
                crossOrigin: true,
                url: url,
                success: function (data) {
                    innerD = $(data).find('#loginForm');
                    var TotalBags = innerD.find('.circleCo2 .circleDesc label').text().replace(/[^0-9\.]/gi, '');
                    $('#lblTotalBags').text('Type1:' + TotalBags);
                },
                error: function (xhr, status, error) {
                    if (xhr.responseText == '') {
                        xhr.responseText = 'No-Access-Allowed';
                    }
                    $('#lblTotalBags').text('Error1:' + xhr.responseText + ':' + status + ':' + error);
                }
            });
        } catch (e) {
            $('#lblTotalBags').text('Error:' + e.message);
        }
    }

    if (type == 2) {
        try {
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
                $('#lblTotalBags').text('Type1:' + TotalBags);
                $('#lblPowerOutput').text(PowerOutput);
            }).fail(function (erre) {
                $('#lblTotalBags').text('Error2:' + erre.responseText);
            });
        } catch (e) {
            $('#lblTotalBags').text('Error2:' + e.message);
        }
    }
}
