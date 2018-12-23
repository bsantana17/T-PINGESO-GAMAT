import React from 'react';

const ListBuilding = () => {
    return (
        <div>
            <Card>
        <CardHeader>
        <Label for="company">Compañias</Label>
            <Input value={props.company} type="select" name="company" id="company" onChange={props.onChangeForm}>
                {props.companies.map((com,i)=>(
                    <option key={i} value={i}>{com.name}</option>
                ))}
            </Input>

        </CardHeader>
        <CardBody>
          <CardTitle>
          <Label for="building">Obreas</Label>
            <Input value={props.building} type="select" name="building" id="building" onChange={props.onChangeForm}>
                {props.buildings.map((bui,i)=>(
                    <option key={i} value={i}>{bui.address}</option>
                ))}
            </Input>

          </CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
        </div>
    );
};

export default ListBuilding;