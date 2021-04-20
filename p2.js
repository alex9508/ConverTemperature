
const CONVERSIONES = (a , pregunta ) => {	
let imprimirResultado = document.getElementById('_Resultado')

		if( !Number.isNaN(pregunta) && !Number.isNaN(a) && pregunta > 0 && pregunta < 7 )
		{
				let z
				let formatoF
				
				switch (pregunta)
				{
						case 1:
								z = ( a - 32 ) * ( 5 / 9 )
								formatoF = 'Celsius'
						break;

						case 2:
								z = ( a + 459.67 ) * ( 5 / 9 )
								formatoF = 'Kelvin'
						break;

						case 3:
								z = ( a - 273.15 ) * ( 5 / 9 ) + 32 
								formatoF = 'Fahrenheit'
						break;

						case 4:
								z = ( a - 273.15 )
								formatoF = 'Celsius'
						break;

						case 5:
								z = ( a + 273.15 )
								formatoF = 'Kelvin'
						break;

						default:
								z = ( a * 9 / 5 ) + 32
								formatoF = 'Fahrenheit'
				}

				let iconoMostrar = document.getElementById('_IconTemp')
				iconoMostrar.style.visibility = 'visible'		

				if( (formatoF === 'Celsius' && z > 20) || (formatoF === 'Kelvin' && z > 293) || (formatoF === 'Fahrenheit' && z > 69) )
						iconoMostrar.src = "https://i.postimg.cc/hvH1M1NS/calor.webp"
				else
						iconoMostrar.src = "https://i.postimg.cc/KjK5nHqq/frio.webp"


				imprimirResultado.innerHTML = ` ${ z }° ${ formatoF } `
		}else
				imprimirResultado.innerHTML = ` Dato no valido !!! `

}

function pasarDatos(){
		const _OpcionDeConversion = parseInt(document.getElementById('opcionMenu').value)
		const _NumPrimDeConversion = parseInt(document.getElementById('primerDato').value )

		

		CONVERSIONES(_NumPrimDeConversion,_OpcionDeConversion)
}

