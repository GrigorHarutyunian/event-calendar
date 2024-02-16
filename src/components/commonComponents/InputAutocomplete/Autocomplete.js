import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useRef } from "react";
export const MyAutocomplete = ({
  friendsList,
  setFriendsInfo,
  friendsInfo,
  inputRef,
  user,
}) => {
  const friends = friendsList.filter((us) => {
    return us.email !== user.email;
  });
  const handleSelectChange = (event, newValue) => {
    setFriendsInfo(newValue);
  };

  return (
    <Autocomplete
      style={{
        maxheight: "200px",
        overflowY: "auto",

        padding: "5px 0px",
      }}
      multiple
      limitTags={1}
      maxheight={20}
      id="multiple-limit-tags"
      options={friends}
      disableCloseOnSelect
      getOptionLabel={(option) => option.email}
      value={friendsInfo}
      onChange={handleSelectChange}
      renderInput={(params) => (
        <TextField {...params} label="Add Friends" inputRef={inputRef} />
      )}
      ListboxComponent={(props) => (
        <div>
          <List dense {...props}>
            {props.children}
          </List>
        </div>
      )}
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
