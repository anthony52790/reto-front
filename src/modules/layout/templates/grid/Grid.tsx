export default function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {children}
    </div>
  )
}