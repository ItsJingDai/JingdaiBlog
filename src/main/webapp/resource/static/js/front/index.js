
/* 分页 */
layui.use(['laypage', 'layer'], function(){
    var laypage = layui.laypage
        ,layer = layui.layer;

    laypage.render({
        elem: 'article-paging-box'
        ,count: 50 //数据总数
        ,theme: '#AAAAAA'
        ,prev:'<i class="fa fa-angle-left"></i>'
        ,next:'<i class="fa fa-angle-right"></i>'
    });
});

/* 点赞 */
$('.article-like').on ('click', function () {
    if(!$(this).hasClass('liked')) {
        $(this).addClass('liked');
        $(this).html('<i class=\"fa fa-thumbs-o-up\"></i>&nbsp;已赞');
        layer.msg('点赞成功！',{time:1000});
    } else {
        layer.msg('你TM点过了！',{time:1000});
    }
});

