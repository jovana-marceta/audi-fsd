$(".cell").on("click", "input:checkbox", function() {
	var $this = $(this);
	var $total = $("#price");
	var $target = $("label[for='" + $this.attr("id") + "']");

	var item_value = +($target.html().replace("€", "") || 0);
	var cur_total = +($total.html().replace("€", "") || 0);

	if ($this.prop("checked") === true) {
		cur_total += item_value;
	} else {
		cur_total -= item_value;
	}

	$total.html( cur_total + "€");
});

