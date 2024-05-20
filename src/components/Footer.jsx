import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* <a href="https://twitter.com/mayconpachecoof/" target="__blank"><i className="bi bi-twitter"></i></a> */}
              <a href="https://www.linkedin.com/in/mayconpachecooficial/" target="__blank"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/mayconpachecooficial" target="__blank"><i className="bi bi-github"></i></a>
            </div>
            <p>Copyright 2024. &copy; Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
