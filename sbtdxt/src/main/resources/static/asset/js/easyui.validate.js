/**
 * EasyUI自定义校验规则
 * 实例：在JS文件中
 *      如果id的class为easyui-validatebox，则调用
 *      $("#id").validatebox(
 *      {
 *          validType:"minLength[n]" // 单个调用
 *          validType:["number","minLenth[n]","maxLength[n]"] // 多个调用
 *      });
 *
 *      如果id的class为easyui-textbox，则调用
 *      $("#id").textbox(
 *      {
 *          validType:"minLength[n]" // 单个调用
 *          validType:["number","minLenth[n]","maxLength[n]"] // 多个调用
 *      });
 *
 *      对于easyui-combobox,datebox等一样
 */

$.extend($.fn.validatebox.defaults.rules,
    {
        /* 最少长度校验 */
        /* 调用时为
         minLength[n]
         n为整数
         */
        isNotzero: {
            validator: function (value) {
                return !/^0+$/.test(value);
                //return  /^[0-9].*$/.test(value);
            },
            message: "不能为0！"


        },

        minLength: {
            validator: function (value, params) {
                return value.length >= params[0];
            },
            message: "最少{0}个字"
        },

        /* 最大长度校验 */
        maxLength: {
            validator: function (value, params) {
                return value.length <= params[0];
            },
            message: "最多{0}个字符"
        },

        /* 长度校验 */
        length: {
            validator: function (value, params) {
                return value.length >= params[0] && value.length <= params[1];
            },
            message: "长度需要在{0}-{1}之间"
        },

        /* 长度校验 */
        exLength: {
            validator: function (value, params) {
                return value.length == params[0];
            },
            message: "请输入{0}个字符"
        },
        spdm:{
            validator:function(value){
                return /^[0-9]{8,12}$/i.test(value)
            },
            message:"请输入正确的商品代码"
        },
        glh: {
            validator: function (value, params) {
                var pc = params[0] + "";
                var bmdm = params[1] + "";
                if (bmdm == '') {
                    bmdm = '00';
                }
                if (pc == '') {
                    pc = '01';
                }
                if (pc.length == 1) {
                    pc = "0" + pc;
                }
                if (bmdm.length == 1) {
                    bmdm = "0" + bmdm;
                }


                var sbny = ssq;

                var g = sbny + pc + bmdm;
                if (value.substring(0, 10) == g) {
                    return true;
                } else {
                    return false;

                }
            },
            message: "申报年月（6位）+批次（2位）+部门（2位）+5流水号（5位）"
        },

        /* 数字校验 */
        number: {
            validator: function (value) {
//                return /^[0-9]+.?[0-9]*$/.test(value);
                return /^\d+(\.\d+)?$/.test(value);
            },
            message: "请输入数字"
        },

        integer: {
            validator: function (value) {
                return /^[0-9]\d*$/.test(value);
            },
            message: "请输入整数"
        },

        /* 汉字校验 */
        chinese: {
            validator: function (value) {
                return /^[\u0391-\uFFE5]+$/.test(value);
            },
            message: "请输入汉字"
        },

        /* 英文校验 */
        english: {
            validator: function (value) {
                return /^[A-aZ-z]+$/.test(value);
            },
            message: "请输入英文"
        },


        /* 邮箱校验 */
        email: {
            validator: function (value) {
                return /^[a-zA-Z0-9_.-]+\@([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9]+$/i.test($.trim(value));

            },
            message: '邮箱地址错误'
        },

        /* 手机号码校验 */
        mobile: {
            validator: function (value) {
                return /^1[0-9]{10}$/i.test($.trim(value));
            },
            message: '手机号码格式错误'
        },


        jknf: {
            validator: function (value) {
                var patt1 = new RegExp("^\\\d{4}$");
                if (!patt1.test(value)) {
                    $.fn.validatebox.defaults.rules.jknf.message = "年份为4位数字！";
                    return false;
                }
                return true;
            }
        },
        sbny:{
            validator: function (value) {
                var patt1 = new RegExp("^\\\d{6}$");
                if (!patt1.test(value)) {
                    $.fn.validatebox.defaults.rules.jknf.message = "申报年月(所属期)为6位数字！";
                    return false;
                }
                return true;
            }
        }   ,
        pc: {
            validator: function (value) {
                return /^[A-Z0-9]{2}$/i.test(value);
            },
            message: '只能输入2位数字或字母的组合'
        },
        hgcode: {
            validator: function (value) {
                return /^[a-zA-Z0-9]{10}$/i.test(value);
            },
            message: '只能输入10位数字或字母的组合'
        },
        nsrsbh: {
            validator: function (value) {
                return /^[a-zA-Z0-9]{15,20}$/i.test(value);
            },
            message: '只能输入15-20位数字或字母的组合'
        },
        tsjgdm: {
            validator: function (value) {
                return /^[0-9]{6}$/i.test(value);
            },
            message: '只能输入6位数字'
        },
        password: {
            validator: function (value) {
                return /^[a-zA-Z0-9]{8}$/i.test($.trim(value));
            },
            message: '只能输入8位数字或字母的组合'
        },
        string: {
            validator: function (value) {
                return /^[a-zA-Z0-9]+$/i.test($.trim(value));
            },
            message: '只能输入数字或字母的组合'
        },
        hgqydmLength:{
            validator:function(value){
                return value.length<=20;
            },
            message:"最长不能超过20位"
        },
        checkLength: {
            validator: function (value, params) {
                var len = 0;
                for (var i = 0; i < value.length; i++) {
                    if (value.charCodeAt(i) >= 0 && value.charCodeAt(i) <= 128) {
                        len += 1;
                    } else {
                        len += 2;
                    }
                }
                if (len > params[0]) {
                    params[1] = params[0] / 2;
                    return false;
                } else {
                    return true;
                }
            },
            message: "最多输入{0}个字符或{1}个汉字！"
        },

        bmdm:{   //部门代码
            validator:function(value){
                return /^[0-9]{2}$/i.test(value);
            },
            message:'请输入2位数字'
        },
        sbxh: {          //申报序号
            validator: function (value) {
                return /^[0-9]{6}$/i.test(value);
            },
            message: '请输入6位数字'
        },
        hxdh: {      //核销单号
            validator: function (value) {
                return /^[a-zA-Z0-9]{10}$/i.test(value);
            },
            message: '请输入10位数字或字母'
        },
        bgdh:           //报关单号
        {
            validator: function (value) {
                return /^[a-zA-Z0-9]{21}$/i.test(value) && value.charAt(18) == '0';
            },
            message: "[报关单号]:18位报关单号+0+2位项号"
        },
        dlzmh:
        {
            validator: function (value) {
                return /^[a-zA-Z0-9]{21}$/i.test(value) ;
            },
            message: "[代理证明号]:代理证明号一般为10位数字"
        },
        zssl://征税税率
        {
            validator: function (value) {
                return /^[0-9]{1,2}(\.[0-9]{1,2})?$/i.test(value);
            },
            message: '请输入有效的征税率'
        },
        tsl://退税率
        {
            validator: function (value) {
                return /^[0-9]{1,2}(\.[0-9]{1,2})?$/i.test(value);
            },
            message: '请输入有效的退税率'
        },
        number: {
            validator: function (value) {

                return /^[-]?[0-9]+([.][0-9]+){0,1}$/.test(value);
            },
            message: "请输入有效数字"
        },
        je: {
            validator: function (value) {
                var reg = /,/g;
                vv = value.replace(reg,'');
                return /^[0-9]+([.][0-9]+){0,4}$/.test(vv) && vv*1>0;
                // return /^[0-9]\d*(\.\d*[0-9]?)/.test(value);
            },
            message: "请输入有效数字"
        },
        sl:{
            validator: function (value) {
                var reg = /,/g;
                vv = value.replace(reg,'');
                return /^[0-9]+([.][0-9]+){0,4}$/.test(vv) && vv*1>0;
                // return /^[0-9]\d*(\.\d*[0-9]?)/.test(value);
            },
            message: "请输入有效数字"
        }   ,
        zsslValue: {
            validator: function (value) {
                return (value > 0 && value <= 17);
            },
            message: '[征税率]必须大于0，小于等于17'
        },
        zzsfph: {
            validator: function (value) {
                return /^[a-zA-Z0-9]{13,20}$/i.test(value);
            },
            message: '[进货凭证号]长度为13位至20位'
        },
        date: {
            validator: function (value) {
                var pattern = new RegExp("(^(([0-9]{3}[0-9]{1})[-\/\._](((0[13578]|1[02])[-\/\._](0[1-9]|[12][0-9]|3[01]))|((0[469]|11)[-\/\._](0[1-9]|[12][0-9]|30))|(02-(0[1-9]|1[0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26]))[-\/\._]02[-\/\._]29)|(((0[48]|[2468][048]|[13579][26])00)[-\/\._]02[-\/\._]29)$)");
                if (!pattern.test(value) || value.length < 9 || value.length > 10) {
                    return false;
                } else {
                    return true;
                }
            },
            message: '请输入正确的时间：时间格式例如：2000-09-09'
        },
        nianyue: {
            validator: function (value) {
                var pattern = new RegExp("([1-2][0-9]{3})(?:0[1-9]|1[0-2])");
                if (!pattern.test(value) ) {
                    return false;
                } else {
                    return true;
                }
            },
            message: "年月格式为4位年份+2位月份"
        },
        unique: {
            validator: function (value, params) {
                var v = params + "";
                if ((value == '' && v == '')) {
                    return false;
                } else if ((!(value == '') && !(v == ''))) {
                    return false;
                }
                else {
                    return true;
                }
            },
            message: "[报关单号]与[代理出口证明号]必须填入其中一项，且只能填一项。"
        },
        dayul: {
            validator: function (value) {
                return value.replace(/,/g,'') * 1 > 0;
            },
            message: "数值必须大于0"
        },
        /*
        字典管理字段校验
         */
        zdglLength: {
            validator: function (value, params) {
                return value.length <= params[0];
            },
            message: "最多{0}个字"
        },
        ckrqjy: {
    validator: function (value) {
        var sbny1 = ssq;
        var sbny2 = parseInt(value.substr(0,4))+1+""+value.substr(5,2);
        if((parseInt(sbny1)-parseInt(sbny2))>0){
            return false;
        }else{
            return true;
        }
    },
    message: '申报日期>出口日期+1年'
},

    });