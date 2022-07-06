import React, { useState, useEffect } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY > 60) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }

    return (
        <div className={`header${sticky ? ' sticky' : ''}`}>
            <Navbar light expand="md" className="row">
                <NavbarBrand href="#welcome" className="text-primary fw-bold text-uppercase fs-3 ms-5 me-5">kilem juu</NavbarBrand>

                <NavbarToggler onClick={toggle} data-bs-toggle="collapse" data-bs-target="#navbarShow" aria-controls="navbarShow" aria-expanded="false"/>

                <Collapse className="col-9" id="navbarShow" isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem className="px-3" onClick={toggle}>
                            <NavLink href="#service">Виды услуг</NavLink>
                        </NavItem>

                        <NavItem className="px-3" onClick={toggle}>
                            <NavLink href="#example">Пример работ</NavLink>
                        </NavItem>

                        <NavItem className="px-3">
                            <NavLink href="#price" onClick={toggle}>Цены</NavLink>
                        </NavItem>

                        <NavItem className="px-3">
                            <NavLink href="#review" onClick={toggle}>Отзывы</NavLink>
                        </NavItem>

                        <NavItem className="px-3">
                            <NavLink href="#order" onClick={toggle}>Сделать заказ</NavLink>
                        </NavItem>

                        <NavItem className="px-3">
                            <NavLink href="#about" onClick={toggle}>Оставить отзыв</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
