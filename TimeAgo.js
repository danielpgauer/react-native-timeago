import React from 'react';
import {
  Text
} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';


export default class TimeAgo extends React.Component {
  static propTypes = {
    time: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.instanceOf(Date)
    ]).isRequired,
    interval: PropTypes.number,
    hideAgo: PropTypes.bool
  }

  static defaultProps = {
    hideAgo: false,
    interval: 60000
  }

  componentDidMount() {
    var {interval} = this.props;
    this.updateInterval = this.setInterval(() => this.forceUpdate(), interval);
  }

  componentWillUnmount() {
    this.clearInterval(this.updateInterval);
  }

  render() {
    return (
      <Text {...this.props}>{this.props.time ? moment(this.props.time).fromNow(this.props.hideAgo) : ''}</Text>
    )
  }
}

reactMixin(TimeAgo.prototype, TimerMixin)
