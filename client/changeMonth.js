Session.set('month', '01');

Template.changeMonth.helpers({
    month_total_money:function () {
        var tm=0;
        var month = String(Session.get('month'));
        console.log(month+"월 선택");
        var arr = ABooks.find({month:month}).fetch();
        var arrM=[];
        for(var i in arr){
            arrM[i]=Number(arr[i].money);
            tm+=arrM[i];
        }
        return tm;
    }
});

Template.changeMonth.events({
    'change #month_selector' :function (evt) {
        evt.preventDefault();
        console.log(evt.target);
        Session.set('month', evt.target.value);
    }
});