import { Menu } from "@base-ui-components/react/menu";
import { useRouter } from "next/navigation";
import { FiEdit } from "react-icons/fi";
import { MdOutlineArticle, MdOutlineLiveTv, MdOutlinePeople, MdOutlineVideocam } from "react-icons/md";

const CreateOptions = ({
  creatorId
}:{
  creatorId: string
}) => {
  
  const router = useRouter();
  const handleRoute = (route: string) => {
    router.push(`/create/${route}`);
  }

  return (
      <Menu.Root>
        <Menu.Trigger className="w-28 flex items-center text-white bg-black active:text-black active:bg-white active:border-black border py-1 rounded-full h-10 justify-center gap-1.5 px-3.5 text-base font-medium select-none">
          Create
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner className="outline-none" sideOffset={20} align="end">
            <Menu.Popup className="origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-black shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
              <Menu.Item onClick={() => handleRoute("art")} className="flex items-center gap-4 cursor-pointer py-4 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-md data-[highlighted]:before:bg-black">
                <MdOutlineArticle className="w-6 h-6"/>
                Article
              </Menu.Item>
              <Menu.Item onClick={() => handleRoute("vid")} className="flex items-center gap-4 cursor-pointer py-4 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-md data-[highlighted]:before:bg-black">
                <MdOutlineVideocam className="w-6 h-6"/>
                Video
              </Menu.Item>
              <Menu.Item onClick={() => handleRoute("liv_sessions")} className="flex items-center gap-4 cursor-pointer py-4 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-md data-[highlighted]:before:bg-black">
                <MdOutlineLiveTv className="w-6 h-6"/>
                Live Session
              </Menu.Item>
              <Menu.Item onClick={() => handleRoute("community")} className="flex items-center gap-4 cursor-pointer py-4 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-md data-[highlighted]:before:bg-black">
                <MdOutlinePeople className="w-6 h-6"/>
                Community
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
  )
}

export default CreateOptions;
