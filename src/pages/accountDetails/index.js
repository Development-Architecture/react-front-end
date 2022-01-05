import React from "react";
import Header from "../../components/userHeader";
import "./style.css";
import service from "../../request/service";

class AccountDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoading: false,
      isShowModal: false,
      showMsg: null,
      editType: null,
      editText: "",
    };
  }

  async getAuthUser() {
    let response = await service({
      url: `/user-auth`,
      method: "GET",
    });
    if (response.data) {
      this.setState({
        user: response.data,
      });
    }
  }

  editDetail(type, textMsg) {
    this.setState({
      isShowModal: true,
      showMsg: textMsg,
      editType: type,
      editText: "",
    });
  }

  closeModal() {
    this.setState({
      isShowModal: false,
    });
  }

  inputOnchange(e) {
    this.setState({
      editText: e.target.value,
    });
  }

  async updateDetail() {
    this.setState({
      isLoading: true
    })
    let url = ``;
    let data = null;
    let response = await service({
      url: url,
      method: "POST",
      data: data,
    });
    if(response.status == "Success")
    {
      this.setState({
        user: response.data
      })
    }
    this.setState({
      isLoading: false,
      isShowModal: false,
    })
  }

  componentDidMount() {
    this.getAuthUser();
  }

  render() {
    return (
      <div className="detail-container">
        <Header />

        {this.state.isShowModal && (
          <div className="purchase-modal">
            <div className="edit-modal-content">
              {
                this.state.isLoading ? 
                <>
                <div className="text-center p-3">
                    <div className="mr-3 spinner-grow text-dark" role="status">
                        <span className="sr-only"></span>
                    </div>
                    <div className="mr-3 spinner-grow text-dark" role="status">
                        <span className="sr-only"></span>
                    </div>
                    <div className="mr-3 spinner-grow text-dark" role="status">
                        <span className="sr-only"></span>
                    </div>
                    <p className="mt-3">Please wait.................</p>
                    </div>
                </>
                : 
                <>
                
              <span
                className="d-block close text-right"
                onClick={() => this.closeModal()}
              >
                &times;
              </span>
              <span>Enter Update {this.state.showMsg}</span>
              <input
                value={this.state.editText}
                className="mt-1 mb-1"
                type="text"
                onChange={(e) => this.inputOnchange(e)}
              />
              <button
                type="button"
                class="mt-1 btn btn-success"
                onClick={() => this.updateDetail()}
              >
                Update
              </button>
                </>
              }
            </div>
          </div>
        )}

        <div className="w-100">
          <div className="account-wrappers">
            <p className="account-title">Profile</p>
            <p className="account-sub-title">Account Details</p>

            <div className="account-wrapper">
              <div>
                <div className="account-item">
                  <span>Name</span>
                  <span className="account-value">{this.state.user?.name}</span>
                  <span
                    className="chg-link"
                    onClick={() => this.editDetail("name", "User Name")}
                  >
                    Change
                  </span>
                </div>
                <div className="account-item">
                  <span>Email</span>
                  <span className="account-value">
                    {this.state.user?.email}
                  </span>
                  <span
                    className="chg-link"
                    onClick={() => this.editDetail("email", "Email")}
                  >
                    Change
                  </span>
                </div>
                <div className="account-item">
                  <span>Password</span>
                  <span className="account-value"> ****** </span>
                  <span
                    className="chg-link"
                    onClick={() => this.editDetail("password", "Password")}
                  >
                    Change
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountDetail;
