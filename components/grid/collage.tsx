'use client'

import { useState } from 'react';
import './grid.css'
import RGL, { Layout, WidthProvider } from "react-grid-layout";
import Panel from '@/components/grid/panel';
const ReactGridLayout = WidthProvider(RGL);

export default function Collage() {
    const [layouts, setLayouts] = useState<Layout[]>([{
        x: 0,
        y: 0,
        w: 2,
        h: 2,
        i: '1',
    },{
      x: 4,
      y: 6,
      w: 5,
      h: 5,
      i: '2',
  }])
  return (
    <div className="flex h-[100%] p-2">
      <ReactGridLayout
        className="layout flex-1 overflow-hidden"
        layout={layouts}
        rowHeight={30}
        cols={25}
        compactType={'vertical'}
        preventCollision={false}
        useCSSTransforms
        isBounded
        containerPadding={[0, 0]}
        isDraggable
        isResizable
        resizeHandles={['se']}
      >
        {layouts.map((panel) => {
            return <Panel key={panel.i} panel={panel} />
        })}
      </ReactGridLayout>
    </div>
  );
}
