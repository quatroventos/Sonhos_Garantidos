
	function select2_val(ev){
		if(!ev){
			var $val = "";
		} else {
			var $val = JSON.stringify(ev.params, function (key, value) {
				return value.data.id;
			});
		}
		return $val.replaceAll('"', '');
	}
	function select2_select($e, ev){
		//$val = select2_val(ev);
	}
