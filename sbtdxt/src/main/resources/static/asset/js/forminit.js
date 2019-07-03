/**
 * 初始化表单，所有字段均为不可用状态
 * @param form
 */

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function initDisabled(formId) {
    $("#" + formId + " .easyui-textbox").textbox({disabled: true});
    $("#" + formId + " .easyui-combobox").combobox({disabled: true});
    $("#" + formId + " .easyui-datebox").datebox({disabled: true});
    $("#" + formId + " .easyui-numberbox").numberbox({disabled: true});
    $("#" + formId + " .easyui-combogrid").combogrid({disabled: true});

}

function enabledForm(formId) {
    $("#" + formId + " .easyui-textbox").textbox({disabled: false});
    $("#" + formId + " .easyui-combobox").combobox({disabled: false});
    $("#" + formId + " .easyui-datebox").datebox({disabled: false});
    $("#" + formId + " .easyui-numberbox").numberbox({disabled: false});
    $("#" + formId + " .easyui-combogrid").combogrid({disabled: false});
    $("#" + formId + " .easyui-textbox").next('span').find("input[readonly=readonly]").css("background-color", "rgb(248, 248, 248)");
    $("#" + formId + " .easyui-numberbox").next('span').find("input[readonly=readonly]").css("background-color", "rgb(248, 248, 248)");
    $("#" + formId + " .easyui-combobox").next('span').find("input[readonly=readonly]").css("background-color", "rgb(248, 248, 248)");

    var tablename = formId.substring(0, formId.length - 10);
    //initFormEnter("form:visible");
    initFormEnter(tablename);
    initFormFocus("form:visible");
}

/**
 * 实现  按enter键使光标在input框间的移动
 * @param form
 */
function initFormEnter(tablename) {
    var input = $("#" + tablename + "_Msg_table" + " .textbox-text ,.combobox");
    var length = input.length - 1;
    input.eq(0).focus();//定位到第一个input ，input index的取值为0-length
    input.keydown(function (event) {
        var key = event.keyCode;
        if (key == 13) {
            event.preventDefault();
            var index = input.index(this);
            if (length % 2 == 0 && length == index || length % 2 == 1 && length == index + 1) {
                index = -1;
                while (input.eq(index + 2).is("[disabled]")) {
                    index = index + 2;
                }
                input.eq(index + 2).focus();//定位到右侧第一个input
                // input.eq(1).focus();
                $("#show" + tablename)[0].scrollTop = 0;//右侧滚动条回到顶部
            } else if (length % 2 == 0 && length == index + 1) {
                $("#" + tablename + "_save").click();//全部输入后保存
            } else if (length % 2 == 1 && length == index) {
                $("#" + tablename + "_save").click();//全部输入后保存
            } else {
                while (input.eq(index + 2).is("[disabled]")) {
                    index = index + 2;
                }
                input.eq(index + 2).focus();
            }
            //
            var name = $(this).next()[0].name;
            var element = $(this).closest('.content').find('input[name=' + name + ']');
            if (element[0] != undefined) {
                var h = element[0].offsetTop;

                if (h > 100) {
                    $("#" + tablename + "_Msg_table")[0].scrollTop = h - 100;
                } else {
                    $("#" + tablename + "_Msg_table")[0].scrollTop = 0;
                }
            }
        }
    });
}
/**
 * 初始化表单的获取焦点事件
 * 当form中的EasyUI控件获取焦点时，实现一些方法
 */
function initFormFocus(form) {
    var input = $(form + " .textbox-text:visible");
    var node;
    var id;
    var name;
    input.focus(function () {
        node = $(this).parent("span").prev();
        id = node.attr("id");
        name = node.attr("textboxname");
        if (node.hasClass("easyui-textbox")) {
            $(form + " input[textboxname='" + name + "']").textbox("textbox");
        }
        else if (node.hasClass("easyui-combobox")) {
            $(form + " select[textboxname='" + name + "']").combobox("showPanel");
        }
        else if (node.hasClass("easyui-datebox")) {
            $(form + " input[textboxname='" + name + "']").datebox("showPanel");
        }
        else if (node.hasClass("easyui-datetimebox")) {
            $(form + " input[textboxname='" + name + "']").datetimebox("showPanel");
        }
        else if (node.hasClass("easyui-numberbox")) {
            $(form + " input[textboxname='" + name + "']").numberbox("textbox");
        }
        else if (node.hasClass("easyui-combogrid")) {
            $(form + " input[textboxname='" + name + "']").combogrid("textbox");
        }
        $(this).select();
    });
}
function ajaxLoadStart() {
    $("<div class=\"datagrid-mask\"></div>").css({
        display: "block",
        width: "100%",
        height: $(window).height()
    }).appendTo("body");
    $("<div class=\"datagrid-mask-msg\"></div>").html("正在处理，请稍候。。。").appendTo("body").css({
        display: "block",
        left: ($(document.body).outerWidth(true) - 190) / 2,
        top: ($(window).height() - 45) / 2
    });
}
function ajaxLoadEnd() {
    $(".datagrid-mask").remove();
    $(".datagrid-mask-msg").remove();
}

