import { MdOutlineEdit, MdOutlineCloudUpload, MdImageSearch, IoShapesOutline } from 'react-icons/all'

type IconProps = {
    tabName: string,
    tabIcon: React.ReactNode,
}

export const leftBarTabs: IconProps[] = [
    {
        tabName: 'Introduction',
        tabIcon: <MdOutlineEdit />
    },
    {
        tabName: 'Skills',
        tabIcon: <IoShapesOutline />
    },
    {
        tabName: 'Images',
        tabIcon: <MdImageSearch />
    },
    {
        tabName: 'Upload',
        tabIcon: <MdOutlineCloudUpload />
    }
]

export default leftBarTabs