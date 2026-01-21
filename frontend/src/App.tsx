import { Fragment } from "react";
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import ChartVictory from './components/chart/victory/ChartVictory.tsx'
import {Bar} from './components/chart/victory/Bar'
import Line from './components/chart/victory/Line'
import Pie from './components/chart/victory/Pie'
import BoxPlot from './components/chart/victory/BoxPlot'
import CandleStick from './components/chart/victory/CandleStick'
import ErrorBar from './components/chart/victory/ErrorBar'
import Histogram from './components/chart/victory/Histogram'
import Scatter from './components/chart/victory/Scatter'
import Voronoi from './components/chart/victory/Voronoi'
import ChartRechart from './components/chart/rechart/ChartRechart.tsx'

export default function App() {
  return (
      <Fragment>
          <Routes>
              <Route path="/" element={<Layout />}>
                  {/*<Route path="/echart" element={<ChartEChart />} />*/}
                  <Route path="/victory" element={<ChartVictory />}>
                      <Route path="bar" element={<Bar />} />
                      <Route path="line" element={<Line />} />
                      <Route path="pie" element={<Pie />} />
                      <Route path="boxPlot" element={<BoxPlot />} />
                      <Route path="candleStick" element={<CandleStick />} />
                      <Route path="errorBar" element={<ErrorBar />} />
                      <Route path="histogram" element={<Histogram />} />
                      <Route path="scatter" element={<Scatter />} />
                      <Route path="voronoi" element={<Voronoi />} />
                  </Route>
                  <Route path="/rechart" element={<ChartRechart />} />
              </Route>
          </Routes>
      </Fragment>
  )
}
