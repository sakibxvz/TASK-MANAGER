import { useState } from 'react';
import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import TaskDetails from './pages/TaskDetails';
import Tasks from './pages/Tasks';
import Trash from './pages/Trash';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';
import { Toaster } from 'sonner';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';

function Layout() {
	const  user = useSelector((state) => {
		state.auth;
	});

	const location = useLocation();
	return user ? (
		<div className='w-full h-screen flex flex-col md:flex-row'>
			<div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
        <Sidebar/>
			</div>
			{/* <MobileSidebar>

      </MobileSidebar> */}
			<div className='flex-1 overflow-y-auto'>
				{/* <Navbar></Navbar> */}
				<div className='p-4 2xl:px-10'><Outlet></Outlet></div>
			</div>
		</div>
	) : (
		<Navigate to='/log-in' state={{ from: location }} replace />
	);
}
function App() {
	const [count, setCount] = useState(0);

	return (
		<main className='w-full min-h-scree bg-[#f3f4f6] '>
			<Routes>
				<Route element={<Layout />}>
					<Route index path='/' element={<Navigate to='/dashboard' />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/tasks' element={<Tasks />} />
					<Route path='/completed/:status' element={<Tasks />} />
					<Route path='/in-progress/:status' element={<Tasks />} />
					<Route path='/todo/:status' element={<Tasks />} />
					<Route path='/team' element={<Users />} />
					<Route path='/trashed' element={<Trash />} />
					<Route path='/task/:id' element={<TaskDetails />} />
				</Route>

				<Route path='/log-in' element={<Login />} />
			</Routes>

			<Toaster richColors />
		</main>
	);
}

export default App;