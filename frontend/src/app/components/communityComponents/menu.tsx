import * as React from "react";
import clsx from "clsx";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Label from "@mui/icons-material/Label";
import TagIcon from '@mui/icons-material/Tag';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import {
  TreeItem2Content,
  TreeItem2IconContainer,
  TreeItem2Root,
  TreeItem2GroupTransition,
} from "@mui/x-tree-view/TreeItem2";
import { useTreeItem2, UseTreeItem2Parameters } from "@mui/x-tree-view/useTreeItem2";
import { TreeItem2Provider } from "@mui/x-tree-view/TreeItem2Provider";
import { TreeItem2Icon } from "@mui/x-tree-view/TreeItem2Icon";
import { GoDotFill } from "react-icons/go";

declare module "react" {
  interface CSSProperties {
    "--tree-view-color"?: string;
    "--tree-view-bg-color"?: string;
  }
}

interface StyledTreeItemProps
  extends Omit<UseTreeItem2Parameters, "rootRef">,
    React.HTMLAttributes<HTMLLIElement> {
  bgColor?: string;
  bgColorForDarkMode?: string;
  color?: string;
  colorForDarkMode?: string;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
}

const CustomTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
  marginBottom: theme.spacing(0.3),
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(2),
  paddingRight: theme.spacing(1),
  fontWeight: theme.typography.fontWeightMedium,
  "&.expanded": {
    fontWeight: theme.typography.fontWeightRegular,
  },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "&.focused, &.selected, &.selected.focused": {
    backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
    color: "var(--tree-view-color)",
  },
}));

const CustomTreeItemIconContainer = styled(TreeItem2IconContainer)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const CustomTreeItemGroupTransition = styled(TreeItem2GroupTransition)(
  ({ theme }) => ({
    marginLeft: 0,
    [`& .content`]: {
      paddingLeft: theme.spacing(2),
    },
  }),
);

const CustomTreeItem = React.forwardRef(function CustomTreeItem(
  props: StyledTreeItemProps,
  ref: React.Ref<HTMLLIElement>,
) {
  const theme = useTheme();
  const {
    id,
    itemId,
    label,
    disabled,
    children,
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    colorForDarkMode,
    bgColorForDarkMode,
    ...other
  } = props;

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
  } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

  const style = {
    "--tree-view-color": theme.palette.mode !== "dark" ? color : colorForDarkMode,
    "--tree-view-bg-color":
      theme.palette.mode !== "dark" ? bgColor : bgColorForDarkMode,
  };

  return (
    <TreeItem2Provider itemId={itemId}>
      <CustomTreeItemRoot {...getRootProps({ ...other, style })}>
        <CustomTreeItemContent
          {...getContentProps({
            className: clsx("content", {
              expanded: status.expanded,
              selected: status.selected,
              focused: status.focused,
            }),
          })}
        >
          <CustomTreeItemIconContainer {...getIconContainerProps()}>
            <TreeItem2Icon status={status} />
          </CustomTreeItemIconContainer>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              p: 0.5,
              pr: 0,
            }}
          >
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography
              {...getLabelProps({
                variant: "body2",
                sx: { display: "flex", fontWeight: "inherit", flexGrow: 1 },
              })}
            />
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </Box>
        </CustomTreeItemContent>
        {children && (
          <CustomTreeItemGroupTransition {...getGroupTransitionProps()} />
        )}
      </CustomTreeItemRoot>
    </TreeItem2Provider>
  );
});

function EndIcon() {
  return <div style={{ width: 24 }} />;
}

