import { Responsive, type Layout } from "react-grid-layout"
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

export default function Line() {
    const layout: Layout[] = [
        { i: 'a', x: 0, y: 0, w: 6, h: 2 },
        { i: 'b', x: 0, y: 2, w: 6, h: 2 },
        { i: 'c', x: 0, y: 4, w: 6, h: 2 },
    ]
    return (
        <Responsive
            className="layout"
            layouts={{ lg: layout }}
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
            <div key="a">Item A</div>
            <div key="b">Item B</div>
            <div key="c">Item C</div>
        </Responsive>
    )
}