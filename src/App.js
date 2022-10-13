import React, { useState } from "react";
import PassValidation from "./styles/components/pageComponent/PassValidation";

function App() {
	const [flag, setFlag] = useState({ click: true });
	const [pass, setPass] = useState('')
	var element = document.getElementById('inp');

	const iconHandler = () => {
		setFlag({ click: !flag.click });
		(flag.click ? element.setAttribute('type', 'text') : element.setAttribute('type', 'password'));
	};
	return (
		<div className="App">
			<PassValidation
				flag={flag}
				pass={pass}
				setPass={setPass}
				iconHandler={iconHandler}
			/>
		</div>
	);
}

export default App;
