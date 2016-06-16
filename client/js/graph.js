/**
 * Created by ss on 2016-06-17.
 */

var barValue = [];
var pieValue = [{name : '전월', y : 50}, {name : '당월', y : 50}];

barGraph = function(){
    var findSelector;

    for(var cnt=1;cnt<=6;cnt++){
        var temp = [];
        var money = 0;
        findSelector = '0'+cnt.toString();

        ABooks.find({month : findSelector}).forEach(function(docs){
            money+=docs.money;
            // console.log(docs.money);
        });

        temp = ['0'+cnt.toString()+"월", money];
        barValue.push(temp);
    }
}

pieGraph = function(){
    var findSelector;
    var date = new Date().toDateString();
    var month = date.substring(4, 7);
    var pay =  0;
    var temp = 0;

    console.log("changemonth : " + changeMonth(month));

    if(ABooks.find({month : changeMonth(month)}).count()!=0){
        ABooks.find({month : changeMonth(month)}).forEach(function(docs){
            pay+=docs.money;
            console.log(pay);
        });
    }
    console.log("첫번쨰 페이 : " + pay);
    temp = pay;
    pay = 0;

    var beforeMonth;

    if(month == "Jan")
        beforeMonth = changeMonth("Dec");
    else{
        var a = Number(changeMonth(month).substring(1, 2));
        a--;
        beforeMonth = '0'+a.toString();
    }

    console.log("beforMonth : " + '0'+a.toString());

    if(ABooks.find({month : beforeMonth}).count()!=0){
        ABooks.find({month : beforeMonth}).forEach(function(docs){
            pay+=docs.money;
            console.log(pay);
        });
    }else{
        console.log("no pay");
    }

    console.log("두번째 페이 : " + pay);

    pieValue[0].y = pay / (pay+temp) * 100;
    pieValue[1].y = temp / (pay+temp) * 100;
    console.log(pay/(pay+temp)*100 + "/" + pieValue[1].y);
}

Template.fixed_top.events({
    'click .graph' : function(event){
        barValue = [];

        barGraph();
        pieGraph();

        console.log(new Date());
    }
});

Template.graph.topGenresChart = function(){
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: "월간 지출내역"
        },
        tooltip: {
            pointFormat: '<b>{point.y}원</b>'
        },
        xAxis : {
            categories : ['1월','2월','3월','4월','5월','6월']
        },
        yAxis : {
            labels : {
                format : '{value}'
            },
            title : {
                text : "원"
            }
        },
        series: [{
            type: 'column',
            name : '월',
            data: barValue,
            dataLabels : {
                enabled : true,
                color : '#fff',
                format : '{point.y}',
                y : 10
            }
        }]
    };
};

Template.graph.pieChart = function(){
    console.log(pieValue[0].y + "/" + pieValue[1].y);

    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: '전월비교 원형차트'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }

                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: pieValue
        }]
    };
};