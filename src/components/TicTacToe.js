import "../components/TicTacToeStyles.css";
import { useState } from "react";
import { Container, Row, Col, Card, Button, CardBody } from "reactstrap";
import Icons from "./Icons";

const itemArray = new Array(9).fill("empty");
const TicTacToe = () => {
  const [iscross, setIscross] = useState(false);
  const [winMsg, setWinMsg] = useState("");

  const ReloadGame =()=>{
    setIscross(true);
    setWinMsg("");
    itemArray.fill("empty",0,8);
  }

  // check the winner:
  const CheckIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`Congratulations👏👏 ${itemArray[0]} You won the Game ..!😍`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMsg(`Congratulations👏👏 ${itemArray[3]} You won the Game ..!😍`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMsg(`Congratulations👏👏 ${itemArray[6]} You won the Game ..!😍`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`Congratulations👏👏 ${itemArray[0]} You won the Game ..!😍`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMsg(`Congratulations👏👏 ${itemArray[1]} You won the Game ..!😍`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMsg(`Congratulations👏👏 ${itemArray[2]} You won the Game ..!😍`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMsg(`Congratulations👏👏 ${itemArray[3]} You won the Game ..!😍`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`Congratulations👏👏 ${itemArray[0]} You won the Game ..!😍`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMsg(`Congratulations👏👏 ${itemArray[2]} You won the Game ..!😍`);
    }
  };

  const ChangeItem = (index) => {
    if (itemArray[index] === "empty") {
      itemArray[index] = iscross ? "Cross" : "Circle";
      setIscross(!iscross);
    } else {
      alert("It is already filled");
    }
    CheckIsWinner();
  };

  return (
    <div className="bg-dark vh-100">
      <Container className="p-5">
      {
        winMsg ? (<div className="m-3 ">
          <h2 className="text-success text-align-center">{winMsg}</h2>
          <Button
            className="button btn-danger"
            onClick={() => {
              ReloadGame();
            }}
          >
            {" "}
            Reload the Game
          </Button>
        </div>) :(
            <div className="text-warning p-3">
              <h2>{iscross ? "Cross" : "Circle"} Turn</h2>
            </div>
        )
      }
        
        <Row>
          <Col md={6} className="offset-md-3">
           
            <div className="grid">
              {itemArray.map((item, index) => (
                <Card color="warning" key={index}>
                  <CardBody className="box" onClick={() => ChangeItem(index)}>
                    <Icons name={item} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TicTacToe;
