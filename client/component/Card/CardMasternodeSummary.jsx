
import Component from '../../core/Component';
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import GraphLine from '../Graph/GraphLine';

export default class CardMasternodeSummary extends Component {
  static defaultProps = {
    offline: 0,
    online: 0,
    xAxis: [],
    yAxis: []
  };

  static propTypes = {
    offline: PropTypes.number.isRequired,
    online: PropTypes.number.isRequired,
    xAxis: PropTypes.arrayOf(PropTypes.string).isRequired,
    yAxis: PropTypes.arrayOf(PropTypes.number).isRequired
  };

  render() {
    const total = this.props.online + this.props.offline;

    return (
      <Card title="Masternode" className="card--graph">
        <p className="card__data-main">{ total }</p>
        <p className="card__data-sub">Online: { this.props.online }</p>
        <GraphLine
          color="rgba(0,0,255,0.5)"
          data={ this.props.yAxis }
          height="60px"
          hideLines={ true }
          labels={ this.props.xAxis } />
      </Card>
    );
  };
}
