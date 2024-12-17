import { NoteData, Tag } from "./App"
import { NoteForm } from "./NoteForm"

type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

export function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  return (
    <>
<<<<<<< HEAD
      <h1 className="mb-4">New Note</h1>
=======
      <h1 className="mb-4 text-center">New Note</h1>
>>>>>>> f21d6ba (Styling)
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  )
}
