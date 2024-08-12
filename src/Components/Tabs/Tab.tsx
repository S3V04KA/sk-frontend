function Tab({title, active, onClick}: {title: string, active: boolean, onClick: () => void}) {
  return (
    <div className={"tab" + (active ? " active" : "")}>
      <button onClick={onClick}>{title}</button>
      <div className="underline"></div>
    </div>
  )
}

export default Tab;