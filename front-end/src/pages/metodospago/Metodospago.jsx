import './Metodospago.css'
import Header from '../../components/header/Header'

function Metodospago(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div>Metodospago</div>
			</main>
		</div>
	)
}

export default Metodospago