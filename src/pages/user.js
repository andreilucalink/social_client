import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Components
import Scream from "../components/scream/Scream";
import StaticProfile from "../components/profile/StaticProfile";
import ScreamSkeleton from "../util/ScreamSkeleton";
import ProfileSkeleton from "../util/ProfileSekeleton";

// MUI
import Grid from "@material-ui/core/Grid";

// Redux

import { connect } from "react-redux";
import { getUserPage } from "../redux/actions/dataActions";

class user extends Component {
  state = {
    profile: null,
    screamIdParam: null
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const screamId = this.props.match.params.screamId;

    if (screamId) this.setState({ screamIdParam: screamId });

    this.props.getUserPage(handle);
    axios
      .get(`/user/${handle}`)
      .then(res => {
        this.setState({
          profile: res.data.user
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { screamIdParam } = this.state;
    const { screams, loading } = this.props.data;
    let screamsMarkup = loading ? (
      <ScreamSkeleton />
    ) : screams === null ? (
      <p>No screams from this user</p>
    ) : !screamIdParam ? (
      screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      screams.map(scream => {
        if (scream.screamId !== screamIdParam)
          return <Scream key={scream.screamId} scream={scream} />;
        else return <Scream key={scream.screamId} scream={scream} openDialog />;
      })
    );

    return (
      <Grid container spacing={4}>
        <Grid item sm={8} xs={12}>
          {screamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {this.state.profile === null ? (
            <ProfileSkeleton />
          ) : (
            <StaticProfile profile={this.state.profile} />
          )}
        </Grid>
      </Grid>
    );
  }
}

user.propTypes = {
  getUserPage: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getUserPage }
)(user);
