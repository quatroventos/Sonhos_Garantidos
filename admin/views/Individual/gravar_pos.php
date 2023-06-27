<?


	if($modulos->modulo == 'produtosxxx'){

$qebraa = '
';

		$mysql->filtro = " WHERE ".STATUS." ORDER BY id ASC ";
		$produtos = $mysql->read('produtos');

		$xml  = '<?xml version="1.0"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
    <channel>
        <title>Biel</title>
        <link>http://bielmodakids.com.br/</link>
        <description>Biel Feed</description>';

		foreach ($produtos as $key => $value) {
			$txt = txt($value);
			$txt = strip_tags($txt);
			$txt = trim($txt);
			$txt = preg_replace("/\r|\n/", " ", $txt);
			$txt = str_replace("&nbsp;", " ", $txt);
			$txt = html_entity_decode($txt);
			$txt = limit($txt, 5000);

			$xml .= '
	        <item>
	            <g:id>P_'.$value->id.'</g:id>
	            <g:title>'.$value->nome.'</g:title>
	            <g:description>'.$txt.'</g:description>
	            <g:price>'.$value->preco.' BRL</g:price>
	            <g:link>'.DIR_C.url('produto', $value).'</g:link>
	            <g:image_link>'.DIR_C.'/web/fotos/'.$value->foto.'</g:image_link>
	            <g:brand>'.rel('marcas', $value->marcas).'</g:brand>
	            <g:condition>new</g:condition>
	            <g:availability>in stock</g:availability>
	            <g:google_product_category>166</g:google_product_category>
	        </item>';
		}

		$xml .= '
    </channel>
</rss>';

		if(!file_exists(DIR_F."/z_feed")){
			mkdir(DIR_F."/z_feed", 0777, true);
		}

		if(!file_exists(DIR_F."/z_feed/backup")){
			mkdir(DIR_F."/z_feed/backup", 0777, true);
		}


    	if(file_exists(DIR_F."/z_feed/feed.xml")){
        	rename(DIR_F."/z_feed/feed.xml", DIR_F."/z_feed/backup/feed_".date('Y_m_d_H_i_s').".xml");
        }


        $file = fopen(DIR_F."/z_feed/feed.xml", 'w');
        fwrite($file, $xml);
        fclose($file);

	}

?>