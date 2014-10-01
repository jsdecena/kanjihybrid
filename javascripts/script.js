jQuery(function(){
	var value = $("#original").html();
	var regex = /\s+/gi;
	var words = value.trim().replace(regex, ' ').split(' ');
	var wrapped ="";
	for (var i in words) {
		wrapped = wrapped + "<span style='display:inline-block'> "+words[i]+" </span>&nbsp;";
	}

	$("#converted").html(wrapped);
});