type WrapperProps = {
  children: React.ReactNode
}

export default function Wrapper(props: WrapperProps) {
  return (
    <div className="w-full lg:w-[1200px] mx-auto min-h-screen">
      {props.children}
    </div>
  )
}
