import { Menu } from "@base-ui-components/react/menu";
import { IoAdd, IoCalendar, IoLink, IoVideocam } from "react-icons/io5";

const SessionMenu = () => {
  return (
      <Menu.Root>
        <Menu.Trigger className="max-w-max h-12 flex gap-4 p-6 items-center text-white bg-black active:text-black active:bg-white active:border-black border rounded-full justify-center text-base font-medium select-none">
          <IoVideocam className="w-6 h-6"/>
          New Meeting
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner className="outline-none" sideOffset={20} align="start">
            <Menu.Popup className="origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-black shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
              <Menu.Item className="flex items-center gap-4 cursor-pointer py-4 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-md data-[highlighted]:before:bg-black">
                <IoLink className="w-6 h-6"/>
                Create a session for later
              </Menu.Item>
              <Menu.Item className="flex items-center gap-4 cursor-pointer py-4 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-md data-[highlighted]:before:bg-black">
                <IoAdd className="w-6 h-6"/>
                Start an instant session
              </Menu.Item>
              <Menu.Item className="flex items-center gap-4 cursor-pointer py-4 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-md data-[highlighted]:before:bg-black">
                <IoCalendar className="w-6 h-6"/>
                Schedule session in Google Calendar
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
  )
}

export default SessionMenu;
