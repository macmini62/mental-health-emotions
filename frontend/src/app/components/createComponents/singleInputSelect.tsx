import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { OutlinedInput } from "@mui/material";

const SingleInputSelect = ({
  name,
  choices,
  setChoiceSelected,
  choiceSelected
}:{
  name: string,
  choices: Array<string>,
  setChoiceSelected:  React.Dispatch<React.SetStateAction<{
      category: string;
      license: string;
      comments: string;
    }>>,
  choiceSelected: string
}) => {
  // const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setChoiceSelected((c) => {
      return{
        ...c,
        [event.target.name]: event.target.value
      };
    });
  };

  return (
    <Box sx={{ width: "100%"}}>
      <FormControl fullWidth>
        <InputLabel id="singleInputSelectLabel">Select</InputLabel>
        <Select
          labelId="singleInputSelectLabel"
          id="singleInputSelect"
          value={choiceSelected}
          name={name}
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