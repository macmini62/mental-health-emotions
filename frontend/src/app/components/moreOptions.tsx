import * as React from 'react';
import { Menu } from '@base-ui-components/react/menu';
import { MdNotInterested, MdOutlineReport } from 'react-icons/md';
import { SlOptions } from 'react-icons/sl';

const MoreOptions = ({
  type
}:{
  type: string
}) => {
  return (
    <Menu.Root>
      <Menu.Trigger className="flex h-10 items-center justify-center gap-1.5 px-3.5 text-base font-medium hover:text-black select-none data-[popup-open]:text-black">
        <SlOptions className={`${type === "article" ? "w-7 h-7" : "w-5 h-5 rotate-90"}`}/>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner className="outline-none" sideOffset={8}>
          <Menu.Popup className="origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
            <Menu.Item className="flex items-center gap-2 cursor-pointer text-sm py-2 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
              <MdNotInterested className='h-5 w-5'/>
              Not interested
            </Menu.Item>
            <Menu.Item className="flex items-center gap-2 cursor-pointer text-sm py-2 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
              <MdOutlineReport className='h-5 w-5'/>
              Report
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

export default MoreOptions;
