import React from 'react';
import clsx from 'clsx';

import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Avatar
} from '@material-ui/core';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

export default function SideBar({ open, classes }) {
	return (
		<Drawer
			variant="permanent"
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: open,
				[classes.drawerClose]: !open
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open
				})
			}}
		>
			<List>
				<ListItem>
					<ListItemIcon>
						<Avatar
							alt="Travis Howard"
							src="https://files.slack.com/files-pri/T0QG5E3SL-FUP1WGQ0Z/screenshot_from_2020-03-06_09-30-11.png"
						/>
					</ListItemIcon>
					<ListItemText>
						<b>Rex Rojo</b>
					</ListItemText>
				</ListItem>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Drawer>
	);
}
