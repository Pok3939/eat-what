import React from 'react';
import './photo9Grid.css';
import ReactGridLayout from "react-grid-layout";
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
export type CounterProps = { rowHeight?: number };
const ResponsiveReactGridLayout = ReactGridLayout.WidthProvider(ReactGridLayout.Responsive);

class Grid extends React.Component<CounterProps> {
    render() {
        const gridItems = [
            { id: 1, name: "1" },
            { id: 2, name: "2" },
            { id: 3, name: "3" },
            { id: 4, name: "4" },
            { id: 5, name: "5" },
            { id: 6, name: "6" },
            { id: 7, name: "7" },
            { id: 8, name: "8" },
            { id: 9, name: "9" }
        ];
        const layout = [
            {i: '1', x: 0, y: -3, w: 2, h: 7, static:true},
            {i: '2', x: 2, y: -3, w: 2, h: 7, static:true},
            {i: '3', x: 4, y: -3, w: 2, h: 7, static: true},
            {i: '4', x: 0, y: 0, w: 2, h: 7, static: true},
            {i: '5', x: 2, y: 0, w: 2, h: 7, static: true},
            {i: '6', x: 4, y: 0, w: 2, h: 7, static: true},
            {i: '7', x: 0, y: 3, w: 2, h: 7, static: true},
            {i: '8', x: 2, y: 3, w: 2, h: 7, static: true},
            {i: '9', x: 4, y: 3, w: 2, h: 7, static: true}
        ]
        
        return (
            <ResponsiveReactGridLayout
                layouts={{ lg: layout }}
                measureBeforeMount={true}
                className="layout"
                rowHeight={this.props.rowHeight}
                margin={[20, 20]}
            >
                {gridItems.map((item, i) => {
                    return (
                        <div key={item.id} className="grid-item">{item.name}</div>
                    );
                })}
            </ResponsiveReactGridLayout>
        );
    }
}



export default Grid