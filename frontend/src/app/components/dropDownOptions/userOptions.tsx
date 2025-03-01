import { Menu } from "@base-ui-components/react/menu";
import { MdOutlineAccountCircle, MdOutlineColorLens, MdOutlineExitToApp, MdOutlineNotifications, MdOutlineSettings } from "react-icons/md";

const UserOptions = ({
  imageURL,
  userId
}:{
  imageURL: string,
  userId: string
}) => {
  return (
    <Menu.Root>
      <Menu.Trigger className="flex h-10 items-center justify-center gap-1.5 px-3.5 text-base font-medium hover:text-black select-none">
      <img src={imageURL} alt="" className="w-10 h-10 rounded-full hover:opacity-80"/>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner className="outline-none" sideOffset={20} align="end">
          <Menu.Popup className="origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-black shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
            <Menu.Item className="flex items-center gap-4 cursor-pointer py-4 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-md data-[highlighted]:before:bg-black">
              <MdOutlineAccountCircle className="w-6 h-6"/>
              Profile
            </Menu.Item>
            <Menu.Item className="flex items-center gap-4 cursor-pointer py-4 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-md data-[highlighted]:before:bg-black">
              <MdOutlineNotifications className="w-6 h-6"/>
              Notifications
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-xs">20</div>
            </Menu.Item>
            <Menu.Item className="flex items-center gap-4 cursor-pointer py-4 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-md data-[highlighted]:before:bg-black">
              <MdOutlineSettings className="w-6 h-6"/>
              Account Settings
            </Menu.Item>
            <Menu.Item className="flex items-center gap-4 cursor-pointer py-4 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-md data-[highlighted]:before:bg-black">
              <MdOutlineColorLens className="w-6 h-6"/>
              Preferences
            </Menu.Item>
            <Menu.Separator className="mx-4 my-1.5 h-px bg-gray-300"/>
            <Menu.Item className="flex items-center gap-4 cursor-pointer text-red-500 py-4 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-md data-[highlighted]:before:bg-red-500">
              <MdOutlineExitToApp className="w-6 h-6"/>
              Log Out
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}

export default UserOptions;
