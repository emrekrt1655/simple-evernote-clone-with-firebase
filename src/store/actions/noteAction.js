export const addNote = (note) => {
    return ( dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('notes')
        .add({
            ...note,
            favorite:false,
            createdAt: new Date()
        })
        .then(() => {
            console.log('add the note successfully')
        })
        .catch((err) => {
            console.log(`err`, err)
        })
    }
}

export const deleteNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).delete()
        .then(() => {
            console.log('delete the note successfully')
        })
    }
}

export const toggleFav = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const favStatus = !note.favorite
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            favorite: favStatus
        })
        .then(() => {
            console.log("toggle favorite succsess")
        }).catch(err => {
            console.log(`err`, err)
        })
    }
}