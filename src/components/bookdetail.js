import { Card, CardBody, CardText, CardTitle, ListGroup, ListGroupItem } from "reactstrap"

function BookDetail({ book }) {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>
                    <h2>Book details</h2>
                    </CardTitle>
                    <CardText>
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    </CardText>
                    <ListGroup flush>
                        {book.reviews.map(review => {
                            return <ListGroupItem key={review._id}>
                                {review.body}
                            </ListGroupItem>
                        
                        })}
                    </ListGroup>
                </CardBody>
            </Card>
        </div>
    )
}

export default BookDetail