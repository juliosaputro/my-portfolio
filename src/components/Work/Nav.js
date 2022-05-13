import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function Nav() {
  return (
    <NavStyles>
    {/* <Link className="logo nav-button" to="/">
           Juls
    </Link>
    <Link className="works nav-button" to="/Work">
           Works
    </Link>
    <Link className="about nav-button" to="/About">
           About
    </Link> */}

    </NavStyles>
  )
}

export default Nav

const NavStyles = styled.div`
color:var(--black);
.logo, .works, .about{
       position:fixed;
       z-index:20;
}

.logo{
       top:2vw;
       left:2vw;
       font-size: 2vw;
}

.works, .about{
       transform:rotate(90deg);
       right:1vw;
       font-size:1.5vw;
}

.works {
       top: 2.2vw;
}

.about {
       bottom: 6.5vw;
}

`