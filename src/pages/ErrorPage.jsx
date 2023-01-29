import { Fragment } from "react"
import Header from "../components/Header/Header"

const ErrorPage = () => {
  return (
    <Fragment>
        <div className="errorpage_wrapper">
            <Header/>
            <div class="error_message"><p>The page you were looking for could not be found here.</p></div>
        </div>
    </Fragment>    
  )
}

export default ErrorPage