import React from "react";
import { useNavigate, Outlet } from "react-router";




const Home = () => {
	const navigate = useNavigate()
	
	return (
		<>
			<button className="" style={{ display: "flex", marginLeft: "1275px"  }} type="button" class="btn btn-success" onClick={()=> navigate("/newcontact")} >Añadir nuevo contacto</button>
			<Outlet/>
		
		</>
	);
};

export default Home;

