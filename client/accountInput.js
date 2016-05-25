Template.accountInput.events({
    'click .add': function (evt, tmpl) {
        var date = tmpl.find('input[name=day]').value;
        var year = date.substring(0, 4);
        var month = date.substring(5, 7);
        var day = date.substring(8, 10);
        ABooks.insert({
            bank: tmpl.find('input[name=bank]').value,
            day: day,
            money: tmpl.find('input[name=money]').value,
            place: tmpl.find('input[name=place]').value
        });
    }
});