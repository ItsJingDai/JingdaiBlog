
/* message 分页 */
layui.use(['laypage', 'layer'], function(){
    var laypage = layui.laypage
        ,layer = layui.layer;

    laypage.render({
        elem: 'blog-paging-box'
        ,count: 50 //数据总数
        ,theme: '#AAAAAA'
        ,prev:'<i class="fa fa-angle-left"></i>'
        ,next:'<i class="fa fa-angle-right"></i>'
    });
});