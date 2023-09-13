import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import Layout from '@components/Layout/Layout';
const Router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [{
			index: true,
			element: <MainPage/>,
		}]
	}
]);

export default Router;
