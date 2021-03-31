$('#form_product').hide();

function new_product(){
	$('#products').hide();
	$('#form_product').show();
	// alert('Continuar a agregar un nuevo dispositivo?');
}

function cancel_new_product(){

	$('#products').show();
	$('#form_product').hide();

}

function show_password(ele){
	

	if($(ele).is(":checked")){

		$('#password').attr('type','text');

    }else{

      	$('#password').attr('type','password');

    }
}