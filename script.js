$(function () {
    $(window).on('load scroll', function () {
        $('.animation').each(function () {
            //ターゲットの位置を取得
            var target = $(this).offset().top;
            //スクロール量を取得
            var scroll = $(window).scrollTop();
            //ウィンドウの高さを取得
            var height = $(window).height();
            //ターゲットまでスクロールするとフェードインする
            if (scroll > target - height) {
                //クラスを付与
                $(this).addClass('active');
            }
        });
    });

    // 右と左かででくる
    $(window).on('load scroll', function () {
        $('.inview').each(function () {
            //ターゲットの位置を取得
            var target = $(this).offset().top;
            //スクロール量を取得
            var scroll = $(window).scrollTop();
            //ウィンドウの高さを取得
            var height = $(window).height();
            //ターゲットまでスクロールするとフェードインする
            if (scroll > target - height) {
                //クラスを付与
                $(this).addClass('is-show');
            }
        });
    });


    // hamburgerメニュー
    $("#hamburger-btn").on("click", function () {
        $(this).toggleClass("on"); //class,cを小文字にしがち
        $("ul").toggleClass("hide");
    })
});
