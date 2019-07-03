$(function (){
    $('body').on('click','.lislast',function (){
        $(this).parents('.c_menus.mn2').hide();
    })
    $('.nav ul li').hover(function (){
        $(this).find('.c_menus.mn2').show();
    },function (){
        $(this).find('.c_menus.mn2').hide();
    });

    // useDa();
})


//数据采集
var datas_sjcj = {
    'menulist':[
        {
            'txt':'退税数据采集',
            'zindex':2,
            'menulist':[
                {
                    'txt':'退税1-1',
                    'zindex':3,
                    'menulist':[
                        {
                            'txt':'退税1-1-1',
                            'zindex':4,
                            'menulist':[
                                {
                                    'txt':'退税1-1-1-1',
                                    'zindex':5,
                                    'menulist':''
                                }
                            ]
                        }
                    ]
                },
                {
                    'txt':'退税1-2',
                    'zindex':3,
                    'menulist':[
                        {
                            'txt':'退税1-2-1',
                            'zindex':4,
                            'menulist':''
                        }
                    ]
                },
                {
                    'txt':'退税1-3',
                    'zindex':3,
                    'menulist':[
                        {
                            'txt':'退税1-3-1',
                            'zindex':4,
                            'menulist':''
                        }
                    ]
                }
            ]
        },
        {
            'txt':'单证证明采集',
            'zindex':2,
            'menulist':[
                {
                    'txt':'单证1-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
        {
            'txt':'外部数据采集',
            'zindex':2,
            'menulist':[
                {
                    'txt':'外部1-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
        {
            'txt':'企业经营情况',
            'zindex':2,
            'menulist':[
                {
                    'txt':'企业1-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
        {
            'txt':'内部数据传递',
            'zindex':2,
            'menulist':[
                {
                    'txt':'内部数据1-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
        {
            'txt':'特殊业务类型电子信息申报表录入',
            'zindex':2,
            'menulist':[
                {
                    'txt':'特殊业务类1-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        }
    ]
};

//数据处理
var datas_sjcl = {
    'menulist':[
        {
            'txt':'数据处理',
            'zindex':2,
            'menulist':[
                {
                    'txt':'数据处理1-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
        {
            'txt':'数据处理2',
            'zindex':2,
            'menulist':[
                {
                    'txt':'数据处理2-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
        {
            'txt':'数据处理3',
            'zindex':2,
            'menulist':[
                {
                    'txt':'数据处理3-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
    ]
};

//数据反馈
var datas_sjfk = {
    'menulist':[
        {
            'txt':'数据反馈',
            'zindex':2,
            'menulist':[
                {
                    'txt':'数据反馈1-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
        {
            'txt':'数据反馈2',
            'zindex':2,
            'menulist':[
                {
                    'txt':'数据反馈2-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
        {
            'txt':'数据处理3',
            'zindex':2,
            'menulist':[
                {
                    'txt':'数据处理3-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
    ]
};

//查询
var datas_cx = {
    'menulist':[
        {
            'txt':'查询',
            'zindex':2,
            'menulist':[
                {
                    'txt':'查询1-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
        {
            'txt':'查询2',
            'zindex':2,
            'menulist':[
                {
                    'txt':'查询2-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
        {
            'txt':'查询3',
            'zindex':2,
            'menulist':[
                {
                    'txt':'查询3-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
    ]
};

//维护
var datas_wh = {
    'menulist':[
        {
            'txt':'维护',
            'zindex':2,
            'menulist':[
                {
                    'txt':'维护1-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
        {
            'txt':'维护2',
            'zindex':2,
            'menulist':[
                {
                    'txt':'维护2-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
        {
            'txt':'维护3',
            'zindex':2,
            'menulist':[
                {
                    'txt':'维护3-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
    ]
};

//工具
var datas_tools = {
    'menulist':[
        {
            'txt':'工具',
            'zindex':2,
            'menulist':[
                {
                    'txt':'工具1-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
        {
            'txt':'工具2',
            'zindex':2,
            'menulist':[
                {
                    'txt':'工具2-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
        {
            'txt':'工具3',
            'zindex':2,
            'menulist':[
                {
                    'txt':'工具3-1',
                    'zindex':3,
                    'menulist':''
                }
            ]
        },
    ]
};

//帮助
var datas_help = {
    'menulist':[
        {
            'txt':'帮助',
            'zindex':2,
            'menulist':''
        }
    ]
};

function useDa(){
    var sUl = $("<ul></ul>");
    $(".c_menus_sjcj").append(sUl);
    setData(datas_sjcj.menulist,sUl);

    var sUl2 = $("<ul></ul>");
    $(".c_menus_sjcl").append(sUl2);
    setData(datas_sjcl.menulist,sUl2);

    var sUl3 = $("<ul></ul>");
    $(".c_menus_sjfk").append(sUl3);
    setData(datas_sjfk.menulist,sUl3);

    var sUl4 = $("<ul></ul>");
    $(".c_menus_cx").append(sUl4);
    setData(datas_cx.menulist,sUl4);

    var sUl5 = $("<ul></ul>");
    $(".c_menus_wh").append(sUl5);
    setData(datas_wh.menulist,sUl5);

    var sUl6 = $("<ul></ul>");
    $(".c_menus_tools").append(sUl6);
    setData(datas_tools.menulist,sUl6);

    var sUl7 = $("<ul></ul>");
    $(".c_menus_help").append(sUl7);
    setData(datas_help.menulist,sUl7);



}

function setData(data,parent){
    for(var menu in data){
        if(data[menu].menulist.length > 0){
            var liCurr = '<li class="c_menusn1li lis'+data[menu].zindex+'">'+
                '<div class="c_menusn1litxt tuishuibg">'+data[menu].txt+'</div>'+
                '<div class="c_menusn1libtn"></div>' +
                '</li>';
            var liEle = $(liCurr);
            var divIner = '<div class="c_menus mn'+(data[menu].zindex+1)+'">' +
                '<ul></ul>' +
                '</div>';
            $(liEle).append(divIner).appendTo(parent);
            setData(data[menu].menulist,$(liEle).find('.c_menus ul').eq(0));
        }else{
            var liCurrLast = '<li class="c_menusn1li lislast">'+
                '<div class="c_menusn1litxt tuishuibg">'+data[menu].txt+'</div>'+
                '<div class="c_menusn1libtn"></div>' +
                '</li>';
            $(liCurrLast).append(data[menu].txt).appendTo(parent);
        }
    }
}








