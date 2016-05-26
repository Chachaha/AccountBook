Meteor.startup(function () {
    if (ABooks.find().count() == 0) {

        ABooks.insert({bank: "농협", year: '2016', month: '05', day: '25', money: -10000, place: "CU"});
        ABooks.insert({bank: "농협", year: '2016', month: '05', day: '20', money: -10000, place: "세븐일레븐"});
        ABooks.insert({bank: "농협", year: '2016', month: '05', day: '15', money: -9000, place: "한솥"});
        ABooks.insert({bank: "농협", year: '2016', month: '05', day: '10', money: -8000, place: "황금룡"});

    }
});