import React, { useState } from "react";


//create your first component
const Home = () => {

	const ColorDefault ={red:"gray", yellow:"gray", green:"gray", rebeccapurple:"gray"};
	const [ colors, SetColor] = useState(ColorDefault);
	 const [showPurpura, setshowPurpura] = useState(true);

	const ChangeColors =(ncolor)=>{
		const color = colors [ncolor] == ncolor ? 'gray': ncolor;
		const mycolors = {...colors};
		mycolors[ncolor]=color;
		SetColor(mycolors);
	}

	return (
		<>
		  

		<div className="text-center">
		

			<div id="ballWrapper">
				{/*Con un estado adicional le indico cuando mostrarse*/}
				<button onClick={() => setshowPurpura(!showPurpura)}>
					{/*Aqui solo cambio el texto de mi boton */}
					{showPurpura ? `Ocultar semaforo` : `Color Extra `}
				</button>
				<div className="ball" onClick={()=>ChangeColors('red')}  style={{backgroundColor: colors["red"]}}></div>
				<div  className=" ball" onClick={()=>ChangeColors('yellow')}  style={{backgroundColor: colors["yellow"]}}></div>
				<div  className="ball " onClick={()=>ChangeColors('green')}  style={{backgroundColor: colors["green"]}}></div>
				<div className={showPurpura ? "show-element" : null}  >
		 			 {showPurpura && <div  className=" ball " onClick={()=>ChangeColors('rebeccapurple')}  style={{backgroundColor: colors["rebeccapurple"]}}></div>}
					 
				</div>
							
			</div>	
		</div>
		</>
	);
};

export default Home;



