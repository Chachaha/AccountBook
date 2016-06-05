Meteor.publish("abooks", function (sort) {
    return ABooks.find();
});