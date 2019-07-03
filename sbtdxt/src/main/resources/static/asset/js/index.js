/**
 * Created by ad on 2016-09-26.
 */
var scTaxStatus=0;//纳税识别号下拉框状态 0-关闭 1-展开
var scSsqStatus=0;//当期所属期下拉框状态 0-关闭 1-展开 

$(function(){
    initYears();
    qycodeSlide();
    batchSlide();
    qycodeShow();
    batchShow();
    navTab();
//    closePop();
    taxSlide();
    timSlide();
    dateSet();
//    initRightClick();

});

function initYears(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()-1;
    if(month == -1){
        year = year -1;
        month = 11;
    }
    $("<li>"+(parseInt(year)-4)+"</li>").appendTo($("#selectyears"));
    $("<li>"+(parseInt(year)-3)+"</li>").appendTo($("#selectyears"));
    $("<li>"+(parseInt(year)-2)+"</li>").appendTo($("#selectyears"));
    $("<li>"+(parseInt(year)-1)+"</li>").appendTo($("#selectyears"));
    $("<li>"+year+"</li>").appendTo($("#selectyears"));
    $("<li>"+(parseInt(year)+1)+"</li>").appendTo($("#selectyears"));
    $("<li>"+(parseInt(year)+2)+"</li>").appendTo($("#selectyears"));
    $("<li>"+(parseInt(year)+3)+"</li>").appendTo($("#selectyears"));


    $("#selectmonths li:eq("+month+")").addClass("bgactive");
    if(month > 6){
        $('.monthlisf ul').stop(!1).animate({left:-144*1});
    }

    $("#selectyears li:eq(4)").addClass("bgactive");
    $('.yearlisf ul').stop(!1).animate({left:-152*1});
}

//首页头部选项卡
function navTab(){
    $(".tab-nav ul li").click(function(){
        $(this).addClass("active").siblings(".active").removeClass("active");
    });
}
//海关企业代码下拉列表
function qycodeSlide(){
    $(".select-btn").click(function(){
        $(this).siblings("div.select-content").slideToggle();
    });
    $('.select-content li').click(function (){
        var currVal = $(this).text();
        $('.setipt').text(currVal);
        $(this).parents('.qycode').find('.select-content').hide();
    })
}
// 批次下拉列表
function batchSlide(){
    $(".select-btn1").click(function(){
        $(this).siblings("div.select-batnum").slideToggle();
    });
    $('.select-batnum li').click(function (){
        var currVal = $(this).text();
        $('.batnum').text(currVal);
        $(this).parents('.batch').find('.select-batnum').hide();
    })
}
//纳税识别号点击下拉 taxbtn
function taxSlide(){
    $(".taxbtn").click(function(){
        $("a").focus(function () {
            this.blur()
        });
        $(this).siblings("div.qyinfo").slideToggle();
        if (scTaxStatus == 0) {
            $("#sbTaxBtn").attr({src: "/page/asset/images/dl-2.png"});
            scTaxStatus = 1;
            if(scSsqStatus==1){
                $("#scSsqBtn").attr({src: "/page/asset/images/dl-1.png"});
                scSsqStatus = 0;
                $(".timbtn").siblings("div.timelis").slideToggle();
            }
        } else {
            $("#sbTaxBtn").attr({src: "/page/asset/images/dl-1.png"});
            scTaxStatus = 0;
        }
    });
}

//当前所属期
function timSlide(){
    $("a").focus(function () {
        this.blur()
    });
    $(".timbtn").click(function(){
        $(this).siblings("div.timelis").slideToggle();
        if (scSsqStatus == 0) {
            $("#scSsqBtn").attr({src: "/page/asset/images/dl-2.png"});
            scSsqStatus = 1;
            if(scTaxStatus==1){
                $("#sbTaxBtn").attr({src: "/page/asset/images/dl-1.png"});
                scTaxStatus = 0;
                $(".taxbtn").siblings("div.qyinfo").slideToggle();
            }
        } else {
            $("#scSsqBtn").attr({src: "/page/asset/images/dl-1.png"});
            scSsqStatus = 0;
        }
    });
}
function qycodeShow() {
    $(document).click(function(e){
        var obj=e.target||e.srcElement;
        if($(obj).closest('.select-btn').length==0&&$(obj).closest('.select-content').length==0){
            $('.select-content').hide();
        }
    })
}

function batchShow() {
    $(document).click(function(e){
        var obj=e.target||e.srcElement;
        if($(obj).closest('.select-btn1').length==0&&$(obj).closest('.select-batnum').length==0){
            $('.select-batnum').hide();
        }
    })
}