const CommunityMenu = () => {
  return (
    <SimpleTreeView
      aria-label="gmail"
      slots={{
        expandIcon: ArrowRightIcon,
        collapseIcon: ArrowDropDownIcon,
        endIcon: EndIcon,
      }}
      sx={{ flexGrow: 1, maxWidth: 400, marginTop: 10 }}
    >
      <CustomTreeItem itemId="1" label="COMMUNITIES" labelIcon={Label} >
        <CustomTreeItem
          itemId="2"
          label="Social"
          labelIcon={TagIcon}
          labelInfo="90"
          color="#FFF"
          bgColor="#000"
          colorForDarkMode="#B8E7FB"
          bgColorForDarkMode={alpha("#00b4ff", 0.2)}
        />
        <CustomTreeItem
          itemId="3"
          label="Updates"
          labelIcon={TagIcon}
          labelInfo="2,294"
          color="#FFF"
          bgColor="#000"
          colorForDarkMode="#FFE2B7"
          bgColorForDarkMode={alpha("#ff8f00", 0.2)}
        />
        <CustomTreeItem
          itemId="4"
          label="Forums"
          labelIcon={TagIcon}
          labelInfo="3,566"
          color="#FFF"
          bgColor="#000"
          colorForDarkMode="#D9B8FB"
          bgColorForDarkMode={alpha("#9035ff", 0.15)}
        />
        <CustomTreeItem
          itemId="5"
          label="Promotions"
          labelIcon={TagIcon}
          labelInfo="733"
          color="#FFF"
          bgColor="#000"
          colorForDarkMode="#CCE8CD"
          bgColorForDarkMode={alpha("#64ff6a", 0.2)}
        />
      </CustomTreeItem>
      <CustomTreeItem itemId="6" label="INFORMATION" labelIcon={Label}>
        <CustomTreeItem
          itemId="7"
          label="Social"
          labelIcon={TagIcon}
          labelInfo="90"
          color="#FFF"
          bgColor="#000"
          colorForDarkMode="#B8E7FB"
          bgColorForDarkMode={alpha("#00b4ff", 0.2)}
        />
        <CustomTreeItem
          itemId="8"
          label="Updates"
          labelIcon={TagIcon}
          labelInfo="2,294"
          color="#FFF"
          bgColor="#000"
          colorForDarkMode="#FFE2B7"
          bgColorForDarkMode={alpha("#ff8f00", 0.2)}
        />
        <CustomTreeItem
          itemId="9"
          label="Forums"
          labelIcon={TagIcon}
          labelInfo="3,566"
          color="#FFF"
          bgColor="#000"
          colorForDarkMode="#D9B8FB"
          bgColorForDarkMode={alpha("#9035ff", 0.15)}
        />
        <CustomTreeItem
          itemId="10"
          label="Promotions"
          labelIcon={TagIcon}
          labelInfo="733"
          color="#FFF"
          bgColor="#000"
          colorForDarkMode="#CCE8CD"
          bgColorForDarkMode={alpha("#64ff6a", 0.2)}
        />
      </CustomTreeItem>
      <CustomTreeItem itemId="11" label="DIRECT MESSAGES" labelIcon={Label}>
        <div className="flex justify-between items-center pl-6 pr-4 my-2 py-2 hover:bg-gray-50 rounded-full cursor-pointer focus:bg-gray-200">
          <div className="flex justify-evenly gap-6 ">
            <img src="/faces/face1.jpg" alt="" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col justify-evenly items-center">
              <p className="font-semibold">Allan Hoster</p>
              <p className="text-sm">Psychiatrist</p>
            </div>
          </div>
          <GoDotFill className="h-5 w-5 text-red-500"/>
        </div>
        <div className="flex justify-between items-center pl-6 pr-4 my-2 py-2 hover:bg-gray-50 rounded-full cursor-pointer focus:bg-gray-200">
          <div className="flex justify-evenly gap-6 ">
            <img src="/faces/face1.jpg" alt="" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col justify-evenly items-center">
              <p className="font-semibold">Allan Hoster</p>
              <p className="text-sm">Psychiatrist</p>
            </div>
          </div>
          <GoDotFill className="h-5 w-5 text-red-500"/>
        </div>
        <div className="flex justify-between items-center pl-6 pr-4 my-2 py-2 hover:bg-gray-50 rounded-full cursor-pointer focus:bg-gray-200">
          <div className="flex justify-evenly gap-6 ">
            <img src="/faces/face1.jpg" alt="" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col justify-evenly items-center">
              <p className="font-semibold">Allan Hoster</p>
              <p className="text-sm">Psychiatrist</p>
            </div>
          </div>
          <GoDotFill className="h-5 w-5 text-red-500"/>
        </div>
      </CustomTreeItem>
    </SimpleTreeView>
  );
}

export default CommunityMenu;
