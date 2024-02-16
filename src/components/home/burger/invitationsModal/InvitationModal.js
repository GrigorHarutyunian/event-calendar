import "./InvitationModal.css";
import { modalInvitations } from "../../../../redux/slices/modalInvitationsSlice";
import { DataGridDemo } from "./Table";
import { Button } from "@mui/material";
import { useState } from "react";
import { columnsInvitation } from "./helpers/tableColumns";
import { columnsOwnInvitations } from "./helpers/tableColumns";

export const InvitationsModal = ({ dispatch, invitations, ownEvents }) => {
  const [onlyMyEvents, setOnlyMyEvents] = useState(false);
  const tableRows = onlyMyEvents ? ownEvents : invitations;
  const [title, setTitle] = useState("Invitations");
  const [tableColumn, setTableColumn] = useState(columnsInvitation);

  console.log(tableRows);
  const handleClick = () => {
    const t = title === "Invitations" ? "Own Events" : "Invitations";
    const columns =
      tableColumn === columnsInvitation
        ? columnsOwnInvitations
        : columnsInvitation;
    setOnlyMyEvents(!onlyMyEvents);
    setTitle(t);
    setTableColumn(columns);
  };

  return (
    <div
      onClick={() => dispatch(modalInvitations(false))}
      className="modal-invitation"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-content-invitations"
      >
        <span className="span123">
          <DataGridDemo
            columns={tableColumn}
            rows={tableRows}
            title={title}
            key={onlyMyEvents ? "myEvent" : "invitations"}
          />
          <Button variant="contained" onClick={handleClick}>
            {title === "Invitations" ? "Own Events" : "Invitations"}
          </Button>
        </span>
      </div>
    </div>
  );
};
