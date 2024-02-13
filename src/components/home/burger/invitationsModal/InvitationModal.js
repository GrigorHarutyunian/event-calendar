import "./InvitationModal.css";
import { modalInvitations } from "../../../../redux/slices/modalInvitationsSlice";
import { DataGridDemo } from "./Table";
export const InvitationsModal = ({ dispatch, invitations }) => {
  console.log(invitations);
  return (
    <div onClick={() => dispatch(modalInvitations(false))} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <DataGridDemo rows={invitations} />
      </div>
    </div>
  );
};
