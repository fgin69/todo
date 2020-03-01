window.onload = function () {
	var todolist = JSON.parse(localStorage.getItem('todo')) || [];
	out();

	$('#add').on('click', function () {
		var a = $('#head').val();
		var b = $('#main').val();
		var c = $('#comment').val();
		const item = {
			check: false,
			title: a,
			value: b,
			comment: c,
		};

		todolist.push(item);

		out();
		localStorage.setItem('todo', JSON.stringify(todolist));

	})

	function out() {
		var out = '';
		let id = 0;
		$('.list').empty()
		for (var item of todolist) {
			const element = $(".card.template").clone();
			element.removeClass("template");
			element.find(".comment span").html(item.comment)
			element.find(".title span").html(item.title)
			element.find(".content span").html(item.value)
			element.data("id", id++)
			element.find(".delete").on('click', function () {
				var currentId = $(this).parent().data("id")
				var store = JSON.parse(localStorage.getItem('todo'));
				store.splice(currentId, 1) //cut из массива
				localStorage.setItem('todo', JSON.stringify(store));
				$(this).parent().remove()
			})
			$('.list').append(element)
		}
	}

}

