import React, { CSSProperties, PropsWithChildren, forwardRef } from 'react'
import { Layout } from 'react-grid-layout'

type Props = PropsWithChildren<{
    panel: Layout
    className?: string
    style?: CSSProperties
}>

const Panel = forwardRef<HTMLDivElement, Props>(({ panel, className, style, children, ...rest }, ref) => {
  return (
    <div id={`panel_${panel.i}`} ref={ref} className={`p-2 rounded-md bg-red-500 shadow-md ${className}`} style={style} {...rest}><p>Panel</p>{children}</div>
  )
})

Panel.displayName = 'Panel'

export default Panel
