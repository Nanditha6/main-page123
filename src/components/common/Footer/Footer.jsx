import { Component } from "react";
import { FOOTER_ITEMS } from "../../Constants";

const Footer = () => {
    return (
        <footer className="container-fluid p-5">
            <div className="row">
                <div className="col-12 col-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="d-block mb-2"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line
                            x1="14.31"
                            y1="8"
                            x2="20.05"
                            y2="17.94"
                        ></line>
                        <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                        <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                        <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                        <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                        <line
                            x1="16.62"
                            y1="12"
                            x2="10.88"
                            y2="21.94"
                        ></line>
                    </svg>
                    <small className="d-block mb-3 text-muted">
                        © 2017-2018
                    </small>
                </div>
                {FOOTER_ITEMS.map((item, index) => (
                    <div className="col-6 col-md" key={index}>
                        <h5>{item.heading}</h5>
                        <ul className="list-unstyled text-small">
                            {item.links.map((linkItem, linkIndex) => (
                                <li key={linkIndex}>
                                    <a
                                        className="text-muted"
                                        href={linkItem.link}
                                    >
                                        {linkItem.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    );
}

export default Footer;