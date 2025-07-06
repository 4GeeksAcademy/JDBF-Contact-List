import React from "react"
import { useNavigate } from "react-router";


const Contact = () => {
	const navigate = useNavigate()
	return (
		<form>
			<h1 className="d-flex justify-content-center"> Añadir nuevo contacto </h1>
			<div class="mb-3">
				<label for="recipient-name" class="col-form-label text-start w-100">Nombre completo:</label>
				<input type="text" class="form-control" id="recipient-name" />
			</div>
			<div class="mb-3">
				<label for="message-text" class="col-form-label text-start w-100">Email:</label>
				<input type="text" class="form-control" id="recipient-name" />
			</div>
			<div class="mb-3">
				<label for="recipient-name" class="col-form-label text-start w-100">Celular:</label>
				<input type="text" class="form-control" id="recipient-name" />
			</div><div class="mb-3">
				<label for="recipient-name" class="col-form-label text-start w-100">Dirección:</label>
				<input type="text" class="form-control" id="recipient-name" />
				<button className="" style={{ display: "flex", marginLeft: "1275px"  }} type="button" class="btn btn-success" onClick="" >Guardar</button>
				<button className="" style={{ display: "flex", marginLeft: "1275px"  }} type="button" class="btn btn-success" onClick={()=> navigate("/")} >Volver</button>
			</div>
		</form>		
	);
};
export default Contact; 