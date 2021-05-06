import React, { Component } from "react";
class AddForm extends Component {
  products = [];

  constructor(props) {
    super(props);
    this.state = {
      // num: this.count,				
      id: "",
      name: "",
      image: "",
      price: "",
      type: "",
      number: "",
      area: ""
    };
    if (localStorage.getItem("product")) {
      this.products = [JSON.parse(localStorage.getItem("product"))][0];
    }
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeArea = this.handleChangeArea.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleChangeId(event) {
    this.setState({ id: event.target.value });
  }
  handleChangeArea(event) {
    this.setState({ area: event.target.value });
  }
  handleChangeImage(event) {
    this.setState({ image: event.target.value });
  }
  handleChangeNumber(event) {
    this.setState({ number: event.target.value });
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangePrice(event) {
    this.setState({ price: event.target.value });
  }
  handleChangeType(event) {
    this.setState({ type: event.target.value });
  }
  handleChangeQuantity(event) {
    this.setState({ quantity: event.target.value })
  }
  handleDelete = (index) => {
    this.products.splice(index, 1);
    this.saveLocal();
    window.location.reload(true);
    alert("Removed!");
  };

  saveLocal() {
    localStorage.setItem("product", JSON.stringify(this.products));
  }
  handleSubmit = () => {
    if (document.getElementById("submit").value == "") {
      if (JSON.parse(localStorage.getItem("product")) == null) {
        this.products.push(this.state);
      } else {
        this.products = [JSON.parse(localStorage.getItem("product"))][0];
        this.products.push(this.state);
      }
      this.count++;
      alert("Added!");
    } else {
      this.products[document.getElementById("submit").value] = this.state;
      alert("Edited!");
    }
    this.saveLocal();
    window.location.reload(true);
  };
  handleEdit = (product, index) => {
    this.setState(product);
    // document.getElementById("id").value = product.id;				
    document.getElementById("name").value = product.name;
    document.getElementById("images").value = product.image;
    document.getElementById("price").value = product.price;
    document.getElementById("type").value = product.type;
    document.getElementById("area").value = product.area;
    document.getElementById("number").value = product.number;
  };


  render() {
    const products = this.products.map((product, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{product.name}</td>
        <td>
          <img src={product.image} />
        </td>

        <td>{product.price}$</td>
        <td>{product.type}</td>
        <td>{product.number}</td>
        <td>{product.area}</td>

        <td>
          <div class="btn-group">
            <button className="btn btn-outline-danger" onClick={() => this.handleDelete(index)}>
              Delete
</button>
            <button
              className="btn btn-outline-success" onClick={() => this.handleEdit(product, index)}
            >
              Edit
</button>
          </div>
        </td>
      </tr>
    ));
    return (
      <div class="container">
        <div class="lg-col-12">
          <div class="lg-col-6">
            <form onSubmit={this.handleSubmit} className="">
              <div>

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter name"

                    onChange={this.handleChangeName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <div><img id='images' /></div>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    aria-describedby="emailHelp"


                    onChange={this.handleChangeImage}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    aria-describedby="emailHelp"
                    placeholder="Enter price"

                    onChange={this.handleChangePrice}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <select
                    className="form-control"
                    id="type"
                    name="type"
                    onChange={this.handleChangeType}

                  >
                    <option value=""></option>
                    <option value="Family">Family</option>
                    <option value="Double">Double</option>

                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="type">Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    name="number"
                    onChange={this.handleChangeNumber}

                  >


                  </input>
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">Area</label>
                  <input
                    type="text"
                    className="form-control"
                    id="area"
                    aria-describedby="emailHelp"
                    placeholder="Enter quantity"
                    // value={this.state.quantity}				
                    onChange={this.handleChangeArea}
                  />
                </div>
                <button id="submit" type="submit" className="btn btn-warning">
                  OK
</button>
              </div>
            </form>
          </div>
          <div class="md-container p-md-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Type</th>
                  <th scope="col">Number</th>
                  <th scope="col">Area</th>
                  <th scope="col">Option</th>
                </tr>
              </thead>
              <tbody>

                {products}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AddForm;