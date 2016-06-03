Session.set('month', 'all');

Template.changeMonth.helpers({
    month: function () {
        return Session.get('month');
    },
    month_total_money: function () {
        var month = String(Session.get('month'));
        if (month != 'all') {
            var tm = 0;
            console.log(month + "월 선택");
            var arr = ABooks.find({month: month}).fetch();
            var arrM = [];
            for (var i in arr) {
                arrM[i] = Number(arr[i].money);
                tm += arrM[i];
            }
            return month+"월의 사용금액은 "+tm+"원 입니다.";
        }
        else
            return "전체보기";
    },
    month_list: function () {
        var month = String(Session.get('month'));
        if (month == 'all')
            return ABooks.find({}, {sort: {month: 1, day: 1}});

        return ABooks.find({month: month}, {sort: {month: 1, day: 1}});
    },
    isEmp: function () {
        var month = String(Session.get('month'));

        if(month=='all'){
            if (ABooks.find({}).count() == 0) {
                console.log("false");
                return false;
            }
            else{
                console.log("true");
                return true;
            }
        }
        else{
            if (ABooks.find({month: month}).count() == 0) {
                console.log("false");
                return false;
            }
            else{
                console.log("true");
                return true;
            }
        }
    }
});

Template.changeMonth.events({
    'change #month_selector': function (evt) {
        evt.preventDefault();
        console.log(evt.target);
        Session.set('month', evt.target.value);
    }
});