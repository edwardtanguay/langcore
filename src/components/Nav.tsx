import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import * as tools from '../qtools/qstr';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import React from "react";


export const Nav = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const menuItems = [
		{
			idCode: 'welcome',
			title: 'Welcome'
		},
		{
			idCode: 'dutchVerbs',
			title: `Dutch Verbs`
		},
		{
			idCode: 'test-dutch-verbs',
			title: 'Test Dutch Verbs'
		},
		{
			idCode: 'spanishVerbs',
			title: `Spanish Verbs`
		},
		{
			idCode: 'spanishLinks',
			title: `Spanish Links`
		},
		{
			idCode: 'profile',
			title: 'Profile'
		},
		{
			idCode: 'about',
			title: 'About'
		}
	]

	const location = useLocation();
	const pageIdCode = tools.chopLeft(location.pathname, '/');
	const currentMenuItem = menuItems.find(m => m.idCode === pageIdCode);

	const handleMenuToggle = () => {
		setShowMobileMenu(!showMobileMenu)
	}

	return (
		<>
			{currentMenuItem && (
				<nav>
					<div className="md:hidden bg-slate-500 text-[1.2rem] px-4 py-2 content">
						<div className="flex justify-between">
							<p><NavLink to={currentMenuItem.idCode}>{currentMenuItem.title}</NavLink></p>
							<p className="mt-1 cursor-pointer" onClick={handleMenuToggle}><GiHamburgerMenu /></p>
						</div>
						{showMobileMenu && (
							<div>
								{menuItems.map((menuItem, index) => {
									return (
										<React.Fragment key={index}>
											{(menuItem.idCode !== currentMenuItem.idCode && (
												<div className="mt-[.2rem]"
												><NavLink to={menuItem.idCode}
													onClick={() => setShowMobileMenu(false)}>{menuItem.title}</NavLink></div>
											))}
										</React.Fragment>
									)
								})}
							</div>
						)}
					</div>
					<div className="hidden md:block bg-slate-500 px-4 py-2 content">
						<ul className="flex gap-4">
							{menuItems.map((menuItem, index) => {
								return (
									<React.Fragment key={index}>
										{(
											<li key={index}><NavLink to={menuItem.idCode}>{menuItem.title}</NavLink></li>
										)}
									</React.Fragment>
								)
							})}
						</ul>
					</div>
				</nav>
			)}
		</>
	);
};
