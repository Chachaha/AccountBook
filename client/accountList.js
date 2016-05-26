/**
 * Created by C on 2016-05-25.
 */
Template.accountList.helpers({
   list:function () {
       return ABooks.find({}, {sort: {day: 1} });
   },
    month_total_money:function () {
        var tm=0;
        var arr = ABooks.find({month:'05'}).fetch();
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