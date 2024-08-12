var indexValue = 1
showImg(indexValue)
function btm_slide(e) {
	showImg((indexValue = e))
}
function side_slide(e) {
	showImg((indexValue += e))
}
function showImg(e) {
	var i
	const img = document.querySelectorAll('img')
	const slider = document.querySelectorAll('.btm-slides span')
	if (e > img.length) {
		indexValue = 1
	}
	if (e < 1) {
		indexValue = img.length
	}
	for (i = 0; i < img.length; i++) {
		img[i].style.display = 'none'
	}
	$(function () {
		var interval = setInterval(function () {
			$('.pokazatel-snimka.right').click()
		}, 5000) //задержка в миллисекундах
		$('.btm-slides span, .pokazatel-snimka.left').click(function () {
			clearInterval(interval) //остановка
		})
	})
}
