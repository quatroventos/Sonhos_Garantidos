<?

	// https://github.com/jhuckaby/webcamjs/blob/master/DOCS.md

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();

	$verificar_senha_atual = 0;


	if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){

			$width = 500;
			$height = 375;
			$qualidade = 90;

			$arr['title'] = 'WebCam';
			$arr['html']  = '<div class="w540 w100p_600">
								<div class="p20 pt15">
									<script type="text/javascript" src="'.DIR.'/plugins/Jquery/WebCam/webcam.min.js"></script>

									<div class="webcam_tirando_foto">
										<div class="pt10 pb10 tac">
											<button onclick="fotowebcam()" class="botao">Tirar Foto</button>
											<button onclick="fotowebcam_desligar()" class="botao dni">Desligar Câmera</button>
										</div>
										<div id="my_camera" class="m-a"></div>
									</div>

									<div class="dn webcam_foto_tirada tac">
										<div class="pt10 pb10">
											<button onclick="fotowebcam_denovo()" class="botao">Tirar Foto de Novo</button>
											<button onclick="fotowebcam_enviar_foto()" class="botao">Enviar Foto</button>
										</div>
										<span></span>
									</div>
								</div>
							</div>
							<style>
								#my_camera,
								#my_camera video { max-width: 100% !important; height: auto !important; }
							</style>
							<script language="JavaScript">
								Webcam.set({ width: '.$width.', height: '.$height.', image_format: "jpeg", jpeg_quality: '.$qualidade.' });
								Webcam.attach("#my_camera");

								function fotowebcam() {
									Webcam.snap( function(data_uri) {
										$(".webcam_tirando_foto").hide();
										$(".webcam_foto_tirada").show();
										$(".webcam_foto_tirada span").html('.A.'<img src="'.A.'+data_uri+'.A.'" class="dib"/>'.A.')
									});
									Webcam.reset("#my_camera");
								}
								function fotowebcam_denovo() {
									Webcam.set({ width: '.$width.', height: '.$height.', image_format: "jpeg", jpeg_quality: '.$qualidade.' });
									Webcam.attach("#my_camera");

									$(".webcam_foto_tirada").hide();
									$(".webcam_tirando_foto").show();
								}
								function fotowebcam_desligar() {
									Webcam.reset("#my_camera");
									Webcam.reset("#my_camera");
									Webcam.reset("#my_camera");
									Webcam.reset("#my_camera");
									Webcam.reset("#my_camera");
									Webcam.reset("#my_camera");
									Webcam.reset("#my_camera");
								}
								function fotowebcam_enviar_foto() {
									$foto = $(".webcam_foto_tirada span img").attr("src");
									$(".rand_webcam_'.$_POST['rand_webcam'].' input").val($foto);
									$(".rand_webcam_'.$_POST['rand_webcam'].' .faa-camera").addClass("c_azul ");
									$(".fundoo").trigger("click");
								}

								$(document).ready(function(){
									$('.A.'.webcam .fechar '.A.').attr('.A.'href'.A.', '.A.'javascript:fechar_all(); fotowebcam_desligar();'.A.');
								});
							</script>
						';
			$arr['html'] .= '<script> ';
				$arr['html'] .= "$('.ui-dialog').prepend('<style>.pop_file { display: none !important;}</style>'); ";
			$arr['html'] .= '</script> ';


	}

	$mysql->fim();
	echo json_encode($arr); 

?>