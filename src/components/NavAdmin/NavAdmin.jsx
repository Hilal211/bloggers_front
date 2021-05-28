import { Component } from "react";
import './NavAdmin.css'
import { Link } from "react-router-dom"
import { getCookie, removeCookie } from "../../cookie";
export default class Navb extends Component {

  async componentDidMount() {
    let navToggle = document.querySelector(".nav__toggle");
    let navWrapper = document.querySelector(".nav__wrapper");
    navToggle.addEventListener("click", function () {
      if (navWrapper.classList.contains("active")) {
        this.setAttribute("aria-expanded", "false");
        this.setAttribute("aria-label", "menu");
        navWrapper.classList.remove("active");
      } else {
        navWrapper.classList.add("active");
        this.setAttribute("aria-label", "close menu");
        this.setAttribute("aria-expanded", "true");
      }
    });
  }
  logout = async () => {
    let headers = {
      'Content-Type': 'application/json',
      id: getCookie('id'),
      token: getCookie('token'),
    }
    let response = await fetch("//localhost:8000/logout", { method: "post", headers });
    let data = await response.json();
    if (data.success === true) {
      removeCookie('id');
      removeCookie('token');
      this.props.onLogout();
    }
  }
  render() {


    return (
      <>
        <header class="site-header">
          <div class="wrapper site-header__wrapper">
          <Link to="/dashboard/blogPage" class="brand textBrand">BLOGGERS</Link>
            <nav class="nav">
              <button class="nav__toggle" aria-expanded="false" type="button">
                menu
              </button>
              <ul class="nav__wrapper">
                <li class="nav__item_SN"><Link to="/dashboard/blogPage">Blog</Link></li>
                <li class="nav__item_SN"><Link to="/dashboard/adminPage">Admin</Link></li>
                <li class="nav__item_SN"><Link to="/dashboard/inboxPage">Inbox</Link></li>
                <li class="nav__item_SN"><Link to="/dashboard/subscribers">Subscriber</Link></li>
                <li class="nav__item_SN"><Link to="/">Home</Link></li>
                <li class="nav__item_SN" onClick={this.logout}>
                  <a href="#">Logout</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

      </>
    )
  }
}