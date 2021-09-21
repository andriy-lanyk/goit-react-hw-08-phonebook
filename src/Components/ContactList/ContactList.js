import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import * as contactsOperations from "../../Redux/Contacts/contacts-operations";
import {
  getAllContacts,
  getFilteredContacts,
  getIsLoadingContacts,
} from "../../Redux/Contacts/contacts-selectors";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const LiContainer = styled.li`
  display: flex;
  justify-content: center;
`;

const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const visibleContacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoadingContacts);

  const loader = (
    <Loader type="Circles" color="rgb(25, 118, 210)" height={60} width={60} />
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchGetContacts());
  }, [dispatch]);

  return (
    contacts.length > 0 && (
      <List sx={{ width: "100%", maxWidth: 400 }}>
        {isLoading ? (
          <LiContainer>{loader}</LiContainer>
        ) : (
          visibleContacts.map(({ id, name, number }, i) => (
            <ListItem
              key={id}
              disableGutters
              secondaryAction={
                <IconButton
                  aria-label="delete"
                  color="primary"
                  onClick={() =>
                    dispatch(contactsOperations.fetchDeleteContacts(id))
                  }
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={`${i + 1}) ${name}:`}
                primaryTypographyProps={{
                  color: "#e84a5f",
                }}
                secondary={`${number}`}
              />
            </ListItem>
          ))
        )}
      </List>
    )
  );
};

export default ContactList;
