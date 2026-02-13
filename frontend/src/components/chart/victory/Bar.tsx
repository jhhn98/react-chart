import { useState, useEffect, Fragment } from 'react'
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from 'victory'

export function Bar() {
    const data1 = [
        {x: 'A', y: 5},
        {x: 'B', y: 7},
        {x: 'C', y: 64},
        {x: 'D', y: 8},
        {x: 'E', y: 20},
    ]
    const data2 = [
        {x: 'A', y: 1},
        {x: 'B', y: 2},
        {x: 'C', y: 3},
        {x: 'D', y: 4},
        {x: 'E', y: 5},
    ]
    const data3 = [
        {x: 'A', y: 21},
        {x: 'B', y: 33},
        {x: 'C', y: 11},
        {x: 'D', y: 67},
        {x: 'E', y: 89},
    ]
    const data4 = [
        {x: 'A', y: 1},
        {x: 'B', y: 5},
        {x: 'C', y: 19},
        {x: 'D', y: 90},
        {x: 'E', y: 85},
    ]
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [prevApiData, setPrevApiData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3000/bar-data')
                const json = await res.json()

                if (JSON.stringify(json) !== JSON.stringify(prevApiData)) {
                    setPrevApiData(json)
                    setApiData(json)
                }
            } catch (err) {
                console.error('API 호출 실패: ', err)
                setError(null)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
        const interval = setInterval(fetchData, 1000)

        return () => clearInterval(interval)
    }, [])
    if (loading) return <p>Loading ...</p>
    if (error) return <p>Error: {error}</p>
    if (!apiData.length) return <p>No data</p>
    return (
        <Fragment>
            {/*<h2>Victory Line Chart Example</h2>*/}
            <VictoryChart
                theme={VictoryTheme.clean}
                domainPadding={{x: 0}}
            >
                <VictoryGroup
                    offset={8}
                    style={{data: {width: 5}}}
                >
                    <VictoryBar data={data1}/>
                    <VictoryBar data={data2}/>
                    <VictoryBar data={data3}/>
                    <VictoryBar data={data4}/>
                </VictoryGroup>
            </VictoryChart>
            {/*<div className="align-flex">
                <VictoryChart
                    theme={VictoryTheme.clean}
                    domainPadding={{x: 20}}
                >
                    <VictoryBar
                        data={apiData}
                        x="x"
                        y="y"
                        labels={({datum}) => datum.y}
                    />
                </VictoryChart>
                <VictoryChart
                    theme={VictoryTheme.clean}
                    domainPadding={{x: 40}}
                >
                    <VictoryGroup
                        offset={8}
                        style={{data: {width: 5}}}
                    >
                        <VictoryBar data={data1}/>
                        <VictoryBar data={data2}/>
                        <VictoryBar data={data3}/>
                        <VictoryBar data={data4}/>
                    </VictoryGroup>
                </VictoryChart>
            </div>
            <div className="align-flex">
                <VictoryChart
                    theme={VictoryTheme.clean}
                    domainPadding={{x: 20}}
                >
                    <VictoryBar data={data3}/>
                </VictoryChart>
                <VictoryChart
                    theme={VictoryTheme.clean}
                    domainPadding={{x: 50}}
                >
                    <VictoryBar data={data2}/>
                </VictoryChart>
            </div>
            <div className="align-flex">
                <VictoryChart
                    theme={VictoryTheme.clean}
                    horizontal
                    domainPadding={{x: 20}}
                >
                    <VictoryBar data={data4}/>
                </VictoryChart>
            </div>*/}
        </Fragment>
    )
}