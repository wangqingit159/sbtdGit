/**
    网站后台的初始化JS
 */

/**
 * 后台首页全局的初始化方法
 */

function init()
{
    initRCMenu();
}

/**
 * 初始化南部面板
 * 展现版权信息
 * @param panelId
 */
function initSouthPanel()
{
    /* 南部面板版权信息 */

}


/**
 * 初始化tab标签页的双击事件
 * 暂时还没有进行封装
 */
function initDBLCTab()
{

}

/**
 * 初始化tab标签页右键点击菜单
 * @param tabId 标签页id
 * @param menuId 菜单id
 *
 */
function initRCMenu()
{
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

/**
 * 开始加载
 * @param message 加载显示的消息
 */
function loadOn(message)
{
    if(message == undefined || message=="")
    {
        message="正在生成页面！";
    }

    $("<div class=\"datagrid-mask\"></div>").css({display:"block",width:"100%",height:$(window).height(),zIndex:9008}).appendTo("body");
    $("<div class=\"datagrid-mask-msg\"></div>").html(message).css({display:"block",left:($(document.body).outerWidth(true)-190)/2,top:($(window).height()-45)/2,zIndex:9009}).appendTo("body");
}

/**
 * 结束加载
 */
function loadOff()
{
    $(".datagrid-mask").remove()
    $(".datagrid-mask-msg").remove()
}

/**
 * 在页面中获取任何嵌套层次的窗口中获取顶层窗口
 * @return 当前页面的顶层窗口对象
 */
function getTopWindow()
{
    var top=window;
    while(top!= top.parent)
    {
        top= top.parent;
    }
    return top;
}
/**
 * 时间戳转换为yyyy-MM-dd
 * @param date 10位时间戳
 */
function formatDate(d){
    var date = new Date(d);
    var Y = date.getFullYear();
    var M = date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1;
    var D = date.getDate() < 10 ? '0'+date.getDate():date.getDate();

    return Y+"-"+M+"-"+D;
}

/**
 * 时间戳转换为yyyy-MM-dd HH:ss:mm
 * @param date 13位时间戳
 */
function formatDateTime(datetime){
    var date = new Date(datetime);
    var Y = date.getFullYear();
    var M = date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1;
    var D = date.getDate() < 10 ? '0'+date.getDate():date.getDate();
    var h = date.getHours()< 10 ? '0'+date.getHours():date.getHours();
    var m = date.getMinutes()< 10 ? '0'+date.getMinutes():date.getMinutes();
    var s = date.getSeconds()< 10 ? '0'+date.getSeconds():date.getSeconds();
    return Y+"-"+M+"-"+D+" "+h+":"+m+":"+s;
}