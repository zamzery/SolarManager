import './Clases.css'
import Header from '../../components/header/Header'

function Clases(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div>Clases</div>
			</main>
		</div>
	)
}

export default Clases