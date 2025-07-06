import React from "react";
import { useNavigate } from "react-router";

const Perfil = () => {
    const navigate = useNavigate()
    return (



        <div style={{
            display: "flex", border: '1px solid black', width: '80%', maxWidth: '1000px', margin: '0px auto', padding: '10px', alignItems: 'center',
        }}
            ClassName="conntainer text-Center ">
            <img style={{ borderRadius: "55%", width: "130px", height: "100px", objectFit: "cover", marginTop: '1%', marginLeft: '1%' }} src="https://img.freepik.com/foto-gratis/estilo-vida-emociones-gente-concepto-casual-confiado-agradable-sonriente-mujer-asiatica-brazos-cruzados-pecho-seguro-listo-ayudar-escuchando-companeros-trabajo-participando-conversacion_1258-59335.jpg?semt=ais_hybrid&w=740" alt="" />

            <div style={{ margin: 0 }}>
                <h4 style={{ marginLeft: 50 }}>Hola, soy María</h4>
                <p style={{ marginLeft: 50, marginTop: 10 }} > 📍 5842 Hillcrest Rd</p>
                <p style={{ marginLeft: 50, marginTop: 5 }}> 📞 (870) 288-4149</p>
                <p style={{ marginLeft: 50 }}> ✉️ mike-ana@example.com</p>
            </div>
            <div className="d-flex justify-content-end align-items-start">
                <button style={{ border: "none", textDecoration: 'none', padding: "0px 0px", background: "white" }}>
                    <i className="fa-solid fa-pen" style={{ marginLeft: 500 }} onClick={() => navigate("/newcontact")} ></i>
                </button>

                <button type="button" style={{border: "none", padding: "0px 0px", background: "white"}} className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <i className="fa-solid fa-trash" style={{ marginLeft: 20 }}></i>
                </button>

               
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Eliminar contacto</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Deseas eliminar contacto?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cerrar</button>
                                <button type="button" class="btn btn-primary">Eliminar Contacto</button>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
        </div >
    );

};
export default Perfil;