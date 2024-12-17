<<<<<<< HEAD
import { Badge, Button, Col, Row, Stack } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useNote } from "./NoteLayout"
import ReactMarkdown from "react-markdown"

type NoteProps = {
  onDelete: (id: string) => void
}

export function Note({ onDelete }: NoteProps) {
  const note = useNote()
  const navigate = useNavigate()

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {note.tags.map(tag => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${note.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button
              onClick={() => {
                onDelete(note.id)
                navigate("/")
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
            <Link to="/">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
  )
=======
import { Badge, Button, Card, Col, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useNote } from "./NoteLayout";
import ReactMarkdown from "react-markdown";

type NoteProps = {
  onDelete: (id: string) => void;
};

export function Note({ onDelete }: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();

  return (
      <div className="p-4">
        {/* Header Section */}
        <Row className="align-items-center mb-4">
          <Col>
            <h1 className="text-primary fw-bold">{note.title}</h1>
            {note.tags.length > 0 && (
                <Stack gap={1} direction="horizontal" className="flex-wrap">
                  {note.tags.map((tag) => (
                      <Badge
                          className="text-truncate bg-info text-white px-2 py-1"
                          key={tag.id}
                      >
                        {tag.label}
                      </Badge>
                  ))}
                </Stack>
            )}
          </Col>
          <Col xs="auto">
            <Stack gap={2} direction="horizontal">
              <Link to={`/${note.id}/edit`}>
                <Button variant="primary" className="fw-semibold">
                  Edit
                </Button>
              </Link>
              <Button
                  onClick={() => {
                    onDelete(note.id);
                    navigate("/");
                  }}
                  variant="outline-danger"
                  className="fw-semibold"
              >
                Delete
              </Button>
              <Link to="/">
                <Button variant="outline-secondary" className="fw-semibold">
                  Back
                </Button>
              </Link>
            </Stack>
          </Col>
        </Row>

        {/* Markdown Content */}
        <Card className="shadow-sm border-0 bg-light">
          <Card.Body>
            <ReactMarkdown className="markdown-content fs-5 text-muted">
              {note.markdown}
            </ReactMarkdown>
          </Card.Body>
        </Card>

        {/* Timestamp */}
        <div className="text-end mt-3">
          <small className="text-secondary fst-italic">
            Last Updated: {new Date().toLocaleDateString()}{" "}
            {new Date().toLocaleTimeString()}
          </small>
        </div>
      </div>
  );
>>>>>>> f21d6ba (Styling)
}
