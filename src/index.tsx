import React from 'react';
import ReactDOM from 'react-dom';
import { IndexPage } from './pages/index';

ReactDOM.render(<IndexPage />, document.getElementById('app'));

// if (process.env.NODE_ENV === 'production') {
// 	// Service Worker registration
// 	if ('serviceWorker' in navigator) {
// 		navigator.serviceWorker.register('/sw.js');
// 	}
// }
