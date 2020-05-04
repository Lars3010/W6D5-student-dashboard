import React from 'react'
import Logo from '../assets/cropped-logoglat-small.png';
import {Link, withRouter} from 'react-router-dom';

function Header(props){
    const options = props.students.map(student => {
        return <option key={student.id} value={student.id}>{student.firstName}</option>
    });

    const studentSelectHandleChange = (event) => {
        props.history.push(`${event.target.value}`);
    }

    return(
        <header>
            <Link to="/"><img src={Logo} alt="Winc Academy Logo"/></Link>
            <select name="select-student" id="select-student" onChange={studentSelectHandleChange}>
                <option value="/">-</option>
                {options}
            </select>
        </header>
    )
}

export default withRouter(Header);