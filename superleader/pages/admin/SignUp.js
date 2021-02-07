import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";

function SignUp() {
  return (
    <Card className="signin shadow p-3 mb-5 bg-white rounded-20">
      <Form className="signinform">
        <Card className="signincard shadow p-3 mb-5 bg-white rounded">
        <h5>Lets Sign You Up!</h5>
        <FormGroup>
          <Label>Name</Label>
          <Input
            className="input-group"
            type="text"
            placeholder="Name"
          ></Input>
        </FormGroup>
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
          <Button className="btn-primary btn-block btn-lg">Sign Up</Button>
          <h6>
            Already have an account?{" "}
            <span>
              <Link href="../admin/Login">LogIn</Link>
            </span>{" "}
          </h6>
        </FormGroup>
        </Card>
      </Form>
    </Card>
  );
}

export default SignUp;
