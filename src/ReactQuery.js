import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getNotes, createNote, updateNote } from './services/requests'

const ReactQuery = () => {
    const queryClient = useQueryClient()

    const newNoteMutation = useMutation(createNote, {
        onSuccess: (newNote) => {
            queryClient.getQueryData('notes')
            queryClient.setQueryData('notes', notes.concat(newNote))
        }
    })

    const addNote = async (event) => { event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        console.log(content)
        newNoteMutation.mutate({content, important: false})
    }

    const updateNoteMutation = useMutation(updateNote, {
        onSuccess: (updatedNote) => {
            queryClient.getQueryData('notes')
            queryClient.setQueryData('notes', notes.map(note => note.id === updatedNote.id ? updatedNote : note))
        }
    })

    const toggleImportance = (note) => {
        updateNoteMutation.mutate({ ...note, important: !note.important })
    }

    const result = useQuery( 'notes', getNotes, {
        refetchOnWindowFocus: false,
    } )

    console.log(result)

    if (result.isLoading) {
        return <div>loading data...</div>
    }
    const notes = result.data

    return (
        <div>
            <h2>Notes app</h2>
            <form onSubmit={addNote}>
                <input name="note" />
                <button type="submit">add</button>
            </form>
            {notes.map(note =>
                <li key={note.id} onClick={() => toggleImportance(note)}>
                    {note.content}
                    <strong>{note.important ? ' important' : ''}</strong>
                </li>
            )}
        </div>
    )
}

export default ReactQuery