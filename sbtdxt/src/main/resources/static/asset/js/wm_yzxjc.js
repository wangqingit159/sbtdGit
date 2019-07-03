/**
 * Created by Administrator on 2016/12/2.用于加载外贸一致性检查的js方法
 */
var isexist=false;
function getCountWmcksum(){
    $("#jc_jlts").empty();
    $("#jc_zt").empty();

    var pc;
    pc =$("#jcyzx_pc").combobox('getValue');
    $.post('/table/wm_yzxjc/getWmcksum?sbny='+ssq+"&pc="+pc,function(data){
        $("#jc_jlts").prepend(data.sumWmck);
    })
}
function getCountZfcksum(){
    $("#zf_jc_jlts").empty();
    $("#zf_jc_zt").empty();

    var pc;
    pc =$("#zf_jcyzx_pc").combobox('getValue');
    $.post('/table/wm_yzxjc/getZfcksum?sbny='+ssq+"&pc="+pc,function(data){
        $("#zf_jc_jlts").prepend(data.sumWmck);
    })
}


function changepcInYzx(){
    $("#wmckyzx").hide();
    getCountWmcksum();
}

function changepcInYzx_1(){
    $("#zf_wmckyzx").hide();
    getCountZfcksum();
}

function exportYzxyd(){
    if(isexist == true){
        var pc =$("#jcyzx_pc").combobox('getValue');
         var height = screen.availHeight + "px";
        var width = screen.availWidth + "px";
        window.open("/table/wm_yzxjc/export?sbny=" + ssq+"&pc="+pc, "_self", "top=0,left=0,height=" + height - 100 + ",width=" + width - 100 + ",titlebar=yes,toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes,location=yes,status=no", "");
    }

}

function ShWmyzx(){
    $("#wmckyzx").show();
    var pc;
    pc =$("#jcyzx_pc").combobox('getValue');
    var wm_tssb_yzxjc_datagrid = $("#wm_tssb_yzxjc_table").datagrid({
        url:'/table/wm_yzxjc/getWmyzxjcxx?sbny='+ssq+'&pc='+pc,
        method:'POST',
        columns: [
            [
                {field: "tablename", title: "表名称", width: 100, align: "center"},
                {field: "sbny", title: "申报年月", width: 100, align: "center"},
                {field: "pc", title: "批次", width: 80, align: "center"},
                {field: "glh", title: "关联号", width: 100, align: "center"},
                {field: "sbxh", title: "申报序号", width: 80, align: "center"},
                {field: "ydms", title: "疑点描述", width: 350, align: "center"},
                {field: "yddm", title: "疑点代码", width: 100, align: "center"}
            ]
        ],
        onLoadSuccess: function (data) {

            if (data.rows.length > 0) {
                isexist=true;
            }
            $("#jc_zt").text("审核结束");

        }
    })

}

function zf_ShWmyzx (){
    $("#zf_wmckyzx").show();
    var pc;
    pc =$("#zf_jcyzx_pc").combobox('getValue');
    $("#zf_tssb_yzxjc_table").datagrid({
        url:'/table/wm_yzxjc/getZfyzxjcxx?sbny='+ssq+'&pc='+pc,
        method:'POST',
        columns: [
            [
                {field: "tablename", title: "表名称", width: 100, align: "center"},
                {field: "sbny", title: "申报年月", width: 100, align: "center"},
                {field: "pc", title: "批次", width: 80, align: "center"},
                {field: "glh", title: "关联号", width: 100, align: "center"},
                {field: "sbxh", title: "申报序号", width: 80, align: "center"},
                {field: "ydms", title: "疑点描述", width: 350, align: "center"},
                {field: "yddm", title: "疑点代码", width: 100, align: "center"}
            ]
        ],
        onLoadSuccess: function (data) {

            if (data.rows.length > 0) {
                isexist=true;
            }
            $("#zf_jc_zt").text("审核结束");

        }
    })

}



