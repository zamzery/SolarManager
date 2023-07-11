import './Horarios.css'
import Header from '../../components/header/Header'

function Horarios(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div>Horarios</div>
			</main>
		</div>
	)
}

export default Horarios