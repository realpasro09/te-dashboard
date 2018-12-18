import React from "react";
import { Button, Modal, ModalHeader } from "reactstrap";
import IntlMessages from "util/IntlMessages";
import { createProfile, setCreateProfileSuceded } from "actions/General";
import { withRouter } from "react-router-dom";
import {
  getCategories,
  changeCheckboxvalue,
  changeSourceCheckboxvalue,
  getSources
} from "../../../actions/General";
import { connect } from "react-redux";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      search: ""
    };
  }

  componentDidUpdate() {
    if (this.props.createProfileSuceded) {
      this.props.setCreateProfileSuceded(false);
      this.props.onContactClose();
    }
  }

  componentDidMount() {
    this.props.getCategories();
    this.props.getSources();
  }

  render() {
    const createCheckboxes = item => {
      return (
        <div key={item.nombre}>
          <div className="form-checkbox">
            <input
              type="checkbox"
              checked={item.seleccionado}
              onChange={event => {
                this.props.changeCheckboxvalue({
                  nombre: item.nombre,
                  seleccionado: event.target.checked
                });
              }}
            />
            <span className="check">
              <i className="zmdi zmdi-check zmdi-hc-lg" />
            </span>
            {item.nombre}
          </div>
        </div>
      );
    };

    const createCheckboxesforSources = item => {
      return (
        <div key={item.name.id}>
          <div className="form-checkbox">
            <input
              type="checkbox"
              checked={item.selected}
              onChange={event => {
                this.props.changeSourceCheckboxvalue({
                  name: item.name,
                  selected: event.target.checked
                });
              }}
            />
            <span className="check">
              <i className="zmdi zmdi-check zmdi-hc-lg" />
            </span>
            {item.name.name}
          </div>
        </div>
      );
    };
    const {
      onSaveContact,
      onDeleteContact,
      onContactClose,
      open,
      contact = {}
    } = this.props;
    const {
      id,
      name,
      search,
      phone,
      designation,
      selected,
      starred,
      frequently
    } = this.state;
    let { thumb } = this.state;
    if (!thumb) {
      thumb = "http://via.placeholder.com/225x225";
    }
    return (
      <Modal className="modal-box" toggle={onContactClose} isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary">
          {contact.name === "" ? (
            <IntlMessages id="profile.addProfile" />
          ) : (
            <IntlMessages id="profile.saveProfile" />
          )}
          <span className="text-white pointer">
            <i
              className="zmdi zmdi-close zmdi-hc-lg"
              onClick={onContactClose}
            />
          </span>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-3 text-center text-lg-right order-lg-2">
              <img
                className="ml-lg-3 mb-4 mb-lg-0 avatar size-120"
                src={thumb}
              />
            </div>

            <div className="col-lg-9 d-flex flex-column order-lg-1">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Nombre"
                onChange={event => this.setState({ name: event.target.value })}
                defaultValue={name}
              />
              <div>
                <br/>
                <h3>Categorias</h3>
                {this.props.categories.map(createCheckboxes)}
              </div>

              <div>
                <br/>
                <h3>Fuentes</h3>
								{this.props.sources.map(createCheckboxesforSources)}
								<br/>
              </div>

              <textarea
                rows="10"
                className="form-control mb-2"
                placeholder="Criterios de busqueda"
                onChange={event =>
                  this.setState({ search: event.target.value })
                }
                value={search}
              />
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button
            className="text-uppercase"
            disabled={name === "" || search === ""}
            color="primary"
            onClick={() => {
              this.props.createProfile({
                nombre: name,
                categorias: "categorias",
                busquedas: search
              });
            }}
          >
            <IntlMessages id="profile.saveProfile" />
          </Button>
          <Button
            className="text-uppercase"
            color="secondary"
            onClick={() => {
              onContactClose();
            }}
          >
            <IntlMessages id="profile.cancel" />
          </Button>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = ({ general }) => {
  const { createProfileSuceded, categories, sources } = general;
  return { createProfileSuceded, categories, sources };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      createProfile,
      setCreateProfileSuceded,
      getCategories,
      changeCheckboxvalue,
      getSources,
      changeSourceCheckboxvalue
    }
  )(AddContact)
);
