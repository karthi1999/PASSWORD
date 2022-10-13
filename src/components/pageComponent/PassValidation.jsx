import React from 'react'

const PassValidation = (
	{
		flag,
		pass,
		setPass,
		iconHandler
	}
) => {
	return (
		<form onSubmit={e => e.preventDefault()}>
			<div className='inpBox'>
				<div className='shadowInp'></div>
				<input
					type='password'
					id="inp"
					placeholder='Password . . .'
					onChange={e => setPass(e.target.value)}
				/>
				<button className='d-flex justify-content-center align-items-center' onClick={iconHandler}><i className={flag.click ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i></button>
			</div>
			<ul className='list-unstyled d-flex flex-column gap-2 py-5'>
				<li className='d-flex gap-3 align-items-center'><i className={pass.match(/[a-z]/) ? "fa-solid fa-face-grin-beam smile" : "fa-solid fa-face-angry angry"}></i>Atleast one lowercase must present.</li>
				<li className='d-flex gap-3 align-items-center'><i className={pass.match(/[A-Z]/) ? "fa-solid fa-face-grin-beam smile" : "fa-solid fa-face-angry angry"}></i>Atleast one uppercase must present.</li>
				<li className='d-flex gap-3 align-items-center'><i className={pass.match(/[0-9]/) ? "fa-solid fa-face-grin-beam smile" : "fa-solid fa-face-angry angry"}></i>Atleast one numeric value must present.</li>
				<li className='d-flex gap-3 align-items-center'><i className={pass.match(/[!@#$%^&*]/) ? "fa-solid fa-face-grin-beam smile" : "fa-solid fa-face-angry angry"}></i>Atleast one symbol value must present.</li>
				<li className='d-flex gap-3 align-items-center'><i className={(pass.length > 8) ? "fa-solid fa-face-grin-beam smile" : "fa-solid fa-face-angry angry"}></i>Minimum 8 characters must present.</li>
			</ul>
		</form>
	)
}

export default PassValidation