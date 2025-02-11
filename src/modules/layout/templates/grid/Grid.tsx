export default function Grid({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div id="container" className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" style={{ transition: "height 0.3s ease" }}>
      {children}
    </div>
  )
}