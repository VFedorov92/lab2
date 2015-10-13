$(document).ready(function() {
	// init yandex maps
	ymaps.ready(init);
	var myMap, myPlacemark;

	function init(){     
	    myMap = new ymaps.Map("map", {
	        center: [62.031288, 129.72925],
	        zoom: 16
	    });

	    myPlacemark = new ymaps.Placemark([62.031288, 129.72925], { content: 'Армянский скверик!', balloonContent: 'Столица России' });

	    myMap.geoObjects.add(myPlacemark);
	}

	// send comment

	// по нажатию на кнопку
	$('.comments-send').on('click', function() {
		// считать текст
		var text = $('.comments-textarea').val().trim();

		// проверяем заполненность
		if (text) {
			// обернуть текст в blockquote
			var comment = '<blockquote class="comment">' + text + '</blockquote>';

			// добавить blockquote в ленту комментариев
			$(".comments-list").prepend(comment);

			// очистить textarea
			$(".comments-textarea").val('');


		} else {
			console.log('комментарий пустой');
		}
	});
});