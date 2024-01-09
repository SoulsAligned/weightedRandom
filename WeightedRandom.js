var submitbut = $("#button");

function weightedRandom(e) {
	e.preventDefault();
	var weightList = $("#weights").val();
	var labelList = $("#labels").val();
	var weights = [];
	var labels = [];
	var current = "";
	var $output = $("#result");
	var output = "";
	var total = 0;
	for (var i = 0; i < weightList.length; i++) {
		if (weightList[i] == ",") {
			weights.push(current);
			current = "";
		}
		else {
			current += weightList[i];
		}
	}
	weights.push(current);
	current = "";
	for (var i = 0; i < labelList.length; i++) {
		if (labelList[i] == ",") {
			labels.push(current);
			current = "";
		}
		else {
			current += labelList[i];
		}
	}
	labels.push(current);
	for (var i = 0; i < weights.length; i++) {
		total += parseInt(weights[i]);
	}
	var roll = Math.floor((Math.random() * total + 1));
	for (var i = 0; i < weights.length; i++) {
		if (roll <= parseInt(weights[i])) {
			output += labels[i];
			break;
		}
		else {
			roll -= parseInt(weights[i]);
		}
	}
	$output.html(output);
}

submitbut.on("click", weightedRandom);