<?

	for($x=0; $x<=100; $x++){




		// WIDTH
			for ($i=0; $i < 10; $i++) {
				if($x.$i<=1000){
					$css[10][] = '.w'.$x.$i.'{width:'.$x.$i.'px !important}';
				}
			}
			if($x<=100){
				$css[13][] = '.w'.$x.'p{width:'.$x.'% !important}';
			}
		// WIDTH



		// HEIGHT
			for ($i=0; $i < 10; $i++) {
				if($x.$i<=500){
					$css[20][] = '.h'.$x.$i.'{height:'.$x.$i.'px !important}';
				}
			}
			if($x<=50){
				$css[23][] = '.lh'.$x.'{line-height:'.$x.'px !important; }';
			}
		// HEIGHT



		// PADDING
			$css[30][] = '.p'.$x.'{padding:'.$x.'px !important; }';
			if($x<10){
				$css[31][] = '.pt'.$x.'{padding-top:'.$x.'px !important; }';
				$css[32][] = '.pb'.$x.'{padding-bottom:'.$x.'px !important; }';
				$css[33][] = '.pl'.$x.'{padding-left:'.$x.'px !important; }';
				$css[34][] = '.pr'.$x.'{padding-right:'.$x.'px !important; }';
			}
			for ($i=0; $i < 10; $i++) {
				if($x.$i<=100){
					$css[31][] = '.pt'.$x.$i.'{padding-top:'.$x.$i.'px !important; }';
					$css[32][] = '.pb'.$x.$i.'{padding-bottom:'.$x.$i.'px !important; }';
					$css[33][] = '.pl'.$x.$i.'{padding-left:'.$x.$i.'px !important; }';
					$css[34][] = '.pr'.$x.$i.'{padding-right:'.$x.$i.'px !important; }';
				}
			}
		// PADDING




		// MARGIN
			$css[40][] = '.m'.$x.'{margin:'.$x.'px !important; }';

			$css[41][] = '.mt-'.$x.'{margin-top:-'.$x.'px !important; }';
			$css[42][] = '.mb-'.$x.'{margin-bottom:-'.$x.'px !important; }';
			$css[43][] = '.ml-'.$x.'{margin-left:-'.$x.'px !important; }';
			$css[44][] = '.mr-'.$x.'{margin-right:-'.$x.'px !important; }';

			if($x<10){
				$css[45][] = '.mt'.$x.'{margin-top:'.$x.'px !important; }';
				$css[46][] = '.mb'.$x.'{margin-bottom:'.$x.'px !important; }';
				$css[47][] = '.ml'.$x.'{margin-left:'.$x.'px !important; }';
				$css[48][] = '.mr'.$x.'{margin-right:'.$x.'px !important; }';
			}
			for ($i=0; $i < 10; $i++) {
				if($x.$i<=100){
					$css[45][] = '.mt'.$x.$i.'{margin-top:'.$x.$i.'px !important; }';
					$css[46][] = '.mb'.$x.$i.'{margin-bottom:'.$x.$i.'px !important; }';
					$css[47][] = '.ml'.$x.$i.'{margin-left:'.$x.$i.'px !important; }';
					$css[48][] = '.mr'.$x.$i.'{margin-right:'.$x.$i.'px !important; }';
				}
			}
		// MARGIN


		// TOP BOTTOM LEFT RIGHT
			if($x<=100){
				$css[54][] = '.t'.$x.'p{top:'.$x.'% !important}';
				$css[55][] = '.b'.$x.'p{bottom:'.$x.'% !important}';
				$css[56][] = '.l'.$x.'p{left:'.$x.'% !important}';
				$css[57][] = '.r'.$x.'p{right:'.$x.'% !important}';
			}
		// TOP BOTTOM LEFT RIGHT

	}

$espaco = '
';


	foreach ($css as $key => $value){
		if($value){
			foreach ($value as $k => $v){
				//	echo $key>=610 ? $espaco : '';
				echo $v;
			}
		}
		echo $espaco.$espaco.$espaco;
	}


?>