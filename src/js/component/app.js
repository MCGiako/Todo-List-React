import React, { useState } from "react";
//include images into your bundle
//create your first component
const Home = () => {
	//Aquí abajo creo mi variable de estado que se llama nombre y una función que cambiará el valor de nombre
	//y esa función se llama cambiar nombre cuyo valor inicial es un texto vacío
	const [Nombre, cambiarNombre] = useState("Renato");
	const [Lista, agregaraLista] = useState([]);
	const [Tarea, guardarTarea] = useState("");

	return (
		<div className="text-center mt-5">
			{" "}
			<h1>To do {Nombre}</h1>{" "}
			<input
				type="text"
				onChange={evento => {
					guardarTarea(evento.target.value);
					console.log(Tarea);
				}}
				placeholder="Texto"
			/>
			<button
				onClick={() => {
					agregaraLista([...Lista, Tarea]);
					console.log(Lista);
				}}
				type="button">
				Click Me!
			</button>
			{Lista.map((element, id) => {
				return <div key={id}>{element}</div>;
			})}
		</div>
	);
};

export default Home;
