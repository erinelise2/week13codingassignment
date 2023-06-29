import React, {Component} from 'react'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navBar navbar-expand-lg navbar-light p-1">
        <div>
          <ul>
            <li>
              <a className="nav-link" href="" target="_blank" rel="noreferrer">Home</a>
            </li>
            <li>
              <a className="nav-link" href="" target="_blank" rel="noreferrer">About</a>
            </li>
            <li>
              <a className="nav-link" href="" target="_blank" rel="noreferrer">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}