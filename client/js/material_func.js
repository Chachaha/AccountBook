//셀렉트 태그가 랜더링 안되는 오류 수정하는 코드 
Template.changeMonth.onRendered(function () {
    $('select').material_select();
});

//네비게이션 메뉴 버튼(화면이 작아졌을 때)을 눌렀을 때 사이드 네비게이션 열기
Template.fixed_top.events({
   'click .button-collapse':function () {
       $(".button-collapse").sideNav();
   }
});