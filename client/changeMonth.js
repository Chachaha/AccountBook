/**
 * Created by ubseubse on 2016. 6. 2..
 */
Session.set('abc', '01');

Template.changeMonth.helpers({
    month_total_money:function () {
        var tm=0;

        var a = String(Session.get('abc'));
        console.log(a);
        var arr = ABooks.find({month:a}).fetch();
        var arrM=[];
        for(var i in arr){
            arrM[i]=Number(arr[i].money);
        }
        for(var i in arr){
            tm+=arrM[i];
        }

        return tm;
    }
});

Template.changeMonth.events({
    'change #month_selector' :function (evt) {
        evt.preventDefault();
        console.log(evt.target);
        //console.log(evt.target.value);
        Session.set('abc', evt.target.value);
    }
});