Meteor.publish("all_abook", function () {
    return ABooks.find({
        owner:this.userId
    });
});