function showHelper(tablename) {
    $("#" + tablename + "_Msg_table .easyui-textbox,.easyui-numberbox,.easyui-combobox,.easyui-datebox").next().find('input[type=text]').focus(function (e) {
        var name = $(this).next()[0].name;
        var element = $(this).closest('.content').find('div[name=' + name + ']');
        $(element).css('color', 'red');
        if (element[0] != undefined) {
            var h = element[0].offsetTop;
            if (h > 80) {
                $("#" + tablename + "_helper")[0].scrollTop = h - 80;
            } else {
                $("#" + tablename + "_helper")[0].scrollTop = 0;
            }
        }


    });
    $("#" + tablename + "_Msg_table .easyui-textbox,.easyui-numberbox,.easyui-combobox,.easyui-datebox").next().find('input[type=text]').blur(function (e) {
        var name = $(this).next()[0].name;
        var element = $(this).closest('.content').find('div[name=' + name + ']');
        $(element).css('color', '');
        if (element[0] != undefined) {
            var h = element[0].offsetTop;
            if (h > 80) {
                $("#" + tablename + "_helper")[0].scrollTop = h - 80;
            } else {
                $("#" + tablename + "_helper")[0].scrollTop = 0;
            }
        }


    });


}
function loadJlDiv(table) {
    if ($("#" + table + "").closest(".content").find(".jl").length == 0)
        $("<div class='jl'></div>").appendTo($("#" + table + "").closest(".content").find(".layout-panel-west"));
}
function showJlDiv(table) {
    $("#" + table + "").closest(".content").find(".jl").show();
}
function hideJlDiv(table) {
    $("#" + table + "").closest(".content").find(".jl").hide();
}

function initTabUnClose(id) {
    var dq = $('#' + id).parents(".easyui-fluid")[2]
    var index = $(dq).closest('.tabs-panels').children().index(dq);
    $("ul[class='tabs'] li:eq(" + index + ") a:eq(1)").removeClass('tabs-close');
    $("ul[class='tabs'] li:eq(" + index + ") a:eq(1)").addClass('tabs-close-mine');
    $("ul[class='tabs'] li:eq(" + index + ") a:eq(1)").attr('onclick', 'closeTab_mine()');
}
function initTabClose(id) {
    var dq = $('#' + id).parents(".easyui-fluid")[2]
    var index = $(dq).closest('.tabs-panels').children().index(dq);
    $("ul[class='tabs'] li:eq(" + index + ") a:eq(1)").removeClass('tabs-close-mine');
    $("ul[class='tabs'] li:eq(" + index + ") a:eq(1)").addClass('tabs-close');
    $("ul[class='tabs'] li:eq(" + index + ") a:eq(1)").attr('onclick', '');
}
function closeTab_mine() {
    _ts('警告', '该页面处于被编辑状态，无法关闭！')
}


function checkMdtSb(table) {
    $.ajax({
        type: "post",
        url: "/config/checkMdtSb",
        dataType: "json",
        async: false,
        data: {
            sbny: ssq
        },
        success: function (data) {
            if (data == true) {
                $("#" + table + "_add").linkbutton({disabled: true});
            }
        }
    })
}

function checkIsSb(table) {
    var pc = $("#" + table + "_search_form input[textboxname=query_pc]").textbox("getText");
    $.post("/config/checkYsb?sbny=" + ssq + "&pc=" + pc, function (data) {
        if (data.flag == 0) {
            $("#" + table + "_add").linkbutton({disabled: false});
        } else if (data.flag == 1) {
            $("#" + table + "_add").linkbutton({disabled: true});
        }
    })

}
function jsPage(table, type, data) {
    var currentPage = $("#" + table + "_table").datagrid('getPager');
    var selectRow = $("#" + table + "_table").datagrid('getSelected');
    var options = currentPage.data("pagination").options;
    var index;
    if (selectRow != null) {
        index = $("#" + table + "_table").datagrid("getRowIndex", selectRow);
        var pagenew = 0;
        if (type == "add") {
            var total = options.total;
            var pageold = Math.ceil(total / options.pageSize);
            var addindex = total % options.pageSize;
            if (addindex == 0) {
                pagenew = pageold + 1;
            } else {
                pagenew = pageold;
            }
            // if(pagenew!=pageold){
            //     $("#" + table + "_table").datagrid({
            //         pageNumber: pagenew,
            //     });
            // }else{
            //     $("#" + table + "_table").datagrid("insertRow", {
            //         index: addindex,
            //         row: data
            //     });
            //     $("#" + table + "_table").datagrid("selectRow", addindex);
            // }
            $("#" + table + "_table").datagrid({
                pageNumber: pagenew
            });
            setTimeout(function () {
                $("#" + table + "_table").datagrid("selectRow", addindex);
            }, 300);

        } else if (type == "update") {
            var page = options.pageNumber;
            $("#" + table + "_table").datagrid("updateRow", {
                index: index,
                row: data
            });
            $("#" + table + "_table").datagrid("selectRow", index);
            $("#" + table + "_table").datagrid("checkRow",index);
        } else if (type == "delete") {
            var total = options.total;
            var pageold = options.pageNumber;
            var indexdel = total % options.pageSize;
            if (indexdel == 1) {
                pageold = pageold - 1;
            }
            if (pageold == 0) {
                $("#" + table + "_table").datagrid("reload");
            } else {
                $("#" + table + "_table").datagrid({
                    pageNumber: pageold
                });
            }
        } else if (type == "cancel") {
            if (index == -1) {
                $("#" + table + "_table").datagrid("reload");
            } else {
                $("#" + table + "_table").datagrid("selectRow", index);
            }
        }
    } else {
        $("#" + table + "_table").datagrid("load");
    }

}





