import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const getStyles = (i: string, items: readonly string[], theme: Theme) => {
  return {
    fontWeight: items.includes(i)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const MultipleInputSelect = ({
  choices
}:{
  choices: Array<string>
}) => {
  const theme = useTheme();
  const [items, setItems] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof items>) => {
    const {
      target: { value },
    } = event;
    setItems(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: "100%"}}>
        <InputLabel style={{ color: "black" }} id="multipleInputSelectLabel">Select</InputLabel>
        <Select
          labelId="multipleInputSelectLabel"
          id="multipleInputSelect"
          multiple
          value={items}
          onChange={handleChange}
          input={<OutlinedInput id="inputSelect" label="Select" style={{borderRadius: 8}} />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {choices.map((i) => (
            <MenuItem
              key={i}
              value={i}
              style={getStyles(i, items, theme)}
            >
              {i}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleInputSelect;