
<link rel="stylesheet" href="../../plugins/Fonts/Fonts/font.css">

<?
	$fonts = array();

	$font = file_get_contents('../../plugins/Fonts/Fonts/font.css');
	$ex = explode("font-family: '", $font);
	foreach ($ex as $key => $value) {
		$ex1 = explode("';", $value);
		if(isset($ex1[1]) AND $ex1[1]){
			$fonts[] = $ex1[0];
		}
	}

	foreach ($fonts as $key => $value) {
		echo '<div style="padding:10px; font-size:14px; font-family:'.$value.'; border-bottom:1px solid #ccc">';
			echo '<div>'.$value.'</div>';
			echo '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>';
		echo '</div>';
	}

?>