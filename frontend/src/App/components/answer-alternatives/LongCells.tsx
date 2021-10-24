import React, { useState } from 'react'
import getCellColor from '../../helpers/getCellColor'

interface Props {
    index: number,
    enabled: boolean,
    onSelect: () => void;
}

const LongCells: React.FC<Props> = ({ index, enabled, children, onSelect }) => {

    const [selected, setSelected] = useState(false)
    const handelClick = () => {
        if (!enabled) return;
        setSelected(true);
        onSelect();
    }
    return <span className={`d-flex rounded p-3 text-responsive mt-2  ${getCellColor(index)}  ${selected ? " border border-5 border-warning" : ""}`}
        style={{ cursor: enabled ? "pointer" : "default" }}
        onClick={handelClick}
    >  {children}</span>
}



export default LongCells
