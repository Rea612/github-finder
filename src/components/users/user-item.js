import React from 'react';
import {Link} from 'react-router-dom';

//now going to refactor this to functional component:
// export class UserItem extends Component {
//constructor is not necessarily needed, you can just declare state out of it and remove constructor.
// constructor() {
//     super();
//     this.state = {
//         id: 1,
//         login: 'mojombo',
//         avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
//         html_url:'https://github.com/mojombo'

//     }

// }

// state = {
//     id: 1,
//     login: 'mojombo',
//     avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
//     html_url:'https://github.com/mojombo'

// };

//     render() {
//         //we have many this.state.property in the code, we can use destructor to avoid those duplicate code like:
//         const {login, id, avatar_url, html_url} = this.props.user;

//         return (
//             <div>
//                 {/* <img src={this.state.avatar_url} alt="" className="round-img" style={{width: '60px'}}></img> */}
//                 <img src={avatar_url} alt="" className="round-img" style={{width: '60px'}}></img>
//                 <h3>{login}</h3>
//                 <div>
//                     <a href={html_url} className= "btn btn-dark btn-sm my-1">More</a>
//                 </div>
//             </div>

//         )
//     }
// }

// export default UserItem;

const UserItem = (props) => {
    const { login, avatar_url, html_url } = props.user;
    return (
        <div>
            <img
                src={avatar_url}
                alt=""
                className="round-img"
                style={{ width: '60px' }}
            >
            </img>
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                    More
                </Link>
            </div>
        </div>
    );
};

export default UserItem;