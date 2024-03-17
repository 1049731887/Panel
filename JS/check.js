function checkHTTPStatusCanteenQianduan(url) {
    var xhr1 = new XMLHttpRequest();
    xhr1.onreadystatechange = function () {
        if (xhr1.readyState === XMLHttpRequest.DONE) {
            if (xhr1.status === 200) {
                let canteenStatus = "食堂网站正常";
                $(".status.JZHW_Canteen").html(canteenStatus);
            }
        }
    };
    xhr1.open('GET', url, true);
    xhr1.send();
}
function checkHTTPStatusCanteenHouduan(url) {
    var xhr1 = new XMLHttpRequest();
    xhr1.onreadystatechange = function () {
        if (xhr1.readyState === XMLHttpRequest.DONE) {
            if (xhr1.status === 404) {
                let canteenStatus = "  食堂网站后端正常";
                $(".status.JZHW_Canteen").append(canteenStatus);
            }
        }
    };
    xhr1.open('GET', url, true);
    xhr1.send();
}
$(document).ready(function () {
    var url = 'https://dajgzd-aktdio-5500.preview.myide.io';
    checkHTTPStatusCanteenQianduan(url);
    url = 'https://dajgzd-aktdio-3033.preview.myide.io'
    checkHTTPStatusCanteenHouduan(url);
});

