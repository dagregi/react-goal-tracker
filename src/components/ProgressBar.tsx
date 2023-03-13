
const ProgressBar = ({ progress }: any) => {
  const percentile = Math.round(100 - progress);

  return (
    <>
      {
        percentile === 100 &&
        <p className="h-1 text-emerald-600 text-xs font-serif text-center">Goal Completed!</p>
      }
      <div className="h-3 w-full bg-gray-100 transition-all rounded shadow mt-1">
        <div
          className="h-3 bg-indigo-500 leading-none p-0.5 text-xs text-center font-medium text-white rounded transition-all"
          style={{ width: `${percentile}%` }}
        >
          {percentile}%
        </div>
      </div>
    </>
  )
}

export default ProgressBar
