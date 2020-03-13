import React, { useState } from 'react';
import Cookies from 'js-cookie';

import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export default function NavBar({ open, setOpen, classes }) {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={() => setOpen(!open)}
					edge="start"
					className={classes.menuButton}
				>
					{open ? <CloseIcon /> : <MenuIcon />}
				</IconButton>
				<Typography variant="h6" noWrap className={classes.title}>
					My website
				</Typography>
				<Button
					color="inherit"
					onClick={() => {
						Cookies.remove('token');
						setIsLoading(true);
						setTimeout(() => {
							window.location.reload(true);
						}, 1000);
					}}
				>
					{isLoading ? 'Loading...' : 'Logout'}
				</Button>
			</Toolbar>
		</AppBar>
	);
}
