Meteor.startup(function () {
    if(ABooks.find().count()==0){
        
        ABooks.insert({day:25, bank:"농협", money:-10000, place:"CU"});
        ABooks.insert({day:20, bank:"농협", money:-10000, place:"세븐일레븐"});
        ABooks.insert({day:15, bank:"농협", money:-9000, place:"한솥"});
        ABooks.insert({day:10, bank:"농협", money:-8000, place:"황금룡"});
        
    }
});