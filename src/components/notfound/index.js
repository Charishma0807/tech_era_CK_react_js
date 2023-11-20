import './index.css'
import Navbar from '../navbar'

const NotFound = () => (
  <>
    <Navbar />
    <div className="notFoundMainContainer">
      <div className="notFoundContent">
        <img
          className="notFoundImage"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          alt="not found"
        />
        <h1>Page Not Found</h1>
        <p>We are sorry, the page you requested could not be found</p>
      </div>
    </div>
  </>
)

export default NotFound
