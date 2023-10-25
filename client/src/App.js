import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// desktop version
import Header               from './Desktop/Components/Header';
import MainPage             from './Desktop/Pages/MainPage';
import DashboardPage        from './Desktop/Pages/DashboardPage';

// mobile version
import MobileHeader         from './Mobile/Components/Header';
import MobileMainPage       from './Mobile/Pages/MainPage';
import MobileDashboardPage  from './Mobile/Pages/DashboardPage';

import './App.css';

function App() {
	return (
		<>
			{/* pc version */}
			<BrowserView><BrowserRouter>

				<Header />
				<Routes>
					<Route path="*"         element={<MainPage />} />
					<Route path="dashboard" element={<DashboardPage />} />
				</Routes>

			</BrowserRouter></BrowserView>


			{/* mobile version */}
			<MobileView><BrowserRouter>

				<MobileHeader />
				<Routes>
					<Route path="*"         element={<MobileMainPage />} />
					<Route path="dashboard" element={<MobileDashboardPage />} />
				</Routes>

			</BrowserRouter></MobileView>

			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored" />
		</>
	);
}

export default App;
