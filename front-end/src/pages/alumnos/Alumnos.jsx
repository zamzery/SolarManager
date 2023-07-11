import './Alumnos.css'
import Header from '../../components/header/Header'

function Alumnos(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div>Alumnos</div>
			</main>
		</div>
	)
}

export default Alumnos