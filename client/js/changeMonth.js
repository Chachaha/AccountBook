Session.set('month', 'all');

var list = [];

parser = function(sms){
    // json -> string 변환 후 배열화.
    list = JSON.parse(JSON.stringify(sms));

    alert(ABooks.find({}).count());
    alert(list);
    for(var i=0;i<list.length;i++)
        Meteor.call('addAccountBook', list[i]);

    alert(ABooks.find({}).count());
} // android -> mongo

Template.table.helpers({
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
            return month + "월의 사용금액은 " + tm + "원 입니다.";
        }
        else
            return;
    },
    month_list: function () {
        if(list.count!=0){

        }
        // var abookList = ABooks.find({}, {sort: {month: 1}});
        var month = String(Session.get('month'));
        if (month == 'all'){
            // console.log(abookList);
            return ABooks.find({}, {sort: {month: 1}});
        }


        return ABooks.find({month: month}, {sort: {month: 1, day: 1}});
        // return abookList.find({month:this.month});
    },
    isEmp: function () {
        var month = String(Session.get('month'));

        if (month == 'all') {
            if (ABooks.find({}).count() == 0) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            if (ABooks.find({month: month}).count() == 0) {
                return false;
            }
            else {
                return true;
            }
        }
    }
});

Template.changeMonth.events({
    'change #month_selector': function (evt) {
        evt.preventDefault();

        // console.log(evt.target);
        Session.set('month', evt.target.value);
    }
});