/**
 * Created by C on 2016-06-08.
 */
$(document).ready(function () {
    $(".button-collapse").sideNav();
});

Template.changeMonth.onRendered(function () {
    $('select').material_select();
});