import './App.scss';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import JourneysPage from './pages/JourneysPage';
import StationsPage from './pages/StationsPage';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { getJourneysData } from './redux/data-actions/journey-actions'
import { getStationsData } from './redux/data-actions/station-actions'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {path: '/', element: <HomePage/>},
      {path: '/journeys', element: <JourneysPage/>},
      {path: '/stations', element: <StationsPage/>}
    ]
  }
])

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJourneysData());
    dispatch(getStationsData());
  },[dispatch])


  return (
    <RouterProvider router={router}/>
  );
}

export default App;
