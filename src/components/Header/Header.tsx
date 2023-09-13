import React from 'react'
import SearchBar from './SearchBar'
import classes from './Header.module.css'
const Header = () => {
	return (
		<header className={classes['header'] }><SearchBar/></header>
	)
}

export default Header