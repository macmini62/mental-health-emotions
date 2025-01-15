import { SpeedInsights } from "@vercel/speed-insights/next";

const Layout = ({
  children
}:{
  children: React.ReactNode
})  => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      {children}
      <SpeedInsights/>
    </div>
  )
}

export default Layout;