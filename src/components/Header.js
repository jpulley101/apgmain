import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-anchor"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Anchor Production Group</h1>
                <p><h1>Comming Soon!!</h1></p>
                <p>Anchor Productions strives to bring quality to everything they touch with experience in audio, video, and lighting.</p>
            </div>
            <ul className="icons">
            <li><a href="https://www.facebook.com/Anchorprogroup/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          </ul>
        </div>
        
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
