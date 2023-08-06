import { FormEvent, useState } from "react";
import { Button, Form, Spinner, Container, Row, Col, Alert } from "react-bootstrap";
import Constants from '../../config/constants'

function ContactPage() {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [validated, setValidated] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState(false)
  // const [validity, setValidity] = useState<boolean>(false);

  interface Data {
    call: boolean;
    info: boolean;
    offer: boolean;
    r28: boolean;
    r58: boolean;
    r83: boolean;
    r140: boolean;
    r140plus: boolean;
    u28: boolean;
    u58: boolean;
    u83: boolean;
    misc: string;
  }

  const actions = [
    { id: "call", text: "get a call back" },
    { id: "info", text: "receive further information by email" },
    { id: "offer", text: "receive a non-binding offer" },
  ];

  const products = [
    { id: "r28", text: "R28" },
    { id: "r58", text: "R58" },
    { id: "r83", text: "R83" },
    { id: "r140", text: "R140" },
    { id: "r140plus", text: "R140+" },
    { id: "u28", text: "U28" },
    { id: "u58", text: "U58" },
    { id: "u83", text: "U83" },
    { id: "misc", text: "Miscellaneous" },
  ];

  const experience = [
    {
      id: "has-experience",
      text: "I have experience with magnetic rope testing",
    },
    {
      id: "no-experience",
      text: "I have no experience with magnetic rope testing",
    },
  ];

  function getFormVal(
    formData: FormData,
    name: string,
    default_val: any = null
  ) {
    let val = formData.get(name);

    if (val === null || val === undefined || val.length === 0) {
      return default_val;
    }

    return val;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;

    event.preventDefault();
    // setValidity(form.checkValidity());
    setValidated(true);

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setError(false);
      setLoading(false);
      return;
    }

    setValidated(true);

    // had to use stackoverflow to get this
    const formData = new FormData(event.target as HTMLFormElement);

    const data = {
      first_name: getFormVal(formData, "first_name"),
      last_name: getFormVal(formData, "last_name"),
      email: getFormVal(formData, "email"),
      company: getFormVal(formData, "company"),
      address: getFormVal(formData, "address"),
      country: getFormVal(formData, "country"),

      action_call: formData.get("call") === "on" ? 1 : 0,
      action_info: formData.get("info") === "on" ? 1 : 0,
      action_offer: formData.get("offer") === "on" ? 1 : 0,

      r28: formData.get("r28") === "on" ? 1 : 0,
      r58: formData.get("r58") === "on" ? 1 : 0,
      r83: formData.get("r83") === "on" ? 1 : 0,
      r140: formData.get("r140") === "on" ? 1 : 0,
      r140plus: formData.get("r140plus") === "on" ? 1 : 0,
      u28: formData.get("u28") === "on" ? 1 : 0,
      u58: formData.get("u58") === "on" ? 1 : 0,
      u83: formData.get("u83") === "on" ? 1 : 0,
      misc: formData.get("misc") === "on" ? 1 : 0,

      rope_diameter: getFormVal(formData, "rope_diameter"),
      testing_experience:
        formData.get("testing_experience") === "on" ? 1 : 0,
      message: getFormVal(formData, "message"),
    };

    if (data) {
      try {

        setError(false);
        setLoading(true);

        console.log("submit, data:", JSON.stringify(data));

        // // access our api in the api folder
        // // not a 24/7 server
        
        const url = Constants.baseUrl + '/inquiry'

        //console.log(url)

        const response = await fetch(url,
          {
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"},
            method: "POST",
          }
        );
        const json = await response.json();
        //console.log(await response.text())
        console.log(json)

        setSubmitted(true)
        window.scrollTo(0, 0);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Container className={"pt-5 pb-5 section"}>
      <h1>Contact and directions.</h1>

      <div className="mini-divider"></div>

      {
        submitted && <Alert key='success' variant='success'>
          Request submitted, we will get back to you shortly
        </Alert>
      }

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} lg={4}>
            <Form.Group className="mb-3" controlId="validationFirstName">
              <Form.Control
                name="first_name"
                type="text"
                placeholder="First Name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid first name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustomEmail">
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustomAddress">
              <Form.Control
                name="address"
                type="address"
                placeholder="Address"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCountry">
              <Form.Control name="country" type="text" placeholder="Country" />
            </Form.Group>
          </Col>

          <Col xs={12} lg={4}>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Control
                name="last_name"
                type="text"
                placeholder="Last Name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid last name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCompany">
              <Form.Control
                name="company"
                type="text"
                placeholder="Company"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid company name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationPhone">
              <Form.Control name="phone" type="tel" placeholder="Phone" />
            </Form.Group>
          </Col>

          <Col xs={1} lg={1} className="d-none d-lg-block"></Col>

          <Col xs={12} lg={3}>
            <p>We are happy to help!</p>

            <p>
              ROPETEST AU
              <br />
              Queensland
              <br />
              E-Mail: info@ropetest.com
              <br />
              Phone: +61 (0) 123-456-789
            </p>
          </Col>
        </Row>

        <p>I would like:</p>

        <Row>
          <Col xs={12} lg={6}>
            {actions.map((item, index) => (
              <div key={index}>
                <Form.Check 
                  type="checkbox"
                  name={item.id}
                  label={item.text}
                />
              </div>
            ))}
          </Col>
        </Row>

        <br></br>
        <p>I&apos;m interested in:</p>

        <Row>
          <Col xs={12} lg={6}>
            {products.map((item, index) => (
              <div key={item.id}>
                <Form.Check 
                  type="checkbox"
                  name={item.id}
                  label={item.text}
                />
              </div>
            ))}
          </Col>
        </Row>

        <br></br>

        <Row>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3" controlId="rope_diameter">
              <Form.Label>
                My ropes are in the diameter range from to:
              </Form.Label>
              <Form.Control as="textarea" rows={6} name="rope_diameter" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="testing_experience">
          <Form.Check 
            type="switch"
            color='green'
            name="testing_experience"
            label="I have experience with magnetic rope testing"
          />
        </Form.Group>

        <br></br>

        <Row>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Your message"
                name="message"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" disabled={loading} className="mb-3 btn-submit">
          Send
        </Button>
      </Form>

      <div className="d-flex flex-column align-items-center">
        {loading && <Spinner animation="border" />}
        {error && <p className='error'>Something went wrong. Please try again.</p>}
      </div>
    </Container>
  );
}

export default ContactPage;
