import { Tab } from "@headlessui/react";
import leftBarTabs from "../data/leftBarTabs";

export default function CreateReadme() {
  return (
    <>
      
<div className="min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
    {/* <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
        <div className="flex items-center space-x-2">
            <button type="button" className="text-3xl"><i className="bx bx-menu"></i></button>
            <div>Logo</div>
        </div>
    </header> */}

    <div className="flex">
    <Tab.Group>
      <div className="h-screen flex">
        <div className="h-screen w-24 bg-[#7F5EE3]">
          <div className="pt-10">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <Tab.List className="flex flex-col items-center border-none">
                  {leftBarTabs.map((tab, index) => (
                    <Tab className="flex flex-col items-center py-5 outline-none" key={index}>
                      <div className="text-white text-2xl">{tab.tabIcon}</div>
                      <p className="text-slate-200">{tab.tabName}</p>
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Tab.Panels className="overflow-y-scroll scrollbar-none border-none h-screen">
            <Tab.Panel className="w-[500px] h-full">
            <div className="p-5 ">
              <div className="mb-2">
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">&#128075; Hi My name is:</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>
              <div className="mb-2">
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">&#128075; Subtitle:</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>
              <div className="mb-2">
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">&#128075; Long Description:</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>
            </div>
            <div className="p-5">
              <span className="text-xl font-bold">About Me</span>
              <div className="my-5">
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">&#128075; I&apos;m based in:</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>
              <div className="my-5">
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">&#128075; Take a look at my Portofilio:</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="John" required />
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>
              <div className="my-5">
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">&#128075; Contact ME at:</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="John" required />
              </div>
              <div className="my-5">
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">&#128075; I&apos;m currently working on:</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="John" required />
              </div>
            </div>
            </Tab.Panel>
            <Tab.Panel>Elements</Tab.Panel>
            <Tab.Panel>Images</Tab.Panel>
            <Tab.Panel>Upload</Tab.Panel>
          </Tab.Panels>
        </div>
      </div>
    </Tab.Group>
        <div className="w-full bg-green-600 p-4"></div>
    </div>
</div>
    </>
  )
}