export default function Markdown({
  name,
  subtitle,
  basedIn,
  portofilioLink,
  portofilioText,
  contact,
  workingOnLink,
  workingOnText,
  extra,
  description,
  learning,
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
        <div className="bg-black text-white w-full h-[644px]">
          <div className="p-6">
            {name && (
              <h1 className="font-semibold text-4xl">
                Hi &#128075; My name is {name}
              </h1>
            )}
            {subtitle && <h2 className="text-3xl">{subtitle}</h2>}
            {description && <p className="text-white/80">{description}</p>}
            <ul className="mt-4 list-inside list-disc">
              {basedIn && <li>&#127760; I&apos;m based in {basedIn}</li>}
              {portofilioText && (
                <li>
                  &#x1F4BB; Take a look at my portofilio
                  {portofilioLink && (
                    <a href={portofilioLink}>{portofilioText}</a>
                  )}
                </li>
              )}
              {contact && <li>&#9993; Contact me at {contact}</li>}
              {workingOnText && (
                <li>
                  &#x1F680; I&apos;m currently working on
                  {workingOnLink && <a href={workingOnLink}>{workingOnText}</a>}
                </li>
              )}
              {learning && <li>💡 I&apos;m learning {learning}</li>}
              {extra && <li>⚡ {extra}</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
