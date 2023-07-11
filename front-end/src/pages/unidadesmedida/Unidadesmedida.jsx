import './Unidadesmedida.css'
import Header from '../../components/header/Header'

function Unidadesmedida(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div>Unidadesmedida</div>
			</main>
		</div>
	)
}

export default Unidadesmedida