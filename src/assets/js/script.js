// ハンバーガーメニュー実装

jQuery("#js-drawer__btn").click(function () {//ボタンがクリックされたら
	jQuery(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    jQuery("#js-drawer__nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    jQuery(".p-drawer__circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

jQuery("#js-drawer__nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    jQuery("#js-drawer__btn").removeClass('active');//ボタンの activeクラスを除去し
    jQuery("#js-drawer__nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    jQuery(".p-drawer__circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});

jQuery("#js-drawer__list").click(function () {//ナビゲーションのリンクがクリックされたら
    jQuery("#js-drawer__btn").removeClass('active');//ボタンの activeクラスを除去し
    jQuery("#js-drawer__nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    jQuery(".p-drawer__circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});