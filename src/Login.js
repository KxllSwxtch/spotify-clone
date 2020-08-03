import React, { useState } from 'react'
import { loginURL } from './spotify'
import './Login.css'

const Login = (props) => {
	return (
		<div className="login">
			<img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" />
			<a href={loginURL}>Login with Spotify</a>
		</div>
	)
}

export default Login
