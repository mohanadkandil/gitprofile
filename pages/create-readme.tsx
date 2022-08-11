import { Tab } from "@headlessui/react"
import { useState } from "react"
import Markdown from "../components/Markdown"
import { ReadmeInput } from "../components/ReadmeInput"
import Skills from "../components/Skills"
import leftBarTabs from "../data/leftBarTabs"

export default function CreateReadme() {
  const [name, setName] = useState("")
  const [subtitle, setSubtitle] = useState()
  const [description, setDescription] = useState()
  const [basedIn, setBasedIn] = useState()
  const [portofilioText, setPortofilioText] = useState()
  const [portofilioLink, setPortofilioLink] = useState()
  const [contact, setContact] = useState()
  const [workingOn, setWorkingOn] = useState()
  const [intrestedIn, setIntrestedIn] = useState()
  const [extraText, setExtraText] = useState()

  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-700">
      <div className="flex">
        <Tab.Group>
          <div className="h-screen flex">
            <div className="h-screen w-24 bg-[#7F5EE3]">
              <div className="pt-10">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center">
                    {/* <Tab.List className="flex flex-col items-center border-none">
                      {leftBarTabs.map((tab, index) => (
                        <Tab
                          className="flex flex-col items-center py-5 outline-none"
                          key={index}
                        >
                          <div className="text-white text-2xl">
                            {tab?.tabIcon}
                          </div>
                          <p className="text-slate-200">{tab?.tabName}</p>
                        </Tab>
                      ))}
                    </Tab.List> */}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Tab.Panels className="overflow-y-scroll no-scrollbar border-none h-screen">
                <Tab.Panel className="w-[500px] h-full">
                  <div className="p-5 ">
                    <div className="mb-2">
                      <ReadmeInput
                        inputName="name"
                        inputText="Hi my name is:"
                        inputEmojiCode="&#128075;"
                        inputPlaceholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <ReadmeInput
                        inputName="subtitle"
                        inputText="Subtitle:"
                        inputEmojiCode="&#128075;"
                        inputPlaceholder="Subtitle"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <ReadmeInput
                        inputName="description"
                        inputText="Long Description:"
                        inputEmojiCode="&#128075;"
                        inputPlaceholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xl font-bold">About Me</span>
                    <div className="my-5">
                      <ReadmeInput
                        inputName="basedin"
                        inputText="I'm Based In:"
                        inputEmojiCode="&#128075;"
                        inputPlaceholder="Based In"
                        value={basedIn}
                        onChange={(e) => setBasedIn(e.target.value)}
                      />
                    </div>
                    <div className="my-5">
                      <ReadmeInput
                        inputName="portofilio"
                        inputText="Portofilio:"
                        inputEmojiCode="&#128075;"
                        inputPlaceholder="Portofilio"
                        value={portofilioLink}
                        onChange={(e) => setPortofilioLink(e.target.value)}
                      />
                      <div className="mt-2">
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="John"
                          value={portofilioText}
                          onChange={(e) => setPortofilioText(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="my-5">
                      <ReadmeInput
                        inputName="contact"
                        inputText="Contact Me:"
                        inputEmojiCode="&#128075;"
                        inputPlaceholder="Contact me"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      />
                    </div>

                    <div className="my-5">
                      <ReadmeInput
                        inputName="current_project"
                        inputText="I'm Currently Working on:"
                        inputEmojiCode="&#128075;"
                        inputPlaceholder="Contact me"
                        value={workingOn}
                        onChange={(e) => setWorkingOn(e.target.value)}
                      />
                    </div>

                    <div className="my-5">
                      <ReadmeInput
                        inputName="intrest"
                        inputText="I'm Intrested In:"
                        inputEmojiCode="&#128075;"
                        inputPlaceholder="Intrest"
                        value={intrestedIn}
                        onChange={(e) => setIntrestedIn(e.target.value)}
                      />
                    </div>

                    <div className="my-5">
                      <ReadmeInput
                        inputName="extra_info"
                        inputText="Anything Else:"
                        inputEmojiCode="&#128075;"
                        inputPlaceholder="Anything"
                        value={extraText}
                        onChange={(e) => setExtraText(e.target.value)}
                      />
                    </div>
                  </div>
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
        <div className="w-full bg-gray-100 p-4">
          <Markdown
            name={name}
            subtitle={subtitle}
            basedIn={basedIn}
            portofilioLink={portofilioLink}
            portofilioText={portofilioText}
            contact={contact}
            workingOn={workingOn}
            intrestedIn={intrestedIn}
            extra={extraText}
            description={description}
          />
        </div>
      </div>
    </div>
  )
}
