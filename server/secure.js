Meteor.methods({
   addAccountBook:function (bank, year, month, day, money, place) {
       ABooks.insert({
           bank: bank,
           year: year,
           month: month,
           day: day,
           money: money,
           place: place
       });
   },

    deleteAccountBook:function (id) {
        ABooks.remove(id);
    }



});