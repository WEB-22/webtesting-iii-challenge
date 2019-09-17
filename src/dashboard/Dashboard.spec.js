// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard.js';

test('Dashboard renders correctly', () => {
	render(<Dashboard />);
});

// first we test if controls show
test('the control and display of the app render correctly.', () => {
	const { getByText } = render(<Dashboard />);

	//  on initial load
	//  initial contorls
	const close = getByText(/close gate/i);
	const lock = getByText(/lock gate/i);

	// initial display
	const openDisplay = getByText(/open/i);
	const unlockedDisplay = getByText(/unlocked/i);

	// we fire the close gate button
	fireEvent.click(close);

	//  now we have open gate as a control
	const open = getByText(/open gate/i);

	//  closed is displayed
	const closedDisplay = getByText(/closed/i);

	//  we fire the lock gate button
	fireEvent.click(lock);

	//  unlock gate is now a control
	const unlock = getByText(/unlock gate/i);

	//  locked is being displayed
	const lockedDisplay = getByText(/locked/i);
});
