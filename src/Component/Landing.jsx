import {Link} from 'react-router-dom'
import "../Style/Landing.css"

const Landing = () => {
    return(
        <div className="page">
            <Link to={'./adminlogin'}>
                <img src="https://images.freeimages.com/fic/images/icons/2526/bloggers/256/admin.png" alt="" />
                <h1>Admin</h1>
            </Link>
            <Link to={'./userlogin'}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" alt="" />
                <h1>User</h1>
            </Link>
        </div>
    )
}

export default Landing;