import { Fragment } from 'react'
import {NavLink, Outlet} from "react-router"

const getNavLinkClass = ({ isActive }: {isActive: boolean}) => `navigation-link${isActive ? ' active' : ''}`

export default function Layout() {
    return (
        <Fragment>
            <header>
                <nav className="navigation">
                    {/*<NavLink to="/echart" className={getNavLinkClass}>
                        EChart
                    </NavLink>*/}
                    <NavLink to="/victory" className={getNavLinkClass}>
                        Victory
                    </NavLink>
                    <NavLink to="/rechart" className={getNavLinkClass}>
                        Rechart
                    </NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </Fragment>
    )
}
