const AuthLayout = ({
  children
}:{
  children: React.ReactNode
}) => {


  return (
    <div className="w-[512px] rounded-md shadow-lg shadow-gray-300 p-10">
      {children}
    </div>
  )
}

export default AuthLayout;