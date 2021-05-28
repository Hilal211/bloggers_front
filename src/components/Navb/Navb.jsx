import { Component } from "react";
import './Navb.css'
import {Link} from "react-router-dom"
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

    render() {


        return (
            <>
                    <header class="site-header">
      <div class="wrapper site-header__wrapper">
        <Link to="/" class="brand textBrand">BLOGGERS</Link>
        <nav class="nav">
          <button class="nav__toggle" aria-expanded="false" type="button">
            menu
          </button>
          <ul class="nav__wrapper">
            <li class="nav__item"><Link to="/">Home</Link></li>
            <li class="nav__item"><Link to="/pageBlog">Blog</Link></li>
            <li class="nav__item"><Link to="/aboutUs">About</Link></li>
            <li class="nav__item"><Link to="/contactUs">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>

            </>
        )
    }
}