import React, { useState, useEffect } from "react";
//include images into your bundle
//create your first component
const Home = () => {
	//Aquí abajo creo mi variable de estado que se llama nombre y una función que cambiará el valor de nombre
	//y esa función se llama cambiar nombre cuyo valor inicial es un texto vacío
	const [Nombre, cambiarNombre] = useState("Renato");
	const [Lista, agregaraLista] = useState([]);
	const [Tarea, guardarTarea] = useState("");

	function eliminar(id) {
		let lista_aux = Lista;
		lista_aux.splice(id, 1);
		agregaraLista(lista_aux);
	}
	useEffect(() => {
		console.log(Lista);
	}, [Lista]);
	return (
		<div className="text-center mt-5">
			{" "}
			<h1>To do {Nombre}</h1>{" "}
			<input
				type="text"
				onChange={evento => {
					guardarTarea(evento.target.value);
				}}
				placeholder="Texto"
			/>
			<button
				onClick={() => {
					agregaraLista([...Lista, Tarea]);
				}}
				type="button">
				Click Me!
			</button>
			{Lista.map((element, id) => {
				return (
					<div key={id}>
						{element}{" "}
						<button onClick={() => eliminar(id)}>Eliminar</button>{" "}
					</div>
				);
			})}
		</div>
	);
};

export default Home;
