import { Component } from "react";

const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a href="#" class="navbar-brand">
                Brand
            </a>
            <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav">
                    {props.menu.map((item, index) => (
                        <a href={item.link} class="nav-item nav-link" key={index}>
                            {item.name}
                        </a>
                    ))}
                </div>
                <form class="form-inline ml-auto">
                    <input
                        type="text"
                        class="form-control mr-sm-2"
                        placeholder="Search"
                    />
                    <button type="submit" class="btn btn-outline-light">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
