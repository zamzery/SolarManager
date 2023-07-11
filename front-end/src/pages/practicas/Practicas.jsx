import './Practicas.css'
import Header from '../../components/header/Header'

function Practicas(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div>Practicas</div>
			</main>
		</div>
	)
}

export default Practicas