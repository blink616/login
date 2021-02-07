import { Form, FormGroup, Label, Input, Card } from "reactstrap";
import { Button } from "react-bootstrap";
import Link from "next/link";


function Login() {
  return (
    <Card className="login shadow p-3 mb-5 bg-white rounded">
    
      <Form className="loginform">
          <Card className="logincard shadow p-3 mb-5 bg-white rounded">
        <h5>Help YourSelf In!!</h5>
        <FormGroup>
          <Label>Email</Label>
          <Input
            className="input-group"
            type="email"
            placeholder="Email"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            className="input-group"
            type="password"
            placeholder="Password"
          ></Input>
        </FormGroup>

        <FormGroup>
          <Button className="btn-primary btn-block btn-lg">Log In</Button>
          <h6>
            Or {" "}
            <span>
              <Link href="../admin/SignUp">SignUp</Link>
            </span>{" "}
            here!
          </h6>
        </FormGroup>
        </Card>
      </Form>
    </Card>
  );
}

export default Login;
