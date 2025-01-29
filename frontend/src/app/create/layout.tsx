const createLayout = ({
  children
}:{
  children: React.ReactNode
}) => {
  return (
    <div className="w-screen h-screen flex justify-center overflow-y-auto">
      {children}
    </div>
  )
}

export default createLayout;