Session.set('bank', '농협');

changeMonth = function(month){
    var mon;

    switch (month){
        case 'Jan':
            mon = "01";
            break;
        case "Feb":
            mon = "02";
            break;
        case 'Mar':
            mon = "03";
            break;
        case 'Apr':
            mon = "04";
            break;
        case 'May':
            mon = "05";
            break;
        case 'Jun':
            mon = "06";
            break;
        case 'Jul':
            mon = "07";
            break;
        case 'Aug':
            mon = "08";
            break;
        case 'Sep':
            mon = "09";
            break;
        case 'Oct':
            mon = "10";
            break;
        case 'Nov':
            mon = "11";
            break;
        case 'Dec':
            mon = "12";
            break;
    }

    console.log("mon : " + mon);
    return mon;
} // english month -> number month

Template.input_modal.events({
    'click a' : function(event){
        event.preventDefault();

        // $('.modal-trigger').leanModal();

        var date = new Date().toDateString();
        var month = date.substring(4, 7);
        var day = date.substring(8, 10);
        var year = date.substring(11, date.length);

        date = year + "-" + changeMonth(month) + "-" + day;
        // input type에 맞게 날짜 변경
        
        $('#addon3a').val(date);
        // 날짜 대입

        $('#input_modal').openModal();
        // modal창 열기
    },
    'click #modal_ok': function (evt, tmpl) {
        evt.preventDefault();
        var date = tmpl.find('input[name=day]').value;

        var year = date.substring(0, 4);
        var month = date.substring(5, 7);
        var day = date.substring(8, 10);

        var bank = Session.get('bank');
        var money = tmpl.find('input[name=money]').value;
        var place = tmpl.find('input[name=place]').value;

        if(date == "")
            alert("날짜를 입력해주세요");

        else if(money == "")
            alert("금액을 입력해주세요.");

        else if(place =="")
            alert("장소를 입력해주세요.")

        else if(date!="" && money !="" && place!=""){
            Meteor.call("addAccountBook", bank, year, month, day, money, place);

            tmpl.find('input[name=day]').value = "";
            tmpl.find('input[name=money]').value = "";
            tmpl.find('input[name=place]').value = "";
            // 변수값 초기화

            $('#input_modal').closeModal();
        }
    },
    'change #select_bank': function (evt) {
        var bank = '';
        if (evt.target.value == 'nonghyup') {
            bank = '농협';
        }
        else if (evt.target.value == 'kookmin') {
            bank = '국민';
        }
        Session.set('bank', bank);

    }
});