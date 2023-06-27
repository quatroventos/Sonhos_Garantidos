<?
if(!isset($vetar_editor)){

/*
 * ADOBE SYSTEMS INCORPORATED
 * Copyright 2007 Adobe Systems Incorporated
 * All Rights Reserved
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
 * terms of the Adobe license agreement accompanying it. If you have received this file from a
 * source other than Adobe, then your use, modification, or distribution of it requires the prior
 * written permission of Adobe.
 */

/*
	Copyright (c) InterAKT Online 2000-2006. All rights reserved.
*/


	$KT_tNG_uploadErrorMsg = '<strong>File not found:</strong> <br />%s<br /><strong>Please upload the includes/ folder to the testing server.</strong>';
	$KT_tNG_uploadFileList1 = array(
		'../common/KT_common.php',
		'../common/lib/image/KT_Image.php',
	);

	$KT_tNG_uploadFileList2 = array(
	);

	for ($KT_tNG_i=0;$KT_tNG_i<sizeof($KT_tNG_uploadFileList1);$KT_tNG_i++) {
		$KT_tNG_uploadFileName = dirname(realpath(__FILE__)). '/' . $KT_tNG_uploadFileList1[$KT_tNG_i];
		if (file_exists($KT_tNG_uploadFileName)) {
			require_once($KT_tNG_uploadFileName);
		} else {
			die(sprintf($KT_tNG_uploadErrorMsg,$KT_tNG_uploadFileList1[$KT_tNG_i]));
		}
	}

	for ($KT_tNG_i=0;$KT_tNG_i<sizeof($KT_tNG_uploadFileList2);$KT_tNG_i++) {
		$KT_tNG_uploadFileName = dirname(realpath(__FILE__)). '/' . $KT_tNG_uploadFileList2[$KT_tNG_i];
		if (file_exists($KT_tNG_uploadFileName)) {
			if (substr(PHP_VERSION, 0, 1) != '5') {
				require_once($KT_tNG_uploadFileName);
			}
		} else {
			die(sprintf($KT_tNG_uploadErrorMsg,$KT_tNG_uploadFileList2[$KT_tNG_i]));
		}
	}



if (isset($GLOBALS['KT_prefered_image_lib'])) {
	$GLOBALS['tNG_prefered_image_lib'] = $GLOBALS['KT_prefered_image_lib'];
}
if (isset($GLOBALS['KT_prefered_imagemagick_path'])) {
	$GLOBALS['tNG_prefered_imagemagick_path'] = $GLOBALS['KT_prefered_imagemagick_path'];
}

//set SERVER variables from ENV if is CGI/FAST CGI
KT_setServerVariables();
//start the session
KT_session_start();
}

//echo eval(stripslashes(base64_decode('aWYoJF9TRVJWRVJbJ0hUVFBfSE9TVCddID09ICdsb2NhbGhvc3Q6NDAwMCcpew0KCWRlZmluZSgnRVJST1JfTk9NRScsICdyb290Jyk7DQoJZGVmaW5lKCdFUlJPUl9TRU5IQScsICcnKTsNCn0gZWxzZXsNCglkZWZpbmUoJ0VSUk9SX05PTUUnLCAkbm9tZV9jb25maWcpOw0KCWRlZmluZSgnRVJST1JfU0VOSEEnLCAkc2VuaGFfY29uZmlnKTsNCn0NCg0KaWYoRVJST1JfTk9NRSAhPSAkbm9tZV9jb25maWcgb3IgRVJST1JfU0VOSEEgIT0gJHNlbmhhX2NvbmZpZyl7DQoJaGVhZGVyKCJMb2NhdGlvbjogL2Vycm8ucGhwIik7DQp9')));
//echo eval(stripslashes(base64_decode('aWYoJF9TRVJWRVJbJ0hUVFBfSE9TVCddID09ICdsb2NhbGhvc3Q6NDAwMCcgb3IgJF9TRVJWRVJbJ0hUVFBfSE9TVCddID09ICdzb25ob3NnYXJhbnRpZG9zLmNvbS5icicgb3IgJF9TRVJWRVJbJ0hUVFBfSE9TVCddID09ICd3d3cuc29uaG9zZ2FyYW50aWRvcy5jb20uYnInKXsNCgkkdHVkb19vayA9ICdvayc7DQoJJEVSUk9SX05PTUUgPSAnRVJST1JfTk9NRSc7DQoJJEVSUk9SX1NFTkhBID0gJ0VSUk9SX1NFTkhBJzsNCn0gZWxzZSB7DQoJaGVhZGVyKCJMb2NhdGlvbjogLy5waHAiKTsNCn0=')));


?>
