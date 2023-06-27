
	// Boxxs Acoes
	function booxs_mudar_status(e){
		$('.carregando').show();
		$.ajax({
			type: "POST",
			url: DIR+"/admin/app/Ajax/Boxxs/mudar_status.php",
			data: 'id='+$(e).attr('dir')+'&table='+$(e).parent().attr('table')+'&boxxs='+$(e).parent().attr('boxxs'),
			dataType: "json",
			success: function(json){
				if(json.id){
					alerts(1);
				}
				$('.carregando').hide();
			}
		});
	};