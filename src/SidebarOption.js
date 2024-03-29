import React from 'react'
import './SidebarOption.css';

export const SidebarOption = ({Icon, title, number, selected}) => {
  return (
    <div className={`sidebarOption ${selected && 'sidebarOption--active'}`}>
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}
