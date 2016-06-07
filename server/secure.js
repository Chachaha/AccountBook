Meteor.methods({
   addAccountBook:function (list) {
       ABooks.insert(list);
   },
    deleteAccountBook:function (id) {
        ABooks.remove(id);
    }
});