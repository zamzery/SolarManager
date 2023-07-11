import './Teorias.css'
import Header from '../../components/header/Header'

function Teorias(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div>Teorías</div>
			</main>
		</div>
	)
}

export default Teorias