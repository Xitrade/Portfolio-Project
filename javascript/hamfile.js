$(function() {
	var openBtn = $('#btn'),
		slideMenu = $('#menu'), // ↑ '#btn'にオープン・クローズボタンID、'#menu'にメニュー要素IDを指定
		layer = $('<div />').addClass('layer');
	openBtn.on("click", function() {
		if (slideMenu.is(':hidden')) {
			layer.appendTo('body');
			slideMenu.slideDown(300); // ↑かっこ内の数字でアニメーションスピード設定（ミリ秒単位）
		} else {
			slideMenu.slideUp(300); // ↑かっこ内の数字でアニメーションスピード設定（ミリ秒単位）
			layer.remove();
		}
	});
});