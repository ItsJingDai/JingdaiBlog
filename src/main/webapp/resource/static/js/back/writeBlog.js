$('.left-content').on('keyup', function () {
    var text = $("#left-content-textarea").val();

    var converter = new showdown.Converter();
    converter.setOption('disableForced4SpacesIndentedSublists','true');
    var html = converter.makeHtml(text);
    $('#right-content-preview').html(html);
});

$('#text-button').on('click', function(){
    if ($('#left-content-box').hasClass('layui-col-md6')) { // 在左边
        // 左边加宽
        $('#left-content-box').removeClass('layui-col-md6');
        $('#left-content-box').addClass('layui-col-md12');
        $('#left-content-box').css({'width':'94%','margin-left':'5%'});
        // 右边隐藏
        $('#right-content-box').hide();
        // 按钮变形
        $('#text-button').html('<i class="layui-icon"></i>');
    } else {  // 在右边
        // 左边变回
        $('#left-content-box').removeClass('layui-col-md12');
        $('#left-content-box').addClass('layui-col-md6');
        $('#left-content-box').css({'width':'50%','margin-left':'0'});
        // 右边显示
        $('#right-content-box').removeClass('layui-col-md12');
        $('#right-content-box').addClass('layui-col-md6');
        $('#right-content-box').css({'width':'50%','margin-left':'0'});
        $('#right-content-box').show();
        // 按钮变形
        $('#text-button').html('<i class="layui-icon"></i>');
    }
});

$('#preview-button').on('click', function(){
    if ($('#right-content-box').hasClass('layui-col-md6')) { // 在右边
        // 右边加宽
        $('#right-content-box').removeClass('layui-col-md6');
        $('#right-content-box').addClass('layui-col-md12');
        $('#right-content-box').css({'width':'94%','margin-left':'5%'});
        // 右边隐藏
        $('#left-content-box').hide();
        // 按钮变形
        $('#preview-button').html('<i class="layui-icon"></i>');
    } else {  // 在左边
        // 右边变回
        $('#right-content-box').removeClass('layui-col-md12');
        $('#right-content-box').addClass('layui-col-md6');
        $('#right-content-box').css({'width':'50%','margin-left':'0'});
        // 左边显示
        $('#left-content-box').removeClass('layui-col-md12');
        $('#left-content-box').addClass('layui-col-md6');
        $('#left-content-box').css({'width':'50%','margin-left':'0'});
        $('#left-content-box').show();
        // 按钮变形
        $('#preview-button').html('<i class="layui-icon"></i>');
    }
});

$('.exchange-button').on('click',function () {
    if ($(this).prev().attr('id') === 'text-button') {
        $('#right-content-box').removeClass('layui-col-md6');
        $('#right-content-box').addClass('layui-col-md12');
        $('#right-content-box').css({'width':'94%','margin-left':'5%'});
        $('#right-content-box').show();
        $('#left-content-box').hide();
    } else {
        $('#left-content-box').removeClass('layui-col-md6');
        $('#left-content-box').addClass('layui-col-md12');
        $('#left-content-box').css({'width':'94%','margin-left':'5%'});
        $('#left-content-box').show();
        $('#right-content-box').hide();
    }
});


// 调放大缩小bug
$(window).on('resize',function () {

    var leftContentBox = $('#left-content-box');
    var leftContentBoxLen =  // 把宽度变成数值
        parseInt(leftContentBox.css('width').substr(0,
            leftContentBox.css('width').length-2));

    var rightContentBox = $('#right-content-box');
    var rightContentBoxLen =  // 把宽度变成数值
        parseInt(rightContentBox.css('width').substr(0,
            rightContentBox.css('width').length-2));
    console.log(rightContentBox.css('display'));
    console.log(leftContentBox.css('display'));

    if ($(window).width() >= 960) {
        if (leftContentBox.css('display') === 'none') { // 左边不显示
            if (rightContentBoxLen <= 650) {            // 并且右边只有一半
                leftContentBox.show();
            }
        }
        if (rightContentBox.css('display') === 'none') { // 右边不显示
            if (leftContentBoxLen <= 650) {            // 并且左边只有一半
                rightContentBox.show();
            }
        }
    } else {                                          // 小屏
        if (leftContentBox.css('display') === 'block'
            && rightContentBox.css('display') === 'block') {
            rightContentBox.hide();
        }
        if (leftContentBox.css('display') === 'none'
            && rightContentBox.css('display') === 'none') {
            rightContentBox.removeClass('layui-col-md6');
            rightContentBox.addClass('layui-col-md12');
            rightContentBox.css({'width':'94%','margin-left':'5%'});
            rightContentBox.show();
        }
        if (leftContentBoxLen < 380){                // 并且只有一半，放大
            leftContentBox.removeClass('layui-col-md6');
            leftContentBox.addClass('layui-col-md12');
            leftContentBox.css({'width':'94%','margin-left':'5%'});
        }
        if (rightContentBoxLen < 380){             // 并且只有一半，放大
            rightContentBox.removeClass('layui-col-md6');
            rightContentBox.addClass('layui-col-md12');
            rightContentBox.css({'width':'94%','margin-left':'5%'});
        }
    }
});

