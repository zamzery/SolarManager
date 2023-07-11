import './Users.css'
import Header from '../../components/header/Header'

function Users(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div>Users</div>
			</main>
		</div>
	)
}

export default Users