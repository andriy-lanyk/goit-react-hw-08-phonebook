import axios from "axios";
import * as contactsActions from './contacts-actions'

axios.defaults.baseURL = "http://localhost:3030";

export const fetchGetContacts = () => async dispatch => {
    dispatch(contactsActions.fetchContactsRequest())

    try {
        const { data } = await axios.get('/contacts')
        dispatch(contactsActions.getContacts(data))
        dispatch(contactsActions.fetchContactsSuccess())
    } catch (error) {
        dispatch(contactsActions.fetchContactsError(error))
    }
};

export const fetchPostContacts = (contact) => async dispatch => {
    dispatch(contactsActions.fetchContactsRequest())

    try {
        const { data } = await axios.post('/contacts', contact)
        dispatch(contactsActions.addContact(data))
        dispatch(contactsActions.fetchContactsSuccess())
    } catch (error) {
        dispatch(contactsActions.fetchContactsError(error))
    }
};

export const fetchDeleteContacts = (id) => async dispatch => {
    const contactId = id.toString();
    dispatch(contactsActions.fetchContactsRequest())

    try {
        await axios.delete(`/contacts/${contactId}`)
        dispatch(contactsActions.deleteContact(id))
        dispatch(contactsActions.fetchContactsSuccess())
    } catch (error) {
        dispatch(contactsActions.fetchContactsError(error))
    }
};
