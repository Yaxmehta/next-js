import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';

export default function Header() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <Link class="nav-link"  aria-current="page" href="/">Home</Link>
            </li>
            <li class="nav-item">
            <Link  class="nav-link" aria-current="page" href="/about">About Us</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" aria-current="page" href="/blog">Blog</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" aria-current="page" href="/Charts">chart</Link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
      
    );
  }