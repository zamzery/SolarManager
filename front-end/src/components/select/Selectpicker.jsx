import './Selectpicker.css'
import AsyncCreatableSelect from 'react-select/async-creatable';

function Selectpicker(valores) {
	const promiseOptions = (valores) => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(valores)
			}, 1000)
		})
	}
	return (
		<AsyncCreatableSelect 
			cacheOptions
			defaultOptions
			loadOptions={promiseOptions(valores)}
		/>
	)
}

export default Selectpicker