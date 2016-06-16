//bank세션 '현금'으로 초기화
Session.set('bank', '현금');

changeMonth = function (month) {
    var mon;

    //문자로 된 월을 숫자로 변환
    switch (month) {
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
    //가계부 직접 입력 버튼을 눌렀을 때
    'click #add_account': function (event) {
        event.preventDefault();
        
        //날짜를 년월일로 나누는 작업
        var date = new Date().toDateString();
        var month = date.substring(4, 7);
        var day = date.substring(8, 10);
        var year = date.substring(11, date.length);

        // input type에 맞게 날짜 변경
        date = year + "-" + changeMonth(month) + "-" + day;
        
        // 날짜 대입
        $('#addon3a').val(date);
        
        // modal창 열기
        $('#input_modal').openModal();
    },
    
    //확인 버튼을 눌렀을 때
    'click #modal_ok': function (evt, tmpl) {
        evt.preventDefault();
        var date = tmpl.find('input[name=day]').value;

        var year = date.substring(0, 4);
        var month = date.substring(5, 7);
        var day = date.substring(8, 10);

        var bank = Session.get('bank');
        var money = tmpl.find('input[name=money]').value;
        var place = tmpl.find('input[name=place]').value;
        
        //입력을 하지 않았을 시 예외처리
        if (date == "")
            alert("날짜를 입력해주세요");

        else if (money == "")
            alert("금액을 입력해주세요.");

        else if (place == "")
            alert("장소를 입력해주세요.");
            
        //입력창들이 빈칸이 아니면 addAccountBook 매서드 호출    
        else if (date != "" && money != "" && place != "") {
            var stringToJson = {
                "money": Number(money), "month": month, "year": year, "time": "17:35", "bank": bank,
                "day": day, "place": place,"owner":Meteor.userId()
            };
            Meteor.call("addAccountBook", stringToJson);

            // 변수값 초기화
            tmpl.find('input[name=day]').value = "";
            tmpl.find('input[name=money]').value = "";
            tmpl.find('input[name=place]').value = "";
            
            //삽입작업이 다 끝난 뒤 모달 닫기
            $('#input_modal').closeModal();
        }
    },
    'change #select_bank': function (evt) {
        var bank = '';

        if(evt.target.value == 'cash'){
            bank = '현금';
        }
        else if (evt.target.value == 'nonghyup') {
            bank = '농협';
        }
        else if (evt.target.value == 'kookmin') {
            bank = '국민';
        }
        Session.set('bank', bank);

    }
});
