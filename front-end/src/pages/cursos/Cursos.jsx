import './Cursos.css'
import Header from '../../components/header/Header'

function Cursos(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div>Cursos</div>
			</main>
		</div>
	)
}

export default Cursos