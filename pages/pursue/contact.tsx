import { FormEvent, useState } from "react";
import { Button, Form, Spinner, Container, Row, Col } from "react-bootstrap";

function ContactPage() {

    const [saveResult, setSaveResult] = useState<any | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    interface Data {
        call: boolean
        info: boolean
        offer: boolean
        r28: boolean
        r58: boolean
        r83: boolean
        r140: boolean
        r140plus: boolean
        u28: boolean
        u58: boolean
        u83: boolean
        misc: string
    }

    const actions = [{id: 'call', text: 'get a call back'},
    {id: 'info', text: 'receive further information by email'},
    {id: 'offer', text: 'receive a non-binding offer'}]

    const products = [{id: 'r28', text: 'R28'}, 
    {id: 'r58', text: 'R58'}, 
    {id: 'r83', text: 'R83'}, 
    {id: 'r140', text: 'R140'}, 
    {id: 'r140plus', text: 'R140+'}, 
    {id: 'u28', text: 'U28'}, 
    {id: 'u58', text: 'U58'}, 
    {id: 'u83', text: 'U83'}, 
    {id: 'misc', text: 'Miscellaneous'}]

    const experience = [
        {id: 'has-experience', text: 'I have experience with magnetic rope testing'}, 
        {id: 'no-experience', text: 'I have no experience with magnetic rope testing'}]

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault(); // dont refresh the page
        // had to use stackoverflow to get this
        const formData = new FormData(e.target as HTMLFormElement);

        console.log('call = ', formData.get("call"))

        let data =  {
            call: formData.get("call") ?? false,
            info: formData.get("info") ?? false,
            offer: formData.get("offer") ?? false,

            r28: formData.get("r28") ?? false,
            r58: formData.get("r58") ?? false,
            r83: formData.get("r83") ?? false,
            r140: formData.get("r140") ?? false,
            r140plus: formData.get("r140plus") ?? false,
            u28: formData.get("u28") ?? false,
            u58: formData.get("u58") ?? false,
            u83: formData.get("u83") ?? false,
            misc: formData.get("misc") ?? false,
        }

        //const offer = formData.get("call")?.toString().trim();

        if (data) {
            try {
                setSaveResult(null);
                setError(false);
                setLoading(true);
                // // access our api in the api folder
                // // not a 24/7 server
                // const response = await fetch("/api/search-news?q=" + searchQuery);
                // const articles: NewsArticle[] = await response.json();
                // setSearchResults(articles);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
    }

    return (

        <Container>
            <Form onSubmit={handleSubmit}>

                <Row>
                    <Col xs={12} lg={3}>

                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Control name="name" type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Control name="email" type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Control name="address" type="address" placeholder="Address" />
                        </Form.Group>

                    </Col>

                    <Col xs={12} lg={3}>

                        <Form.Group className="mb-3" controlId="formCompany">
                            <Form.Control name="company" type="text" placeholder="Company" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Control name="phone" type="tel" placeholder="Phone" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Control name="country" type="text" placeholder="Country" />
                        </Form.Group>

                    </Col>

                    <Col xs={12} lg={6}>

                        <p>We are happy to help!</p>

                        <p>
                            ROPETEST AU<br />
                            Queensland<br />
                            E-Mail: info@ropetest.com<br />
                            Phone: +61 (0) 123-456-789
                        </p> 

                    </Col>
                </Row>

                <p>I would like:</p>

                <Row>
                    <Col xs={12} lg={6}>
                        {
                            actions.map((item, index) => 
                            <div key={item.id} className="mb-3">
                                <Form.Check // prettier-ignore
                                type='checkbox'
                                id={item.id}
                                label={item.text}/>
                            </div>
                            )
                        }
                    </Col>
                </Row>

                <p>I&apos;m interested in:</p>

                <Row>
                    <Col xs={12} lg={6}>
                        {
                            products.map((item, index) => 
                                <div key={item.id} className="mb-3">
                                    <Form.Check // prettier-ignore
                                    type='checkbox'
                                    id={item.id}
                                    label={item.text}/>
                                </div>
                            )
                        }
                    </Col>
                </Row>

                <Button type="submit" className="mb-3" disabled={loading}>
                    Send
                </Button>
        </Form>

        <div className="d-flex flex-column align-items-center">
            {loading && <Spinner animation="border" />}
            {error && <p>Something went wrong. Please try again.</p>}
            {saveResult?.length === 0 && <p>Nothing found. Try a different query!</p>}
            {/* {searchResults && <NewsArticlesGrid articles={searchResults} />} */}
        </div>

    </Container>
)}

export default ContactPage