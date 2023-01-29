import {Fragment} from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

const RootLayout = () => {
  return (
    <Fragment>
        <div className="root_wrapper">
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    </Fragment>
    
  )
}

export default RootLayout