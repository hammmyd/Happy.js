var happy = {
	USPhone: function (input) {
		return /^\(?(\d{3})\)?[\- ]?\d{3}[\- ]?\d{4}$/.test(input);
	},

	// matches mm/dd/yyyy (requires leading 0's (which may be a bit silly, what do you think?)
	date: function (input) {
		return /^(?:0[1-9]|1[0-2])\/(?:0[1-9]|[12][0-9]|3[01])\/(?:\d{4})/.test(input);
	},

	email: function (input) {
		return /^(?:\w+\.?\+?)*\w+@(?:\w+\.)+\w+$/.test(input);
	},

	username: function (input, length) {
		length = length.split('-');
		return /^(?=.{4})(?!.{21})[\w.-]*[a-z][\w-.]*$/i.test(input) && input.length >= length[0] && input.length <= length[1];
	},

	isPersian: function (input) {
		return /[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]/.test(input);
	},

	digits: function (input) {
		return /^\d+$/.test(input);
	},

	digitsMinLength: function (input, length) {
		return input.length >= length && /^\d+$/.test(length);
	},

	digitsMaxLength: function (input, length) {
		return input.length <= length && /^\d+$/.test(length);
	},

	digitsMinMaxLength: function (input, length) {
		length = length.split('-');
		return input.length >= length[0] && input.length <= length[1] && /^\d+$/.test(input);
	},

	digitsMinVal: function (input, value) {
		return input >= value && /^\d+$/.test(input);
	},

	digitsMaxVal: function (input, value) {
		return input <= value && /^\d+$/.test(input);
	},

	digitsMinMaxVal: function (input, values) {
		values = values.split('-');
		return input >= values[0] && input <= values[1] && /^\d+$/.test(input);
	},

	minLength: function (input, length) {
		return input.length >= length;
	},

	maxLength: function (input, length) {
		return input.length <= length;
	},

	minMaxLength: function (input, length) {
		length = length.split('-');
		return input.length >= length[0] && input.length <= length[1];
	},

	equal: function (input1, input2) {
		return (input1 == input2);
	}
};
