import React from 'react';

//STYLES
import useStyles from './Style';
import NavBar from './NavBar';
import SideBar from './SideBar';

export default function MiniDrawer({ children }) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	return (
		<div className={classes.root}>
			<NavBar open={open} classes={classes} setOpen={setOpen} />
			<SideBar open={open} classes={classes} setOpen={setOpen} />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{children}
			</main>
		</div>
	);
}
