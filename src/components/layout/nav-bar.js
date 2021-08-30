import React from 'react';
import {Link} from 'react-router-dom';

//change to functional component 
// export class NavBar extends Component {
//     static defaultProps = {
//         title: "Github Finder",
//         icon: "fab fa-github"
//     }

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         icon: PropTypes.string.isRequired
//     }
//     render() {
//         return (
//             <nav className="navbar bg-primary">
//                 <h1>
//                     <i className={this.props.icon}></i>{this.props.title}
//                 </h1>
//             </nav>
//         )
//     }
// }

const Navbar = (props) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={props.icon}></i>{props.title}
            </h1>
            
            <ul>
                <li>
                    {/* reason that not using <a href...> is becuase <a href won't keep the search result. If I do search then go to About page, the search
                    result will disappear. Link will keep those state. */}
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
}; 

export default Navbar;