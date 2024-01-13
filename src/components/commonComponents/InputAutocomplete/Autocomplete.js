import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export const MyAutocomplete = ({ friends, setFriendsInfo, friendsInfo }) => {
  const handleSelectChange = (event, newValue) => {
    setFriendsInfo(newValue);
  };

  return (
    <Autocomplete
      multiple
      options={friends}
      disableCloseOnSelect
      getOptionLabel={(option) => option.email}
      value={friendsInfo}
      onChange={handleSelectChange}
      renderInput={(params) => <TextField {...params} label="Add Friends" />}
      ListboxComponent={(props) => {
        return (
          <List dense {...props}>
            {props.children}
          </List>
        );
      }}
      renderOption={(props, option) => (
        <ListItem dense button {...props}>
          <Checkbox
            checked={friendsInfo.some((opt) => opt.email === option.email)}
          />
          <ListItemText primary={option.email} />
          <ListItemSecondaryAction />
        </ListItem>
      )}
    />
  );
};
