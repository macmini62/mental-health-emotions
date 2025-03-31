import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { OutlinedInput } from "@mui/material";

const SingleInputSelect = ({
  choices
}:{
  choices: Array<string>
}) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ width: "100%"}}>
      <FormControl fullWidth>
        <InputLabel id="singleInputSelectLabel">Select</InputLabel>
        <Select
          labelId="singleInputSelectLabel"
          id="singleInputSelect"
          value={age}
          label="Select"
          input={<OutlinedInput id="inputSelect" label="Select" style={{borderRadius: 8}} />}
          onChange={handleChange}
        >
          {
            choices.map((c: string, i: number) => (
              <MenuItem key={i} value={c}>{c}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}

export default SingleInputSelect;