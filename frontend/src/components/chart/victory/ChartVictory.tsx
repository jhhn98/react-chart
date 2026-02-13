import { Fragment } from "react";
import { NavLink, Outlet } from "react-router";
import { Responsive, type Layout } from "react-grid-layout"
import { WidthProvider } from "react-grid-layout/legacy";
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import { Bar } from './Bar'

const getTabClass = ({ isActive }: { isActive: boolean }) => `tab-link${isActive ? ' active' : ''}`

export default function ChartVictory() {

    const ResponsiveGridLayout = WidthProvider(Responsive)
    const layout: Layout[] = [
        { i: 'a', x: 0, y: 0, w: 6, h: 8 },
        { i: 'b', x: 6, y: 0, w: 6, h: 4 },
        { i: 'c', x: 6, y: 2, w: 6, h: 4 },
        { i: 'd', x: 0, y: 8, w: 12, h: 6 },
    ]

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
            <ResponsiveGridLayout
                className="layout"
                layouts={{lg: layout}}
                rowHeight={30}
                cols={{
                    lg: 12,
                    md: 12,
                    sm: 12,
                    xs: 12,
                    xxs: 12,
                }}
                compactType="vertical"
                preventCollision
                isBounded
            >
                <div key="a"><Bar /></div>
                <div key="b"><Bar /></div>
                <div key="c"><Bar /></div>
                <div key="d"><Bar /></div>
            </ResponsiveGridLayout>
            <Outlet/>

        </Fragment>
    );
}