//点击按钮关闭弹窗
function closePop(){
    $(".closepop").click(function(){
        $(this).parents('.popup').hide();
        $(".lj").hide();
    })
}
//时间选择
function dateSet(){
    //年份点击
    var numYear=0;
    $(".righbt").click(function(){
        // var getNum=Math.floor($('.yearlisf ul').width()/152);
        var getNum=1;
        numYear++;
        if(numYear>=getNum){
            numYear=getNum;
        }
        $('.yearlisf ul').stop(!1).animate({left:-152*numYear});
    });
    $(".lefbtn").click(function(){
        numYear--;
        if(numYear<=0){
            numYear=0;
        }
        $('.yearlisf ul').stop(!1).animate({left:-152*numYear});
    });

    //月份
    var numMonth=0;
    $('.righbt1').click(function (){
        numMonth++;
        if(numMonth>=1){
            numMonth=1;
        }
        $('.monthlisf ul').stop(!1).animate({left:-144*numMonth});
    });
    $('.lefbtn1').click(function (){
        numMonth--;
        if(numMonth<=0){
            numMonth=0;
        }
        $('.monthlisf ul').stop(!1).animate({left:-144*numMonth});
    });



    $('.yearlisf li').click(function (){
        if($("#tabs .tabs li").length > 1){
            _ts("警告","请先关闭所有菜单再选择！");
            return
        }
        var currVal = $(this).text();
        $('.selyear').text(currVal);
        $('.year').text(currVal);
        $(this).addClass('bgactive').siblings('.bgactive').removeClass('bgactive');
        ssq = $("#dqyear").text() +  ssq.substr(4,2);
        $(".tabs-close").click();
    })

    $('.monthlisf li').click(function (){
        if($("#tabs .tabs li").length > 1){
            _ts("警告","请先关闭所有菜单再选择！");
            return
        }
        var currVal = $(this).text();
        $('.selmonth').text(currVal);
        $('.month').text(currVal);
        $(this).addClass('bgactive').siblings('.bgactive').removeClass('bgactive');
        var arr = ssq.split(" ");
        ssq =  ssq.substr(0,4) + $("#dqmonth").text();
        $(".timbtn").siblings("div.timelis").slideToggle();
        $("#scSsqBtn").attr({src: "/page/asset/images/dl-1.png"})
        scSsqStatus = 0;
        $(".tabs-close").click();
    })
}

//点击按钮关闭提示弹窗
function closePopTs(obj){
    $(obj).parents('.popup').hide();
    $(".lj").hide();
    $(".popheader .ts").html("") ;
    $(".poptit h1").html("")
    $("#_ts div:nth-child(2) h1").html("")
}

//点击按钮关闭操作弹窗
function closePopCz(obj){
    $("#wm_tssb_ysb_drfk_tsnr").empty();

    $("#tipMsg").empty();
    $("#jc_jlts").empty();

    // $(obj).parent().siblings('form').form('reset');
    $($(obj).parent().siblings('form').find('select')).textbox('setValue','');
    $($(obj).parent().siblings('form').find('select')).combobox({
        data:data,
        valueField:'id',
        textField:'text'
    })
    $(obj).parents('.popup').hide();
    $(".lj").hide();
}
//菜单右击事件
function initRightClick(){
    var tabs=$("#tabs");
    var rc_menu=$("#rc_menu");

    /* 初始化菜单的显示事件 */
    tabs.tabs(
        {
            onContextMenu:function(e,title,index)
            {
                e.preventDefault();
                if(0!=index) // 第一个的tab页，是锁定的，不提供右键菜单
                {
                    $("#rc_menu").menu("show",
                        {
                            left: e.pageX,
                            top: e.pageY
                        }).data("tabIndex",index);
                }
                tabs.tabs("select",index); // 鼠标右键点击时，选中该tab页
            }
        });

    /* 初始化菜单的点击事件 */
    rc_menu.menu(
        {
            onClick:function(item)
            {
                var tabIndex=$(this).data("tabIndex");

                var tab_all=tabs.tabs("tabs");

                var type=item.name; // 判断是refresh、close、close_all、close_other、close_left、close_right
                if("refresh"==type)
                {
                    var tab=tabs.tabs("getTab",tabIndex);
                    tab.panel("refresh");
                }
                else if("close"==type)
                {
                    if(0!=tabIndex)
                    {
                        tabs.tabs("close",tabIndex);
                    }
                }
                else if("close_all"==type)
                {
                    for(var i=tab_all.length-1;i>=1;i--) // 第一个tab页是锁定的，不能关闭
                    {
                        tabs.tabs("close",i);
                    }
                }
                else if("close_other"==type)
                {
                    for(var i=tab_all.length-1;i>=1;i--) // 第一个tab页是锁定的，不能关闭
                    {
                        if(i==tabIndex)
                        {
                            continue;
                        }
                        tabs.tabs("close",i);
                    }
                    tabs.tabs("select",1);
                }
                else if("close_left"==type)
                {
                    for(var i=1;i<tabIndex;i++) // 第一个tab页是锁定的，不能关闭
                    {
                        tabs.tabs("close",1);
                    }
                    tabs.tabs("select",1);
                }
                else if("close_right"==type)
                {
                    for(var i=tab_all.length-1;i>tabIndex;i--) // 第一个tab页是锁定的，不能关闭
                    {
                        tabs.tabs("close",i);
                    }
                    tabs.tabs("select",tabIndex);
                }
            }
        });
}
 getRealLen = function(str){
     if(str == null)
        return 0;
     if(typeof str != 'string')
         return 0;
     return str.replace(/[^\x00-\xff]/g,'00').length;
 }
//使下拉框选择后重获焦点
function getFocus() {
    $(this).combobox().next('span').find('input').focus() ;
}





