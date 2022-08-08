import { useState } from "react"
import { ReadmeInput } from "./ReadmeInput"

export default function Introduction() {
  const [name, setName] = useState()
  const [subtitle, setSubtitle] = useState()
  const [description, setDescription] = useState()
  const [basedIn, setBasedIn] = useState()
  const [portofilioText, setPortofilioText] = useState()
  const [portofilioLink, setPortofilioLink] = useState()
  const [contact, setContact] = useState()
  const [workingOn, setWorkingOn] = useState()
  const [intrestedIn, setIntrestedIn] = useState()
  const [extraText, setExtraText] = useState()

  // inputName: string,
  // inputText: string,
  // inputEmojiCode: string,
  // inputPlaceholder: string

  return (
    <>
      <div className="p-5 ">
        <div className="mb-2">
          <ReadmeInput
            inputName="name"
            inputText="Hi my name is:"
            inputEmojiCode="&#128075;"
            inputPlaceholder="name"
          />
        </div>
        <div className="mb-2">
          <ReadmeInput
            inputName="subtitle"
            inputText="Subtitle:"
            inputEmojiCode="&#128075;"
            inputPlaceholder="Subtitle"
          />
        </div>
        <div className="mb-2">
          <ReadmeInput
            inputName="description"
            inputText="Long Description:"
            inputEmojiCode="&#128075;"
            inputPlaceholder="Description"
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
          />
        </div>
        <div className="my-5">
          <ReadmeInput
            inputName="portofilio"
            inputText="Portofilio:"
            inputEmojiCode="&#128075;"
            inputPlaceholder="Portofilio"
          />
          <div className="mt-2">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
            />
          </div>
        </div>
        <div className="my-5">
          <ReadmeInput
            inputName="portofilio"
            inputText="Portofilio:"
            inputEmojiCode="&#128075;"
            inputPlaceholder="Portofilio"
          />

          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            &#128075; Contact ME at:
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            placeholder="John"
            required
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            &#128075; I&apos;m currently working on:
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            placeholder="John"
            required
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            &#128075; I&apos;m intrested in:
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            placeholder="John"
            required
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            &#128075; Anything ELSE:
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            placeholder="John"
            required
          />
        </div>
      </div>
    </>
  )
}
