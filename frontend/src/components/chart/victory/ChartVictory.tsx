import { Fragment } from "react";
import { NavLink, Outlet } from "react-router";

const getTabClass = ({ isActive }: { isActive: boolean }) => `tab-link${isActive ? ' active' : ''}`

export default function ChartVictory() {
    return (
        <Fragment>
            <nav className="tab-navigation">
                <NavLink to="/victory/bar" className={getTabClass}>
                    Bar
                </NavLink>
                <NavLink to="/victory/line" className={getTabClass}>
                    Line
                </NavLink>
                <NavLink to="/victory/pie" className={getTabClass}>
                    Pie
                </NavLink>
                <NavLink to="/victory/boxPlot" className={getTabClass}>
                    BoxPlot
                </NavLink>
                <NavLink to="/victory/candleStick" className={getTabClass}>
                    CandleStick
                </NavLink>
                <NavLink to="/victory/errorBar" className={getTabClass}>
                    ErrorBar
                </NavLink>
                <NavLink to="/victory/histogram" className={getTabClass}>
                    Histogram
                </NavLink>
                <NavLink to="/victory/scatter" className={getTabClass}>
                    Scatter
                </NavLink>
                <NavLink to="/victory/voronoi" className={getTabClass}>
                    Voronoi
                </NavLink>
            </nav>
            <Outlet />
        </Fragment>
    )
}