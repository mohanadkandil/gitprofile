export default function Markdown({
  name,
  subtitle,
  basedIn,
  portofilioLink,
  portofilioText,
  contact,
  workingOn,
  intrestedIn,
  extra,
  description,
}) {
  return (
    <div className="h-full w-full">
      <div className="bg-green-500 w-full h-full">
        <div className="flex justify-end space-x-4 p-4">
          <button className="bg-black text-white rounded-lg p-2">
            Preview
          </button>
          <button className="bg-black text-white rounded-lg p-2">Copy</button>
        </div>
        <div className="bg-black w-full h-[644px]">
          <div className="p-2">
            <div className="text-white">
              <h1 className="font-semibold text-2xl">{name}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
