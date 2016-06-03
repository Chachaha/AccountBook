/**
 * Created by C on 2016-05-25.
 */
Template.accountList.helpers({
   list:function () {
       return ABooks.find({}, {sort: {month:1, day:1}});
   }
});