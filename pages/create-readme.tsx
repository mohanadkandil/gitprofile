import { Tab } from "@headlessui/react"
import Introduction from "../components/Introduction"
import Skills from "../components/Skills"
import leftBarTabs from "../data/leftBarTabs"

export default function CreateReadme() {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-700">
      <div className="flex">
        <Tab.Group>
          <div className="h-screen flex">
            <div className="h-screen w-24 bg-[#7F5EE3]">
              <div className="pt-10">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center">
                    <Tab.List className="flex flex-col items-center border-none">
                      {leftBarTabs.map((tab, index) => (
                        <Tab
                          className="flex flex-col items-center py-5 outline-none"
                          key={index}
                        >
                          <div className="text-white text-2xl">
                            {tab.tabIcon}
                          </div>
                          <p className="text-slate-200">{tab.tabName}</p>
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Tab.Panels className="overflow-y-scroll no-scrollbar border-none h-screen">
                <Tab.Panel className="w-[500px] h-full">
                  <Introduction />
                </Tab.Panel>
                <Tab.Panel className="w-[500px] h-full">
                  <Skills />
                </Tab.Panel>
                <Tab.Panel className="w-[500px] h-full">Images</Tab.Panel>
                <Tab.Panel className="w-[500px] h-full">Upload</Tab.Panel>
              </Tab.Panels>
            </div>
          </div>
        </Tab.Group>
        <div className="w-full bg-green-600 p-4"></div>
      </div>
    </div>
  )
}
