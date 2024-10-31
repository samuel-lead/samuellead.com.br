export const CurrentYear = () => {
  const dateNow = new Date()
  const currentYear = dateNow.getFullYear()

  return (
    <span className="text-sm text-zinc-400">
      Samuel Pereira © {currentYear}
    </span>
  )
}
